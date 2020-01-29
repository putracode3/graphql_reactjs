import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery{
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' })
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function Tampil(){
  const { loading, error, data } = useQuery(LAUNCHES_QUERY,{
    client: client
  });
  if (loading) return (<h4>Loading...</h4>);
  if (error) return `Error! ${error.message}`;
  return (
    <Fragment>
      {data.launches.map( (row, i) => (
        <LaunchItem key={row.flight_number} launch={row} />
      ))}
    </Fragment>
  );
}

export class Launches extends Component {
  render() {
    return (
      <div>
        <h1>Launches API SpaceX </h1>
        <MissionKey />
        <Tampil />
      </div>
    )
  }
}

export default Launches
