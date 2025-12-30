import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
  },

  // HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  logo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2F4FFF',
  },

  headerIcons: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
  },

  icon: {
    fontSize: 18,
  },

  // TOP CARD
  topCard: {
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 16,
  },

  blueBg: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },

  topCardContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  topText: {
    width: '55%',
  },

  topTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },

  topSubtitle: {
    fontSize: 12,
    color: '#555',
    marginTop: 6,
  },

  womanImage: {
    width: '90%',
    height: 160,
    resizeMode: 'cover',
    marginLeft: -90,
  },

  // SECTION TITLES
  sectionTitle: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },

  // CARD / GRID
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
  },

  gridItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 10,
  },

  gridIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#FFF1F4',
    marginBottom: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridText: {
    fontSize: 11,
    textAlign: 'center',
  },

  stackContainer: {
    marginTop: 12,
    height: 60,
    justifyContent: 'center',
  },

  stackBehind: {
    position: 'absolute',
    width: '95%',
    height: 50,
    backgroundColor: '#E9ECFF',
    borderRadius: 14,
    top: 8,
    alignSelf: 'center',
  },

  stackBehindSecond: {
    position: 'absolute',
    width: '90%',
    height: 50,
    backgroundColor: '#DDE2FF',
    borderRadius: 14,
    top: 14,
    alignSelf: 'center',
  },

  stackFront: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    height: 50,
    paddingHorizontal: 16,
    elevation: 2,
  },

  lifeIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#EAFFF0',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lifeText: {
    fontSize: 13,
    fontWeight: '600',
  },

  listCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 6,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },

  listIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#EEF1FF',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  listText: {
    flex: 1,
    fontSize: 13,
  },
});
