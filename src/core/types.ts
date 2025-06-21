export interface Problem {
  id: string;
  solution: Function;
}

export interface TestCase {
  description: string;
  input: any[];
  expected: any;
}

export interface TestResult {
  passed: boolean;
  executionTime: number;
  error?: string;
  description: string;
}
