import { connect } from 'react-redux'

function ListItem({
  user,
}) {
  console.log(user)
  return (
    <li key={user.id}>
      <img src={user.avatar_url} title={user.login}/>
      <span>{user.login}</span>
    </li>
  )
}

export default connect(state => state)(ListItem)
