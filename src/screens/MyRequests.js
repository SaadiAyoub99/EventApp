import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';

const MyRequests = () => {
  const requests = [
    {
      id: 1,
      title: 'BIG DATA',
      etat: 'Pending',
      image: require('../assets/eventImage/1.jpg'),
    },
    {
      id: 2,
      title: 'JAVA',
      etat: 'Refused',
      image: require('../assets/eventImage/2.jpg'),
    },
    {
      id: 3,
      title: 'ANGULAR',
      etat: 'Accepted',
      image: require('../assets/eventImage/3.jpg'),
    },
    {
      id: 4,
      title: 'MARKETING',
      etat: 'Refused',
      image: require('../assets/eventImage/4.jpg'),
    },
    {
      id: 5,
      title: 'NTIC',
      etat: 'Pending',
      image: require('../assets/eventImage/5.jpg'),
    },
  ];

  const oneRequest = ({item}) => (
    <View style={styles.item}>
      <View>
        <Image source={item.image} style={styles.avatar} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.etat}>{item.etat}</Text>
    </View>
  );
  headerComponent = () => {
    return <Text style={styles.listHeadline}>Requets</Text>;
  }
  itemSeparator = () => {
    return <View style={styles.separator} />;
  }
  return (
    <SafeAreaView>
      <FlatList data={requests}
      renderItem = {oneRequest}
      ItemSeparatorComponent = {itemSeparator}
      ListHeaderComponent={headerComponent}
        ListHeaderComponentStyle={styles.listHeader}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC',
  },
  listHeadline: {
    color: '#333',
    fontSize: 21,
    fontWeight: 'bold',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },

  avatar: {
    height: 70,
    width: 100,
  },

  title: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },

  etat: {
    marginTop: 60,
  }
});
export default MyRequests;
