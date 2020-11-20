import { GetStaticProps } from 'next';
import axios from 'axios';

import { ReqRun, ParsedRun, ReqPlatform, ReqPlayer } from '../interfaces';
import { parseRuns } from '../lib/runs';

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
        <Col xl={6} lg={12} className="pr-2 mb-3">
          <h4 className="text-center">GameCube Any% NMG</h4>
          <LeaderboardTable runs={gamecubeRuns} />
        </Col>
        <Col xl={6} lg={12} className="pl-2 mb-3">
          <h4 className="text-center">PC Any% NMG</h4>
          <LeaderboardTable runs={pcRuns} />
        </Col>
        <Col xs={12}>
          <a className="mb-0" href="https://www.speedrun.com/hobbit" target="_blank" rel="noreferrer">Leaderboard data taken from speedrun.com</a>
        </Col>
      </Row>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any = await axios.get(
    'http://speedrun.com/api/v1/leaderboards/Hobbit/category/No_Major_Glitches?embed=platforms,players&timing=realtime_noloads'
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
