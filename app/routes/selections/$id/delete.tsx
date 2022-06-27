import { Content } from "antd/lib/layout/layout";
import { Delete } from "~/components/products/selections/delete/Delete";
import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const selection = await API.getSelection(params.id);
  return json({ selection: selection.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const selection = useLoaderData();
  return (
    <Content>
      <Delete data={selection.selection} />
    </Content>
  );
}
