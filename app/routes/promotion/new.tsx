import { Layout } from "antd";

import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PromotionForm } from "~/components/promotion/PromotionForm";

const { Content } = Layout;

export const loader: LoaderFunction = async ({ request }: any) => {
  const branches = await API.getBranches();
  const products = await API.getProducts();
  const customers = await API.getCustomers();
  const categories = await API.getCategories();
  return json({
    branches: branches.data,
    products: products.data,
    customers: customers.data,
    categories: categories.data,
  });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const data = useLoaderData();

  return (
    <Content style={{ margin: "0 0px" }}>
      <PromotionForm
        branches={data.branches.items}
        products={data.products.items}
        customers={data.customers.items}
        categories={data.categories.items}
      />
    </Content>
  );
}
