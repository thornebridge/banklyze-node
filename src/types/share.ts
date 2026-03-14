/**
 * Share link response types.
 */

/** A share token for public deal access. */
export interface ShareToken {
  id: number;
  token: string;
  share_url: string;
  view_mode: string;
  expires_at: string | null;
  created_at: string;
  [key: string]: unknown;
}

/** A share token with usage statistics. */
export interface ShareTokenListItem {
  id: number;
  token: string;
  share_url: string;
  view_mode: string;
  is_active: boolean;
  expires_at: string | null;
  access_count: number;
  last_accessed_at: string | null;
  created_at: string;
  [key: string]: unknown;
}

/** List of share tokens for a deal. */
export interface ShareTokenListResponse {
  data: ShareTokenListItem[];
  [key: string]: unknown;
}
