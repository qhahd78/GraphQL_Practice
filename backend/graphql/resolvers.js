import cats from '../src/database/cats';

const resolvers = {
    Query: {
        cats: () => cats,
        // id 와 맞는 cat 호출 
        cat: (_, {id}) => {
            return cats.filter(cat => cat.id === id)[0];
        }
    }
}

export default resolvers;