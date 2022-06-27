import { Content } from "antd/lib/layout/layout";
import { ReconcilesTable } from "~/components/reconciles/ReconcilesTable";
import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }: any) => {
  const reconciles = await API.getReconciles();
  return json({ reconciles: reconciles.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const reconciles = useLoaderData();
  console.log(reconciles);

  return (
    <Content>
      <ReconcilesTable data={reconciles.reconciles.items} />
    </Content>
  );
}
