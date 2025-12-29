import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  image: {
    width: '100%',
    height: 230,
    marginBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 12,
  },

  otpContainer: {
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  otpBox: {
    width: 48,
    height: 52,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },

  otpText: {
    fontSize: 18,
    color: '#1A1A1A',
    fontWeight: '500',
  },

  button: {
    backgroundColor: '#4F63FF',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
