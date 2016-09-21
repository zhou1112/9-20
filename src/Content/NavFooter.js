import React, { PropTypes } from 'react'
import { Link } from 'react-router'
class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
          <Link to="/" activeStyle={{color:'#9575CD'}} onlyActiveOnIndex={true} className="glyphicon glyphicon-home"><span>Home</span></Link>
          <Link to="/work" activeStyle={{color:'#9575CD'}} className="glyphicon glyphicon-fire"><span>Work</span></Link>
          <Link to="/blog" activeStyle={{color:'#9575CD'}} className="glyphicon glyphicon-eye-open"><span>Blog</span></Link>
          <Link to="/about" activeStyle={{color:'#9575CD'}} className="glyphicon glyphicon-user"><span>About</span></Link>

      </div>
    )
  }
}

export default NavFooter;
