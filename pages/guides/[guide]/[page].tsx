import { GetStaticPaths, GetStaticProps } from 'next';
import { Context } from 'vm';
import ReactMarkdown from 'react-markdown'

import Layout from '../../../components/Layout';
import { getAllGuidePaths, getGuideData } from '../../../lib/guides';

type Props = {
  guideData: string;
};

const Guide = ({ guideData }: Props): JSX.Element => {
  return (
    <Layout title="Guides | HobbitSpeedruns" headerText="guides">
      <ReactMarkdown>{guideData}</ReactMarkdown>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = getAllGuidePaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Context) => {
  const guideData = getGuideData(params.guide, params.page);

  return {
    props: {
      guideData: guideData,
    },
  };
};

export default Guide;
