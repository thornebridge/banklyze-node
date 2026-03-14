/**
 * Team management response types.
 */

import type { PaginationMeta } from "./common";

/** A team member within an organization. */
export interface TeamMember {
  id: number;
  email: string;
  display_name: string | null;
  role: string;
  is_active: boolean;
  status: string;
  last_login_at: string | null;
  created_at: string;
  [key: string]: unknown;
}

/** Paginated list of team members. */
export interface TeamListResponse {
  data: TeamMember[];
  meta: PaginationMeta;
  [key: string]: unknown;
}

/** Response from inviting a new team member. */
export interface InviteResponse {
  user_id: number;
  email: string;
  role: string;
  invite_url: string;
  message: string;
  [key: string]: unknown;
}
