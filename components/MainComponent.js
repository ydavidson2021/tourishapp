import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { SITES } from '../shared/sites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: SITES
        };
    }

    render() {
        return <Directory sites={this.state.sites} />;
    }
}

export default Main;
