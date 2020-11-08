import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import SiteInfo from './SiteInfoComponent';
import { View } from 'react-native';
import { SITES } from '../shared/sites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: SITES, 
            selectedSite: null
        };
    }

    onSiteSelect(siteId) {
        this.setState({selectedSite: siteId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory
                    sites={this.state.sites}
                    onPress={siteId => this.onSiteSelect(siteId)}
                />
                <SiteInfo
                    site={this.state.sites.filter(
                        site => site.id === this.state.selectedSite)[0]}
                />
            </View>
        );
    }
}

export default Main;
