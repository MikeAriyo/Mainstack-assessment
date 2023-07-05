export interface LinkProps {
  icon: string;
  title: string;
  href: string;
}

export interface initialStateType {
  labels: string[];
  data: string[];
}

export type keys =
  | "1day"
  | "2days"
  | "7days"
  | "30days"
  | "allTime"
  | "payload";

export type resultType = {
  graph_data: any;
  top_locations: any[];
  top_sources: any[];
};
