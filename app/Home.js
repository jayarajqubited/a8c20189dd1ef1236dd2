import React, {useState} from 'react';
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Input,
  Item,
  Text,
  Button,
  Thumbnail,
} from 'native-base';
import styles from './Styles';

const Home = ({navigation}) => {
  const [id, setId] = useState('');
  const image = 'https://source.unsplash.com/collection/291965/600x800';

  return (
    <Container style={styles.container}>
      <Thumbnail large source={{uri: image}} style={styles.background} />
      <Content>
        <Card style={styles.card}>
          <CardItem header>
            <Text style={styles.heading}>View Asteroid Details</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Item>
                <Input
                  value={id}
                  onChangeText={setId}
                  placeholder="Enter Asteroid ID"
                />
              </Item>
              <Button
                onPress={() =>
                  navigation.navigate('Info', {id: id, random: false})
                }
                rounded
                success
                style={styles.btn}
                disabled={!id}>
                <Text>View Details</Text>
              </Button>
              <Button
                rounded
                info
                onPress={() => navigation.navigate('Info', {random: true})}
                style={styles.btn}>
                <Text>Random Asteroid</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Home;
