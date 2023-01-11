import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TopListEvent from '../components/TopListEvent';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import SectionHeader from '../components/Section Header';
import SomeEvent from '../components/SomeEvent';
import {colors} from '../constants/theme';
import { TOPEVENT } from '../data/data';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Event Plan" />
      <ScreenHeader mainTitle="Find Your" secondTitle="Event Here" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SomeEvent list={TOPEVENT} />
        <SectionHeader title="Event list" />
        <TopListEvent list={TOPEVENT} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligh,
  },
});

export default HomeScreen;

