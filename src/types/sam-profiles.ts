/**
 * SAM (System for Award Management) profile response types.
 */

import type { PaginationMeta } from "./common";

/** A watcher subscribed to a SAM search profile. */
export interface SAMProfileWatcher {
  user_id: number;
  display_name: string | null;
  email: string | null;
  notify_email: boolean;
  notify_in_app: boolean;
  attach_csv: boolean;
  [key: string]: unknown;
}

/** A SAM search profile configuration. */
export interface SAMSearchProfile {
  id: number;
  name: string;
  description: string | null;
  naics_codes: string[];
  state_codes: string[];
  sba_business_types: string[];
  min_suitability_score: number;
  auto_create_deals: boolean;
  status: string;
  schedule_interval: string | null;
  schedule_day_of_week: number | null;
  schedule_hour_utc: number;
  next_run_at: string | null;
  last_run_at: string | null;
  last_run_id: number | null;
  watchers: SAMProfileWatcher[];
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

/** Paginated list of SAM search profiles. */
export interface SAMSearchProfileListResponse {
  data: SAMSearchProfile[];
  meta: PaginationMeta;
  [key: string]: unknown;
}

/** A SAM fetch run representing a single execution of a search profile. */
export interface SAMFetchRun {
  id: number;
  status: string;
  search_criteria: Record<string, unknown>;
  total_fetched: number;
  total_scored: number;
  total_qualified: number;
  total_deals_created: number;
  total_duplicates_skipped: number;
  total_disqualified: number;
  progress_pct: number;
  sam_total_records: number;
  created_at: string | null;
  started_at: string | null;
  completed_at: string | null;
  [key: string]: unknown;
}

/** Paginated list of SAM fetch runs. */
export interface SAMFetchRunListResponse {
  data: SAMFetchRun[];
  meta: PaginationMeta;
  [key: string]: unknown;
}
