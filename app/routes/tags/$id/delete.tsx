import { Content } from "antd/lib/layout/layout";
import { Delete } from "~/components/tag/delete/Delete";
import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const tag = await API.getTag(params.id);
  return json({ tag: tag.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const tag = useLoaderData();
  return (
    <Content>
      <Delete data={tag.tag} />
    </Content>
  );
}
