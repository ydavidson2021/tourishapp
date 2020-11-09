import React, { Component } from 'react'; 
import { FlatList, Text, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Card } from 'react-native-elements';

function Mission () {
    return(
        <Card title="Our Mission">          
            <Text h4>
                We present a curated database of the best virtual sites. We give you access to sceneries such as the musueum, zoos, aquariums, and national parks while promoting safety and social distance. We have sites that you and your loved ones may enjoy. We also present a platform for viewers like you to share reviews on sites you have visited.
            </Text>
        </Card>
    );
}

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        return (
            <ScrollView>
                <Mission />
            </ScrollView>
        );
    }
}

export default About; 