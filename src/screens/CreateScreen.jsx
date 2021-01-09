import React                    from 'react';
import {View, Text, StyleSheet} from "react-native";
import {HeaderButtons, Item}    from "react-navigation-header-buttons";
import {AppHeaderIcon}          from "../components/AppHeaderIcon.jsx";

export const CreateScreen = ({}) => {
   return (
      <View style={styles.center}>
         <Text>CreateScreen</Text>
      </View>
   );
}

CreateScreen.navigationOptions = ({navigation}) => ({
   headerTitle: 'Создать пост',
   headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
   </HeaderButtons>
})

const styles = StyleSheet.create({
   center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

