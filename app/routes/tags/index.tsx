import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Content } from "antd/lib/layout/layout";
import { TagsTable } from "~/components/tag/TagsTable";
import * as API from "~/api";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { deleteTag } from "~/api";

export const loader: LoaderFunction = async ({ request }: any) => {
  const tags = await API.getTags();
  return json({ tags: tags.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await deleteTag(submitData.id);
  return json({ res: "" });
};

export default function Index() {
  const tags = useLoaderData();
  const fetcher = useFetcher();

  const handleDelete = (rec: any) => {
    fetcher.submit(rec, { method: "delete" });
  };

  return (
    <Content>
      <TagsTable data={tags.tags.items} onDelete={handleDelete} />
    </Content>
  );
}
