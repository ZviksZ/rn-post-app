import * as Font from "expo-font";
import {DB}      from "./db.js";

export async function bootstrap() {
   try {
      await Font.loadAsync({
         'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
         'open-bold': require('../assets/fonts/OpenSans-Bold.ttf')
      })

      await DB.init()
      console.log('Database started...')
   } catch (e) {
      console.log(e)
   }

}
