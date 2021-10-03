import { useQuery } from "@apollo/client";
import { Tag } from "../components";
import React, { useEffect, useState } from "react";
import { GET_TAGS } from "../graphql/Queries";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { PostList } from ".";

const TagList = () => {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const { loading, data } = useQuery(GET_TAGS);

  useEffect(() => {
    if (data) {
      setTags(data.tags);
    }
  }, [data]);

  const handleTagSelect = (tagId) => {
    setSelectedTag(tagId);
  };

  if (loading) {
    return (
      <Container className="my-3">
        <Row className="justify-content-center">
          <Spinner animation="border" />
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container className="my-3">
        <Row className="gx-2 gy-2">
          {tags.map((tag) => (
            <Col key={tag.id} xxl={2} lg={2} sm={3} xs={4}>
              <Tag tag={tag} onTagSelect={handleTagSelect} />
            </Col>
          ))}
        </Row>
      </Container>
      {selectedTag && <PostList tag={selectedTag} />}
    </>
  );
};

export default TagList;
