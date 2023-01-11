import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';




const SomeEvent = ({list}) => {
    const navigation = useNavigation();

    return (
        <FlatList
            data={list}
            horizontal
            renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      marginLeft: 20,
                      marginTop: 20,
                      marginRight: index === list.length - 1 ? spacing.l : 0,
                    }}
                    onPress={() => {
                      navigation.navigate('DetailEvent', {event: item});
                    }}>
                    <View style={[styles.card, shadow.dark]}>
                      <View style={styles.imageBox}>
                        <Image source={item.image} style={styles.image} />
                      </View>
                      <View style={styles.titleBox}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text></Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 230,
    marginVertical: 10,
  },
  imageBox: {
    width: 110,
    height: 200,
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },

  image: {
    width: 110,
    height: 200,
    resizeMode: 'cover',
  },

  titleBox: {
    position: 'absolute',
    top: 200,
    left: 7,
  },

  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SomeEvent;