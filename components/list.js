import { connect } from 'react-redux'

import ListItem from './listItem'

function List({
  users,
}) {
  return (
    <ul>
      {users && users.map( user =>
      <ListItem user={user}/>)}
    </ul>
  )
}

export default connect(state => state)(List)
