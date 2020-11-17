import { GetStaticProps } from 'next';
import axios from 'axios';

import { ReqRun, ParsedRun, ReqPlatform, ReqPlayer } from '../interfaces';

import Layout from '../components/Layout';
import LeaderboardTable from '../components/LeaderboardTable';
import { Row, Col } from 'react-bootstrap';

type Props = {
  gamecubeRuns: ParsedRun[];
  pcRuns: ParsedRun[];
};

const Leaderboard = ({ gamecubeRuns, pcRuns }: Props): JSX.Element => {
  return (
    <Layout title="Leaderboard | HobbitSpeedruns" headerText="leaderboard">
      <Row>
        <Col xs={12}>
          <h3>GameCube:</h3>
        </Col>
        <Col xs={12}>
          <LeaderboardTable runs={gamecubeRuns} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>PC:</h3>
        </Col>
        <Col xs={12}>
          <LeaderboardTable runs={pcRuns} />
        </Col>
      </Row>
    </Layout>
  );
};

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

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any = await axios.get(
    'http://speedrun.com/api/v1/leaderboards/Hobbit/category/No_Major_Glitches?embed=platforms,players'
  );
  const { data } = response.data;

  const requestedRuns: ReqRun[] = data.runs;
  const requestedEmbedPlayers: ReqPlayer[] = data.players.data;

  const gamecubePlatform: ReqPlatform = data.platforms.data.find(
    (platform: ReqPlatform) => platform.name === 'GameCube'
  );
  const pcPlatform: ReqPlatform = data.platforms.data.find((platform: ReqPlatform) => platform.name === 'PC');

  const gamecubeRuns = parseRuns(requestedRuns, gamecubePlatform, requestedEmbedPlayers);
  const pcRuns = parseRuns(requestedRuns, pcPlatform, requestedEmbedPlayers);

  return {
    props: { gamecubeRuns, pcRuns },
    revalidate: 300,
  };
};

export default Leaderboard;
