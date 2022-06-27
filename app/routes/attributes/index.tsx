import { AttributesTable } from "~/components/products/attributes/AttributesTable";

import { Content } from "antd/lib/layout/layout";
import * as API from "~/api";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { deleteAttribute } from "~/api";

export const loader: LoaderFunction = async ({ reqest }: any) => {
  const attributes = await API.getAttributes();
  return json({ attributes: attributes.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await deleteAttribute(submitData.ProductId);

  return json({ res: "" });
};

export default function Index() {
  const attributes = useLoaderData();

  const fetcher = useFetcher();

  const handleDelete = (id: any) => {
    console.log("id ", id);

    const payload = {
      ProductId: id,
    };

    fetcher.submit(payload, { method: "delete" });
  };

  return (
    <Content>
      <AttributesTable data={attributes} onDelete={handleDelete} />
    </Content>
  );
}
