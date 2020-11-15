import { GetStaticProps } from 'next';
import axios from 'axios';

import { RequestedRun, ParsedRun, RequestedPlatform } from '../interfaces';
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

const parseRuns = (requestedRuns: RequestedRun[], platform: RequestedPlatform): ParsedRun[] => {
  const filteredRuns: RequestedRun[] = requestedRuns.filter(
    (item) => item.run.system.platform === platform.id
  );

  const parsedRuns: ParsedRun[] = filteredRuns.map((item: RequestedRun, i: number) => ({
    place: i + 1,
    id: item.run.id,
    username: 'Placeholder user',
    date: item.run.date,
    weblink: item.run.weblink,
    realtime: item.run.times.realtime_t,
    realtime_noloads: item.run.times.realtime_noloads_t,
    platform: platform.name,
    emulated: item.run.system.emulated,
  }));

  return parsedRuns;
};

export const getStaticProps: GetStaticProps = async () => {
  const response: any = await axios.get(
    'http://speedrun.com/api/v1/leaderboards/Hobbit/category/No_Major_Glitches?embed=platforms'
  );
  const { data } = response.data;

  const requestedRuns: RequestedRun[] = data.runs;
  const gamecubePlatform: RequestedPlatform = data.platforms.data.find((platform: RequestedPlatform) => platform.name === 'GameCube');
  const pcPlatform: RequestedPlatform = data.platforms.data.find((platform: RequestedPlatform) => platform.name === 'PC');

  const gamecubeRuns = parseRuns(requestedRuns, gamecubePlatform);
  const pcRuns = parseRuns(requestedRuns, pcPlatform);

  return {
    props: { gamecubeRuns, pcRuns },
    revalidate: 300,
  };
};

export default Leaderboard;
