/**
 * Transaction response types.
 */

import type { PaginationMeta } from "./common";

/** Full transaction detail returned from correction endpoints. */
export interface TransactionDetail {
  id: number;
  document_id: number;
  date: string;
  description: string;
  amount: number;
  type: string;
  balance: number | null;
  flagged: boolean;
  flag_reason: string | null;
  category: string | null;
  corrected: boolean;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

/** A single bank transaction. */
export interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  balance: number | null;
  transaction_type: string | null;
  is_nsf_fee: boolean;
  is_overdraft_fee: boolean;
  is_large_deposit: boolean;
  is_large_strange: boolean;
  is_repeat_charge: boolean;
  is_suspicious: boolean;
  is_corrected: boolean;
  screening_bucket: string | null;
  flag_reason: string | null;
  correction_count: number;
  [key: string]: unknown;
}

/** Paginated list of transactions. */
export interface TransactionListResponse {
  data: Transaction[];
  meta: PaginationMeta;
  [key: string]: unknown;
}

/** A correction applied to a transaction. */
export interface TransactionCorrection {
  id: number;
  field_name: string;
  original_value: string;
  corrected_value: string;
  correction_reason: string;
  corrected_by_name: string | null;
  created_at: string;
  [key: string]: unknown;
}

/** List of corrections for a transaction. */
export interface TransactionCorrectionListResponse {
  data: TransactionCorrection[];
  [key: string]: unknown;
}
