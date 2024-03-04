import { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
import { UnmaskFragment } from "./UnmaskFragment";

// copied from ./gql/fragment-masking.ts
type FragmentType<TDocumentType extends DocumentTypeDecoration<any, any>> =
  TDocumentType extends DocumentTypeDecoration<infer TType, any>
    ? [TType] extends [{ " $fragmentName"?: infer TKey }]
      ? TKey extends string
        ? { " $fragmentRefs"?: { [key in TKey]: TType } }
        : never
      : never
    : never;

export function makeFragmentData<F extends DocumentTypeDecoration<any, any>>(
  data: UnmaskFragment<FragmentType<F>>,
  _fragment: F
): FragmentType<F> {
  return data as FragmentType<F>;
}
