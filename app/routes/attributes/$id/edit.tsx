import { Content } from "antd/lib/layout/layout";
import * as API from "~/api";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { Edit } from "~/components/products/attributes/edit/Edit";
import { editAttribute } from "~/api";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const attribute = await API.getAttribute(params.id);
  return json({ attribute: attribute.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await editAttribute(submitData.data, params.id);
  return json({ res: "" });
};

export default function Index() {
  const submit = useSubmit();
  const attribute = useLoaderData();
  const handleEdit = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "put" });
  };

  return (
    <Content>
      <Edit data={attribute.attribute} onEdit={handleEdit} />
    </Content>
  );
}
