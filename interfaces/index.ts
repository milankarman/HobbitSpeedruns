export type RequestedRun = {
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
    players: any[];
    system: {
      platform: string;
      emulated: boolean;
      region: string | null;
    };
  };
};

export type RequestedPlatform = {
  id: string,
  name: string,
}

export type RequestedPlayer = {

}

export type ParsedRun = {
  place: number;
  id: string;
  username: string;
  date: string;
  weblink: string;
  realtime: number | null;
  realtime_noloads: number | null;
  platform: string;
  emulated: boolean;
}