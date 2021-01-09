import React                        from 'react';
import {AppHeaderIcon}              from "../components/AppHeaderIcon.jsx";
import {PostList}                   from "../components/PostList.jsx";
import {DATA}                       from "../data.js";
import {HeaderButtons, Item}        from 'react-navigation-header-buttons'

export const MainScreen = ({navigation}) => {
   const openPostHandler = post => {
      navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
   }

   return <PostList data={DATA} onOpen={openPostHandler}/>
}

MainScreen.navigationOptions = ({navigation}) => ({
   headerTitle: 'Мой блог',
   headerRight: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Take photo" iconName="ios-camera" onPress={() => navigation.push('Create')}/>
   </HeaderButtons>,
   headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
   </HeaderButtons>
})

