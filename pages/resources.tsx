import Link from 'next/link'
import Layout from '../components/Layout'

const ResourcesPage = () => (
  <Layout title="Resources | HobbitSpeedruns" headerText="resources">
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default ResourcesPage
