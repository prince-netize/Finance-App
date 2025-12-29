import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.description}>
        Enter your new password to continue
      </Text>

      <Text style={styles.label}>New Password</Text>
      <CustomTextInput
        iconName="lock-closed-outline"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        showEye
      />

      <Text style={styles.label}>Confirm New Password</Text>
      <CustomTextInput
        iconName="lock-closed-outline"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        showEye
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('VerificationOTP');
        }}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ResetPasswordScreen;
