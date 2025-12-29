import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/AuthScreens/Login';
import ForgotPasswordScreen from '../Screens/AuthScreens/forgotPass';
import VerifyOTPScreen from '../Screens/AuthScreens/verifyOTP';
import ResetPasswordScreen from '../Screens/AuthScreens/ResetPass';
import RegisterScreen from '../Screens/AuthScreens/Register';
import IntroScreen from '../Screens/AuthScreens/Intro';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerificationOTP" component={VerifyOTPScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
