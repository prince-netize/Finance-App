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

const TermsConditions = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView>
        <Image
          source={require('../../assets/images/terms.png')}
          style={styles.image}
        />
        <Text style={styles.labeltext}>
          By accessing or using this application or website, you agree to be
          bound by these Terms and Conditions and all applicable laws and
          regulations.
        </Text>

        <Text style={styles.text}>
          The services provided are intended solely for personal, non-commercial
          financial management and informational purposes and do not constitute
          financial, investment, legal, or tax advice. While we strive to ensure
          the accuracy and reliability of the information and tools provided, we
          make no warranties or representations regarding completeness,
          accuracy, or suitability for any specific purpose. Users are
          responsible for maintaining the confidentiality of their account
          credentials and for all activities conducted through their accounts.
          We reserve the right to modify, suspend, or discontinue any part of
          the service at any time without prior notice and shall not be liable
          for any loss or damage arising from such actions. Unauthorized use of
          the application, including attempts to access restricted systems or
          misuse data, may result in termination of access and potential legal
          action. To the maximum extent permitted by law, we disclaim all
          liability for any direct, indirect, incidental, or consequential
          damages arising from the use or inability to use the service.
          Continued use of the application following any updates or changes to
          these Terms and Conditions constitutes acceptance of the revised
          terms.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsConditions;
