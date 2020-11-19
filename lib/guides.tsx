import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { GuidePreview } from '../interfaces';

const guidesDirectory = path.join(process.cwd(), 'guides');

export const getGuideData = (guide: string, page: string): string => {
  const fullPath = path.join(guidesDirectory, guide, `${page}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return matter(fileContents).content;
};

export const getGuidesPreviews = (): GuidePreview[] => {
  const guides: string[] = getAllGuidePaths().filter((path: string) => path.endsWith('index'));

  const previews: GuidePreview[] = guides.map((guidePath) => {
    const guideFullPath = path.join(process.cwd(), guidePath);
    const content = fs.readFileSync(`${guideFullPath}.md`, 'utf-8');
    const { title, description } = matter(content).data;

    return { title, description, uri: guidePath };
  });

  return previews;
};

export const getAllGuidePaths = (): string[] => {
  const folders: string[] = fs.readdirSync(guidesDirectory);
  const allPaths: string[] = [];

  folders.forEach((folder) => {
    const paths = fs
      .readdirSync(path.join(guidesDirectory, folder))
      .map((item) => `/guides/${folder}/${item.replace('.md', '')}`);

    allPaths.push(...paths);
  });

  return allPaths;
};
