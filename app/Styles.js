import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  container: {
    backgroundColor: '#000',
  },
  card: {
    marginTop: 64,
    alignSelf: 'center',
    width: Dimensions.get('window').width - 32,
  },
  btn: {
    alignSelf: 'center',
    marginVertical: 8,
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    flex: 1,
  },
  error: {
    color: '#f00',
  },
  cardItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  url: {
    color: '#00f',
    textDecorationLine: 'underline',
  },
});

export default styles;
