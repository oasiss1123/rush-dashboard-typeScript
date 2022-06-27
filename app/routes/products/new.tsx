import { Content } from "antd/lib/layout/layout";

import * as API from "~/api";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { ProductForm } from "~/components/products/ProductForm";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }: any) => {
  const branches = await API.getBranches();
  const tags = await API.getTags();
  const categories = await API.getCategories();
  const selections = await API.getSelections();
  const attributes = await API.getAttributes();
  return json({
    branches: branches.data,
    tags: tags.data,
    categories: categories.data,
    selections: selections.data,
    attributes: attributes.data,
  });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  return json({ res: "" });
};

export default function Index() {
  const data = useLoaderData();
  return (
    <Content style={{ margin: "0 0px" }}>
      <ProductForm
        branches={data.branches.items}
        tags={data.tags.items}
        categories={data.categories.items}
        selections={data.selections.items}
        attributes={data.attributes.items}
      />
    </Content>
  );
}
