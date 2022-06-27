import { Content } from "antd/lib/layout/layout";

import * as API from "~/api";
import { json } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { Edit } from "~/components/preorders/edit/Edit";
import { editPreorder } from "~/api";

// export const loader: LoaderFunction = async ({ request }: any) => {
//   const preOrders = await API.getPreOrders();
//   return json({ preOrders: preOrders.data });
// };

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const preOrder = await API.getPreorder(params.id);
  const products = await API.getProducts();

  return json({ preOrder: preOrder.data, products: products.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await editPreorder(submitData.data, params.id);
  return json({ res: "" });
};

// export const action: ActionFunction = async ({ request, params }: any) => {
//   return json({ res: "" });
// };

export default function Index() {
  const preOrder = useLoaderData();
  const products = useLoaderData();
  const submit = useSubmit();
  console.log(preOrder.preOrders);
  const handleEdit = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "put" });
  };

  return (
    <Content style={{ margin: "0 0px" }}>
      <Edit
        data={preOrder.preOrder}
        products={products.products.items}
        onEdit={handleEdit}
      />
    </Content>
  );
}
