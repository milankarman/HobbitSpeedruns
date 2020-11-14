import React from 'react';
import Link from 'next/link';

import { Run } from '../interfaces';

type Props = {
  data: Run;
};

const ListItem = ({ data }: Props): JSX.Element => (
  <Link href={data.run.weblink}>
    <a target="_blank">
      {data.place}: {data.run.weblink}
    </a>
  </Link>
);

export default ListItem;
