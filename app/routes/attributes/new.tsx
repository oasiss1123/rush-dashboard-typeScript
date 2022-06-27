import { Content } from "antd/lib/layout/layout";
import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { AttributeForm } from "~/components/products/attributes/AttributeForm";
import { useSubmit } from "@remix-run/react";
import { createAttribute } from "~/api";

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await createAttribute(submitData.data);

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
      <AttributeForm onCreate={handleCreate} />
    </Content>
  );
}
