import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },

  image: {
    width: '90%',
    height: 220,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 6,
    marginTop: 12,
    fontWeight: '500',
  },

  message: {
    height: 120,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#465EFD',
    margin: 16,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: '600',
  },
  inputContainer: {
    paddingHorizontal: 24,
  },
});
