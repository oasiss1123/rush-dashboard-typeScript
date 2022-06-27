import { Content } from "antd/lib/layout/layout";
import { Delete } from "~/components/products/category/delete/Delete";
import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const category = await API.getCategory(params.id);
  return json({ category: category.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const category = useLoaderData();
  return (
    <Content>
      <Delete data={category.category} />
    </Content>
  );
}
