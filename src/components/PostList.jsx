import React                        from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Post}                       from "./Post.jsx";

export const PostList = ({data, onOpen}) => {
   return (
      <View style={styles.wrapper}>
         <FlatList data={data}
                   keyExtractor={post => post.id.toString()}
                   renderItem={({item}) => <Post onOpen={onOpen} post={item}/>} />
      </View>
   );
}

const styles = StyleSheet.create({
   wrapper: {
      padding: 10
   }
})
