import { Content } from "antd/lib/layout/layout";

import { json } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { UsersForm } from "~/components/users/UsersForm";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { createUser } from "~/api";
import * as API from "~/api";

export const loader: LoaderFunction = async ({ request }: any) => {
  const branches = await API.getBranches();

  return json({ branches: branches.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  const res = await createUser(submitData.data);

  console.log(res);
  return json({ res: "" });
};

export default function Index() {
  const submit = useSubmit();
  const data = useLoaderData();

  const handleCreate = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "post" });
  };
  return (
    <Content>
      <UsersForm data={data.branches.items} onCreate={handleCreate} />
    </Content>
  );
}
