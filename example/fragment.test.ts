import { type FragmentType } from "./gql";
import { makeFragmentData } from "../src";
import { type Equal, type Expect } from "../tests/utils"
import { QueryOfNotificationsFragment, PostWithUserFragment, PostWithUserNameFragment, UserFragment, UserWithNestedFollowersAndPostsFragment } from "./fragment";

// the first argument of makeFragmentData should not be masked
// - in case with a simple fragment
type FragmentType1 = FragmentType<typeof UserFragment>
const fragmentData1 = makeFragmentData({ 'id': 'user:1', 'username': 'Tom', }, UserFragment);

// - in case with a fragment which includes another fragment
type FragmentType2 = FragmentType<typeof PostWithUserFragment>
const fragmentData2 = makeFragmentData({
  'id': 'post2',
  'author': { 'id': 'user:1', 'username': 'Tom', },
  'body': 'Hello world'
}, PostWithUserFragment);

// - in case with a fragment which includes multiple fragment
type FragmentType3 = FragmentType<typeof PostWithUserNameFragment>
const fragmentData3 = makeFragmentData({
  id: "post:3",
  author: {
    id: "user:1",
    username: "Tom",
    first_name: "Tomoya",
  },
  body: "Hello",
}, PostWithUserNameFragment);

// - in case with a deeply nested fragment
type FragmentType4 = FragmentType<typeof UserWithNestedFollowersAndPostsFragment>
const fragmentData4 = makeFragmentData({
  id: "user:3",
  username: "bob",
  first_name: "bob",
  full_name: "bob bob",
  Followers: [
    {
      id: "user:4",
      username: "alice",
      Followers: [{ id: "user:3", username: "bob" }],
      Posts: [
        {
          id: "post:5",
          author: { id: "user:4", username: "alice" },
          body: "Hello",
        },
      ],
    },
  ],
  Posts: [
    {
      id: "post:10",
      body: "Hi:)",
      author: {
        id: "user:3",
        username: "bob",
        Followers: [{ id: "user:4", username: "alice" }],
      },
    },
  ],
}, UserWithNestedFollowersAndPostsFragment);

// - in case with a fragment includes an interface
type FragmentType5 = FragmentType<typeof QueryOfNotificationsFragment>
const fragmentData5 = makeFragmentData({
  notifications: [
    {
      id: "information:1",
      body: "a new notification!",
      priority: 2,
    },
    {
      id: "message:1",
      body: "a new message!",
      from: {
        id: "user:3",
      },
    },
  ],
}, QueryOfNotificationsFragment);

type _ = [
  Expect<Equal<FragmentType1, typeof fragmentData1>>,
  Expect<Equal<FragmentType2, typeof fragmentData2>>,
  Expect<Equal<FragmentType3, typeof fragmentData3>>,
  Expect<Equal<FragmentType4, typeof fragmentData4>>,
  Expect<Equal<FragmentType5, typeof fragmentData5>>,
];
