import { Content } from "antd/lib/layout/layout";
import * as API from "~/api";
import { json } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { PreOrdersForm } from "~/components/preorders/PreOrdersForm";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { createPreorder } from "~/api";

export const loader: LoaderFunction = async ({ request }: any) => {
  const branches = await API.getBranches();
  const products = await API.getProducts();
  return { branches: branches.data, products: products.data };
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  const res = await createPreorder(submitData.data);

  console.log(res);

  return json({ res: "" });
};

export default function Index() {
  const submit = useSubmit();
  const data = useLoaderData();

  const handleCreate = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "post" });
  };

  return (
    <Content style={{ margin: "0 0px" }}>
      <PreOrdersForm
        data={data.branches.items}
        onCreate={handleCreate}
        products={data.products.items}
      />
    </Content>
  );
}
