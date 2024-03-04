import { graphql } from "./gql";

export const UserFragment = graphql(`
  fragment UserFragment on User {
    id
    username
  }
`);

export const PostWithUserFragment = graphql(`
  fragment PostWithUserFragment on Post {
    id
    body
    author {
      ...UserFragment
    }
  }
`);

graphql(`
  fragment UserWithNameFragment on User {
    id
    username
    first_name
    last_name
  }
`);
export const PostWithUserNameFragment = graphql(`
  fragment PostWithUserNameFragment on Post {
    id
    body
    author {
      ...UserFragment
      ...UserWithNameFragment
    }
  }
`);

export const UserWithNestedFollowersAndPostsFragment = graphql(`
  fragment UserWithNestedFollowersAndPostsFragment on User {
    id
    ...UserFragment
    ...UserWithNameFragment
    full_name
    Followers {
      id
      ...UserFragment
      Followers {
        id
        ...UserFragment
      }
      Posts {
        ...PostWithUserFragment
      }
    }
    Posts {
      id
      ...PostWithUserFragment
      author {
        id
        Followers {
          id
          ...UserFragment
        }
      }
    }
  }
`);

export const QueryOfNotificationsFragment = graphql(`
  fragment QueryOfNotificationsFragment on Query {
    notifications {
      id
      ... on Message {
        body
        from {
          id
        }
      }
      ... on Information {
        body
        priority
      }
    }
  }
`);
