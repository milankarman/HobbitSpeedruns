import Link from 'next/link';
import Layout from '../components/Layout';
import { guides } from '../data/guides.json';

const GuidesPage = (): JSX.Element => (
  <Layout title="Guides | HobbitSpeedruns" headerText="guides">
    <p>{guides.map((item) => item.name)}</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default GuidesPage;
