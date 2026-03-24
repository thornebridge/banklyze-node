/**
 * BVL (Business Validation Layer) resource — runs, call queue, stats, validation.
 */

import { type RequestOptions, Banklyze } from "../client.js";
import type {
  BVLResult,
  BVLRun,
  BVLRunListResponse,
  BVLStats,
  CallQueueResponse,
} from "../types/bvl.js";

export class BVLResource {
  _client: Banklyze;

  constructor(client: Banklyze) {
    this._client = client;
  }

  private _request<T = unknown>(
    method: string,
    path: string,
    options?: RequestOptions,
  ): Promise<T> {
    return this._client._request<T>(method, path, options);
  }

  // ── Runs ──────────────────────────────────────────────────────────────────

  async createRun(options?: Record<string, unknown>): Promise<BVLRun> {
    return this._request<BVLRun>("POST", "/v1/bvl/runs", {
      json: options,
    });
  }

  async listRuns(options?: {
    page?: number;
    per_page?: number;
  }): Promise<BVLRunListResponse> {
    return this._request<BVLRunListResponse>("GET", "/v1/bvl/runs", {
      params: options as Record<string, unknown>,
    });
  }

  async getRun(runId: number): Promise<BVLRun> {
    return this._request<BVLRun>("GET", `/v1/bvl/runs/${runId}`);
  }

  async cancelRun(runId: number): Promise<BVLRun> {
    return this._request<BVLRun>("POST", `/v1/bvl/runs/${runId}/cancel`);
  }

  // ── Call Queue ────────────────────────────────────────────────────────────

  async callQueue(options?: {
    page?: number;
    per_page?: number;
    tier?: string;
    state?: string;
    industry?: string;
    min_score?: number;
    max_score?: number;
    include_disqualified?: boolean;
  }): Promise<CallQueueResponse> {
    return this._request<CallQueueResponse>("GET", "/v1/bvl/call-queue", {
      params: options as Record<string, unknown>,
    });
  }

  // ── Stats ─────────────────────────────────────────────────────────────────

  async stats(): Promise<BVLStats> {
    return this._request<BVLStats>("GET", "/v1/bvl/stats");
  }

  // ── Per-Deal Validation ───────────────────────────────────────────────────

  async getResult(dealId: number): Promise<BVLResult> {
    return this._request<BVLResult>("GET", `/v1/bvl/${dealId}`);
  }

  async validate(
    dealId: number,
    options?: Record<string, unknown>,
  ): Promise<BVLResult> {
    return this._request<BVLResult>("POST", `/v1/bvl/${dealId}/validate`, {
      json: options,
    });
  }
}
