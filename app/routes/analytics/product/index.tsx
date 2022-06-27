import { ProductTable } from "~/components/analytics/product/ProductTable";
import { Breadcrumb } from "antd";
import { Content } from "antd/lib/layout/layout";

export default function Index() {
  return (
    <Content style={{ margin: "0 0px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <ProductTable />
    </Content>
  );
}
