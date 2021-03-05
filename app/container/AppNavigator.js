import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet } from 'react-native'
import { images } from '../assets/Images';

import { Colors } from '../module/Color';
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
            headerShown: true,
            headerStyle: { backgroundColor: Colors.cardShadow },
            headerTitleAlign: 'center',
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
        activeBackgroundColor: Colors.activeBackgroundColor,
        inactiveBackgroundColor: Colors.inactiveBackgroundColor,
        activeTintColor: Colors.activeTintColor,
        inactiveTintColor: Colors.inactiveTintColor,
        labelStyle: {
          fontSize: 16,
          margin: 0,
          paddingBottom: 2,
        },

      }}

    >

      <Tab.Screen name='Home' component={Home}
        options={{

          title: 'Products',
          tabBarIcon: ({ navigation }) => (<Image source={images.list}
            style={styles.icon} />)


        }}
      />
      <Tab.Screen name='Details' component={Details}
        options={{
          title: 'Cart',

          tabBarIcon: ({ navigation }) => (<Image source={images.cart}
            style={styles.icon} />)
        }}
      />

    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({

  icon:
    { height: 20, width: 20 }

})


export default App_RespectiveNavigator
