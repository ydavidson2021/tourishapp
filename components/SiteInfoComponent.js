import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, Button, StyleSheet, TextInput } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        sites: state.sites, 
        comments: state.comments, 
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: siteId => (postFavorite(siteId)), 
    postComment: (siteId, rating, author, text) => (postComment(siteId, rating, author, text))
};

function RenderSite(props) {
    
    const {site} = props; 

    if (site) {
        return (
            <Card   
                featuredTitle={site.name}
                image={{uri: baseUrl + site.image}}>
                <Text style={{margin: 10}} >
                    {site.description} 
                </Text>
                <View style={styles.cardRow}>
                    <Icon 
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                        onPress={() => props.favorite ? 
                            console.log('Already set as a favorite') : props.markFavorite()}
                    />
                    <Icon style={styles.cardItem}
                        name='pencil'
                        type='font-awesome'
                        color='#5637DD'
                        raised
                        reverse
                        onPress={() => props.onShowModal()}                     
                    />
                </View>
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
                <Rating 
                    style={{alignItems: 'flex-start', 
                            paddingVertical: '5%'}}
                    startingValue={item.rating} 
                    imageSize={10}
                    readOnly={true}
                />
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
            rating: 5,
            author:'',
            text:'',
            showModal: false
        }
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal});
    }

    handleComment(siteId) {
        this.props.postComment(siteId,this.state.rating, this.state.author, this.state.text);
        this.toggleModal();
    }

    resetForm(){
        this.setState({
            rating: 5,
            author:'',
            text:'',
            showModal: false
        });
    }

    markFavorite(siteId){
        this.props.postFavorite(siteId);
    }

    static navigationOptions = {
        title: 'Site Information'
    }

    

    render() {
        const siteId = this.props.navigation.getParam('siteId');
        const site = this.props.sites.sites.filter(site => site.id === siteId)[0];
        const comments = this.props.comments.comments.filter(comment => comment.siteId === siteId);
        return (
            <ScrollView>
                <RenderSite site={site} 
                    favorite={this.props.favorites.includes(siteId)}
                    markFavorite={() => this.markFavorite(siteId)}  
                    onShowModal={() => this.toggleModal()}           
                />
                <RenderComments comments={comments} />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}>
                    <View style={styles.modal}>
                        <Rating
                            showRating={true}
                            startingValue={this.state.rating}
                            imageSize={40}
                            onFinishRating={rating =>this.setState({rating: rating})} 
                            style={{paddingVertical: 10}}
                        />
                        <Input
                            placeholder='Author'
                            leftIcon={{type: 'font-awesome', name: 'user-o'}}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={(value)=>this.setState({author: value})} 
                            value={this.state.author}
                        />
                        <Input
                            placeholder='Comment'
                            leftIcon={{type: 'font-awesome', name: 'comment-o'}}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={(value)=>this.setState({text: value})} 
                            value={this.state.text}
                        />
                        <View style={{margin:10}}>
                            <Button
                                onPress={() => {
                                    this.handleComment(siteId);
                                    this.resetForm();
                                }}
                                color='#5637DD'
                                title='Submit'
                            />
                        </View>   

                        <View style={{margin: 10}}>
                            <Button
                                onPress={() => {
                                    this.toggleModal();
                                    this.resetForm();
                                }}
                                color='#808080'
                                title='Cancel'
                            />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        );       
    }
}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1, 
        flexDirection: 'row',
        margin: 20
    }, 
    cardItem: {
        flex: 1,
        margin: 10
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteInfo); 