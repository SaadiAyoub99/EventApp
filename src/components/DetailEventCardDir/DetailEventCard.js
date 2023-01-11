import React from "react";
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const DetailEventCard = ({event}) => {
       renderInner = () => (
         <View style={styles.panel}>
           <View>
             <Text style={styles.panelTitle}> Description</Text>
             <Text style={styles.panelsubtitle}>
               The ultimate Amalfi Coast travel guide, where to stay, where to
               eat, and what areas to visit in the Amalfi Coast of Italy.
               Positano, Ravello, Amalfi and more,The ultimate Amalfi Coast
               travel guide, where to stay, where to eat, and what areas to
               visit in the Amalfi Coast of Italy. Positano, Ravello, Amalfi and
               more,The ultimate Amalfi Coast travel guide, where to stay, where
               to eat
             </Text>
           </View>
           <TouchableOpacity
             style={styles.panelButton}
             onPress={() => this.bs.current.snapTo(1)}>
             <Text style={styles.panelButtonTitle}>Cancel</Text>
           </TouchableOpacity>
         </View>
       );

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
      <View style={styles.card}>
        <BottomSheet
          ref={this.bs}
          snapPoints={[330, 0]}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={1}
          callbackNode={this.fall}
          enabledGestureInteraction={true}
        />
        <View style={styles.card}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            {/* <View style={styles.box}>
              <View style={styles.addButtonInner}> */}
                <Image
                  source={require('../../assets/images/detail.png')}
                  resizeMode="contain"
                  style={styles.addButtonIcon}
                />
          </TouchableOpacity>
        </View>
      </View>
    );
};


const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
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
    width: 200,
    height: 50,
    marginLeft: -50,
  },

  box: {
    width: 60,
    height: 60,
    marginTop: -30,
  },

  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  panelTitle: {
    fontSize: 20,
    height: 35,
    marginLeft: 125,
    fontWeight: 'bold',
  },
  panelSubtitle: {
    fontSize: 14,
    color: '#000',
    height: 30,
    marginLeft: 60,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#357EC7',
    alignItems: 'center',
    marginVertical: 7,
    marginTop: 50,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
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
  panel: {
    padding: 30,
    backgroundColor: '#FFFFFF',
    paddingTop: 36,
    // paddingBottom: 70,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
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
});

export default DetailEventCard;