import React                                      from 'react';
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import {Post}                                     from "../components/Post.jsx";
import {DATA}                                     from "../data.js";

export const MainScreen = ({navigation}) => {
   const openPostHandler = post => {
      navigation.navigate('Post', {postId: post.id, date: post.date})
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
   headerRight: <Text>Hello</Text>
}

const styles = StyleSheet.create({
   wrapper: {
      padding: 10
   }
})

