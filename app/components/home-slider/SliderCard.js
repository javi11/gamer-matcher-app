import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';

const SliderCard = props => (
  <Text>
    {props.user.name} ({props.user.email})
  </Text>
);

SliderCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default createFragmentContainer(
  SliderCard,
  graphql`
    fragment SliderCard_user on User {
      id
      name
      email
    }
  `
);
