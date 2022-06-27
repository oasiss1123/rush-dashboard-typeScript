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
          Are you sure you want to Delete Preorder {data.id}?
        </div>
        <div style={{ marginTop: 10 }}>
          <Button
            size={"middle"}
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
              marginLeft: 8,
              color: "white",
              backgroundColor: "black",
              fontWeight: "bold",
            }}
            href={"/preorders"}
          >
            Cancel
          </Button>
        </div>
      </Content>
    </div>
  );
};
