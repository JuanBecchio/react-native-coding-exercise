import { gql } from "@apollo/client";

export const GET_PAST_LAUNCHES = gql`
  query GetPastLaunches(
    $offset: Int
    $limit: Int
    $sort: String
    $order: String
  ) {
    launchesPastResult(
      offset: $offset
      limit: $limit
      sort: $sort
      order: $order
    ) {
      result {
        totalCount
      }
      data {
        id
        mission_name
      }
    }
  }
`;

export const GET_LAUNCH = gql`
  query GetLaunch($id: Int) {
    launch(id: $id) {
      id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_year
    }
  }
`;
