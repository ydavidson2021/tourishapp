import React, { Component } from 'react'; 
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Card title="Contact Information" wrapperStyle={{margin: 20 }} >        
                    <Text h4> 123 Seven Eight </Text>
                    <Text h4> San Antonio, TX 78215 </Text>
                    <Text h4> U.S.A. </Text>

                    <Text style={{marginBottom: 10}}/>
                    <Text h4> Phone: 1-210-123-4567 </Text>
                    <Text h4> Email: virtualtour@tour.com </Text>
                </Card> 
            </ScrollView>
        );
    }
}

export default Contact; 