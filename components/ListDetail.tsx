import * as React from 'react'

import { Run } from '../interfaces'

type ListDetailProps = {
  item: Run
}

const ListDetail = ({ item: run }: ListDetailProps) => (
  <div>
    <h1>Detail for {run.place}</h1>
    <p>ID: {run.run.id}</p>
  </div>
)

export default ListDetail
