import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthStackNavigator';
import BottomTabs from './BottomTabs';
import Settings from '../Screens/SettScreen';
import ContactUs from '../Screens/ContactUs';
import AboutUs from '../Screens/AboutUs';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import TermsConditions from '../Screens/Terms&Conditions';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Tabs" component={BottomTabs} />
      <Stack.Screen name="Setting" component={Settings} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
    </Stack.Navigator>
  );
}
