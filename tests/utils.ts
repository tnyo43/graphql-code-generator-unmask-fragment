// ref: https://github.com/type-challenges/type-challenges/blob/9bae5a3e540029ad523e46486829654aeb70ef62/utils/index.d.ts
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
export type Expect<X extends true> = X;
