import { GetStaticProps } from 'next';
import Link from 'next/link';

import { getGuidesPreviews } from '../lib/guides';
import { GuidePreview } from '../interfaces';
import Layout from '../components/Layout';

type Props = {
  previews: GuidePreview[];
};

const GuidesPage = ({ previews }: Props): JSX.Element => {
  return (
    <Layout title="Guides | HobbitSpeedruns" headerText="guides">
      <ul>
        {previews.map((guide: GuidePreview, i: number) => {
          return (
            <li key={i}>
              <Link href={guide.uri}>
                <a>{guide.title}</a>
              </Link>
              <p>{guide.description}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const previews: GuidePreview[] = getGuidesPreviews();
  return { props: { previews } };
};

export default GuidesPage;
