import React from 'react';
import { ApolloProvider } from 'react-apollo';
// client 를 전역으로 내려주기 위해 
import client from '../src/apollo/client.js';
import Cat from './Components/Main/Cat.js';


function App() {
  return (
    // client 전역으로 사용 
    <ApolloProvider client= {client}>
      <Cat />
    </ApolloProvider>
  );
}

export default App;
