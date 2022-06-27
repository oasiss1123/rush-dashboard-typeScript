import { Button } from "antd";
import { Content } from "antd/lib/layout/layout";

interface DeleteProps {
  data: any;
}

export const Delete: React.FC<DeleteProps> = (props: DeleteProps) => {
  const { data } = props;
  return (
    <div>
      <Content
        className="site-layout-background"
        style={{
          margin: "60px 100px",
          padding: 24,
          minHeight: 200,
          textAlign: "center",
        }}
      >
        <div style={{ marginTop: 30, fontWeight: "bold" }}>
          Are you sure you want to delete Product {data.name}?
        </div>
        <div style={{ fontWeight: "bold", fontSize: 12, marginTop: 8 }}>
          Delete product will impact into your Inventory, Product
          <br />
          preorder, view product in POS or LINE.
        </div>

        <div style={{ marginTop: 10 }}>
          <Button
            type="danger"
            style={{
              borderTopRightRadius: 4,
              borderTopLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
              fontWeight: "bold",
            }}
          >
            Confirm
          </Button>
          <Button
            style={{
              borderTopRightRadius: 4,
              borderTopLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
              color: "white",
              backgroundColor: "black",
              marginLeft: 8,
              fontWeight: "bold",
            }}
            href={"/products"}
          >
            Cancel
          </Button>
        </div>
      </Content>
    </div>
  );
};
