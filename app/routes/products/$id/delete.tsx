import { Content } from "antd/lib/layout/layout";
import { Delete } from "~/components/products/delete/Delete";
import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const product = await API.getProduct(params.id);
  return json({ product: product.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const product = useLoaderData();
  return (
    <Content style={{ margin: "0 0px" }}>
      <Delete data={product.product} />
    </Content>
  );
}
