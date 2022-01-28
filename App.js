import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Search from './src/Search/Search';
import CarDetail from './src/Detail/CarDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResult from './src/Search/SearchReasult';

const Stack = createNativeStackNavigator();
export default App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={Search} options={{
          headerShown:false}}/>
        <Stack.Screen name="SearchResult" component={SearchResult} options={{
          headerShown:false}}/>
        <Stack.Screen name="CarDetail" component={CarDetail} options={{
          headerShown:false}
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}