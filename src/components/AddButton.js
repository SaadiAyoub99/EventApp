import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet, Image, Animated } from "react-native";
import { COLORS } from "../assets/theme";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddRequest from '../screens/AddRequest';

const AddButton = ({navigation}) => {
  return (
    <View>
      <View style={styles.box}>
        <TouchableWithoutFeedback
          //   style={styles.addButton}
          onPress={() => navigation.navigate('AddRequest')}>
          <View style={styles.addButtonInner}>
            <Image
              source={require('../assets/images/plus.png')}
              resizeMode="contain"
              style={styles.addButtonIcon}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        height: 0,
    },

    box: {
        width: 60,
        height: 60,
        marginTop: -30,
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
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        width: 60,
        height: 60,
        borderRadius: 30,
    },

    addButtonIcon: {
        width: 40,
        height: 40,
        tintColor: COLORS.white
    },

})

export default AddButton;