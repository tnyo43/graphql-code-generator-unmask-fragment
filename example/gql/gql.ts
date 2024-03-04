/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment UserFragment on User {\n    id\n    username\n  }\n": types.UserFragmentFragmentDoc,
    "\n  fragment PostWithUserFragment on Post {\n    id\n    body\n    author {\n      ...UserFragment\n    }\n  }\n": types.PostWithUserFragmentFragmentDoc,
    "\n  fragment UserWithNameFragment on User {\n    id\n    username\n    first_name\n    last_name\n  }\n": types.UserWithNameFragmentFragmentDoc,
    "\n  fragment PostWithUserNameFragment on Post {\n    id\n    body\n    author {\n      ...UserFragment\n      ...UserWithNameFragment\n    }\n  }\n": types.PostWithUserNameFragmentFragmentDoc,
    "\n  fragment UserWithNestedFollowersAndPostsFragment on User {\n    id\n    ...UserFragment\n    ...UserWithNameFragment\n    full_name\n    Followers {\n      id\n      ...UserFragment\n      Followers {\n        id\n        ...UserFragment\n      }\n      Posts {\n        ...PostWithUserFragment\n      }\n    }\n    Posts {\n      id\n      ...PostWithUserFragment\n      author {\n        id\n        Followers {\n          id\n          ...UserFragment\n        }\n      }\n    }\n  }\n": types.UserWithNestedFollowersAndPostsFragmentFragmentDoc,
    "\n  fragment QueryOfNotificationsFragment on Query {\n    notifications {\n      id\n      ... on Message {\n        body\n        from {\n          id\n        }\n      }\n      ... on Information {\n        body\n        priority\n      }\n    }\n  }\n": types.QueryOfNotificationsFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserFragment on User {\n    id\n    username\n  }\n"): (typeof documents)["\n  fragment UserFragment on User {\n    id\n    username\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PostWithUserFragment on Post {\n    id\n    body\n    author {\n      ...UserFragment\n    }\n  }\n"): (typeof documents)["\n  fragment PostWithUserFragment on Post {\n    id\n    body\n    author {\n      ...UserFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserWithNameFragment on User {\n    id\n    username\n    first_name\n    last_name\n  }\n"): (typeof documents)["\n  fragment UserWithNameFragment on User {\n    id\n    username\n    first_name\n    last_name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PostWithUserNameFragment on Post {\n    id\n    body\n    author {\n      ...UserFragment\n      ...UserWithNameFragment\n    }\n  }\n"): (typeof documents)["\n  fragment PostWithUserNameFragment on Post {\n    id\n    body\n    author {\n      ...UserFragment\n      ...UserWithNameFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserWithNestedFollowersAndPostsFragment on User {\n    id\n    ...UserFragment\n    ...UserWithNameFragment\n    full_name\n    Followers {\n      id\n      ...UserFragment\n      Followers {\n        id\n        ...UserFragment\n      }\n      Posts {\n        ...PostWithUserFragment\n      }\n    }\n    Posts {\n      id\n      ...PostWithUserFragment\n      author {\n        id\n        Followers {\n          id\n          ...UserFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment UserWithNestedFollowersAndPostsFragment on User {\n    id\n    ...UserFragment\n    ...UserWithNameFragment\n    full_name\n    Followers {\n      id\n      ...UserFragment\n      Followers {\n        id\n        ...UserFragment\n      }\n      Posts {\n        ...PostWithUserFragment\n      }\n    }\n    Posts {\n      id\n      ...PostWithUserFragment\n      author {\n        id\n        Followers {\n          id\n          ...UserFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment QueryOfNotificationsFragment on Query {\n    notifications {\n      id\n      ... on Message {\n        body\n        from {\n          id\n        }\n      }\n      ... on Information {\n        body\n        priority\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment QueryOfNotificationsFragment on Query {\n    notifications {\n      id\n      ... on Message {\n        body\n        from {\n          id\n        }\n      }\n      ... on Information {\n        body\n        priority\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;