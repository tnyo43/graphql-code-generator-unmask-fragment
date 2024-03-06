# graphql-code-generator-unmask-fragment

This package provide a helper function and a utility type for [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) in client-preset use cases.
The function resolves [a problem with nested fragment](https://github.com/dotansimha/graphql-code-generator/issues/9702).

## Usage

Install this package by setting the path on your package.json and running `$ npm install`.

```json
{
  "dependencies": {
    "graphql-code-generator-unmask-fragment": "tnyo43/graphql-code-generator-unmask-fragment#v1.1.1",
  }
}
```

### `UnmaskFragment`

`UnmaskFragment` utility type helps you to obtain a unmasked fragment type from its masked fragment type.

```ts
const UserFragment = graphql(`
  fragment UserFragment on User {
    id
    username
  }
`);

const PostWithUserFragment = graphql(`
  fragment PostWithUserFragment on Post {
    id
    body
    author {
      ...UserFragment
    }
  }
`);

type User = UnmaskFragment<typeof UserFragment>;
/*
type User = {
  __typename?: "User" | undefined;
  id: string;
  username?: string | null | undefined;
}
*/
type PostWithUser = UnmaskFragment<typeof PostWithUserFragment>;
/*
type PostWithUser = {
  __typename?: "Post" | undefined;
  id: string;
  body: string;
  author: {
    __typename?: "User" | undefined;
    id: string;
    username?: string | null | undefined;
  };
}
*/
```

### `makeFragmentData`

`makeFragmentData` helper function helps you to make a fragment object in your tests.

```ts
const userData: FragmentType<typeof UserFragment> =
  makeFragmentData(
    {
      id: "user:1",
      username: "Tom",
    },
    UserFragment
  );

const postWithUserData: FragmentType<typeof PostWithUserFragment> =
  makeFragmentData(
    {
      id: "post2",
      author: {
        id: "user:1",
        username: "Tom",
      },
      body: "Hello world",
    },
    PostWithUserFragment
  );
```

---

For more details, [please check an example](https://github.com/tnyo43/graphql-code-generator-unmask-fragment/tree/main/example).

## License

MIT

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/tnyo43/graphql-code-generator-unmask-fragment/main/LICENSE
)

## Supplementary Information

I've created [a PR on graphql-code-generator](https://github.com/dotansimha/graphql-code-generator/pull/9708). This package won't be needed after it is merged.
