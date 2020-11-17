import { ReqRun, ParsedRun, ReqPlatform, ReqPlayer } from '../interfaces';

const parseRuns = (requestedRuns: ReqRun[], platform: ReqPlatform, players: ReqPlayer[]): ParsedRun[] => {
  const filteredRuns: ReqRun[] = requestedRuns.filter((item) => item.run.system.platform === platform.id);

  const parsedRuns: ParsedRun[] = filteredRuns.map((item: ReqRun, i: number) => {
    let player;

    if (item.run.players[0]?.rel == 'user') {
      player = players.find((player) => player.id === item.run.players[0].id)?.names.international;
    } else if (item.run.players[0]?.rel == 'guest') {
      player = item.run.players[0].name;
    }

    return {
      place: i + 1,
      id: item.run.id,
      player,
      date: item.run.date,
      weblink: item.run.weblink,
      realtime: item.run.times.realtime_t || 0,
      realtime_noloads: item.run.times.realtime_noloads_t || 0,
      platform: platform.name,
      emulated: item.run.system.emulated,
    };
  });

  parsedRuns.sort((a, b) => {
    return a.place - b.place;
  });

  return parsedRuns;
};

export { parseRuns };