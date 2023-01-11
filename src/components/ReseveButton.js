import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {colors, shadow} from '../constants/theme';

const ReseveButton = ({}) => {
  return (
    <View style={styles.box}>
      <View style={styles.addButtonInner}>
        <Image
          source={require('../assets/images/reserve.png')}
          resizeMode="contain"
          style={styles.addButtonIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: 0,
  },

  box: {
    width: 60,
    height: 60,
    marginTop: -30,
  },

  addButton: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  addButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 30,
  },

  addButtonIcon: {
    width: 30,
    height: 40,
  },
});

export default ReseveButton;
