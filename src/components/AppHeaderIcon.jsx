import React          from 'react';
import {Platform}     from "react-native";
import {HeaderButton} from 'react-navigation-header-buttons'
import {THEME}        from "../theme.js";
import {Ionicons}     from "@expo/vector-icons";

export const AppHeaderIcon = props => <HeaderButton {...props} IconComponent={Ionicons}
                                                    iconSize={24}
                                                    color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}/>

