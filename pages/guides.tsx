import { GetStaticProps } from 'next';
import Link from 'next/link';
import matter from 'gray-matter';
import fs from 'fs';

import Layout from '../components/Layout';

type Props = {
  data: string[];
};

const GuidesPage = ({ data }: Props): JSX.Element => {
  const guides = data.map((guide: string) => matter(guide));

  return (
    <Layout title="Guides | HobbitSpeedruns" headerText="guides">
      <ul>
        {guides.map((guide, i: number) => (
          <li key={i}>
            <Link href={`/guides/${guide.data.uri}`}>
              <a>{guide.data.title}</a>
            </Link>
            <p>{guide.data.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files: string[] = fs.readdirSync(`${process.cwd()}/guides`, 'utf-8');
  const guides: string[] = files.filter((fn) => fn.endsWith('.md'));

  const data: string[] = guides.map((guide) => {
    const path = `${process.cwd()}/guides/${guide}`;
    const rawContent = fs.readFileSync(path, { encoding: 'utf-8' });

    return rawContent;
  });

  return { props: { data } };
};

export default GuidesPage;
