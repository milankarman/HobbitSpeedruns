import { GetStaticPaths, GetStaticProps } from 'next';
import { Context } from 'vm';
import ReactMarkdown from 'react-markdown'

import Layout from '../../../components/Layout';
import { getAllGuidePaths, getGuideData } from '../../../lib/guides';
import { GuideData } from '../../../interfaces'; 

type Props = {
  data: GuideData;
};

const Guide = ({ data }: Props): JSX.Element => {
  return (
    <Layout title={`${data.browserTitle} - ${data.header} | HobbitSpeedruns`} headerText={data.header.toLowerCase()}>
      <ReactMarkdown>{data.content}</ReactMarkdown>
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
  const data: GuideData = getGuideData(params.guide, params.page);
  return { props: { data } };
};

export default Guide;
