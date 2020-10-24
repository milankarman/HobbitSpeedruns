import Layout from '../components/Layout'
import { Row, Col } from 'react-bootstrap';

const IndexPage = () => (
  <Layout title="Home | HobbitSpeedruns" headerText="hobbitspeedruns">
    <Row>
      <Col>
        <h2> Welcome to HobbitSpeedruns</h2>
        <p>
          This website is home to information and resources about speedrunning the game "The Hobbit".
          Which was released on PC, GameCube, PS2 and XBox in 2004 by Sierra Entertainment.
          Compiled by its speedrunning community.
        </p>
        <p>
          On here you will find guides for the speedrunning routes of the different platforms the game is on as well as links to community resources.
          This website was made with the hope of providing an accessible and central place one can come to find anything they might want to know when they are interesting in
          The Hobbit speedrunning.
        </p>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
