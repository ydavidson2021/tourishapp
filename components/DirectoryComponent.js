import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SITES } from '../shared/sites';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sites: SITES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('SiteInfo', { siteId: item.id })}
                    leftAvatar={{ source: require('./images/britmuseum.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.sites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;