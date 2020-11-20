export type GuidePreview = {
  title: string;
  browserTitle: string;
  description: string;
  icon: string;
  path: string;
  entry: string;
  order: number;
};

export type GuideData = {
  content: string;
  title: string;
  browserTitle: string;
  header: string;
  icon: string;
  path: string;
  entry: string;
  order: number;
  pages: GuidePagePreview[];
};

export type GuidePagePreview = {
  header: string;
  order: number;
  guidePath: string;
};
