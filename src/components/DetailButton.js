import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {colors, shadow} from '../constants/theme';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const DetailButton = ({}) => {
    const renderInner = () => <Text>Hello</Text>;

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );


    bs = React.createRef();
    fall = new Animated.Value(1);
    return (
      <View style={styles.box}>
      {/* <BottomSheet
        ref={this.bs}
        snapPoints={[330,0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      /> */}
        <View style={styles.addButtonInner}>
        <TouchableOpacity onPress={() => this.bs.current.snapTo(9)} >
            <Image
              source={require('../assets/images/detail.png')}
              resizeMode="contain"
              style={styles.addButtonIcon}
            />
        </TouchableOpacity>
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

  panelHeader: {
    alignItems: 'center',
  },

  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },

  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

});

export default DetailButton;
