import { Content } from "antd/lib/layout/layout";
import { PreOrdersTable } from "~/components";
import * as API from "~/api";
import { json } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { deletePreorder } from "~/api";

// export const loader: LoaderFunction = async ({ request }: any) => {
//   const preOrders = await API.getPreOrders();
//   return json({ preOrders: preOrders.data });
// };

export const loader: LoaderFunction = async ({ request }: any) => {
  const preOrders = await API.getPreorders();
  return json({ preOrders: preOrders.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  console.log("Data Jaaaa", submitData.id);
  await deletePreorder(submitData.id);

  return json({ res: "" });
};

// export const action: ActionFunction = async ({ request, params }: any) => {
//   return json({ res: "" });
// };

export default function Index() {
  const preOrders = useLoaderData();
  const fetcher = useFetcher();

  const handleDelete = (rec: any) => {
    fetcher.submit(rec, { method: "delete" });
  };

  return (
    <Content style={{ margin: "0 0px" }}>
      <PreOrdersTable data={preOrders} onDelete={handleDelete} />
    </Content>
  );
}
