import React from "react";
import { Badge, Card } from "react-bootstrap";

const Post = ({ title, content, createdAt, createdBy, tags }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <div className="d-flex justify-content-between">
            <div>{createdBy} </div>
            <div>{new Date(createdAt).toLocaleString()}</div>
          </div>
        </Card.Subtitle>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      {tags && (
        <Card.Footer>
          {tags.map((tag) => (
            <Badge style={{ marginRight: "5px" }} bg="secondary">
              {tag}
            </Badge>
          ))}
        </Card.Footer>
      )}
    </Card>
  );
};

export default Post;
