import { Layout } from "antd";
import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { Edit } from "~/components/promotion/edit/Edit";
import { editPromotion } from "~/api";

// export const loader: LoaderFunction = async ({ request }: any) => {
//   const promotions = await API.getPromotions();
//   return json({ promotions: promotions.data });
// };

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const promotion = await API.getPromotion(params.id);
  const branches = await API.getBranches();
  const customers = await API.getCustomers();
  const products = await API.getProducts();
  const categories = await API.getCategories();
  return json({
    promotion: promotion.data,
    branches: branches.data,
    customers: customers.data,
    products: products.data,
    categories: categories.data,
  });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  const res = await editPromotion(submitData.data, params.id);
  console.log(res);
  return json({ res: "" });
};

// export const action: ActionFunction = async ({ request, params }: any) => {
//   return json({ res: "" });
// };

export default function Index() {
  const data = useLoaderData();
  const submit = useSubmit();

  const handleEdit = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "put" });
  };

  return (
    <Layout className="site-layout">
      <Edit
        data={data.promotion}
        onEdit={handleEdit}
        branches={data.branches.items}
        customers={data.customers.items}
        products={data.products.items}
        categories={data.categories.items}
      />
    </Layout>
  );
}
