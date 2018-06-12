import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { StyleSheet } from 'react-native';
import { Container, Text, Spinner } from 'native-base';
import environment from '../../config/relay-environment';
import HomeSlider from '../../components/home-slider/Slider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFECCA'
  }
});

const UserSliderQuery = graphql`
  query HomeQuery {
    userConnection {
      ...Slider_allUsers
    }
  }
`;

const Home = () => (
  <Container style={styles.container}>
    <QueryRenderer
      environment={environment}
      query={UserSliderQuery}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <Text>{error.message}</Text>;
        } else if (props) {
          return <HomeSlider allUsers={props.userConnection} />;
        }
        return <Spinner />;
      }}
    />
  </Container>
);

Home.propTypes = {
  // validate props
};

export default Home;
