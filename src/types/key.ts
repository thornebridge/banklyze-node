/**
 * API key response types.
 */

import type { PaginationMeta } from "./common";

/** An API key (without the raw secret). */
export interface APIKey {
  id: number;
  name: string;
  key_prefix: string;
  scopes: string;
  expires_at: string | null;
  last_used_at: string | null;
  revoked_at: string | null;
  is_active: boolean;
  created_at: string;
  [key: string]: unknown;
}

/** Response from creating a new API key -- includes the raw key (shown only once). */
export interface CreateKeyResponse {
  id: number;
  name: string;
  key: string;
  key_prefix: string;
  scopes: string;
  expires_at: string | null;
  created_at: string | null;
  message: string;
  [key: string]: unknown;
}

/** Paginated list of API keys. */
export interface KeyListResponse {
  data: APIKey[];
  meta: PaginationMeta;
  [key: string]: unknown;
}
