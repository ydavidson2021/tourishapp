import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { SITES } from '../shared/sites';
import { COMMENTS } from '../shared/comments';

function RenderSite(props) {
    const {site} = props;
    if (site) {
        return (
            <Card
                featuredTitle={site.name}
                image={require('./images/britmuseum.jpg')}>
                <Text style={{margin: 10}}>
                    {site.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        ); 
    } 
    return <View />; 
}

function RenderComments({comments}) {

    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


class SiteInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sites: SITES, 
            comments: COMMENTS, 
            favorite: false
        };
    }

    markFavorite() {
        this.setState({favorite: true});
    }

    static navigationOptions = {
        title: 'Site Information'
    }

    render() {
        const siteId = this.props.navigation.getParam('siteId');
        const site = this.state.sites.filter(site => site.id === siteId)[0];
        const comments = this.state.comments.filter(comment => comment.siteId === siteId);
        return (
            <ScrollView>
                <RenderSite site={site}
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }
}

export default SiteInfo;