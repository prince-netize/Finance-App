/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const PrivacyPolicy = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView>
        <Image
          source={require('../../assets/images/privacy.png')}
          style={styles.image}
        />

        <Text style={styles.labeltext}>
          We may collect personal information such as your name, email address,
          and usage data. This information is collected only when you
          voluntarily provide it or when required for app functionality.
        </Text>
        <Text style={styles.text}>
          This Privacy Policy describes how we collect, use, store, and protect
          personal information obtained from users who access or use our
          application or website. By using our services, you agree to the
          collection and use of information in accordance with this policy. We
          may collect personal information, including but not limited to names,
          email addresses, and usage data, either when voluntarily provided by
          users or automatically through the operation of the service. Such
          information is used solely for the purpose of providing, maintaining,
          improving, and securing our services, as well as for communicating
          with users and responding to inquiries. We do not sell, rent, or trade
          personal information to third parties. Information may be disclosed
          only when required to comply with applicable laws, legal processes, or
          governmental requests, or when necessary to protect our legal rights,
          prevent fraud, or ensure user safety.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
