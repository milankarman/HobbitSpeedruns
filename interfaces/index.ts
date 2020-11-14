export type Run = {
  place: number;
  run: {
    id: string;
    weblink: string;
    category: string;
    comment: string | null;
    date: string;
    submitted: string;
    times: {
      primary: string | null;
      primary_t: number | null;
      realtime: string | null;
      realtime_t: number | null;
      realtime_noloads: string | null;
      realtime_noloads_t: number | null;
      ingame: string | null;
      ingame_t: number | null;
    };
    system: {
      platform: string;
      emulated: boolean;
      region: string | null;
    };
  };
};
