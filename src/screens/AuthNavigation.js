import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './LoginSignupScreens/WelcomeScreen';
import LoginScreen from './LoginSignupScreens/LoginScreen';
import SignupScreen from './LoginSignupScreens/SignupScreen';
import HomeScreen from './HomeScreen';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='welcomePage'>
        <Stack.Screen name="welcomePage" component={WelcomeScreen} 
            options ={{
                headerShown: false,
            }}
        />

        <Stack.Screen name="loginPage" component={LoginScreen} 
            options ={{
                headerShown: false,
            }}
        />        
        
        <Stack.Screen name="signinPage" component={SignupScreen}  
            options ={{
                headerShown: false,
            }}
        />

        <Stack.Screen name="homePage" component={HomeScreen}  
            options ={{
                headerShown: false,
            }}
        />
      </Stack.Navigator>    
  );
}

export default AuthNavigation