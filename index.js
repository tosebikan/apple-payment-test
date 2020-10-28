/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import PaymentDetails from './PaymentDetails';
import EventPaymentDetails from './EventPaymentDetails';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => PaymentDetails);
