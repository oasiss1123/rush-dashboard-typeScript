import { Layout, Breadcrumb } from "antd";
import { OrdersTable } from "../../components";
import { Content } from "antd/lib/layout/layout";
import * as API from "~/api";
import { useLoaderData } from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }: any) => {
  //_______________________
  //const session = await getSessionFromRequest(request);
  // const accessToken = session.get("accessToken");
  //_______________________

  const orders = await API.getOrders();

  return json({ orders: orders.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  //_______________________
  //const session = await getSessionFromRequest(request);
  // const accessToken = session.get("accessToken");
  // const formData = await request.formData();
  // const submitData = Object.fromEntries(formData);
  // let response = null as any;
  //_______________________

  return json({ res: "" });
};

export default function Index() {
  const orders = useLoaderData();

  return (
    <Layout className="site-layout">
      <Content style={{ margin: "0 0px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill </Breadcrumb.Item>
        </Breadcrumb>

        <OrdersTable data={orders} />
      </Content>
    </Layout>
  );
}
