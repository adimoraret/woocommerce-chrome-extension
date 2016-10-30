import React, {PropTypes} from 'react';

class Layout extends React.Component {
  render() {
    return (
        <div className="content">
            {this.props.children}
        </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;