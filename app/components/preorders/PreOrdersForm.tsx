import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  Select,
  Space,
  TimePicker,
} from "antd";
import { useState } from "react";

interface PreOrderFormProps {
  onCreate: (rec: any) => void;
  data: any;
  products: any;
}

export const PreOrdersForm: React.FC<PreOrderFormProps> = (
  props: PreOrderFormProps
) => {
  const { data, onCreate, products } = props;
  const { Option } = Select;
  const OPTIONS = ["DineIn", "Pickup"];
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  console.log(data);

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    onCreate(values);
    console.log(values);
  };

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      <div>
        <h1
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          New Preorder
        </h1>
        <></>
      </div>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={["branch_id"]} label="Branch">
          <Select>
            {data.map((item: any) => (
              <Option key={item} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name={["shipping_method"]} label="Shipping Method">
          <Select
            mode="multiple"
            value={selectedItems}
            onChange={setSelectedItems}
            style={{ width: "100%" }}
          >
            {filteredOptions.map((item) => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name={["date"]} label="Date">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["time"]} label="Time">
          <TimePicker
            minuteStep={15}
            secondStep={10}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item label="Product">
          <Form.List name="products">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "product"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Select style={{ width: "100%" }}>
                        {products.map((item: any) => (
                          <Option key={item} value={item.name}>
                            {item.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, "qty"]}
                      rules={[{ required: true, message: "Missing last name" }]}
                    >
                      <InputNumber />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
