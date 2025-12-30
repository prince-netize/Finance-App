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

  labeltext: {
    paddingHorizontal: 16,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
    color: '#000',
  },
  text: {
    paddingHorizontal: 16,
    fontSize: 14,
    lineHeight: 22,
    color: '#667085',
  },
});
