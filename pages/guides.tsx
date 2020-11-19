import { GetStaticProps } from 'next';
import Link from 'next/link';
import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';

import Layout from '../components/Layout';
import { getAllGuidePaths } from '../lib/guides';

type Props = {
  data: any[];
};

const GuidesPage = ({ data }: Props): JSX.Element => {
  return (
    <Layout title="Guides | HobbitSpeedruns" headerText="guides">
      <ul>
        {data.map((guide: any, i: number) => {
          const { data } = matter(guide);

          return (
            <li key={i}>
              <Link href={guide.uri}>
                <a>{data.title}</a>
              </Link>
              <p>{data.description}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const guides: string[] = getAllGuidePaths().filter((path: string) => path.endsWith('index'));

  const data: any[] = guides.map((guide) => {
    const guideFullPath = path.join(process.cwd(), guide);
    const content = fs.readFileSync(`${guideFullPath}.md`, 'utf-8');

    return { content, uri: guide };
  });

  return { props: { data } };
};

export default GuidesPage;
