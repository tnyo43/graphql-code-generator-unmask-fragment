import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "example/schema.graphql",
  documents: ["example/**/*.ts"],
  emitLegacyCommonJSImports: false,
  generates: {
    "example/gql/": {
      preset: "client",
    },
  },
};

export default config;
