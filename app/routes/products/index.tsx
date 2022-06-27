import { Content } from "antd/lib/layout/layout";
import { ProducsTable } from "~/components";
import * as API from "~/api";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { deleteProduct } from "~/api";

export const loader: LoaderFunction = async ({ request }: any) => {
  const products = await API.getProducts();
  return json({ products: products.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await deleteProduct(submitData.id);

  return json({ res: "" });
};

export default function Index() {
  const fetcher = useFetcher();
  const products = useLoaderData();
  const handleDelete = (rec: any) => {
    fetcher.submit(rec, { method: "delete" });
  };

  return (
    <Content style={{ margin: "0 0px" }}>
      <ProducsTable data={products} onDelete={handleDelete} />
    </Content>
  );
}
