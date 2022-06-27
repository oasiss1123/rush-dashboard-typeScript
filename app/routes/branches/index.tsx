import { Layout, Breadcrumb } from "antd";
import { BrachesTable } from "~/components";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import * as API from "~/api";
import { useLoaderData } from "@remix-run/react";

const { Content } = Layout;

export const loader: LoaderFunction = async ({ request }: any) => {
  //_______________________
  //const session = await getSessionFromRequest(request);
  // const accessToken = session.get("accessToken");
  //_______________________

  const branches = await API.getBranches();

  return json({ branches: branches.data });
};

export const action: ActionFunction = async ({ request, params }: any) => {
  //_______________________
  //const session = await getSessionFromRequest(request);
  // const accessToken = session.get("accessToken");
  // const formData = await request.formData();
  // const submitData = Object.fromEntries(formData);
  // let response = null as any;
  //_______________________

  return json({ res: "" });
};

export default function Branches() {
  const branches = useLoaderData();

  return (
    <Layout className="site-layout">
      <Content style={{ margin: "0 0px" }}>
        <BrachesTable data={branches} />
      </Content>
    </Layout>
  );
}
