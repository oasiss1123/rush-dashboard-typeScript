import { Layout } from "antd";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import * as API from "~/api";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { Edit } from "~/components/branches/edit/Edit";
import { editBranch } from "~/api";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const branch = await API.getBranch(params.id);

  return json({ branches: branch.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  const res = await editBranch(submitData.data, params.id);

  console.log(res);

  return json({ res: "" });
};

export default function Branches() {
  const submit = useSubmit();

  const branch = useLoaderData();

  const handleEdit = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "put" });
  };

  return (
    <Layout className="site-layout">
      <Edit data={branch.branches} onEdit={handleEdit} />
    </Layout>
  );
}
