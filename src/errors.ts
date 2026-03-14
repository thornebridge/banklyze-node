/**
 * Error classes for the Banklyze TypeScript SDK.
 *
 * All errors extend `BanklyzeError` which carries the HTTP status code,
 * parsed response body, and request ID when available.
 */

export class BanklyzeError extends Error {
  statusCode: number | null;
  body: Record<string, unknown>;
  requestId: string | null;

  constructor(
    message: string,
    options?: {
      statusCode?: number;
      body?: Record<string, unknown>;
      requestId?: string;
    },
  ) {
    super(message);
    this.name = "BanklyzeError";
    this.statusCode = options?.statusCode ?? null;
    this.body = options?.body ?? {};
    this.requestId = options?.requestId ?? null;
  }
}

export class AuthenticationError extends BanklyzeError {
  constructor(
    message: string,
    options?: {
      statusCode?: number;
      body?: Record<string, unknown>;
      requestId?: string;
    },
  ) {
    super(message, options);
    this.name = "AuthenticationError";
  }
}

export class NotFoundError extends BanklyzeError {
  constructor(
    message: string,
    options?: {
      statusCode?: number;
      body?: Record<string, unknown>;
      requestId?: string;
    },
  ) {
    super(message, options);
    this.name = "NotFoundError";
  }
}

export class ValidationError extends BanklyzeError {
  constructor(
    message: string,
    options?: {
      statusCode?: number;
      body?: Record<string, unknown>;
      requestId?: string;
    },
  ) {
    super(message, options);
    this.name = "ValidationError";
  }
}

export class RateLimitError extends BanklyzeError {
  retryAfter: number;

  constructor(
    message: string,
    options?: {
      retryAfter?: number;
      statusCode?: number;
      body?: Record<string, unknown>;
      requestId?: string;
    },
  ) {
    super(message, options);
    this.name = "RateLimitError";
    this.retryAfter = options?.retryAfter ?? 60;
  }
}

export class InvalidSignatureError extends BanklyzeError {
  constructor(
    message: string,
    options?: {
      statusCode?: number;
      body?: Record<string, unknown>;
      requestId?: string;
    },
  ) {
    super(message, options);
    this.name = "InvalidSignatureError";
  }
}
