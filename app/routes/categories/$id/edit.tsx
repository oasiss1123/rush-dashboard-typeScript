import { Content } from "antd/lib/layout/layout";
import * as API from "~/api";
import { json } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { Edit } from "~/components/products/category/edit/Edit";
import { editCategory } from "~/api";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const category = await API.getCategory(params.id);
  return json({ category: category.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await editCategory(submitData.data, params.id);
  return json({ res: "" });
};

export default function Index() {
  const submit = useSubmit();
  const category = useLoaderData();

  const handleEdit = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "put" });
  };

  return (
    <Content>
      <Edit data={category.category} onEdit={handleEdit} />
    </Content>
  );
}
