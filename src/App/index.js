import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { QueryRenderer, graphql } from 'react-relay';
import env from './relay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Teste </Text>
      </View>
    );
  }
}

// creating the params for the user
const variables = {
  userId: 'cjb3neu7x0rle01130wksqy9w',
};

// IMPORTANT: We need to 'export default' the query renderer to the query run
// eslint-disable-next-line react/display-name
export default () => (
  <QueryRenderer
    environment={env} // Here is the enviroment that we configured before
    variables={variables} // Passing the params/variables that we created
    query={query} // And here goes your GraphQL query
    render={({ props }) => <App {...props} />}
  />
);

/* 
  Here is our GraphQL Query that receives a user_id and returns a name and a email
  */
const query = graphql`
  query AppQuery {
    allItems(first: 10) {
      title
      price
      picture
      description
      available
    }
  }
`;
