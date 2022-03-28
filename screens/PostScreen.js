import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import PostCard from './PostCard';

export default class PostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
};
};
componentDidMount() 

renderItem = ({ item : post }) => {
    return <PostCard post = {post} navigation = {this.props.navigation}/>
};