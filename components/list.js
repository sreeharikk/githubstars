import { connect } from 'react-redux'

function List({
  users,
}) {
  return (
    <ul>
      {users && users.map( user =>
        <li key={user.id}>
        <img src={user.avatar_url} title={user.login}/>
        <div className="right">
          <span>
            <a target="_blank" href={user.html_url}>{user.login}</a>
            {user.profile.name}
          </span>
          <span>{user.profile.bio}</span>
          <span>{user.profile.location}</span>
          <span>{user.profile.email}</span>
        </div>      
      </li>)}
    </ul>
  )
}

export default connect(state => state)(List)
