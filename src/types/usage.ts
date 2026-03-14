/**
 * Usage metering response types.
 */

/** Usage breakdown for a single document type. */
export interface DocumentTypeUsage {
  count: number;
  cost_usd: number;
  avg_processing_time_ms: number;
  [key: string]: unknown;
}

/** Processing time percentiles for a document type. */
export interface ProcessingTimePercentiles {
  p50_ms: number;
  p95_ms: number;
  p99_ms: number;
  [key: string]: unknown;
}

/** Processing time percentiles with per-document-type breakdown. */
export interface ProcessingTimeStats {
  p50_ms: number;
  p95_ms: number;
  p99_ms: number;
  by_document_type: Record<string, ProcessingTimePercentiles>;
  [key: string]: unknown;
}

/** Usage for a single day. */
export interface DailyUsage {
  date: string;
  documents: number;
  cost_usd: number;
  [key: string]: unknown;
}

/** Enhanced usage summary for an organization. */
export interface UsageSummary {
  period_start: string;
  total_documents: number;
  total_cost_usd: number;
  documents_this_month: number;
  cost_this_month: number;
  total_input_tokens: number;
  total_output_tokens: number;
  event_counts: Record<string, number>;
  budget_usd: number | null;
  budget_remaining_usd: number | null;
  by_document_type: Record<string, DocumentTypeUsage>;
  processing_times: ProcessingTimeStats;
  daily_usage: DailyUsage[];
  cost_by_type: Record<string, number>;
  [key: string]: unknown;
}
