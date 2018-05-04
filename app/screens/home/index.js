import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFECCA'
  }
});

const Home = () => (
  <Container style={styles.container}>
    <Content />
  </Container>
);

Home.propTypes = {
  // validate props
};

export default Home;
