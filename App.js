import React, {useState} from 'react';
import AppLoading        from 'expo-app-loading'
import {bootstrap}       from "./src/bootstrap.js";
import {AppNavigation} from './src/navigation/AppNavigation.js'

export default function App() {
   const [isReady, setIsReady] = useState(false)

   if (!isReady) {
      return <AppLoading
         startAsync={bootstrap}
         onFinish={() => setIsReady(true)}
         onError={err => console.log(err)}/>
   }

   return <AppNavigation />
}

