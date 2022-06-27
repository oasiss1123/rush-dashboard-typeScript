import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Content } from "antd/lib/layout/layout";
import * as API from "~/api";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { Edit } from "~/components/users/edit/Edit";
import { editUser } from "~/api";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const user = await API.getUser(params.id);
  const branches = await API.getBranches();

  return json({ users: user.data, branches: branches.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await editUser(submitData.data, params.id);
  return json({ res: "" });
};

export default function Index() {
  const submit = useSubmit();
  const data = useLoaderData();
  const handleEdit = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "put" });
  };

  return (
    <Content>
      <Edit
        data={data.users}
        branches={data.branches.items}
        onEdit={handleEdit}
      />
    </Content>
  );
}
