/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>LOGO</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}
          >
            <Ionicons name="settings-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.topCard}>
        <Image
          source={require('../../assets/images/background.png')}
          style={styles.blueBg}
        />

        <View style={styles.topCardContent}>
          <View style={styles.topText}>
            <Text style={styles.topTitle}>
              All You Need to{'\n'}Manage Life
            </Text>
            <Text style={styles.topSubtitle}>
              Money, Time, Goals,{'\n'}and Belongings Seamlessly
            </Text>
          </View>

          <Image
            source={require('../../assets/images/Women.png')}
            style={styles.womanImage}
          />
        </View>
      </View>

      {/* MY MONEY */}
      <Text style={styles.sectionTitle}>My Money</Text>
      <View style={styles.card}>
        <View style={styles.grid}>
          {[
            { label: 'Payment &\nReceipts', icon: 'receipt' },
            { label: 'Budget\nManagement', icon: 'pie-chart' },
            { label: 'Wallet', icon: 'wallet' },
            { label: 'Ledger', icon: 'book' },
            { label: 'Bank\nManagement', icon: 'business' },
          ].map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <View style={styles.gridIcon}>
                <Ionicons name={item.icon} size={26} color="#F797AA" />
              </View>
              <Text style={styles.gridText}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.sectionTitle}>My Belongings</Text>
      <View style={styles.card}>
        <View style={styles.grid}>
          {[
            { label: 'Assets &\nLiability', icon: 'briefcase' },
            { label: 'Password\nManager', icon: 'key' },
            { label: 'Document\nManager', icon: 'document-text' },
          ].map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <View style={[styles.gridIcon, { backgroundColor: '#EEF7FF' }]}>
                <Ionicons name={item.icon} size={26} color="#88C9FF" />
              </View>
              <Text style={styles.gridText}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* MY LIFE (STACKED) */}
      <Text style={styles.sectionTitle}>My Life</Text>
      <View style={styles.stackContainer}>
        <View style={styles.stackBehind} />
        <View style={styles.stackBehindSecond} />

        <TouchableOpacity style={styles.stackFront}>
          <View style={styles.lifeIcon}>
            <Ionicons name="checkbox" size={24} color="#81E09C" />
          </View>
          <Text style={styles.lifeText}>Task Management</Text>
        </TouchableOpacity>
      </View>

      {/* REPORTS */}
      <Text style={styles.sectionTitle}>Reports</Text>
      <View style={styles.listCard}>
        {[
          { label: 'Family Budget Planner', icon: 'calendar' },
          {
            label: 'Savings and Investment Suggestions',
            icon: 'trending-up',
          },
        ].map((item, index) => (
          <View
            key={index}
            style={[
              styles.listItem,
              index !== 1 && {
                borderBottomWidth: 1,
                borderBottomColor: '#E5E7EB',
              },
            ]}
          >
            <View style={styles.listIcon}>
              <Ionicons name={item.icon} size={22} color="#4F56FF" />
            </View>
            <Text style={styles.listText}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
          </View>
        ))}
      </View>

      {/* UTILITIES */}
      <Text style={styles.sectionTitle}>Utilities</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {[
          { label: 'Visiting Cards', icon: 'id-card' },
          { label: 'Emergency Numbers', icon: 'alert-circle' },
        ].map((item, index) => (
          <View
            key={index}
            style={[
              styles.card,
              {
                width: '48%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
              },
            ]}
          >
            <View
              style={[
                styles.gridIcon,
                { alignItems: 'center', justifyContent: 'center' },
              ]}
            >
              <Ionicons name={item.icon} size={26} color="#EF4444" />
            </View>
            <Text style={styles.gridText}>{item.label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Advanced Features</Text>
      <View style={styles.listCard}>
        {[
          { label: 'Tips & Financial Education', icon: 'school' },
          { label: 'Personal Finance Assistance', icon: 'briefcase' },
        ].map((item, index) => (
          <View
            key={index}
            style={[
              styles.listItem,
              index !== 1 && {
                borderBottomWidth: 1,
                borderBottomColor: '#E5E7EB',
              },
            ]}
          >
            <View style={[styles.listIcon, { backgroundColor: '#FFF6E8' }]}>
              <Ionicons name={item.icon} size={24} color="#FFBD58" />
            </View>
            <Text style={styles.listText}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
          </View>
        ))}
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default Home;
