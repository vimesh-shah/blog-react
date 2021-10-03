import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query {
    posts {
      id
      title
      content
      createdAt
      createdBy {
        username
      }
      tags {
        name
      }
    }
  }
`;

export const GET_TAGS = gql`
  query {
    tags {
      id
      name
    }
  }
`;

export const GET_POST_BY_TAG = gql`
  query Tag($id: ID!) {
    tagById(id: $id) {
      id
      name
      posts {
        title
        content
        createdAt
        createdBy {
          username
        }
      }
    }
  }
`;
