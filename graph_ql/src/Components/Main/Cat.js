import React from 'react';
import {gql} from "apollo-boost";
import {Query} from "react-apollo";

// js => gql 
const GET_CATS = gql`
    query {
        cats {
            id
            name
            age
            face
        }
    }
`

function Cat() {
    return (
        <div>
            cat 컴포넌트 
            {/* query 컴포넌트  */}
            <Query query = {GET_CATS}>
                {({loading, error, data}) => {
                    if (loading) return <p>로딩 중..</p>;
                    if (error) return <p>에러</p>;
                    return (
                        <p>
                            {/* 데이터 받아서 map 돌리기 */}
                            {data.cats.map(({id, name, age, face}) => (
                                <p key={id}>이름 : {name}, 나이 : {age} 특징 : {face}</p>
                            ))}
                        </p>
                    )
                }}
            </Query>
        </div>
    )
}

export default Cat
