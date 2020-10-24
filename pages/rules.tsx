import Link from 'next/link'
import Layout from '../components/Layout'

const RulesPage = () => (
  <Layout title="Rules | HobbitSpeedruns" headerText="rules">
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default RulesPage
