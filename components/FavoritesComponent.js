import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        sites: state.sites,
        favorites: state.favorites
    };
};

class Favorites extends Component {

    static navigationOptions = {
        title: 'My Favorites'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderFavoriteItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                    onPress={() => navigate('SiteInfo', {siteId: item.id})}
                />
            );
        };

        if (this.props.sites.isLoading) {
            return <Loading />;
        }
        if (this.props.sites.errMess) {
            return (
                <View>
                    <Text>{this.props.sites.errMess}</Text>
                </View>
            );
        }
        return (
            <FlatList
                data={this.props.sites.sites.filter(
                    site => this.props.favorites.includes(site.id)
                )}
                renderItem={renderFavoriteItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Favorites);