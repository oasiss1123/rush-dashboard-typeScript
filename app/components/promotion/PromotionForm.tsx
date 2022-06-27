import type { TreeProps } from "antd";
import { Affix } from "antd";
import { Button, Form, Input, InputNumber, Select, Switch, Tree } from "antd";

import React from "react";
import { useState } from "react";

interface PromotionFormProps {
  branches: any;
  products: any;
  customers: any;
  categories: any;
  onCreate: (rec: any) => void;
}
//edit
export const PromotionForm: React.FC<PromotionFormProps> = (
  props: PromotionFormProps
) => {
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };

  const [form] = Form.useForm();
  const { branches, products, customers, categories } = props;
  const { Option } = Select;

  const OPTIONS = branches;
  const OPTIONS2 = products;
  const CUSTOMERS = customers;

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<string[]>([]);
  const [selectedItems3, setSelectedItems3] = useState<string[]>([]);
  const [node, setNode] = useState([]);
  const [bottom, setBottom] = useState(10);

  const filteredOptions = OPTIONS.filter(
    (e: any) => !selectedItems.includes(e)
  );
  const filteredOptions2 = OPTIONS2.filter(
    (e: any) => !selectedItems2.includes(e)
  );
  const filteredOptions3 = CUSTOMERS.filter(
    (e: any) => !selectedItems3.includes(e)
  );

  const onFinish = (values: any) => {
    console.log(values);
  };

  React.useEffect(() => {
    const newCategories = [] as any;

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

  console.log("eieieiei", selectedItems);

  const handleCheck: TreeProps["onCheck"] = (checkedKeys: any) => {
    console.log(checkedKeys);
    form.setFieldsValue({ categories: checkedKeys });
  };

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      Promotion Edit
      <Form {...layout} name="nest-messages" onFinish={onFinish} form={form}>
        <Form.Item name={["coupon_code"]} label="Coupon Code">
          <Input />
        </Form.Item>
        <Form.Item name="active" initialValue={false} label="Active">
          <Switch
            defaultChecked={false}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>
        <Form.Item name={["coupon_type"]} label="Coupon Type">
          <Select>
            <Option value="Product">Product</Option>
            <Option value="Shipping">Shipping</Option>
            <Option value="GetFree">Get Free</Option>
          </Select>
        </Form.Item>
        <Form.Item name={["name"]} label="Name">
          <Input />
        </Form.Item>

        <Form.Item name={["label"]} label="Label">
          <Input />
        </Form.Item>
        <Form.Item name={["description"]} label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={["min_spend"]} label="Min spend">
          <Input />
        </Form.Item>
        <Form.Item name={["discout_type"]} label="Discount Type">
          <Select>
            <Option value="Percent">Percent</Option>
            <Option value="Cash">Cash</Option>
          </Select>
        </Form.Item>
        <Form.Item name={["discount_amount"]} label="Discount Amout">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["max_discount_price"]} label="Max Discount Price">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["max_distance"]} label="Max Distance">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["customer_ids"]} label="Customer">
          <Select
            mode="multiple"
            value={selectedItems3}
            onChange={setSelectedItems3}
            style={{ width: "100%" }}
          >
            {filteredOptions3.map((item: any) => (
              <Select.Option key={item} value={item.id}>
                {item.first_name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name={["start_time"]} label="Start">
          <Input />
        </Form.Item>
        <Form.Item name={["end_time"]} label="End">
          <Input />
        </Form.Item>
        <Form.Item name={["branch_ids"]} label="Branch">
          <Select
            mode="multiple"
            value={selectedItems}
            onChange={setSelectedItems}
            style={{ width: "100%" }}
          >
            {filteredOptions.map((item: any) => (
              <Select.Option key={item} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name={["product_slugs"]} label="Product">
          <Select
            mode="multiple"
            value={selectedItems2}
            onChange={setSelectedItems2}
            style={{ width: "100%" }}
          >
            {filteredOptions2.map((item: any) => (
              <Select.Option key={item} value={item.slug}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="categories" label="Categories">
          <Tree checkable treeData={node} onCheck={handleCheck} />
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
