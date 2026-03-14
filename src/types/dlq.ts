/**
 * Dead letter queue (DLQ) response types.
 */

import type { PaginationMeta } from "./common";

/** A single dead letter queue entry. */
export interface DlqEntry {
  id: number;
  task_name: string;
  args_json: unknown;
  error_message: string | null;
  attempts: number;
  status: string;
  created_at: string | null;
  resolved_at: string | null;
  [key: string]: unknown;
}

/** Paginated list of DLQ entries. */
export interface DlqListResponse {
  data: DlqEntry[];
  meta: PaginationMeta;
  [key: string]: unknown;
}

/** Response from a DLQ action (retry or discard). */
export interface DlqActionResponse {
  status: string;
  id: number;
  task_name: string | null;
  [key: string]: unknown;
}
