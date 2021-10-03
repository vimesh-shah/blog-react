import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Post } from "../components";
import { GET_POSTS, GET_POST_BY_TAG } from "../graphql/Queries";

const PostList = ({ tag }) => {
  const [posts, setPosts] = useState([]);
  const { loading, data } = useQuery(tag ? GET_POST_BY_TAG : GET_POSTS, {
    variables: { id: tag },
  });

  useEffect(() => {
    if (data) {
      if (tag) {
        setPosts(data.tagById.posts);
      } else {
        setPosts(data.posts);
      }
    }
  }, [data]);

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
          {posts.map((post) => (
            <Col key={post.id} xxl={3} lg={4} sm={6} xs={12}>
              <Post
                title={post.title}
                content={post.content}
                createdAt={post.createdAt}
                createdBy={post.createdBy.username}
                tags={post.tags && post.tags.map((tag) => tag.name)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PostList;
