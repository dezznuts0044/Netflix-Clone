import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import GetStarted1 from './screens/GetStarted1';
import GetStarted2 from './screens/GetStarted2';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import Login from './screens/Login';
import NavBar from "./component/NavBar";
import DescriptionScreen from './screens/DescriptionScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="DescriptionScreen" component={DescriptionScreen}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="NavBar" component={NavBar} />
        <Stack.Screen name="GetStarted1" component={GetStarted1} />
        <Stack.Screen name="GetStarted2" component={GetStarted2} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
