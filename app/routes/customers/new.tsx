import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { Content } from "antd/lib/layout/layout";
import { createCustomer } from "~/api";
import * as API from "~/api";
import { CustomersForm } from "~/components/customers/CustomersForm";

export const loader: LoaderFunction = async ({ request }: any) => {
  const tags = await API.getTags();

  return json({ tags: tags.data });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);

  const res = await createCustomer(submitData.data);

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
      <CustomersForm onCreate={handleCreate} tags={data.tags.items} />
    </Content>
  );
}
