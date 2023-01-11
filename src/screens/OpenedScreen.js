import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FontFamily} from '../util/CommunStyle/style';
import TabsNavigator from '../navigations/TabsNavigator';


// import SplashScreen from 'react-native-splash-screen';

const OpenedScreen = ({navigation}) => {
  return (
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <Text>Opened Screen</Text>
    //   <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
    //     <Text>Press Here to navigate to the home page</Text>
    //   </TouchableOpacity>
    // </View>
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View>
        <Text
          style={{
            fontSize: 27,
            fontWeight: 'bold',
            color: '#20315f',
            marginTop: 50,
            // fontFamily: FontFamily.medium
          }}>
          EVENT MARKETPLACE
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/organizer.png')}
          style={{width: 150, height: 150, marginBottom: 50}}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('TabsNavigator')}
        style={{
          backgroundColor: '#357EC7',
          padding: 10,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <Text
          style={{
            // fontWeight: 'bold',
            fontSize: 18,
            color: '#fff',
            // fontFamily: 'Inter-Bold',
          }}>
          Let's start
        </Text>
        <Icon name="play" size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OpenedScreen;
