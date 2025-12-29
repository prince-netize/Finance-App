/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const VerifyOTPScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/images/otp.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Verify OTP</Text>

      <Text style={styles.description}>
        OTP has been sent on your{'\n'}
        email address “oliva**********.com”
      </Text>

      <Text style={styles.label}>Enter OTP</Text>

      <OtpInput
        numberOfDigits={6}
        onTextChange={setOtp}
        focusColor="#4F63FF"
        theme={{
          containerStyle: styles.otpContainer,
          pinCodeContainerStyle: styles.otpBox,
          pinCodeTextStyle: styles.otpText,
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ResetPassword');
        }}
      >
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default VerifyOTPScreen;
