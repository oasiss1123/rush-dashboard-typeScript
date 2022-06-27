import { Content } from "antd/lib/layout/layout";
import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { Edit } from "~/components/tag/edit/Edit";
import { editTag } from "~/api";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const tag = await API.getTag(params.id);
  return json({ tag: tag.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await editTag(submitData.data, params.id);

  return json({ res: "" });
};

export default function Index() {
  const tag = useLoaderData();
  const submit = useSubmit();

  const handleEdit = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "put" });
  };

  return (
    <Content>
      <Edit data={tag.tag} onEdit={handleEdit} />
    </Content>
  );
}
