import React                                      from 'react';
import {View, StyleSheet, FlatList} from "react-native";
import {AppHeaderIcon}                            from "../components/AppHeaderIcon.jsx";
import {Post}                                     from "../components/Post.jsx";
import {DATA}                                     from "../data.js";
import {HeaderButtons, Item}                      from 'react-navigation-header-buttons'

export const MainScreen = ({navigation}) => {
   const openPostHandler = post => {
      navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
   }

   return (
         <View style={styles.wrapper}>
         <FlatList data={DATA}
                   keyExtractor={post => post.id.toString()}
                   renderItem={({item}) => <Post onOpen={openPostHandler} post={item}/>} />
      </View>
   );
}

MainScreen.navigationOptions = {
   headerTitle: 'Мой блог',
   headerRight: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Take photo" iconName="ios-camera" onPress={() => console.log('PRess photo')}/>
   </HeaderButtons>,
   headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle drawer" iconName="ios-menu" onPress={() => console.log('PRess photo')}/>
   </HeaderButtons>
}

const styles = StyleSheet.create({
   wrapper: {
      padding: 10
   }
})

