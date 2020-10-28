import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dash from 'react-native-dash';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

function PaymentDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon__section}>
        <View style={styles.iconContainer}>
          <Image
            source={require('./image/agsLogo_dark.png')}
            style={{width: '80%', height: '80%', resizeMode: 'contain'}}
          />
        </View>
        <Dash style={{width: '10%', height: 1}} />
        <View style={styles.iconContainer}>
          <Image
            source={require('./image/money.png')}
            style={{width: '50%', height: '50%', resizeMode: 'contain'}}
          />
        </View>
      </View>
      <View style={styles.payment__info}>
        <MaterialCommunityIcons name="door-open" size={30} color="#CCCCCC" />
        <Text style={styles.payment__infoText}>
          You are about to leave the app to go to an external investment
          service.
        </Text>
      </View>
      <View style={styles.payment__info}>
        <Icon name="lock" size={30} color="#CCC" />
        <Text style={styles.payment__infoText}>
          The investment service does not unlock additional content within the
          app
        </Text>
      </View>

      <Button title="Continue" onPress={() => alert('continue')} />

      <Text style={styles.note__text}>
        This Organization is able to receive tax-deductible contributions based
        on their federal and/or state tax-exemption status
      </Text>
    </SafeAreaView>
  );
}

export default PaymentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon__section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10%',
    marginTop: '30%',
    marginBottom: '20%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 6,
    width: width / 3,
    // backgroundColor: 'white',
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    // shadowColor: '#000',

    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  payment__info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  payment__infoText: {
    width: '60%',
    paddingLeft: 10,
    color: 'gray',
  },
  note__text: {
    position: 'absolute',
    bottom: 50,

    alignSelf: 'center',
    width: '80%',

    color: 'gray',
  },
});
