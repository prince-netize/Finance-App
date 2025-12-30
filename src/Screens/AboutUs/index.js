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

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Us</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/About.png')}
          style={styles.image}
        />

        <Text style={styles.labeltext}>
          We are a finance management application designed to assist individuals
          in organizing, tracking, and managing their personal financial
          activities in a secure and efficient manner.
        </Text>

        <Text style={styles.text}>
          Our platform provides users with tools to monitor income, expenses,
          savings, and financial trends, enabling informed decision-making and
          improved financial discipline. We aim to deliver a reliable,
          user-focused experience by combining intuitive design with practical
          financial insights while maintaining high standards of data protection
          and operational integrity. Our services are developed to support
          responsible financial management and are intended solely for
          informational and organizational purposes; they do not constitute
          financial, investment, legal, or tax advice. We are committed to
          continuous improvement of our features and functionality to meet
          evolving user needs and to ensure transparency, accuracy, and trust in
          all aspects of our service.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;
