import React, {useEffect}         from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppHeaderIcon}            from "../components/AppHeaderIcon.jsx";
import {PostList}                 from "../components/PostList.jsx";
import {HeaderButtons, Item}      from 'react-navigation-header-buttons'
import {loadPosts}                from "../store/actions/post.js";

export const MainScreen = ({navigation}) => {
   const dispatch = useDispatch()
   const allPosts = useSelector(state => state.post.allPosts)

   const openPostHandler = post => {
      navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
   }

   useEffect(() => {
      dispatch(loadPosts())
   }, [dispatch])

   return <PostList data={allPosts} onOpen={openPostHandler}/>
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

