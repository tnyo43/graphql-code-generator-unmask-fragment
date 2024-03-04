import { Equal, Expect } from "../tests/utils";
import { UnmaskFragment } from "./UnmaskFragment";

type UserAvatarUserFragment = {
  " $fragmentName"?: "UserAvatarUserFragment";
  __typename: "User";
  avatarUrl: string;
};
type UserAvatarUserFragmentResult = {
  __typename: "User";
  avatarUrl: string;
};

type UserA = {
  " $fragmentName"?: "UserAvatarUserFragment";
  __typename: "User";
  b: boolean;
};
type UserAResult = {
  __typename: "User";
  b: boolean;
};

type UserCardUserFragment = {
  " $fragmentRefs"?: {
    UserAvatarUserFragment: UserAvatarUserFragment;
  };
  " $fragmentName"?: "UserCardUserFragment";
  __typename: "User";
  id: string;
  name: string;
};
type UserCardUserFragmentResult = {
  __typename: "User";
  id: string;
  name: string;
  avatarUrl: string;
};

type ExampleComponentQuery = {
  __typename: "Query";
  user?: {
    " $fragmentRefs"?: {
      UserCardUserFragment: UserCardUserFragment;
      UserCardUserFragment2: UserCardUserFragment;
    };
    __typename: "User";
  } | null;
};
type ExampleComponentQueryResult = {
  __typename: "Query";
  user?:
    | {
        __typename: "User";
        id: string;
        name: string;
        avatarUrl: string;
      }
    | null
    | undefined;
};

type A = {
  " $fragmentRefs": {
    B: B;
    C: C;
  };
  __typename?: "ABC" | undefined;
  id: string;
  page: {
    " $fragmentRefs": {
      B: B;
      C: C;
    };
    __typename?: "ABC" | undefined;
    id: string;
    nested: {
      " $fragmentRefs": {
        B: B;
        C: C;
      };
      __typename?: "ABC" | undefined;
      id: string;
    };
  };
  edges: Array<{
    __typename?: "ABCPage" | undefined;
    page: {
      " $fragmentRefs": {
        B: B;
        C: C;
      };
      __typename?: "ABC" | undefined;
      id: string;
    };
  }>;
};

type B = {
  " $fragmentRefs": {
    B1: B1;
    B2: B2;
  };
  __typename?: "ABC" | undefined;
  id: string;
  bc: number;
  b: boolean;
};

type B1 = {
  __typename?: "ABC" | undefined;
  id: string;
  b1: string;
  b12: string;
};

type B2 = {
  __typename?: "ABC" | undefined;
  id: string;
  b2: string;
  b12: string;
};

type C = {
  " $fragmentRefs": {
    C1: C1;
    C2: C2;
  };
  __typename?: "ABC" | undefined;
  id: string;
  bc: number;
  c: bigint;
};

type C1 = {
  __typename?: "ABC" | undefined;
  id: string;
  c1: string;
  c12: string;
};

type C2 = {
  __typename?: "ABC" | undefined;
  id: string;
  c2: string;
  c12: string;
};

type AResult = {
  __typename?: "ABC" | undefined;
  id: string;
  bc: number;
  b: boolean;
  b1: string;
  b2: string;
  b12: string;
  c: bigint;
  c12: string;
  c1: string;
  c2: string;
  page: {
    __typename?: "ABC" | undefined;
    id: string;
    bc: number;
    b: boolean;
    b1: string;
    b2: string;
    b12: string;
    c: bigint;
    c12: string;
    c1: string;
    c2: string;
    nested: {
      __typename?: "ABC" | undefined;
      id: string;
      bc: number;
      b: boolean;
      b1: string;
      b2: string;
      b12: string;
      c: bigint;
      c12: string;
      c1: string;
      c2: string;
    };
  };
  edges: Array<{
    __typename?: "ABCPage" | undefined;
    page: {
      __typename?: "ABC" | undefined;
      id: string;
      bc: number;
      b: boolean;
      b1: string;
      b2: string;
      b12: string;
      c: bigint;
      c12: string;
      c1: string;
      c2: string;
    };
  }>;
};

type casesForUnmaskFragment = [
  Expect<
    Equal<UnmaskFragment<UserAvatarUserFragment>, UserAvatarUserFragmentResult>
  >,
  Expect<
    Equal<UnmaskFragment<UserCardUserFragment>, UserCardUserFragmentResult>
  >,
  Expect<
    Equal<UnmaskFragment<ExampleComponentQuery>, ExampleComponentQueryResult>
  >,
  Expect<Equal<UnmaskFragment<A>, AResult>>,
  Expect<Equal<UnmaskFragment<UserA>, UserAResult>>
];
