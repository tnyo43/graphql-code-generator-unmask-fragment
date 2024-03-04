import { type DocumentTypeDecoration } from "@graphql-typed-document-node/core";

// copied from ./gql/fragment-masking.ts
type FragmentType<TDocumentType extends DocumentTypeDecoration<any, any>> =
  TDocumentType extends DocumentTypeDecoration<infer TType, any>
    ? [TType] extends [{ " $fragmentName"?: infer TKey }]
      ? TKey extends string
        ? { " $fragmentRefs"?: { [key in TKey]: TType } }
        : never
      : never
    : never;

type Primitive = string | number | boolean | bigint | symbol | null | undefined;
type ExcludePrimitive<T> = Exclude<T, Primitive>;
type ExtractPrimitive<T> = Extract<T, Primitive>;
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type UnionToIntersectGroupByTypeName<U, V = U> = [V] extends [
  { __typename?: infer TypeName }
]
  ? TypeName extends any
    ? UnionToIntersection<U extends { __typename?: TypeName } ? U : never>
    : never
  : never;

type UnionFieldToIntersection<T> = [T] extends [never]
  ? never
  : [T] extends [unknown[]]
  ? (
      | UnionFieldToIntersection<ExcludePrimitive<T[number]>>
      | ExtractPrimitive<T[number]>
    )[]
  : UnionToIntersectGroupByTypeName<T> extends infer V
  ? {
      [Key in keyof V]:
        | UnionFieldToIntersection<ExcludePrimitive<V[Key]>>
        | ExtractPrimitive<V[Key]>;
    }
  : never;

type Flatten<F> = [F] extends [never]
  ? never
  : F extends unknown[]
  ? (Flatten<ExcludePrimitive<F[number]>> | ExtractPrimitive<F[number]>)[]
  : {
      [Key in keyof Omit<F, " $fragmentRefs" | " $fragmentName">]:
        | Flatten<ExcludePrimitive<F[Key]>>
        | ExtractPrimitive<F[Key]>;
    } & (F extends { " $fragmentRefs"?: { [K in string]: infer FRefs } }
      ? FRefs extends any
        ? Flatten<FRefs>
        : never
      : object);

export type UnmaskFragment<F> = UnionFieldToIntersection<Flatten<F>>;

export function makeFragmentData<F extends DocumentTypeDecoration<any, any>>(
  data: UnmaskFragment<FragmentType<F>>,
  _fragment: F
): FragmentType<F> {
  return data as FragmentType<F>;
}
