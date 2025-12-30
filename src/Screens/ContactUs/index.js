/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './styles';

const ContactUs = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Us</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView>
        <Image
          source={require('../../assets/images/contactus.png')}
          style={styles.image}
        />

        <Text style={styles.sectionTitle}>Get in Touch</Text>
        <View style={styles.inputContainer}>
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
          />

          <Text style={styles.label}>Contact Number</Text>
          <CustomTextInput
            iconName="call-outline"
            value={contact}
            onChangeText={setContact}
          />

          <Text style={styles.label}>Subject</Text>
          <CustomTextInput
            iconName="text-outline"
            value={subject}
            onChangeText={setSubject}
          />
          {/* </View> */}
          <View style={{ height: 20 }} />
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.message]}
            placeholder="Write your message here..."
            multiline
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;
