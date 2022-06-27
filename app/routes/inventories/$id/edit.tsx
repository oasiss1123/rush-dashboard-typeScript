import { Layout } from "antd";
import * as API from "~/api";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { Edit } from "~/components/inventories/edit/Edit";
import { editInventory } from "~/api";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const inventory = await API.getInventory(params.id);

  return json({ inventory: inventory.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await editInventory(submitData.data, params.id);

  return json({ res: "" });
};

export default function Index() {
  const inventory = useLoaderData();
  const submit = useSubmit();
  console.log(inventory);
  const handleEdit = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "put" });
  };

  return (
    <Layout className="site-layout">
      <Edit data={inventory.inventory} onEdit={handleEdit} />
    </Layout>
  );
}
