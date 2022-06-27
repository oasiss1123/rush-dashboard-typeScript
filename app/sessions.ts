import { createSessionStorage } from "@remix-run/node";
import { createClient } from "redis";
import * as crypto from "crypto";

const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT;

const cookieName = process.env.APP_COOKIE_NAME;
const cookieSecret = process.env.APP_COOKIE_SECRET as string;

const redisURL = `redis://${redisHost}:${redisPort}`;

const client = createClient({ url: redisURL });
client.connect();

// 1 hour
const maxAge = 60 * 60 * 1;

function createRedisSessionStorage() {
  return createSessionStorage({
    cookie: {
      name: cookieName,
      secrets: [cookieSecret],
      maxAge,
    },
    async createData(data) {
      const id = crypto.randomBytes(32).toString("base64");

      const value = JSON.stringify(data);

      if (value) {
        client.setEx(id, maxAge, value);
      }

      return id;
    },
    async readData(id: string) {
      const value = await client.get(id);

      if (value) {
        return JSON.parse(value);
      }

      return null;
    },
    async updateData(id, data) {
      const value = await client.get(id);

      if (value) {
        const next = JSON.stringify(data);
        client.set(id, next);
      }
    },
    async deleteData(id) {
      await client.del(id);
    },
  });
}

const { getSession, commitSession, destroySession } =
  createRedisSessionStorage();

async function getSessionFromRequest(request: Request) {
  return await getSession(request.headers.get("cookie"));
}

export { getSession, commitSession, destroySession, getSessionFromRequest };
