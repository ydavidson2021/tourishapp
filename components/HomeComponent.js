import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        sites: state.sites,
        zoos: state.zoos,
        parks: state.parks
    };
};


function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}>
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {
    
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.props.sites.sites.filter(site => site.featured)[0]}
                />
                <RenderItem
                    item={this.props.zoos.zoos.filter(zoo => zoo.featured)[0]}
                />
                <RenderItem
                    item={this.props.parks.parks.filter(park => park.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);