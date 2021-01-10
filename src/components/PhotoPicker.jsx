import React, {useState, useEffect}              from 'react';
import {View, StyleSheet, Image, Button, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export const PhotoPicker = ({onPick}) => {
   const [image, setImage] = useState(null);

   useEffect(() => {
      (async () => {
         if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
               Alert.alert('Ошибка', 'Вы не дали прав на создание фото');
            }
         }
      })();
   }, []);

   const takePhoto = async () => {
      let result = await ImagePicker.launchCameraAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: false,
         aspect: [16, 9],
         quality: 0.7,
      });

      console.log(result);

      if (!result.cancelled) {
         setImage(result.uri);
         onPick(result.uri);
      }
   };



   return (
      <View style={styles.wrapper}>
         <Button title='Сделать фото' onPress={takePhoto} />
         {image && <Image style={styles.image} source={{uri: image}}/>}
      </View>
   );
}

const styles = StyleSheet.create({
   wrapper: {
      marginBottom: 10
   },
   image: {
      width: '100%',
      height: 200,
      marginTop: 10
   }
})
