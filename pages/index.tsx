import Layout from '../components/Layout';
import { Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const IndexPage = (): JSX.Element => (
  <Layout title="Home | HobbitSpeedruns" headerText="hobbitspeedruns">
    <Row>
      <Col>
        <h2>Welcome to HobbitSpeedruns</h2>
        <p>
          This website is home to information and resources about speedrunning the game &quot;The
          Hobbit&quot;. Which was released on PC, GameCube, PS2 and XBox in 2004 by Sierra
          Entertainment. Compiled by its speedrunning community.
        </p>
        <p>
          On here you will find guides for the speedrunning routes of the different platforms the
          game is on as well as links to community resources. This website was made with the hope of
          providing an accessible and central place one can come to find anything they might want to
          know when they are interesting in The Hobbit speedrunning.
        </p>
        <p>
          We have a relatively small but welcoming community so feel free to join us on
          <a className="color-orange" href="https://discord.com/invite/NczEMxt">
            {' '}
            discord{' '}
          </a>
          and ask us anything about the game or just come and chat.
        </p>
        <p>
          Below is a video by Chrix showcasing some of the tricks and skips you might see in a
          Hobbit speedrun.
        </p>
        <ReactPlayer controls={true} url="https://youtu.be/_ucQT93Y_ZA?t=25" />
      </Col>
      <Col xs="4">
        <Row className="pl-2">
          <Col>
            <Row>
              <h5>Top Console Times</h5>
            </Row>
            <Row>
              <p>Small leaderboard goes here.</p>
            </Row>
          </Col>
        </Row>
        <Row className="pl-2">
          <Col>
            <Row>
              <h5>Top PC Times</h5>
            </Row>
            <Row>
              <p>Small leaderboard goes here.</p>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
