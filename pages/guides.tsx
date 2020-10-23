import Link from 'next/link'
import Layout from '../components/Layout'
import { guides } from '../data/guides.json';

const AboutPage = () => (
  <Layout title="Guides | HobbitSpeedruns">
    <h1>Guides</h1>
    <p>{guides.map((item) => item.name)}</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
