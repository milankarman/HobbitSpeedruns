import { GetStaticProps } from 'next';
import axios from 'axios';

import { Run } from '../interfaces';
import Layout from '../components/Layout';
import List from '../components/List';

type Props = {
  items: Run[]
}

const Leaderboard = ({ items }: Props) => (
  <Layout title="Users List | HobbitSpeedruns" headerText="leaderboard">
    <List items={items} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const response: any = await axios.get("http://speedrun.com/api/v1/leaderboards/Hobbit/category/No_Major_Glitches?platform=4p9z06rn");
  const items: Run[] = response.data.data.runs.map((item: Run, i: number) => ({ ...item, id: i }));
  return {
    props: { items },
    revalidate: 300,
  };
}

export default Leaderboard
