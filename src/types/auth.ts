/**
 * Authentication response types.
 */

/** Response from a successful login. */
export interface AuthLoginResponse {
  id: number;
  email: string;
  name: string;
  role: string;
  org_slug: string;
  token: string;
  [key: string]: unknown;
}
