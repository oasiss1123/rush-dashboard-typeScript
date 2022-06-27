import { Content } from "antd/lib/layout/layout";
import * as API from "~/api";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { Edit } from "~/components/products/selections/edit/Edit";
import { editSelection } from "~/api";

export const loader: LoaderFunction = async ({ reqest, params }: any) => {
  const selection = await API.getSelection(params.id);
  return json({ selection: selection.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);

  const res = await editSelection(submitData.data, params.id);
  console.log(res);
  return json({ res: "" });
};

export default function Index() {
  const submit = useSubmit();
  const selection = useLoaderData();

  const handleEdit = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "put" });
  };

  return (
    <Content>
      <Edit data={selection.selection} onEdit={handleEdit} />
    </Content>
  );
}
