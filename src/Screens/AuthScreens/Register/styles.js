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
    height: 220,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
  },

  label: {
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 6,
    marginTop: 12,
    fontWeight: '500',
  },

  forgotContainer: {
    alignSelf: 'flex-end',
    marginTop: 6,
    marginBottom: 24,
  },

  forgotText: {
    color: '#FF5A5F',
    fontSize: 13,
    fontWeight: '500',
  },

  button: {
    backgroundColor: '#4F63FF',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 80,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#1A1A1A',
  },

  registerText: {
    color: '#FF5A5F',
    fontWeight: '600',
  },
});
