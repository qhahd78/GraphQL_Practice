import ApolloClient from "apollo-boost";

// client 설정 
const client = new ApolloClient({
    uri: "http://localhost:4000/"
});

export default client;