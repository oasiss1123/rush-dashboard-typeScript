import { CategoriesTable } from "~/components/products/category/CategoriesTable";

import { Content } from "antd/lib/layout/layout";
import * as API from "~/api";
import { json } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { deleteCategory } from "~/api";

export const loader: LoaderFunction = async ({ request }: any) => {
  const categories = await API.getCategories();
  return json({ categories: categories.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);

  await deleteCategory(submitData.id);
  return json({ res: "" });
};

export default function Index() {
  const fetcher = useFetcher();

  const categories = useLoaderData();
  const handleDelete = (rec: any) => {
    fetcher.submit(rec, { method: "delete" });
  };

  return (
    <Content>
      <CategoriesTable data={categories} onDelete={handleDelete} />
    </Content>
  );
}
