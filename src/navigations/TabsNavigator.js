import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Image} from 'react-native';
import OpenedScreen from '../screens/OpenedScreen';
import HomeScreen from '../screens/HomeScreen';
import MyReservations from '../screens/MyReservations';
import MyRequests from '../screens/MyRequests';
import AddRequest from '../screens/AddRequest';
import LogoutScreen from '../screens/LogoutScreen';
import {COLORS} from "../assets/theme";
import AddButton from '../components/AddButton';

const Tab = createBottomTabNavigator();

const getIconColor = focused => ({
  tintColor: focused ? COLORS.primary : COLORS.dark,
});

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Events"
        component={HomeScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/home.png')}
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Reservations"
        component={MyReservations}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/booking.png')}
                style={[styles.tabIconTwo, getIconColor(focused)]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add event"
        component={AddRequest}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.box}>
              <View style={styles.addButtonInner}>
                <Image
                  source={require('../assets/images/plus.png')}
                  style={styles.addButtonIcon}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Requests"
        component={MyRequests}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/checklist.png')}
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/logout.png')}
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    padding: 0,
    left: 16,
    right: 16,
    bottom: 15,
    height: 56,
    borderRadius: 16,
    borderTopColor: 'transparent',
    backgroundColor: '#fff',
    shadowColor: '#161719',
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },

  tabIconContainer: {
    position: 'absolute',
    top: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabIcon: {
    width: 25,
    height: 25,
  },

  tabIconTwo: {
    width: 30,
    height: 30,
  },

  container: {
    alignItems: 'center',
    flex: 1,
    height: 0,
  },

  box: {
    width: 60,
    height: 60,
    marginTop: 20,
  },

  addButton: {
    shadowColor: COLORS.dark,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  addButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  addButtonIcon: {
    width: 40,
    height: 40,
    tintColor: COLORS.white,
  },
});

export default TabsNavigator;



            // <View style={styles.box}>
            //   <View style={styles.addButtonInner}>
            //     <Image
            //       source={require('../assets/images/plus.png')}
            //       style={styles.addButtonIcon}
            //     />
            //   </View>
            // </View>
