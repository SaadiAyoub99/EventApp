import React from "react";
import {View, StyleSheet, Image} from "react-native";
import DetailEventCard from "../components/DetailEventCardDir/DetailEventCard";
const DetailEvent = ({navigation, route}) => {
    const {event} = route.params
    return (
      <View style={styles.container}>
        <View style={[StyleSheet.absoluteFillObject, styles.imageBox]}>
          <Image
            source={event.image}
            style={[StyleSheet.absoluteFillObject, styles.image]}
          />
        </View>
        <DetailEventCard event={event}/>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageBox: {
        // borderRadius: 16,
        overflow: 'hidden',
    },

    image: {
        marginTop: -1,
        width: 411,
        height: 687,
        resizeMode: 'cover',
    },
});
export default DetailEvent;