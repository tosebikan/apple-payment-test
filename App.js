import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
} from 'react-native';
import RNIap, {
  InAppPurchase,
  PurchaseError,
  SubscriptionPurchase,
  acknowledgePurchaseAndroid,
  consumePurchaseAndroid,
  finishTransaction,
  finishTransactionIOS,
  purchaseErrorListener,
  purchaseUpdatedListener,
} from 'react-native-iap';

import IAP from 'react-native-iap';

const Plans = [
  {
    name: 'Silver',
    price: 5000,
    period: 'Monthly',
    desc: 'Billed monthly',
    type: 'month',
    popular: false,
    currency: 'NGN',
    feature: [
      'Features Include:',
      'All features in free plan',
      'Opportunity Market Place - For access to up-to-date opportunities',
      'Unlimited Direct Messages - Reach out to anyone in the community and send a direct message to expand your network',
      'Resources - Access to live events and webinars with industry leaders.',
      'Group - Groups allow you to start conversation with like-minded people, who share the same goals and/or interests.',
      'Referral Bonus - Get N500 if you refer someone who becomes a Silver Member.',
    ],
  },
  {
    name: 'Gold',
    price: 50000,
    period: 'Annually',
    desc: 'Billed annually',
    type: 'year',
    popular: true,
    currency: 'NGN',
    feature: [
      'Features Include:',
      'All features in silver plan',
      'Referral Bonus - Get N1,000 if you refer someone who becomes a Gold Member',
      'Get up to 30% discounts on products and services from some of the best brands in Africa through the Tribe Gold Card',
    ],
  },
];

const productIds = ['com.cooni.point1000', 'com.cooni.point5000'];

function App() {
  const [user, setUser] = useState({
    name: 'tolu',
    subscription: undefined,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    IAP.getProducts(productIds).then((res) => {
      console.log('<<<<<<>>>>>', res);
      setProducts(res);
    });
  }, []);

  // Plans[0].productId = products[1].productId;
  // Plans[1].productId = products[0].productId;
  console.log('<<<<<>>>>', Plans);
  return (
    <SafeAreaView styles={styles.container}>
      <Text style={styles.titleText}>Choose a plan</Text>
      <ScrollView horizontal>
        {Plans.map((plan, id) => (
          <View style={styles.planView} key={id}>
            <Text style={styles.title}>{plan.name}</Text>
            <Text style={styles.title}>NGN {plan.price}</Text>
            <View style={styles.space} />
            <Text style={styles.title}>{plan.desc}</Text>

            <View style={styles.featureContainer}>
              <ScrollView>
                {plan.feature.map((feature, featId) => (
                  <View style={styles.featureView} key={featId}>
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </ScrollView>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                    title="Subscribe"
                    color="#fff"
                    onPress={() => IAP.requestSubscription(plan.productId)}
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    textAlign: 'center',
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    fontSize: 25,
  },
  planView: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 50,
    marginTop: 50,
    height: 1000,
    backgroundColor: 'black',
  },
  featureContainer: {
    borderRadius: 20,
    marginTop: 40,
    backgroundColor: 'gold',
    width: 320,
    height: 500,
    padding: 20,
  },
  featureText: {
    fontSize: 14,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#000',
    width: 200,
    height: 40,
    borderRadius: 20,
  },
  featureView: {
    marginTop: 15,
  },
});
