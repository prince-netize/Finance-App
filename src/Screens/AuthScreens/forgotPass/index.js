import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('olivia@untitledui.com');
  const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Image
        source={require('../../../assets/images/forgot.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.description}>
        Enter your email address &{'\n'} Password reset link will be shared
      </Text>

      <Text style={styles.label}>Enter Email Address</Text>
      <CustomTextInput
        iconName="mail-outline"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('VerificationOTP');
        }}
      >
        <Text style={styles.buttonText}>Request OTP</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
