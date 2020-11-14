import Link from 'next/link'
import { ReactNode } from 'react'
import Layout from '../components/Layout'

const ResourcesPage = () : ReactNode => (
  <Layout title="Resources | HobbitSpeedruns" headerText="resources">
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default ResourcesPage
