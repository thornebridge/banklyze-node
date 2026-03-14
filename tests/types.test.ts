/**
 * Tests for response type interfaces and forward compatibility.
 *
 * Ported from the Python SDK's test_types.py.
 */

import { describe, it, expect } from "vitest";
import type {
  DealSummary,
  DealListResponse,
  PaginationMeta,
  WebhookConfig,
} from "../src/index.js";

describe("Response types", () => {
  it("test_deal_summary_from_dict", () => {
    const deal: DealSummary = {
      id: 1,
      business_name: "Acme",
      dba_name: null,
      owner_name: null,
      industry: null,
      entity_type: null,
      source_type: null,
      status: "ready",
      document_count: 0,
      health_score: 72.5,
      health_grade: null,
      avg_monthly_deposits: null,
      avg_daily_balance: null,
      funding_amount_requested: null,
      screening_flags: 0,
      created_at: null,
      updated_at: null,
    };

    expect(deal.id).toBe(1);
    expect(deal.business_name).toBe("Acme");
    expect(deal.health_score).toBe(72.5);
  });

  it("test_deal_list_response", () => {
    const response: DealListResponse = {
      data: [
        {
          id: 1,
          business_name: "Acme",
          dba_name: null,
          owner_name: null,
          industry: null,
          entity_type: null,
          source_type: null,
          status: "ready",
          document_count: 3,
          health_score: null,
          health_grade: null,
          avg_monthly_deposits: null,
          avg_daily_balance: null,
          funding_amount_requested: null,
          screening_flags: 0,
          created_at: null,
          updated_at: null,
        },
        {
          id: 2,
          business_name: "Beta Co",
          dba_name: null,
          owner_name: null,
          industry: null,
          entity_type: null,
          source_type: null,
          status: "new",
          document_count: 0,
          health_score: null,
          health_grade: null,
          avg_monthly_deposits: null,
          avg_daily_balance: null,
          funding_amount_requested: null,
          screening_flags: 0,
          created_at: null,
          updated_at: null,
        },
      ],
      meta: { page: 1, per_page: 25, total: 2, total_pages: 1 },
    };

    expect(response.data).toHaveLength(2);
    expect(response.data[0].business_name).toBe("Acme");
    expect(response.meta.total).toBe(2);
  });

  it("test_forward_compatibility", () => {
    // TypeScript interfaces with [key: string]: unknown accept extra fields.
    // This is a compile-time check — if the object satisfies the interface,
    // the SDK is forward-compatible with new API fields.
    const deal = {
      id: 1,
      business_name: "Acme",
      dba_name: null,
      owner_name: null,
      industry: null,
      entity_type: null,
      source_type: null,
      status: "ready",
      document_count: 0,
      health_score: null,
      health_grade: null,
      avg_monthly_deposits: null,
      avg_daily_balance: null,
      funding_amount_requested: null,
      screening_flags: 0,
      created_at: null,
      updated_at: null,
      // Unknown future field — should not break the interface
      unknown_future_field: true,
    } satisfies DealSummary;

    expect(deal.unknown_future_field).toBe(true);
  });

  it("test_pagination_meta", () => {
    const meta: PaginationMeta = {
      page: 2,
      per_page: 50,
      total: 150,
      total_pages: 3,
    };

    expect(meta.page).toBe(2);
    expect(meta.per_page).toBe(50);
    expect(meta.total).toBe(150);
    expect(meta.total_pages).toBe(3);
  });

  it("test_webhook_config_defaults", () => {
    // Mirrors the Python test — verify an object with default-like values
    const config: WebhookConfig = {
      url: "https://example.com/hook",
      events: ["deal.created"],
      enabled: true,
      has_secret: false,
    };

    expect(config.url).toBe("https://example.com/hook");
    expect(config.events).toEqual(["deal.created"]);
    expect(config.enabled).toBe(true);
    expect(config.has_secret).toBe(false);
  });
});
