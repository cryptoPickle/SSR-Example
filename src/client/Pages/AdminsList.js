import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../Redux/actions';
import loadData from '../utils/loadData';
import requireAuth from '../components/hocs/requireAuth';

class AdminList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }
  renderAdmins(admins) {
    return admins.map((admin, index) => <li key={index}>{admin.name}</li>);
  }
  render() {
    return (
      <div>
        <h3>Protected List of admins</h3>
        <ul>
          {this.props.admins.info
            ? this.renderAdmins(this.props.admins.info)
            : null}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins };
};

export default {
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(requireAuth(AdminList)),
  load: loadData(fetchAdmins)
};
