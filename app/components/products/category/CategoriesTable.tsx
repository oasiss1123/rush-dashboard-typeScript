import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";
import React from "react";

interface CategoriesTableProps {
  onDelete: (record: any) => void;
  data: any;
}

export const CategoriesTable: React.FC<CategoriesTableProps> = (
  props: CategoriesTableProps
) => {
  const { data, onDelete } = props;

  interface DataType {
    key: React.Key;
    name: string;
    order: number;
    id: number;
  }
  console.log(data);

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Order",
      dataIndex: "order",
      sorter: (a, b) => a.order - b.order,
      render: (order: number) => (order === 0 ? "-" : order),
    },
    {
      title: "ID",
      dataIndex: "id",
      render: (id: number) => (id === 0 ? "-" : id),
    },
    {
      render: (record: any) => (
        <div>
          <Button
            style={{ color: "#286efb", textAlign: "right" }}
            href={`./categories/${record.id}/edit`}
            icon={<FormOutlined />}
            type="link"
          ></Button>
          <Popconfirm
            title={`Are you sure to delete ${record.name}`}
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              onDelete(record);
              message.success("Clicked on Yes");
            }}
          >
            <Button
              style={{
                color: "#FF4141",
                textAlign: "right",
              }}
              icon={<DeleteOutlined />}
              type="link"
            ></Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {};

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 620 }}
    >
      <h1 style={{ fontSize: "30px" }}>
        Categories
        <Button
          style={{
            float: "right",
            fontWeight: "bold",
            color: "white",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
            backgroundColor: "#24CE2A",
          }}
          href="/categories/new"
        >
          New
        </Button>
      </h1>
      <Table
        columns={columns}
        dataSource={data.categories.items}
        rowKey={"id"}
        onChange={onChange}
      />
    </div>
  );
};
