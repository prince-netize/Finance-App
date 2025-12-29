import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Register</Text>

      <Text style={styles.label}>Full Name</Text>
      <CustomTextInput
        iconName="person-outline"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email Address</Text>
      <CustomTextInput
        iconName="mail-outline"
        value={email}
        onChangeText={setEmail}
        secureTextEntry
        showEye
      />

      <Text style={styles.label}>Contact Number</Text>
      <CustomTextInput
        iconName="call-outline"
        value={contact}
        onChangeText={setContact}
        secureTextEntry
        showEye
      />

      <Text style={styles.label}>Password</Text>
      <CustomTextInput
        iconName="lock-closed-outline"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        showEye
      />

      <Text style={styles.label}>ConfirmPassword</Text>
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
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;
