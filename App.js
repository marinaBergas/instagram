import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Fragment} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import TabsBottom from './tabs/TabsBottom';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <View>
    //   <Text>ff</Text>
    // </View>
    <Fragment>
      <TabsBottom />
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default App;
