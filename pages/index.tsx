import { GetStaticProps } from 'next';
import { Row, Col } from 'react-bootstrap';
import { requestRuns } from '../lib/runs';
import { ParsedRun } from '../interfaces/leaderboard';
import ReactPlayer from 'react-player';

import Layout from '../components/Layout';
import LeaderboardTable from '../components/LeaderboardTable';

type Props = {
  gamecubeRuns: ParsedRun[];
  pcRuns: ParsedRun[];
};

const IndexPage = ({ gamecubeRuns, pcRuns }: Props): JSX.Element => (
  <Layout title="Home | HobbitSpeedruns" headerText="hobbitspeedruns">
    <Row>
      <Col className="mb-3">
        <h2>Welcome to HobbitSpeedruns</h2>
        <p>
          This website is home to information and resources about speedrunning the game &quot;The Hobbit&quot;. Which
          was released on PC, GameCube, PS2 and XBox in 2003 by Sierra Entertainment.
        </p>
        <p>
          On here you will find guides for the speedrunning routes of the different platforms the game is on as well as
          links to community resources. This website was made with the hope of providing an accessible and central place
          one can come to find anything they might want to know when they are interesting in The Hobbit speedrunning.
          Though this site does feature a leaderboard, for more complete leaderboards one should go to <a href="https://www.speedrun.com/hobbit"> speedrun.com. </a>
        </p>
        <p>
          We have a relatively small but welcoming community so feel free to join us on
          <a href="https://discord.gg/uHRANWgUYZ"> discord </a>
          and ask us anything about the game or just come and chat.
        </p>
        <p>Below is a long form documentary showcasing the game's rich speedrunning history.</p>
        <ReactPlayer controls={true} width="100%" url="https://www.youtube.com/watch?v=WJndaDpohSY" />
      </Col>
      <Col xl={4} lg={12}>
        <Row className="mb-3">
          <Col xl={12} md={6} className="mb-3">
            <h5>Top GameCube Times</h5>
            <LeaderboardTable runs={gamecubeRuns} compact={true} top={5} />
          </Col>
          <Col xl={12} md={6}>
            <h5>Top PC Times</h5>
            <LeaderboardTable runs={pcRuns} compact={true} top={5} />
          </Col>
        </Row>
      </Col>
    </Row>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const [gamecubeRuns, pcRuns] = await requestRuns();

  return {
    props: { gamecubeRuns, pcRuns },
    revalidate: 300,
  };
};

export default IndexPage;
