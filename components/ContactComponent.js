import React, { Component } from 'react'; 
import { Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['virtualtour@tour.com'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
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
                    <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#5637DD', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                </Card> 
            </ScrollView>
        );
    }
}

export default Contact; 