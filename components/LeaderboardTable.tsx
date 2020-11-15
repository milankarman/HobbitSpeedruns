import * as React from 'react';
import { ParsedRun } from '../interfaces';

type Props = {
  runs: ParsedRun[];
};

const LeaderboardTable = ({ runs }: Props): JSX.Element => (
  <table width="100%">
    {runs.map((run) => (
      <tr key={run.id}>
        <th>{run.place}</th>
        <th>{run.username}</th>
        <th>{run.realtime}</th>
        <th>{run.realtime_noloads}</th>
        <th>{run.date}</th>
      </tr>
    ))}
  </table>
);

export default LeaderboardTable;
