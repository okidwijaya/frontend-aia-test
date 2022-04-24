import React from "react";
import { Card } from "react-bootstrap";

const CardContent = (props) => {
  const detailPhotos = () => {
    window.open(props.link);
  };
  return (
    <>
      <Card
        style={{
          width: "200px",
          height: "auto",
          margin: "1rem auto",
          display: "flex",
          cursor: "pointer",
        }}
        onClick={detailPhotos}
      >
        <Card.Img
          src={props.images}
          style={{ objectFit: "fill", width: "200px", height: "200px" }}
        />
        <Card.Body>
          <Card.Title
            style={{
              width: "150px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {(props.title === " ") | (props.title === null) ? "-" : props.title}
          </Card.Title>
          <Card.Text>Picture by : {props.owner}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardContent;
