import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const MENU_ITEMS = [
  {
    id: 1,
    title: 'About Us',
    icon: 'help-circle',
    bgColor: '#E8E8FF',
    iconColor: '#9997EC',
    screen: 'AboutUs',
  },
  {
    id: 2,
    title: 'Privacy Policy',
    icon: 'lock-closed',
    bgColor: '#EAFFF0',
    iconColor: '#81E09C',
    screen: 'PrivacyPolicy',
  },
  {
    id: 3,
    title: 'Terms & Conditions',
    icon: 'document-text',
    bgColor: '#EEF7FF',
    iconColor: '#88C9FF',
    screen: 'TermsConditions',
  },
  {
    id: 4,
    title: 'Contact Us',
    icon: 'person',
    bgColor: '#FFF1F4',
    iconColor: '#F797AA',
    screen: 'ContactUs',
  },
  {
    id: 5,
    title: 'Change Password',
    icon: 'key',
    bgColor: '#FFEEEE',
    iconColor: '#FE7777',
    screen: 'ChangePassword',
  },
  {
    id: 6,
    title: 'Logout',
    icon: 'log-out',
    bgColor: '#FFF7EB',
    iconColor: '#FFD395',
    action: 'logout',
  },
];

const Settings = () => {
  const navigation = useNavigation();

  const handlePress = item => {
    if (item.action === 'logout') {
      console.log('Logout pressed');
      // navigation.replace('Login');
      return;
    }

    navigation.navigate(item.screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Settings</Text>

        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Ionicons name="pencil" size={22} color="#465EFD" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Rahul Sharma</Text>
          <Text style={styles.email}>rahul.sharma@email.com</Text>
        </View>

        {/* Menu */}
        <View style={styles.menuCard}>
          {MENU_ITEMS.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.menuItem,
                index === MENU_ITEMS.length - 1 && styles.lastItem,
              ]}
              activeOpacity={0.7}
              onPress={() => handlePress(item)}
            >
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: item.bgColor },
                ]}
              >
                <Ionicons name={item.icon} size={20} color={item.iconColor} />
              </View>

              <Text style={styles.menuText}>{item.title}</Text>

              <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
