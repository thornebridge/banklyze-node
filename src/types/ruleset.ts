/**
 * Ruleset response types.
 */

import type { PaginationMeta } from "./common";

/** An underwriting ruleset with thresholds and scoring weights. */
export interface Ruleset {
  id: number;
  name: string;
  description: string | null;
  is_default: boolean;

  // Hard decline thresholds
  min_monthly_deposits: number;
  min_days_covered: number;
  min_health_score: number;
  max_suspicious_count: number;
  max_nsf_per_month: number;
  max_debt_service_ratio: number;

  // Scoring thresholds
  min_adb_pct_of_revenue: number;
  min_deposit_frequency: number;
  revenue_decline_red_flag_pct: number;

  // Decision thresholds
  approve_min_score: number;
  conditional_min_score: number;

  // Paper grade thresholds
  grade_a_min_score: number;
  grade_b_min_score: number;
  grade_c_min_score: number;

  // CFCR
  min_cfcr: number;

  // Scoring weights
  weight_revenue: number;
  weight_balance_health: number;
  weight_nsf_overdraft: number;
  weight_deposit_frequency: number;
  weight_revenue_trend: number;
  weight_debt_service: number;
  weight_transaction_screening: number;
  weight_health_score: number;
  weight_cross_doc: number;

  // MCA-specific scoring weights
  weight_position_stacking: number;
  weight_cash_flow_volatility: number;
  weight_revenue_quality: number;
  weight_daily_velocity: number;

  updated_at: string | null;
  updated_by: string | null;
  [key: string]: unknown;
}

/** List of rulesets. */
export interface RulesetListResponse {
  data: Ruleset[];
  meta: PaginationMeta;
  [key: string]: unknown;
}

/** Result of evaluating a deal against a ruleset. */
export interface RulesetEvaluation {
  ruleset_id: number | null;
  ruleset_name: string;
  decision: string;
  weighted_score: number;
  risk_tier: string;
  paper_grade: string | null;
  advance_amount: number | null;
  advance_range_low: number | null;
  advance_range_high: number | null;
  factor_rate: number | null;
  holdback_pct: number | null;
  risk_factors: string[];
  strengths: string[];
  hard_decline_reasons: string[];
  criteria_scores: Record<string, unknown>;
  confidence: number | null;
  confidence_label: string | null;
  stress_test_passed: boolean | null;
  layer_scores: Record<string, unknown>;
  forecast: Record<string, unknown> | null;
  [key: string]: unknown;
}

/** Comparative evaluation of a deal across multiple rulesets. */
export interface ComparativeEvaluationResponse {
  deal_id: number;
  evaluations: RulesetEvaluation[];
  best_fit: RulesetEvaluation | null;
  [key: string]: unknown;
}
