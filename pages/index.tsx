import { GetStaticProps } from 'next';
import { Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import axios from 'axios';

import Layout from '../components/Layout';
import LeaderboardTable from '../components/LeaderboardTable';
import { ReqRun, ParsedRun, ReqPlatform, ReqPlayer } from '../interfaces/leaderboard';
import { parseRuns } from '../lib/runs';

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
          was released on PC, GameCube, PS2 and XBox in 2004 by Sierra Entertainment.
        </p>
        <p>
          On here you will find guides for the speedrunning routes of the different platforms the game is on as well as
          links to community resources. This website was made with the hope of providing an accessible and central place
          one can come to find anything they might want to know when they are interesting in The Hobbit speedrunning.
          Though this site does feature a leaderboard, for more complete leaderboards one should go to <a href="https://www.speedrun.com/hobbit"> speedrun.com. </a>
        </p>
        <p>
          We have a relatively small but welcoming community so feel free to join us on
          <a href="https://discord.com/invite/NczEMxt"> discord </a>
          and ask us anything about the game or just come and chat.
        </p>
        <p>Below is a video by Chrix showcasing some of the tricks and skips you might see in a Hobbit speedrun.</p>
        <ReactPlayer controls={true} width="100%" url="https://youtu.be/_ucQT93Y_ZA?t=25" />
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

export default IndexPage;
