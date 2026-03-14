/**
 * Push notifications resource — VAPID key, subscribe, unsubscribe.
 */

import type { Banklyze, RequestOptions } from "../client.js";

export class PushResource {
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

  /** Get the VAPID public key for web push subscriptions. */
  async vapidKey(): Promise<Record<string, unknown>> {
    return this._request<Record<string, unknown>>(
      "GET",
      "/v1/push/vapid-key",
    );
  }

  /** Register or update a push subscription for the authenticated user. */
  async subscribe(
    options: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    return this._request<Record<string, unknown>>(
      "POST",
      "/v1/push/subscribe",
      { json: options },
    );
  }

  /** Remove a push subscription for the authenticated user. */
  async unsubscribe(
    options: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    return this._request<Record<string, unknown>>(
      "DELETE",
      "/v1/push/subscribe",
      { json: options },
    );
  }
}
