import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import React from 'react'
import Details from '../component/Details'
import Home from '../component/Home'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


function App_RespectiveNavigator() {
  return (
    <SafeAreaProvider>

      <NavigationContainer>

        <Stack.Navigator
          screenOptions={{
            headerShown: true
            , headerTitleAlign: 'center',
            headerTitle: 'Shop'
          }}
        >
          <Stack.Screen name='App_TabNavigator' component={TabNavigator} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>


  )
}


function TabNavigator(params) {


  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#bebebe',
        inactiveBackgroundColor: '#fff',
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 20,
          margin: 0,
          padding: 5,
        },

      }}

    >

      <Tab.Screen name='Home' component={Home}
        options={{

          title: 'Products',
          
        }}
      />
      <Tab.Screen name='Details' component={Details}
        options={{
          title: 'Cart',

          
        }}
      />

    </Tab.Navigator>
  )
}



export default App_RespectiveNavigator
