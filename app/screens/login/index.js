import React from 'react';
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

const Login = () => (
  <Container>
    <Content>
      <Card>
        <CardItem>
          <Icon active name="logo-googleplus" />
          <Text>Google Plus</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    </Content>
  </Container>
);

Login.propTypes = {
  // validate props
};

export default Login;
