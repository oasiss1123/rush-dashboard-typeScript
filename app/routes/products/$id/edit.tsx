import { Content } from "antd/lib/layout/layout";
import * as API from "~/api";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { Edit } from "~/components/products/edit/Edit";
import { editProduct } from "~/api";

export const loader: LoaderFunction = async ({ request, params }: any) => {
  const product = await API.getProduct(params.id);
  const branches = await API.getBranches();
  const tags = await API.getTags();
  const categories = await API.getCategories();
  const attribute = await API.getAttributes();

  return json({
    product: product.data,
    branches: branches.data,
    tags: tags.data,
    categories: categories.data,
    attribute: attribute.data,
  });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();

  const submitData = Object.fromEntries(formData);

  const res = await editProduct(submitData.data, params.id);

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
    <Content style={{ margin: "0 0px" }}>
      <Edit
        data={data.product}
        onEdit={handleEdit}
        branches={data.branches.items}
        tags={data.tags.items}
        categories={data.categories.items}
        attributes={data.attribute.items}
      />
    </Content>
  );
}
