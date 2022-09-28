import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = "https://api-eu-west-2.hygraph.com/v2/cl8kls4pr1x9201t9539jb1a7/master";

export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjQzMDkwMDksImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w4a2xzNHByMXg5MjAxdDk1MzlqYjFhNy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMDU2NjZlYzEtZjk4MS00NGM2LTgzN2ItMzY4MDA2NDBiYjJjIiwianRpIjoiY2w4a21tMnFpMjFqNDAxdDA0cWRqMDlucSJ9.SGTz2DZV4nKI1fCyICfon4aXUa5laiqjn9waKWULI80_AYA__4sldZ2jYw2GdGaEsIMhbM2Db-HcoDeOPg2TtS94RqYpfqK1WnBEMh4Izbuophc88B7gRiEruxH1CpqHfuNmErcZMJ25McwsX_lU6G6gn9WTrMvditH6R-puixvnGzlg6EshsjYEewy-1Mpik35o-v8sUoT4kw59W1Xi_er5Y2PI3VFbve2oK67qx_o8KUvn0WEVbl2wTXI2bdDqfFJrU1-SI9H_S_aeLJNXhNH3sFGfWCdfFKxk3rOhWqechz9uWnXTBnrpW-VD8Ix0FKv15Q-5vD0MVkCrQNJlSAt2xTMOz56YgEkub1Sndzbxosb69CFLwzEmB0L-1mLmxg8pWQXNFApYLVvZGmb8CiOeUb8-JB1wzKkat6i0nKqHBvR7W4dmyKtSiA1LD4ENUpwTutmF3ZJDemALr6kJIi2Yb8A-Ruf-YTI5FJXk8IMspxCZQgWqNlbvT1SU8HH7FTxbIyC3R-IylA1eUJNtewJH-YnslLHOq3_NdiUpS6ri_ftM_INUshHVzZ9S4DYKBthx5ozwTOc1YarkKDw5FcvSfwwkdar0fvXmGLgLiY39xEhWXhYW5kdZ58c56kO0PaVAPTqZAd_GGs5oa6DluFjaayBaU7i7n8CSkJxwraA`,
    },
  });

  const query = gql`
    mutation CreateBooking($name: String!, $email: String!, $booking: String!) {
      createBooking(data: {name: $name, email: $email, bookinginfo: $booking}) { id }
    }
  `;

  const result = await graphQLClient.request(query, req.body
  );

  return res.status(200).send(result);
}