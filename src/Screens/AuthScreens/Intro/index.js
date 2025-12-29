/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Take Control of Your Money',
    description:
      'Track your income and expenses effortlessly. Stay on top of your financial game with personalized insights and tools',
    image: require('../../../assets/images/intro1.png'),
  },
  {
    key: '2',
    title: 'Understand Your Spending Habits',
    description:
      'Visualize where your money goes. Get detailed breakdowns to identify patterns and make smarter financial decisions',
    image: require('../../../assets/images/intro2.png'),
  },
  {
    key: '3',
    title: 'Plan. Save. Succeed',
    description:
      'Set savings goals and monitor your progress. Let us help you turn dreams into reality, one step at a time.',
    image: require('../../../assets/images/intro3.png'),
  },
];

export default function IntroScreen({ navigation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const progress = useRef(new Animated.Value(0)).current;
  const size = 60;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const slideProgress = [0.33, 0.66, 1];

  const animatedStroke = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  const animateToSlide = index => {
    Animated.timing(progress, {
      toValue: slideProgress[index],
      duration: 450,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  const onSkip = () => navigation.replace('RoleScreen');

  const onNext = () => {
    const nextIndex = currentSlide + 1;
    if (nextIndex < slides.length) {
      animateToSlide(nextIndex);
      sliderRef.current?.goToSlide(nextIndex, true);
    } else {
      navigation.replace('RoleScreen');
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { width, height: height * 0.75 }]}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={renderItem}
        showNextButton={false}
        showSkipButton={false}
        showDoneButton={false}
        renderPagination={() => null}
        onSlideChange={i => {
          setCurrentSlide(i);
          animateToSlide(i);
        }}
      />

      {/* Bottom Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ECECEC',
            height: 40,
            width: 60,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onSkip}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onNext}>
          <View style={{ width: size, height: size }}>
            <View
              style={{
                position: 'absolute',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#19D666',
                justifyContent: 'center',
                alignItems: 'center',
                top: 5,
                left: 5,
              }}
            >
              <Icon name="arrow-forward" size={26} color="white" />
            </View>
            <Svg
              width={size}
              height={size}
              style={{ transform: [{ rotate: '0deg' }] }}
            >
              <AnimatedCircle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={strokeWidth}
                stroke="#19D666"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={animatedStroke}
                strokeLinecap="round"
              />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
