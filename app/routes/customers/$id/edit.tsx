import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Content } from "antd/lib/layout/layout";

import * as API from "~/api";
import { Edit } from "~/components/customers/edit/Edit";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { editCustomer } from "~/api";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const customer = await API.getCustomer(params.id);
  const tags = await API.getTags();
  return json({ customer: customer.data, tags: tags.data });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  const res = await editCustomer(submitData.data, params.id);

  console.log(res);

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
      <Edit data={data.customer} onEdit={handleEdit} tags={data.tags.items} />
    </Content>
  );
}
