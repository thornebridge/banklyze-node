/**
 * Collaboration response types -- assignments, comments, doc requests,
 * timeline, and user search.
 */

import type { PaginationMeta } from "./common";

// ── Assignment types ────────────────────────────────────────────────────────

/** A user assignment on a deal. */
export interface Assignment {
  id: number;
  deal_id: number;
  user_id: number;
  role: string;
  assigned_by_id: number | null;
  created_at: string | null;
  user_email: string | null;
  user_display_name: string | null;
  [key: string]: unknown;
}

/** List of deal assignments. */
export interface AssignmentListResponse {
  data: Assignment[];
  [key: string]: unknown;
}

// ── Comment types ───────────────────────────────────────────────────────────

/** A comment on a deal. */
export interface Comment {
  id: number;
  deal_id: number;
  author_id: number;
  parent_id: number | null;
  content: string;
  mentions: number[] | null;
  created_at: string | null;
  updated_at: string | null;
  author_email: string | null;
  author_display_name: string | null;
  [key: string]: unknown;
}

/** List of deal comments. */
export interface CommentListResponse {
  data: Comment[];
  [key: string]: unknown;
}

// ── Document Request types ──────────────────────────────────────────────────

/** A document request on a deal. */
export interface DocRequest {
  id: number;
  deal_id: number;
  document_type: string;
  description: string | null;
  recipient_email: string | null;
  status: string;
  due_date: string | null;
  fulfilled_at: string | null;
  document_id: number | null;
  created_at: string | null;
  updated_at: string | null;
  [key: string]: unknown;
}

/** List of document requests. */
export interface DocRequestListResponse {
  data: DocRequest[];
  [key: string]: unknown;
}

// ── Activity Timeline types ─────────────────────────────────────────────────

/** An activity event in the timeline. */
export interface ActivityEvent {
  id: number;
  event_type: string;
  summary: string;
  actor_name: string | null;
  actor_id: number | null;
  deal_id: number | null;
  metadata: Record<string, unknown> | null;
  created_at: string | null;
  [key: string]: unknown;
}

/** Paginated activity timeline. */
export interface TimelineResponse {
  data: ActivityEvent[];
  meta: PaginationMeta;
  [key: string]: unknown;
}

// ── Assigned Deals types ────────────────────────────────────────────────────

/** A deal assigned to the current user. */
export interface AssignedDealItem {
  id: number;
  business_name: string;
  status: string;
  health_grade: string | null;
  updated_at: string | null;
  [key: string]: unknown;
}

/** Paginated list of deals assigned to the current user. */
export interface AssignedDealsResponse {
  data: AssignedDealItem[];
  meta: PaginationMeta;
  [key: string]: unknown;
}

// ── User Search types ───────────────────────────────────────────────────────

/** A user returned from search. */
export interface UserSearchResult {
  id: number;
  email: string;
  display_name: string | null;
  role: string;
  [key: string]: unknown;
}

/** List of users matching a search query. */
export interface UserSearchResponse {
  data: UserSearchResult[];
  [key: string]: unknown;
}
