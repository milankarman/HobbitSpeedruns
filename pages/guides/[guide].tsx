import { GetStaticPaths } from 'next';
import Layout from '../../components/Layout';
import { getAllGuideURIs, getGuideData } from '../../lib/guides';
import { GetStaticProps } from 'next';
import { Context } from 'vm';
import ReactMarkdown from 'react-markdown'

type Props = {
  guideData: any;
};

const Guide = ({ guideData }: Props): JSX.Element => {
  return (
    <Layout title="Guides | HobbitSpeedruns" headerText="guides">
      <ReactMarkdown>{guideData.content}</ReactMarkdown>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = getAllGuideURIs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Context) => {
  const guideData = getGuideData(params.guide);
  return {
    props: {
      guideData: guideData,
    },
  };
};

export default Guide;
