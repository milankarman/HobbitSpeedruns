export type ReqRun = {
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
    players: RunPlayer[];
    system: {
      platform: string;
      emulated: boolean;
      region: string | null;
    };
  };
};

export type RunPlayer = {
  rel: string;
  id: string;
  name: string | undefined;
};

export type ReqPlatform = {
  id: string;
  name: string;
};

export type ReqPlayer = {
  rel: string;
  id: string;
  names: {
    international: string;
  };
  weblink: string,
};

export type ParsedRun = {
  place: number;
  id: string;
  player: string | undefined;
  date: string;
  weblink: string;
  realtime: number;
  realtime_noloads: number;
  platform: string;
  emulated: boolean;
};
