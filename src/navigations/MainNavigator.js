import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OpenedScreen from "../screens/OpenedScreen";
import TabsNavigator from "./TabsNavigator";
import HomeScreen from "../screens/HomeScreen";
import MyRequests from '../screens/MyRequests'; 
import MyReservations from '../screens/MyReservations'; 
import AddRequest from '../screens/AddRequest';
import LogoutScreen from '../screens/LogoutScreen'
import DetailEvent from "../screens/DetailEvent";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OpenedScreen"
            component={OpenedScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TabsNavigator"
            component={TabsNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyRequests"
            component={MyRequests}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyReservations"
            component={MyReservations}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddRequest"
            component={AddRequest}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LogoutScreen"
            component={LogoutScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailEvent"
            component={DetailEvent}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default MainNavigator;