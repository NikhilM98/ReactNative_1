import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListUser from './ListUser';

class UserList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.users);
    }

    renderRow(user) {
        return <ListUser details={user} />;
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

}

const mapStateToProps = state => {
    return { users: state.users };
};

export default connect(mapStateToProps)(UserList);
