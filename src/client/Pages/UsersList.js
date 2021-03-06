import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../Redux/actions';
import loadData from '../utils/loadData';
import { Helmet } from 'react-helmet';
import Head from '../components/Head';
class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <Head title={`${this.props.users.length} user loaded`} />
        Here's is the list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: users.userList
  };
};

export default {
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UserList),
  load: loadData(fetchUsers)
};
