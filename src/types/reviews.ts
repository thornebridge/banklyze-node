/**
 * Review response types for human-in-the-loop statement review.
 */

import type { PaginationMeta } from "./common";

/** Summary item returned in the reviews list. */
export interface ReviewListItem {
  id: number;
  deal_id: number | null;
  filename: string;
  bank_name: string | null;
  review_status: string;
  health_score: number | null;
  health_grade: string | null;
  validation_is_reliable: boolean | null;
  transaction_count: number;
  total_deposits: number | null;
  created_at: string;
  [key: string]: unknown;
}

/** Paginated list of reviews. */
export interface ReviewListResponse {
  data: ReviewListItem[];
  meta: PaginationMeta;
  [key: string]: unknown;
}

/** A single transaction within a review. */
export interface TransactionReviewItem {
  id: number;
  date: string;
  description: string;
  amount: number;
  balance: number | null;
  transaction_type: string | null;
  extraction_confidence: number | null;
  is_nsf_fee: boolean;
  is_overdraft_fee: boolean;
  [key: string]: unknown;
}

/** Full review detail including transactions. */
export interface ReviewDetailResponse {
  id: number;
  filename: string;
  bank_name: string | null;
  review_status: string;
  opening_balance: number | null;
  closing_balance: number | null;
  statement_start_date: string | null;
  statement_end_date: string | null;
  health_score: number | null;
  health_grade: string | null;
  validation_is_reliable: boolean | null;
  extraction_audit: Record<string, unknown> | null;
  transactions: TransactionReviewItem[];
  [key: string]: unknown;
}

/** A single transaction correction submission in a review. */
export interface ReviewTransactionCorrection {
  transaction_id: number;
  corrected_amount?: number;
  corrected_type?: string;
  corrected_description?: string;
}

/** Request body for submitting corrections. */
export interface ReviewCorrectionRequest {
  corrections: ReviewTransactionCorrection[];
  notes?: string;
}

/** Response after approving or correcting a review. */
export interface ReviewActionResponse {
  id: number;
  review_status: string;
  message: string;
  [key: string]: unknown;
}
