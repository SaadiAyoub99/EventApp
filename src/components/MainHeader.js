import react from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {sizes, spacing} from '../constants/theme';

const MainHeader = ({title}) => {
    const insets = useSafeAreaInsets();
    return (
    <View style={(styles.container, {marginTop: insets.top})} >
        <Text style={(styles.title)}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    marginLeft: 165,
    marginTop: 12,
    color: '#000',
  },
});

export default MainHeader;