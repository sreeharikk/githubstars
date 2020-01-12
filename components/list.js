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
            {user.profile ? user.profile.name:''}
          </span>
          <span>{user.profile ? user.profile.bio:''}</span>
          <span><i class="fa fa-map-marker" aria-hidden="true"></i>
                {user.profile ? user.profile.location:''}</span>
          <span><i class="fa fa-inbox" aria-hidden="true"></i>
          {user.profile ? user.profile.email:''}</span>
        </div>      
      </li>)}
    </ul>
  )
}

export default connect(state => state)(List)
