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
  const folders: string[] = fs.readdirSync(guidesDirectory);
  const allPaths: string[] = [];

  folders.forEach((folder) => {
    const paths = fs
      .readdirSync(path.join(guidesDirectory, folder))
      .filter((path) => path.endsWith('index.json'))
      .map((item) => `/guides/${folder}/${item}`);

    allPaths.push(...paths);
  });

  const previews: GuidePreview[] = allPaths.map((previewPath) => {
    const fullPath = path.join(process.cwd(), previewPath);
    const preview = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));

    return { ...preview, path: previewPath.replace('/index.json', '') };
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
