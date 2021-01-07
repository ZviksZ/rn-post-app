import * as Font from "expo-font";

export async function bootstrap() {
   return await Font.loadAsync({
      'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      'open-bold': require('../assets/fonts/OpenSans-Bold.ttf')
   })
}
