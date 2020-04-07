export interface Query {
  data: Data;
}

export interface Rows {
  0: string;
  1: string;
  2: boolean;
  3: string;
  4: string;
  5: string;
  6: number;
  7: string;
  8: boolean;
  9: string;
  10: number;
  11: string;
  12: number;
  13: string;
  14: string;
  15: string;
}

export interface Data {
  rows: Array<Rows>;
}
