import React, {useCallback, useEffect, useState} from 'react';
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Spinner,
  Text,
  Thumbnail,
} from 'native-base';
import {API_KEY} from '@env';
import styles from './Styles';
import {NavigationContainer} from '@react-navigation/native';
import {Linking} from 'react-native';

const Info = ({navigation, route}) => {
  const random = route.params.random;
  const [id, setId] = useState(route.params.id);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const image = 'https://source.unsplash.com/collection/291965/600x800';
  const API_URL = 'https://api.nasa.gov/neo/rest/v1/neo/';

  const fetchData = () => {
    fetch(`${API_URL}${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((e) => {
        setError('Could not find Asteroid details');
        setLoading(false);
      });
  };

  const fetchRandomId = () => {
    fetch(`${API_URL}browse?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        const arr = res.near_earth_objects;
        const randomId = arr[Math.floor(Math.random() * arr.length)];
        setId(randomId.id);
        setLoading(false);
      })
      .catch((e) => {
        setError('Could not find Asteroid details');
        setLoading(false);
      });
  };

  useEffect(() => {
    if (id) {
      fetchData();
    } else {
      fetchRandomId();
    }
  }, [id]);

  const handlePress = useCallback(async () => {
    await Linking.openURL(data?.nasa_jpl_url);
  }, [data?.nasa_jpl_url]);

  if (loading) {
    return (
      <Container>
        <Thumbnail source={{uri: image}} large style={styles.background} />
        <Content>
          <Card style={styles.card}>
            <Spinner />
          </Card>
        </Content>
      </Container>
    );
  }

  return (
    <Container style={styles.container}>
      <Thumbnail source={{uri: image}} large style={styles.background} />
      <Content>
        <Card style={styles.card}>
          {!!error ? (
            <>
              <CardItem header bordered>
                <Text style={styles.error}>Error</Text>
              </CardItem>
              <CardItem body bordered>
                <Text>{error}</Text>
              </CardItem>
            </>
          ) : (
            <>
              <CardItem header bordered>
                <Text>Asteroid Details</Text>
              </CardItem>
              <CardItem bordered style={styles.cardItem}>
                <Text>Name: {data?.name}</Text>
                <Text>
                  NASA JPL URL:{' '}
                    <Text style={styles.url} onPress={handlePress}>{data?.nasa_jpl_url}</Text>
                </Text>
                <Text>
                  Is Potentially hazardous:{' '}
                  {JSON.stringify(data?.is_potentially_hazardous_asteroid)}
                </Text>
              </CardItem>
            </>
          )}
          <Button
            info
            rounded
            style={styles.btn}
            onPress={() => navigation.goBack()}>
            <Text>Go Back</Text>
          </Button>
        </Card>
      </Content>
    </Container>
  );
};

export default Info;
