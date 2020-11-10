import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        sites: state.sites,
        zoos: state.zoos,
        parks: state.parks
    };
};


function RenderItem(props) {
    const {item} = props;

    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
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
                    isLoading={this.props.sites.isLoading}
                    errMess={this.props.sites.errMess}
                />
                <RenderItem
                    item={this.props.zoos.zoos.filter(zoo=> zoo.featured)[0]}
                    isLoading={this.props.zoos.isLoading}
                    errMess={this.props.zoos.errMess}
                />
                <RenderItem
                    item={this.props.parks.parks.filter(park => park.featured)[0]}
                    isLoading={this.props.parks.isLoading}
                    errMess={this.props.parks.errMess}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home)