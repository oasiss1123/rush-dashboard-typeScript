import type { TreeProps } from "antd";
import {
  Affix,
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Switch,
  Tree,
} from "antd";
import React from "react";
import { useState } from "react";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 10 },
};

interface EditProps {
  onEdit: (rec: any) => void;
  data: any;
  branches: any;
  customers: any;
  products: any;
  categories: any;
}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
  const { data, onEdit, branches, customers, products, categories } = props;
  const [form] = Form.useForm();
  const BRANCHES = branches;
  const CUSTOMERS = customers;
  const PRODUCTS = products;
  console.log(data);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<string[]>([]);
  const [selectedItems3, setSelectedItems3] = useState<string[]>([]);
  const [node, setNode] = useState([]);

  const branchesOptions = BRANCHES.filter(
    (o: any) => !selectedItems.includes(o)
  );
  const customersOptions = CUSTOMERS.filter(
    (o: any) => !selectedItems2.includes(o)
  );
  const productsOptions = PRODUCTS.filter(
    (o: any) => !selectedItems3.includes(o)
  );

  const onFinish = (values: any) => {
    // onEdit(values);
    message.success("Seccess");
    console.log(values);
  };

  const handleCheck: TreeProps["onCheck"] = (checkedKeys: any) => {
    console.log(checkedKeys);
    form.setFieldsValue({ categories: checkedKeys });
  };

  const { Option } = Select;

  console.log(customers);
  const [bottom, setBottom] = useState(10);

  React.useEffect(() => {
    const newCategories = [] as any;
    const categoriesData = [] as any;

    // eslint-disable-next-line array-callback-return
    categories.map((level1: any, index: number) => {
      newCategories.push({
        title: level1.name,
        key: level1.id,
      });

      if (level1.child && level1.child.length) {
        newCategories[index]["children"] = [];
        // eslint-disable-next-line array-callback-return
        level1.child.map((level2: any, index2: number) => {
          newCategories[index].children.push({
            title: level2.name,
            key: level2.id,
          });

          if (level2.child && level2.child.length) {
            newCategories[index]["children"][index2]["children"] = [];
            // eslint-disable-next-line array-callback-return
            level2.child.map((level3: any) => {
              newCategories[index]["children"][index2]["children"].push({
                title: level3.name,
                key: level3.id,
              });
            });
          }
        });
      }
    });
    console.log("node", newCategories);
    setNode(newCategories);
  }, []);

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      Promotion Edit
      <Form form={form} {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={["coupon_code"]}
          label="Coupon Code"
          initialValue={data.coupon_code}
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="active" label="Active" initialValue={data.active}>
          <Switch
            style={{ backgroundColor: "#57D953" }}
            defaultChecked={data.active}
          />
        </Form.Item>
        <Form.Item
          name={["coupon_type"]}
          label="Coupon Type"
          initialValue={data.coupon_type}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["name"]} label="Name" initialValue={data.name}>
          <Input />
        </Form.Item>

        <Form.Item name={["label"]} label="Label" initialValue={data.label}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["description"]}
          label="Description"
          initialValue={data.description}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name={["min_spend"]}
          label="Min spend"
          initialValue={data.min_spend}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["discout_type"]}
          label="Discount Type"
          initialValue={data.discount_type}
        >
          <Select>
            <Option value={"Percent"}>Percent</Option>
            <Option value={"Cash"}>Cash</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["discount_amount"]}
          label="Discount Amout"
          initialValue={data.discount_amount}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name={["max_discount_price"]}
          label="Max Discount Price"
          initialValue={data.max_discount_price}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name={["max_distance"]}
          label="Max Distance"
          initialValue={data.max_distance}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name={["customer_ids"]}
          label="Customer"
          initialValue={data.customer_ids}
        >
          <Select
            mode="multiple"
            value={selectedItems2}
            onChange={setSelectedItems2}
            style={{ width: "100%" }}
          >
            {customersOptions.map((item: any) => (
              <Select.Option key={item} value={item.id}>
                {item.first_name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name={["start_time"]}
          label="Start"
          initialValue={data.start_time}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["end_time"]} label="End" initialValue={data.end_time}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["branch_ids"]}
          label="Branch"
          initialValue={data.branch_ids}
        >
          <Select
            mode="multiple"
            value={selectedItems}
            onChange={setSelectedItems}
            style={{ width: "100%" }}
          >
            {branchesOptions.map((item: any) => (
              <Select.Option key={item} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name={["product_slugs"]}
          label="Product"
          initialValue={data.product_slugs}
        >
          <Select
            mode="multiple"
            value={selectedItems3}
            onChange={setSelectedItems3}
            style={{ width: "100%" }}
          >
            {productsOptions.map((item: any) => (
              <Select.Option key={item} value={item.slug}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="categories" label="Categories">
          <Tree
            defaultCheckedKeys={[84]}
            checkable
            treeData={node}
            onCheck={handleCheck}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Affix offsetBottom={bottom} style={{ float: "right" }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Affix>
        </Form.Item>
      </Form>
    </div>
  );
};
