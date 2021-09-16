import {gql} from 'apollo-server';

// 스키마 : 서버에 어떻게 데이터를 요청할지 
// 읽기 요청 
// Query : DB 에서 데이터를 읽는 요청
    // Mutation : DB 수정 
    // ! 데이터가 꼭 있어야함 

    // cat 의 구조와 자료형 정의
const typeDefs = gql`
    type Cat {
        id: Int!
        name: String! 
        age: Int!
        face: String!
        img: String!
    }

    type Query {
        cats: [Cat!]! 
        cat(id: Int!): Cat
    }
`;

export default typeDefs;