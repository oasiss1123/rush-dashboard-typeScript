import { ActionFunction, json } from "@remix-run/node";
import { useSubmit } from "@remix-run/react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { createBranch } from "~/api";
import { BranchesForm } from "~/components/branches/BranchesForm";

export const action: ActionFunction = async ({ request }: any) => {
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);
  await createBranch(submitData.data);

  return json("res:");
};

export default function Index() {
  const submit = useSubmit();
  const handleCreate = (rec: any) => {
    const payload = { data: JSON.stringify(rec) };

    submit(payload, { method: "post" });
  };

  return (
    <>
      <Layout className="site-layout">
        <Content style={{ margin: "0 0px" }}>
          <BranchesForm onCreate={handleCreate} />
        </Content>
      </Layout>
    </>
  );
}
