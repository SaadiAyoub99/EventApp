import react from "react";
import {Text, View, StyleSheet} from 'react-native';
import { sizes, spacing } from "../constants/theme";


const ScreenHeader = ({mainTitle, secondTitle}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>{mainTitle}</Text>
        <Text style={styles.secondTitle}>{secondTitle}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 35,
  },

  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  secondTitle: {
    fontSize: 26,
    color: '#000',
  },
});

export default ScreenHeader;