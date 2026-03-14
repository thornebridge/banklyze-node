/**
 * Webhook response types.
 */

import type { PaginationMeta } from "./common";

/** Webhook configuration. */
export interface WebhookConfig {
  url: string | null;
  events: string[];
  enabled: boolean;
  has_secret: boolean;
  [key: string]: unknown;
}

/** Result of a webhook test delivery. */
export interface WebhookTestResult {
  delivered: boolean;
  status_code: number | null;
  error: string | null;
  [key: string]: unknown;
}

/** A webhook delivery log entry. */
export interface WebhookDelivery {
  id: number;
  event_type: string;
  event_id: string;
  url: string | null;
  status_code: number | null;
  latency_ms: number | null;
  attempt: number;
  max_attempts: number;
  success: boolean;
  error_message: string | null;
  created_at: string | null;
  [key: string]: unknown;
}

/** Extended delivery detail with payload and response body. */
export interface WebhookDeliveryDetail extends WebhookDelivery {
  payload_json: string | null;
  response_body: string | null;
}

/** Paginated list of webhook deliveries. */
export interface WebhookDeliveryListResponse {
  data: WebhookDelivery[];
  meta: PaginationMeta;
  [key: string]: unknown;
}
