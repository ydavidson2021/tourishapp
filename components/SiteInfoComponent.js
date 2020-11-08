import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { SITES } from '../shared/sites';

function RenderSite({site}) {

    if (site) {
        return (
            <Card
                featuredTitle={site.name}
                image={require('./images/britmuseum.jpg')}
            >
                <Text style={{margin: 10}}>
                    {site.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class SiteInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sites: SITES
        };
    }

    static navigationOptions = {
        title: 'Site Information'
    }

    render() {
        const siteId = this.props.navigation.getParam('siteId');
        const site = this.state.sites.filter(site => site.id === siteId)[0];
        return <RenderSite site={site} />;
    }
}

export default SiteInfo;