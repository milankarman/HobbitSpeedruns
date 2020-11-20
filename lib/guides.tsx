import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { GuidePreview, GuideData, GuidePagePreview } from '../interfaces';

const guidesDirectory = path.join(process.cwd(), 'data/guides');

export const getGuideData = (guide: string, page: string): GuideData => {
  const markdownPath = path.join(guidesDirectory, guide, `${page}.md`);
  const indexPath = path.join(guidesDirectory, guide, 'index.json');

  const markdown = matter(fs.readFileSync(markdownPath, 'utf8'));
  const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

  const pages: GuidePagePreview[] = fs
    .readdirSync(path.join(guidesDirectory, guide))
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const guideFilePath: string = path.join(guidesDirectory, guide, fileName);
      const { data } = matter(fs.readFileSync(guideFilePath, 'utf8'));

      return { header: data.header, order: data.order, guidePath: `${guide}/${fileName}` };
    });

  pages.sort((a: GuidePagePreview, b: GuidePagePreview) => a.order - b.order);

  return { content: markdown.content, ...markdown.data, ...index, pages };
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
    const fullPath = path.join(process.cwd(), 'data' ,previewPath);
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
