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
        <div style={{ marginTop: "30px", fontWeight: "bold" }}>
          Are you sure you want to delete Attrbutes {data.name}?
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button
            size={"middle"}
            type="danger"
            style={{
              borderTopRightRadius: "4px",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              fontWeight: "bold",
            }}
          >
            Confirm
          </Button>
          <Button
            size={"middle"}
            style={{
              color: "white",
              backgroundColor: "#000000",
              marginLeft: "8px",
              borderTopRightRadius: "4px",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              fontWeight: "bold",
            }}
            href={"/attributes"}
          >
            Cancel
          </Button>
        </div>
      </Content>
    </div>
  );
};
