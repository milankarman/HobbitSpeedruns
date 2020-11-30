import { GetStaticProps } from 'next';
import { requestRuns } from '../lib/runs';
import { ParsedRun } from '../interfaces/leaderboard';

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
        <Col xl={6} lg={12} className="pr-2 mb-3 overflow-auto">
          <h4 className="text-center">GameCube Any% NMG</h4>
          <LeaderboardTable runs={gamecubeRuns} />
        </Col>
        <Col xl={6} lg={12} className="pl-2 mb-3 overflow-auto">
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
  const [gamecubeRuns, pcRuns] = await requestRuns();

  return {
    props: { gamecubeRuns, pcRuns },
    revalidate: 300,
  };
};

export default Leaderboard;
