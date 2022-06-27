import { Content } from "antd/lib/layout/layout";
import { Delete } from "~/components/preorders/delete/Delete";
import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ reqest, params }: any) => {
  const preorder = await API.getPreorder(params.id);
  return json({ preorder: preorder.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const preorder = useLoaderData();
  return (
    <Content style={{ margin: "0 0px" }}>
      <Delete data={preorder.preorder} />
    </Content>
  );
}
