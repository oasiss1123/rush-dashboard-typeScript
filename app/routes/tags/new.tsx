import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useSubmit } from "@remix-run/react";
import { Content } from "antd/lib/layout/layout";
import { TagForm } from "~/components/tag/TagForm";
import { createTag } from "~/api";

export const action: ActionFunction = async ({ request }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);

  console.log("submitData", submitData.data);

  await createTag(submitData.data);

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
      <TagForm onCreate={handleCreate} />
    </Content>
  );
}
