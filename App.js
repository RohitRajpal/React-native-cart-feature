/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import { createStore } from 'redux';
import { Provider as StoreProvider } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import AppNavigator from './app/container/AppNavigator'
import App_TabNavigator from './app/container/AppNavigator'
import reducers from './app/redux/reducers/itemsReducer';

const store = createStore(reducers)



const App = () => {
  const [SelectedView, setSelectedView] = useState('')

  let mainScreen = <App_TabNavigator />
  return (

    <StoreProvider store={store}

    >

      {mainScreen}
    </StoreProvider>

  )
}

const styles = StyleSheet.create({
})

export default App
