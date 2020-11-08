import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function SiteInfo(props) {
    return <RenderSite site={props.site} />;
}

export default SiteInfo;