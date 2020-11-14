import { GetStaticProps } from 'next';
import axios from 'axios';

import { Run } from '../interfaces';
import Layout from '../components/Layout';
import List from '../components/List';
import { Row, Col } from 'react-bootstrap';

type Props = {
  runs: Run[];
  platforms: any[];
};

const Leaderboard = ({ runs, platforms }: Props): JSX.Element => {
  const gamecubePlatform: any = platforms.find((platform) => platform.name === 'GameCube');
  const gamecubeRuns: Run[] = runs.filter((run) => run.run.system.platform === gamecubePlatform.id);

  const pcPlatform: any = platforms.find((platform) => platform.name === 'PC');
  const pcRuns: Run[] = runs.filter((run) => run.run.system.platform === pcPlatform.id);

  return (
    <Layout title="Leaderboard | HobbitSpeedruns" headerText="leaderboard">
      <Row>
        <Col xs={12}>
          <h3>GameCube:</h3>
        </Col>
        <Col xs={12}>
          <List items={gamecubeRuns} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>PC:</h3>
        </Col>
        <Col xs={12}>
          <List items={pcRuns} />
        </Col>
      </Row>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response: any = await axios.get(
    'http://speedrun.com/api/v1/leaderboards/Hobbit/category/No_Major_Glitches?embed=platforms'
  );
  const { data } = response.data;

  const runs: Run[] = data.runs.map((item: Run) => ({
    ...item,
    id: item.run.id,
  }));

  const platforms: any[] = data.platforms.data;

  return {
    props: { runs, platforms },
    revalidate: 300,
  };
};

export default Leaderboard;
