import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home/Home';
import Search from '../screens/search/Search';
import MyHeader from './MyHeader';
import {StyleSheet} from 'react-native';

const TabBottom = createBottomTabNavigator();

class TabsBottom extends Component {
  // state = { :  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <TabBottom.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, size, color}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
                size = focused ? 25 : 20;
                color = focused ? '#000' : '#000';
              } else {
                iconName = 'search';
                size = focused ? 25 : 20;
                color = focused ? '#000' : '#000';
              }
              return (
                <FontAwesome5
                  name={iconName}
                  type="AntDesign"
                  size={size}
                  fill="#fff"
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#f0f',
            inactiveTintColor: '#555',
            iconStyle: {
              fill: '#fff',
            },
            showLabel: false,
            labelStyle: {fontSize: 14},
            showIcon: true,
          }}
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{backgroundColor: '#694fad'}}>
          <TabBottom.Screen
            options={{
              header: () => {
                return <MyHeader title="Instgram" />;
              },
            }}
            name="Home"
            component={Home}
          />
          <TabBottom.Screen
            options={{header: () => null}}
            name="Search"
            component={Search}
          />
        </TabBottom.Navigator>
      </NavigationContainer>
    );
  }
}

export default TabsBottom;
