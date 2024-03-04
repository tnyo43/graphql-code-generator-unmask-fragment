/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  Url: { input: any; output: any; }
};

export type Information = Notification & {
  __typename?: 'Information';
  body: Scalars['String']['output'];
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  priority: Scalars['Int']['output'];
};

export type Message = Notification & {
  __typename?: 'Message';
  body: Scalars['String']['output'];
  date?: Maybe<Scalars['Date']['output']>;
  from: User;
  id: Scalars['ID']['output'];
  to: User;
};

export type Meta = {
  __typename?: 'Meta';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  deletePost?: Maybe<Post>;
  markPostRead?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreatePostArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMarkPostReadArgs = {
  id: Scalars['ID']['input'];
};

export type Notification = {
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
};

export type Post = {
  __typename?: 'Post';
  Stats?: Maybe<Stat>;
  author: User;
  body: Scalars['String']['output'];
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  Post?: Maybe<Post>;
  Posts?: Maybe<Array<Post>>;
  PostsMeta?: Maybe<Meta>;
  User?: Maybe<User>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  notificationsMeta?: Maybe<Meta>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort_field?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNotificationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type Stat = {
  __typename?: 'Stat';
  likes?: Maybe<Scalars['Int']['output']>;
  responses?: Maybe<Scalars['Int']['output']>;
  share?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type User = {
  __typename?: 'User';
  Followers: Array<User>;
  Posts: Array<Post>;
  avatar_url?: Maybe<Scalars['Url']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Field no longer supported */
  name?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserFragmentFragment = { __typename?: 'User', id: string, username?: string | null } & { ' $fragmentName'?: 'UserFragmentFragment' };

export type PostWithUserFragmentFragment = { __typename?: 'Post', id: string, body: string, author: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserFragmentFragment': UserFragmentFragment } }
  ) } & { ' $fragmentName'?: 'PostWithUserFragmentFragment' };

export type UserWithNameFragmentFragment = { __typename?: 'User', id: string, username?: string | null, first_name?: string | null, last_name?: string | null } & { ' $fragmentName'?: 'UserWithNameFragmentFragment' };

export type PostWithUserNameFragmentFragment = { __typename?: 'Post', id: string, body: string, author: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserFragmentFragment': UserFragmentFragment;'UserWithNameFragmentFragment': UserWithNameFragmentFragment } }
  ) } & { ' $fragmentName'?: 'PostWithUserNameFragmentFragment' };

export type UserWithNestedFollowersAndPostsFragmentFragment = (
  { __typename?: 'User', id: string, full_name?: string | null, Followers: Array<(
    { __typename?: 'User', id: string, Followers: Array<(
      { __typename?: 'User', id: string }
      & { ' $fragmentRefs'?: { 'UserFragmentFragment': UserFragmentFragment } }
    )>, Posts: Array<(
      { __typename?: 'Post' }
      & { ' $fragmentRefs'?: { 'PostWithUserFragmentFragment': PostWithUserFragmentFragment } }
    )> }
    & { ' $fragmentRefs'?: { 'UserFragmentFragment': UserFragmentFragment } }
  )>, Posts: Array<(
    { __typename?: 'Post', id: string, author: { __typename?: 'User', id: string, Followers: Array<(
        { __typename?: 'User', id: string }
        & { ' $fragmentRefs'?: { 'UserFragmentFragment': UserFragmentFragment } }
      )> } }
    & { ' $fragmentRefs'?: { 'PostWithUserFragmentFragment': PostWithUserFragmentFragment } }
  )> }
  & { ' $fragmentRefs'?: { 'UserFragmentFragment': UserFragmentFragment;'UserWithNameFragmentFragment': UserWithNameFragmentFragment } }
) & { ' $fragmentName'?: 'UserWithNestedFollowersAndPostsFragmentFragment' };

export type QueryOfNotificationsFragmentFragment = { __typename?: 'Query', notifications?: Array<{ __typename?: 'Information', body: string, priority: number, id: string } | { __typename?: 'Message', body: string, id: string, from: { __typename?: 'User', id: string } } | null> | null } & { ' $fragmentName'?: 'QueryOfNotificationsFragmentFragment' };

export const UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const UserWithNameFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithNameFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}}]}}]} as unknown as DocumentNode<UserWithNameFragmentFragment, unknown>;
export const PostWithUserNameFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostWithUserNameFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithNameFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithNameFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}}]}}]} as unknown as DocumentNode<PostWithUserNameFragmentFragment, unknown>;
export const PostWithUserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostWithUserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<PostWithUserFragmentFragment, unknown>;
export const UserWithNestedFollowersAndPostsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithNestedFollowersAndPostsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithNameFragment"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"Followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}},{"kind":"Field","name":{"kind":"Name","value":"Followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostWithUserFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostWithUserFragment"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithNameFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostWithUserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]} as unknown as DocumentNode<UserWithNestedFollowersAndPostsFragmentFragment, unknown>;
export const QueryOfNotificationsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QueryOfNotificationsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Message"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"from"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Information"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}}]}}]}}]}}]} as unknown as DocumentNode<QueryOfNotificationsFragmentFragment, unknown>;