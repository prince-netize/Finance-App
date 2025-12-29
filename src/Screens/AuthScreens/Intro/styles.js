import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },

  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageWrapper: {
    width: '100%',
    height: height * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: width * 0.75,
    height: height * 0.35,
    resizeMode: 'contain',
  },

  textContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },

  description: {
    fontSize: 15,
    fontWeight: '400',
    color: '#777',
    textAlign: 'center',
    lineHeight: 22,
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: '#28CD41',
    width: 18,
  },

  buttons: {
    width: '100%',
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  skipText: {
    fontSize: 16,
    color: '#191919',
    fontWeight: '500',
  },

  nextBtn: {
    backgroundColor: '#28CD41',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },

  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  arrowContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedBtn: {
    backgroundColor: '#28CD41',
    marginHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 35,
    alignItems: 'center',
    marginBottom: 35,
  },

  getStartedText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
});
