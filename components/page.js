import { connect } from 'react-redux'

import Counter from './counter'

function Page({
  title,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <Counter />
    </div>
  )
}

export default connect(state => state)(Page)
