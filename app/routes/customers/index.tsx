import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Content } from "antd/lib/layout/layout";
import { CustomersTable } from "~/components";
import * as API from "~/api";

import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  const customers = await API.getCustomers();
  return json({ customers: customers.data });
};

export const action: ActionFunction = async ({ request, params }) => {
  return json({ res: "" });
};

export default function Index() {
  const customers = useLoaderData();

  return (
    <Content>
      <CustomersTable data={customers.customers.items} />
    </Content>
  );
}
