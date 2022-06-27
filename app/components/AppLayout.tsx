import React from "react";
import { Link, Outlet } from "@remix-run/react";
import { Layout, Menu } from "antd";
import {
  CodeSandboxOutlined,
  EnvironmentOutlined,
  FolderOpenOutlined,
  GiftOutlined,
  GoldOutlined,
  IdcardOutlined,
  OrderedListOutlined,
  PieChartOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  TableOutlined,
  TagOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const AppLayout: React.FC = () => {
  const { Sider, Header } = Layout;
  const myStyle = {
    color: "gray",
    fontWeight: "bold",
  };
  return (
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider
          collapsible
          //collapsed={collapsed}
          //onCollapse={(value) => setCollapsed(value)}
          className="site-layout-background"
        >
          <div className="logo" />
          <Menu defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="home">
              <PieChartOutlined />
              <Link to="/analytics" style={myStyle}>
                {" "}
                Analytics
              </Link>
            </Menu.Item>
            <Menu.Item key="Product-Sold">
              <PieChartOutlined />
              <Link to="/analytics/product" style={myStyle}>
                {" "}
                Products Sold
              </Link>
            </Menu.Item>
            <Menu.Item key="CategoriesSold">
              <PieChartOutlined />
              <Link to="/analytics/category" style={myStyle}>
                {" "}
                Categories Sold
              </Link>
            </Menu.Item>
            <Menu.Item key="reconciles">
              <TableOutlined />
              <Link to="/reconciles" style={myStyle}>
                {" "}
                Reconciles
              </Link>
            </Menu.Item>
            <Menu.Item key="orders">
              <ShoppingOutlined />
              <Link to="/orders" style={myStyle}>
                {" "}
                Orders
              </Link>
            </Menu.Item>
            <Menu.Item key="branches">
              <EnvironmentOutlined />
              <Link to="/branches" style={myStyle}>
                {" "}
                Branches
              </Link>
            </Menu.Item>
            <Menu.Item key="promotion">
              <GiftOutlined />
              <Link to="/promotion" style={myStyle}>
                {" "}
                Promotion
              </Link>
            </Menu.Item>

            <Menu.Item key="products">
              <ShopOutlined />
              <Link to="/products" style={myStyle}>
                {" "}
                Products
              </Link>
            </Menu.Item>
            <Menu.Item key="categories">
              <FolderOpenOutlined />
              <Link to="/categories" style={myStyle}>
                {" "}
                Categories
              </Link>
            </Menu.Item>
            <Menu.Item key="tags">
              <TagOutlined />
              <Link to="/tags" style={myStyle}>
                {" "}
                Tags
              </Link>
            </Menu.Item>
            <Menu.Item key="attributes">
              <GoldOutlined />
              <Link to="/attributes" style={myStyle}>
                {" "}
                Attributes
              </Link>
            </Menu.Item>
            <Menu.Item key="selections">
              <OrderedListOutlined />
              <Link to="/selections" style={myStyle}>
                {" "}
                Selections
              </Link>
            </Menu.Item>
            <Menu.Item key="inventories">
              <CodeSandboxOutlined />
              <Link to="/inventories" style={myStyle}>
                {" "}
                Inventories
              </Link>
            </Menu.Item>
            <Menu.Item key="pre-orders">
              <ShoppingCartOutlined />
              <Link to="/preorders" style={myStyle}>
                {" "}
                Pre-Orders
              </Link>
            </Menu.Item>
            <Menu.Item>
              <IdcardOutlined />
              <Link to="/customers" style={myStyle}>
                {" "}
                Customers
              </Link>
            </Menu.Item>

            <Menu.Item key="users">
              <UserOutlined />
              <Link to="/users" style={myStyle}>
                {" "}
                Users
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Outlet />
      </Layout>
    </Layout>
  );
};
