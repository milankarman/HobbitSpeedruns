import { GetStaticProps } from 'next'

import { Run } from '../interfaces'
import { sampleUserData } from '../utils/sample-data'
import Layout from '../components/Layout'
import List from '../components/List'

type Props = {
  items: Run[]
}

const Leaderboard = ({ items }: Props) => (
  <Layout title="Users List | HobbitSpeedruns" headerText="leaderboard">
    <List items={items} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Run[] = sampleUserData.map((item, i) => ({ ...item, id: i }));
  return { props: { items } }
}

export default Leaderboard
