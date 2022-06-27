import { Content } from "antd/lib/layout/layout";
import { Edit } from "~/components/reconciles/edit/Edit";
import * as API from "~/api";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const reconcile = await API.getReconcile(params.id);
  return json({ reconcile: reconcile.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const reconcile = useLoaderData();

  return (
    <Content>
      <Edit data={reconcile.reconcile} />
    </Content>
  );
}
