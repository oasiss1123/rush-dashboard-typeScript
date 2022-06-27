import { Content } from "antd/lib/layout/layout";

import { json } from "@remix-run/node";

import type { ActionFunction } from "@remix-run/node";
import { SelectionForm } from "~/components/products/selections/SelectionForm";
import { useSubmit } from "@remix-run/react";
import { createSelection } from "~/api";

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  const res = await createSelection(submitData.data);
  console.log(res);
  return json({ res: "" });
};

export default function Index() {
  const submit = useSubmit();

  const handleCreate = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "post" });
  };

  return (
    <Content>
      <SelectionForm onCreate={handleCreate} />
    </Content>
  );
}
