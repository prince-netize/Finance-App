import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('olivia@untitledui.com');
  const [password, setPassword] = useState('olivia@untitledui.com');
  const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* Illustration */}
      <Image
        source={require('../../../assets/images/login.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Email */}
      <Text style={styles.label}>Email Address</Text>
      <CustomTextInput
        iconName="mail-outline"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <CustomTextInput
        iconName="lock-closed-outline"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        showEye
      />

      {/* Forgot Password */}
      <TouchableOpacity
        style={styles.forgotContainer}
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Tabs');
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Register */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>New User? </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
