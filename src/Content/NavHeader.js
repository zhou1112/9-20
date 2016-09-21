import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
    return(
        <div className="nav-header">
          <span className="glyphicon glyphicon-chevron-left">Back</span>
            <h3>zhouzhou's Corner</h3>
            <span className="glyphicon glyphicon-hand-up"></span>
        </div>
    )
  }
}

export default NavHeader;
