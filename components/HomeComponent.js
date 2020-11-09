import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { SITES } from '../shared/sites';
import { ZOOS } from '../shared/zoos';
import { PARKS } from '../shared/parks';



function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/britmuseum.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sites: SITES, 
            zoos: ZOOS, 
            parks: PARKS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.sites.filter(site => site.featured)[0]}
                />
                <RenderItem 
                    item={this.state.parks.filter(park => park.featured)[0]}
                />
                <RenderItem 
                    item={this.state.zoos.filter(zoo => zoo.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;