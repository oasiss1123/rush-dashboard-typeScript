import { Content } from "antd/lib/layout/layout";
import { Delete } from "~/components/products/attributes/delete/Delete";
import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const attribute = await API.getAttribute(params.id);
  return json({ attribute: attribute.data });
};

export const action: ActionFunction = async ({ request }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const attribute = useLoaderData();
  return (
    <Content>
      <Delete data={attribute.attribute} />
    </Content>
  );
}
