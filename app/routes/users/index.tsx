import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Content } from "antd/lib/layout/layout";
import { UsersTable } from "~/components/users/UsersTable";
import * as API from "~/api";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }: any) => {
  const users = await API.getUsers();

  return json({ users: users.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const users = useLoaderData();

  return (
    <Content>
      <UsersTable data={users.users.items} />
    </Content>
  );
}
