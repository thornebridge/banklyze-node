# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-13

### Added

- **Typed responses** — all resource methods return fully typed interfaces with IDE autocompletion
- **22 resource groups** covering the entire Banklyze API:
  - Core: deals, documents, transactions, exports, events, webhooks, ingest, rulesets
  - Collaboration: comments, assignments, doc requests, timeline, user search
  - Platform: team, notifications, keys, shares, usage, search
  - Admin: admin, integrations, onboarding
- **Auto-pagination** — `listAll()` methods return async iterables for `for await...of`
- **Retry with backoff** — exponential backoff with jitter, safe mutation handling
- **Webhook signature verification** — `verifySignature()` with HMAC-SHA256 and constant-time comparison
- **SSE streaming** — real-time event streams via async generators
- **Sub-resources** — `client.deals.comments.list(42)` for deal-scoped operations
- **Forward compatible** — all response interfaces accept unknown extra fields
- **Zero runtime dependencies** — uses Node.js built-in `fetch`, `crypto`, `fs`
- **Dual CJS/ESM** — works with both `import` and `require`
- **Node.js 20+** — leverages native `FormData`, `openAsBlob`, `AbortSignal.timeout`
