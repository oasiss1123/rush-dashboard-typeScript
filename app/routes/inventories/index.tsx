import { Breadcrumb, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { InventoriesTable } from "~/components";
import * as API from "~/api";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }: any) => {
  const inventories = await API.getInventories();

  return json({ inventories: inventories.data });
};

export const action: ActionFunction = async ({ reqest, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const inventories = useLoaderData();

  return (
    <Layout className="site-layout">
      <Content style={{ margin: "0 0px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <InventoriesTable data={inventories} />
      </Content>
    </Layout>
  );
}
