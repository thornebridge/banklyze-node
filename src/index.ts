/**
 * Banklyze TypeScript SDK
 *
 * Official client for the Banklyze API — AI-powered MCA underwriting platform.
 *
 * @example
 * ```typescript
 * import { Banklyze } from "banklyze";
 *
 * const client = new Banklyze({ apiKey: "bk_live_..." });
 * const deals = await client.deals.list({ status: "ready" });
 * ```
 */

// Client
export { Banklyze } from "./client.js";
export type { BanklyzeOptions, Logger, RequestOptions } from "./client.js";

// Errors
export {
  BanklyzeError,
  AuthenticationError,
  NotFoundError,
  ValidationError,
  RateLimitError,
  InvalidSignatureError,
} from "./errors.js";

// Pagination
export { PageIterator } from "./pagination.js";

// Webhook verification
export { verifySignature } from "./webhooks.js";

// All types
export * from "./types/index.js";
