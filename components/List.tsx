import * as React from 'react'
import ListItem from './ListItem'
import { Run } from '../interfaces'

type Props = {
  items: Run[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.place}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
