/**
 * Ingest and batch response types.
 */

/** Status of a single file in an ingest request. */
export interface IngestDocumentResult {
  filename: string;
  document_id: number | null;
  status: string;
  document_type: string | null;
  error: string | null;
  [key: string]: unknown;
}

/** Response from a bulk ingest request. */
export interface IngestResponse {
  batch_id: number;
  deal_id: number;
  deal_created: boolean;
  external_reference: string | null;
  total: number;
  queued: number;
  failed: number;
  results: IngestDocumentResult[];
  [key: string]: unknown;
}

export interface BatchDocumentStatus {
  document_id: number;
  filename: string | null;
  document_type: string | null;
  status: string;
  error_message: string | null;
  [key: string]: unknown;
}

export interface BatchRecommendationSummary {
  decision: string;
  weighted_score: number;
  risk_tier: string;
  paper_grade: string;
  [key: string]: unknown;
}

/** Status of a processing batch. */
export interface BatchStatusResponse {
  batch_id: number;
  deal_id: number;
  status: string;
  total_documents: number;
  completed_documents: number;
  failed_documents: number;
  created_at: string;
  completed_at: string | null;
  documents: BatchDocumentStatus[];
  recommendation: BatchRecommendationSummary | null;
  [key: string]: unknown;
}
