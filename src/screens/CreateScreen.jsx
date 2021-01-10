import React, {useState}                                                                                  from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard} from "react-native";
import {HeaderButtons, Item}                                                                              from "react-navigation-header-buttons";
import {useDispatch}                                                                                      from "react-redux";
import {AppHeaderIcon}                                                                                    from "../components/AppHeaderIcon.jsx";
import {addPost}                                                                                          from "../store/actions/post.js";
import {THEME}                                                                                            from "../theme.js";

export const CreateScreen = ({navigation}) => {
   const [text, setText] = useState('');
   const dispatch = useDispatch()

   const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

   const saveHandler = () => {
      const post = {
         date: new Date().toJSON(),
         text,
         img,
         booked: false
      }

      dispatch(addPost(post))
      navigation.navigate('Main')
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
               <Image style={{width: '100%', height: 200, marginBottom: 10}} source={{uri: img}}/>
               <Button title="Создать пост" color={THEME.MAIN_COLOR} onPress={saveHandler}/>
            </View>
         </TouchableWithoutFeedback>

      </ScrollView>
   );
}

CreateScreen.navigationOptions = ({navigation}) => ({
   headerTitle: 'Создать пост',
   headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
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

