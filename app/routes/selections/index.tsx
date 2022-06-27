import { SelectionsTable } from "~/components/products/selections/SelectionsTable";

import { Content } from "antd/lib/layout/layout";
import * as API from "~/api";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { deleteSelection } from "~/api";

export const loader: LoaderFunction = async ({ request }: any) => {
  const selections = await API.getSelections();
  return json({ selections: selections.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await deleteSelection(submitData.SelectionId);
  return json({ res: "" });
};

export default function Index() {
  const selections = useLoaderData();

  const fetcher = useFetcher();

  const handleDelete = (id: any) => {
    const payload = {
      SelectionId: id,
    };

    fetcher.submit(payload, { method: "delete" });
  };

  return (
    <Content>
      <SelectionsTable data={selections} onDelete={handleDelete} />
    </Content>
  );
}
