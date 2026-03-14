/**
 * CRM resource — config, field mapping, sync, and test.
 */

import type { Banklyze, RequestOptions } from "../client.js";

export class CrmResource {
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

  /** Get CRM configuration for a provider. */
  async getConfig(provider: string): Promise<Record<string, unknown>> {
    return this._request<Record<string, unknown>>(
      "GET",
      `/v1/crm/config/${provider}`,
    );
  }

  /** Create or update CRM configuration for a provider. */
  async updateConfig(
    provider: string,
    options: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    return this._request<Record<string, unknown>>(
      "PUT",
      `/v1/crm/config/${provider}`,
      { json: options },
    );
  }

  /** Remove CRM configuration for a provider. */
  async deleteConfig(provider: string): Promise<Record<string, unknown>> {
    return this._request<Record<string, unknown>>(
      "DELETE",
      `/v1/crm/config/${provider}`,
    );
  }

  /** Test CRM connection for a provider. */
  async test(provider: string): Promise<Record<string, unknown>> {
    return this._request<Record<string, unknown>>(
      "POST",
      `/v1/crm/config/${provider}/test`,
    );
  }

  /** Get field mapping for a provider. */
  async getFieldMapping(provider: string): Promise<Record<string, unknown>> {
    return this._request<Record<string, unknown>>(
      "GET",
      `/v1/crm/field-mapping/${provider}`,
    );
  }

  /** Update field mapping for a provider. */
  async updateFieldMapping(
    provider: string,
    options: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    return this._request<Record<string, unknown>>(
      "PUT",
      `/v1/crm/field-mapping/${provider}`,
      { json: options },
    );
  }

  /** Trigger a manual CRM sync for a deal. */
  async sync(options: { deal_id: number }): Promise<Record<string, unknown>> {
    return this._request<Record<string, unknown>>(
      "POST",
      "/v1/crm/sync",
      { json: options as Record<string, unknown> },
    );
  }

  /** List CRM sync log entries. */
  async syncLog(options?: {
    page?: number;
    per_page?: number;
    deal_id?: number;
  }): Promise<Record<string, unknown>> {
    return this._request<Record<string, unknown>>("GET", "/v1/crm/sync-log", {
      params: options as Record<string, unknown>,
    });
  }
}
