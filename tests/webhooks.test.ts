/**
 * Tests for webhook signature verification.
 *
 * Ported from the Python SDK's test_webhooks.py.
 */

import { describe, it, expect } from "vitest";
import { createHmac } from "node:crypto";
import { verifySignature, InvalidSignatureError } from "../src/index.js";

describe("Webhook signature verification", () => {
  it("test_verify_valid_signature", () => {
    const secret = "whsec_test_secret";
    const payload = '{"event": "deal.created", "data": {}}';
    const sig =
      "sha256=" +
      createHmac("sha256", secret).update(payload).digest("hex");

    // Should not throw
    expect(() => verifySignature(payload, sig, secret)).not.toThrow();
  });

  it("test_verify_invalid_signature", () => {
    expect(() =>
      verifySignature("some payload", "sha256=invalid", "whsec_test_secret"),
    ).toThrow(InvalidSignatureError);
  });

  it("test_verify_missing_prefix", () => {
    expect(() =>
      verifySignature("some payload", "not_a_sha256_sig", "whsec_test_secret"),
    ).toThrow(InvalidSignatureError);
  });
});
