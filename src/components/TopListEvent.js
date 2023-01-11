import React, {useState} from "react";
import { View, Image, StyleSheet,Text} from "react-native";
import {colors, shadow, sizes, spacing} from '../constants/theme';
import ReseveButton from '../components/ReseveButton';
import DetailButton from '../components/DetailButton';
import { useNavigation } from "@react-navigation/native";




const TopListEvent = ({list}) => {
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
          <View style={styles.cardContainer}>
            <View style={[styles.card, shadow.light]}>
              <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image} />
              </View>
              <View style={styles.footer}>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.reserve}>
                    <ReseveButton />
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  cardContainer: {
    marginLeft: 23,
    marginBottom: 50,
  },

  card: {
    width: 170,
    height: 360,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    marginTop: 20,
  },

  imageBox: {
    width: 270,
    height: 300,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
  },

  image: {
    width: 170,
    height: 290,
    resizeMode: 'cover',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 12,
    marginRight: 20,
  },

  titleBox: {
    flex: 1,
  },

  title: {
    marginVertical: 11,
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.primary,
  },

  reserve: {
    marginLeft: 120,
    marginTop: -4,
  },

  detail: {
    marginLeft: 80,
    marginTop: -29,
  },
});
export default TopListEvent;