import React                      from 'react';
import {useSelector} from "react-redux";
import {AppHeaderIcon}            from "../components/AppHeaderIcon.jsx";
import {PostList}                 from "../components/PostList.jsx";
import {HeaderButtons, Item}      from 'react-navigation-header-buttons'

export const BookedScreen = ({navigation}) => {
   const bookedPosts = useSelector(state => state.post.bookedPosts)

   const openPostHandler = post => {
      navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
   }

   return <PostList onOpen={openPostHandler} data={bookedPosts}/>
}

BookedScreen.navigationOptions = ({navigation}) => ({
   headerTitle: 'Избранное',
   headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
   </HeaderButtons>
})

