import React from "react";
import { Badge } from "react-bootstrap";

const Tag = ({ tag, onTagSelect }) => {
  return (
    <Badge
      onClick={() => onTagSelect(tag.id)}
      style={{ marginRight: "5px" }}
      bg="secondary"
    >
      {tag.name}
    </Badge>
  );
};

export default Tag;
