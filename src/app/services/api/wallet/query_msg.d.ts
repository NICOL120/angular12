/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type QueryMsg =
  | {
      balance: {
        address: string;
        [k: string]: unknown;
      };
    }
  | {
      config: {
        [k: string]: unknown;
      };
    }
  | {
      state: {
        [k: string]: unknown;
      };
    }
  | {
      shares: {
        [k: string]: unknown;
      };
    };