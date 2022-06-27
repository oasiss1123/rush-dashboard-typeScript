import { Layout, Breadcrumb } from "antd";
import { AnalyticsTable } from "~/components";
import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const { Content } = Layout;

export const loader: LoaderFunction = async ({ request }: any) => {
  const promotions = await API.getPromotions();
  return json({ promotions: promotions.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Analytics() {
  const promotions = useLoaderData();

  console.log(promotions.promotions.items);
  return (
    <Content style={{ margin: "0 0px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <AnalyticsTable />
    </Content>
  );
}
