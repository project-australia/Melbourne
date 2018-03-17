import PropTypes from 'prop-types'

const If = ({ children, test }) => (test ? children : false)

If.propTypes = {
  test: PropTypes.bool.isRequired
}

export default If
