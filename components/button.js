import { connect } from 'react-redux'
import { Button, Spinner } from 'react-bootstrap';

function Bttn({
  label,
  loading,
  onClick
}) {
  return (
    <Button variant="primary" onClick={onClick}>
      {loading && <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />}
      {label}
    </Button>
  )
}

export default connect(state => state)(Bttn)
