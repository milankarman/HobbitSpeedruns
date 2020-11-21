import * as React from 'react';
import _ from 'lodash';
import { ParsedRun } from '../interfaces/leaderboard';
import styles from './LeaderboardTable.module.scss';

type Props = {
  runs: ParsedRun[];
  compact?: boolean;
  top?: number;
};

const formatTime = (inputSeconds: number): string => {
  if (inputSeconds === 0) {
    return 'Unknown';
  }

  const hours: string = Math.floor(inputSeconds / 3600).toString();
  const minutes: string = _.padStart(Math.floor((inputSeconds % 3600) / 60).toString(), 2, '0');
  const seconds: string = _.padStart(Math.floor(inputSeconds % 60).toString(), 2, '0');

  return `${hours !== '0' ? `${hours}h` : ''} ${minutes}m ${seconds}s`;
};

const LeaderboardTable = ({ runs, compact, top = 0 }: Props): JSX.Element => (
  <table width="100%" className={`${styles['leaderboard-table']}`}>
    <thead>
      <tr className={`${styles.default}`}>
        <th></th>
        <th>Player</th>
        <th>Loadless Time</th>
        {!compact && <th>Realtime</th>}
        {!compact && <th>Date</th>}
      </tr>
    </thead>
    <tbody>
      {runs.map((run, i) => {
        if (top > 0 && i > top - 1) {
          return;
        }

        let style: string;

        if (i < 1) {
          style = styles.gold;
        } else if (i < 2) {
          style = styles.silver;
        } else if (i < 3) {
          style = styles.bronze;
        } else {
          style = styles.default;
        }

        if (i % 2) {
          style = `${style} ${styles.alt}`;
        }

        return (
          <tr key={run.id} className={style}>
            <td>
              <a href={run.weblink} target="_blank" rel="noreferrer">{run.place}</a>
            </td>
            <td>
              <a href={run.weblink} target="_blank" rel="noreferrer">{run.player}</a>
            </td>
            <td>
              <a href={run.weblink} target="_blank" rel="noreferrer">{formatTime(run.realtime_noloads || 0)}</a>
            </td>
            {!compact && (
              <td>
                <a href={run.weblink} target="_blank" rel="noreferrer">{formatTime(run.realtime || 0)}</a>
              </td>
            )}
            {!compact && (
              <td>
                <a href={run.weblink} target="_blank" rel="noreferrer">{run.date}</a>
              </td>
            )}
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default LeaderboardTable;
