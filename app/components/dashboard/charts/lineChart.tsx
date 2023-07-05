import {
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { initialStateType } from "../../../types";

let initialState = {
  labels: [],
  data: [],
} as initialStateType;
