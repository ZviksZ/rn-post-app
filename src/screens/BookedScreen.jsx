import React                 from 'react';
import {AppHeaderIcon}       from "../components/AppHeaderIcon.jsx";
import {PostList}            from "../components/PostList.jsx";
import {DATA}                from "../data.js";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AboutScreen}         from "./AboutScreen.jsx";

export const BookedScreen = ({navigation}) => {
   const openPostHandler = post => {
      navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
   }

   return <PostList onOpen={openPostHandler} data={DATA.filter(post => post.booked)}/>
}

BookedScreen.navigationOptions = ({navigation}) => ({
   headerTitle: 'Избранное',
   headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
   </HeaderButtons>
})

