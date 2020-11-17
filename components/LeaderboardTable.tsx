import * as React from 'react';
import _ from 'lodash';
import { ParsedRun } from '../interfaces';

type Props = {
  runs: ParsedRun[];
};

const formatTime = (inputSeconds: number): string => {
  const hours: string = Math.floor(inputSeconds / 3600).toString();
  const minutes: string = _.padStart(Math.floor((inputSeconds % 3600) / 60).toString(), 2, '0');
  const seconds: string = _.padStart(Math.floor(inputSeconds % 60).toString(), 2, '0');
  const milliseconds: string = _.padStart(Math.round((inputSeconds % 1) * 1000).toString(), 3, '0');

  return `${hours !== "0" ? `${hours}h` : ''} ${minutes}m ${seconds}s ${milliseconds}ms`;
};

const LeaderboardTable = ({ runs }: Props): JSX.Element => (
  <table width="100%">
    <tr>
      <th></th>
      <th>Player</th>
      <th>Time without loads</th>
      <th>Time with loads</th>
      <th>Date</th>
    </tr>
    {runs.map((run) => (
      <tr key={run.id}>
        <td>{run.place}</td>
        <td>{run.player}</td>
        <td>{formatTime(run.realtime_noloads || 0)}</td>
        <td>{formatTime(run.realtime || 0)}</td>
        <td>{run.date}</td>
      </tr>
    ))}
  </table>
);

export default LeaderboardTable;
