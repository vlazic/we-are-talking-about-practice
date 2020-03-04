export interface IWakatimeDurations {
  branches: string[];
  data: {
    created_at: string;
    cursorpos: any;
    duration: number;
    id: string;
    lineno: any;
    machine_name_id: string;
    project: string;
    time: number;
    user_id: string;
  }[];
  end: string;
  start: string;
  timezone: string;
}
