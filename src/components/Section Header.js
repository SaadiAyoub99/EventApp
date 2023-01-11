import react from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import {colors, shadow, sizes, spacing} from '../constants/theme';


const SectionHeader = ({title, onPress, buttonTitle = 'Button'}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 40,
    marginTop: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: '#000',
  },
});  

export default SectionHeader;