import React, {useState, useRef}                                                                                  from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard} from "react-native";
import {HeaderButtons, Item}                                                                              from "react-navigation-header-buttons";
import {useDispatch}                                                                                      from "react-redux";
import {AppHeaderIcon}                                                                                    from "../components/AppHeaderIcon.jsx";
import {PhotoPicker}                                                                                      from "../components/PhotoPicker.jsx";
import {addPost}                                                                                          from "../store/actions/post.js";
import {THEME}                                                                                            from "../theme.js";

export const CreateScreen = ({navigation}) => {
   const [text, setText] = useState('');
   const dispatch = useDispatch()
   const imgRef = useRef()

   const saveHandler = () => {
      const post = {
         date: new Date().toJSON(),
         text,
         img: imgRef.current,
         booked: false
      }

      dispatch(addPost(post))
      navigation.navigate('Main')
   }

   const photoPickHandler = uri => {
      imgRef.current = uri
   }

   return (
      <ScrollView>
         <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.wrapper}>
               <Text style={styles.title}>Создай новый пост</Text>
               <TextInput
                  value={text}
                  onChangeText={setText}
                  style={styles.textarea}
                  multiline
                  placeholder="Введите текст поста"
               />
               <PhotoPicker onPick={photoPickHandler} />
               <Button title="Создать пост" color={THEME.MAIN_COLOR} onPress={saveHandler} disabled={!text}/>
            </View>
         </TouchableWithoutFeedback>

      </ScrollView>
   );
}

CreateScreen.navigationOptions = ({navigation}) => ({
   headerTitle: 'Создать пост',
   headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
   </HeaderButtons>
})

const styles = StyleSheet.create({
   wrapper: {
      padding: 10
   },
   title: {
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'open-regular',
      marginVertical: 10
   },
   textarea: {
      padding: 10,
      marginBottom: 10
   }
})

