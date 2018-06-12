import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'native-base';
import { createFragmentContainer, graphql } from 'react-relay';
import SliderCard from './SliderCard';

const Slider = props => (
  <Container>
    {props.allUsers.edges.map(({ node }) => <SliderCard key={node.__id} user={node} />)}
  </Container>
);

Slider.propTypes = {
  allUsers: PropTypes.shape({
    edges: PropTypes.arrayOf().isRequired
  }).isRequired
};

export default createFragmentContainer(
  Slider,
  graphql`
    fragment Slider_allUsers on UserConnection {
      edges {
        node {
          ...SliderCard_user
        }
      }
    }
  `
);
