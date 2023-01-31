/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u128` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);
 *
 * let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);
 *
 * let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
 */
export type Uint128 = string;
/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0
 *
 * The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 */
export type Decimal = string;

export interface StateInfo {
  last_mint: number;
  poll_count: number;
  poll_deposit: Uint128;
  pool_weight?: number;
  pools?: StatePoolInfo[];
  prev_aust_balance?: Uint128 & string;
  prev_balance?: Uint128 & string;
  total_staked: Uint128;
  total_weight: number;
  vault_balances?: Uint128 & string;
  vault_share_multiplier?: Decimal & string;
  [k: string]: unknown;
}
export interface StatePoolInfo {
  aust_index?: Decimal & string;
  days: number;
  total_balance: Uint128;
  total_share: Uint128;
  weight?: number;
  [k: string]: unknown;
}
