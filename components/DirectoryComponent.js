import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        sites: state.sites
    };
};

class Directory extends Component {

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('SiteInfo', { siteId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.sites.sites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Directory);