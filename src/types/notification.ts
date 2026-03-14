/**
 * Notification response types.
 */

import type { PaginationMeta } from "./common";

/** An in-app notification. */
export interface Notification {
  id: number;
  notification_type: string;
  status: string;
  title: string;
  body: string | null;
  url: string | null;
  resource_type: string | null;
  resource_id: number | null;
  created_at: string | null;
  read_at: string | null;
  [key: string]: unknown;
}

/** Paginated list of notifications. */
export interface NotificationListResponse {
  data: Notification[];
  meta: PaginationMeta;
  [key: string]: unknown;
}

/** Unread notification count. */
export interface UnreadCountResponse {
  count: number;
  [key: string]: unknown;
}

/** Notification delivery preferences for a single notification type. */
export interface NotificationPreference {
  notification_type: string;
  in_app: boolean;
  email: boolean;
  push: boolean;
  slack: boolean;
  teams: boolean;
  sms: boolean;
  [key: string]: unknown;
}

/** All notification preferences keyed by notification type. */
export interface AllPreferencesResponse {
  preferences: Record<string, Record<string, boolean>>;
  [key: string]: unknown;
}
