export interface UsDaily {
  data: DailyData[];
}

export interface DailyData {
  cases: { total: { value: number; }; };
  date: string;
  outcomes: Outcomes;
  testing: { total: { value: number; }; };
}

export interface Outcomes {
  death: { total: { value: number; }; };
  hospitalized: { currently: { value: number }; };
}

