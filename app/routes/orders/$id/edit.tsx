import { Layout } from "antd";
import * as API from "~/api";
import { useLoaderData } from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Edit } from "~/components/orders/edit/Edit";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const order = await API.getOrder(params.id);

  return json({ order: order.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const order = useLoaderData();

  return (
    <Layout className="site-layout">
      <Edit data={order.order} />
    </Layout>
  );
}
