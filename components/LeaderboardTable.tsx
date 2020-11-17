import * as React from 'react';
import _ from 'lodash';
import { ParsedRun } from '../interfaces';
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
  const milliseconds: string = _.padStart(Math.round((inputSeconds % 1) * 1000).toString(), 3, '0');

  return `${hours !== '0' ? `${hours}h` : ''} ${minutes}m ${seconds}s ${milliseconds}ms`;
};

const LeaderboardTable = ({ runs, compact, top = 0 }: Props): JSX.Element => (
  <table width="100%" className={`${styles.wrapper}`}>
    <tr className={`${styles.default}`}>
      <th></th>
      <th>Player</th>
      <th>Loadless Time</th>
      {!compact && <th>Realtime</th>}
      {!compact && <th>Date</th>}
    </tr>
    {runs.map((run, i) => {
      if (top > 0 && i > top - 1) {
        return;
      }

      let style: string;

      if (i < 1) {
        style = styles.gold;
      } else if (i < 3) {
        style = styles.silver;
      } else if (i < 5) {
        style = styles.bronze;
      } else {
        style = styles.default;
      }

      if (i % 2) {
        style = `${style} ${styles.alt}`;
      }

      return (
        <tr key={run.id} className={style}>
          <td>{run.place}</td>
          <td>{run.player}</td>
          <td>{formatTime(run.realtime_noloads || 0)}</td>
          {!compact && <td>{formatTime(run.realtime || 0)}</td>}
          {!compact && <td>{run.date}</td>}
        </tr>
      );
    })}
  </table>
);

export default LeaderboardTable;
