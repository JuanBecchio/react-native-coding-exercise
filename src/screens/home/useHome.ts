import { useState, useRef } from "react";
import { useQuery } from "@apollo/client";

import { GET_PAST_LAUNCHES } from "@helpers/queries";

import { LaunchesPastResult } from "@typedef/LaunchType";

type FiltersType = {
  asc: boolean;
  sort: "rocket_name" | "rocket_type" | "launch_year";
};

const useHome = () => {
  const [filters, setFilters] = useState<FiltersType>({
    asc: true,
    sort: "launch_year",
  });
  const missionSearchRef = useRef<string>("");
  const [showSortList, setShowSortList] = useState(false);

  const { loading, data, fetchMore, refetch, client } =
    useQuery<LaunchesPastResult>(GET_PAST_LAUNCHES, {
      variables: {
        limit: 6,
        offset: 0,
        order: "asc",
        sort: "launch_year",
        mission_search: "",
      },
      notifyOnNetworkStatusChange: true,
    });

  const handleFetchMore = () =>
    fetchMore({
      variables: { offset: data?.launchesPastResult?.data.length },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        const previousLaunches = previousResult.launchesPastResult;
        const fetchMoreLaunches = fetchMoreResult.launchesPastResult;

        fetchMoreResult.launchesPastResult.data = [
          ...previousLaunches.data,
          ...fetchMoreLaunches.data,
        ];

        return { ...fetchMoreResult };
      },
    });

  const handleFilterChange = (newFilters: FiltersType) => {
    client.cache.reset();
    refetch({
      order: newFilters.asc ? "asc" : "desc",
      sort: newFilters.sort,
      mission_search: missionSearchRef.current,
    });
    setFilters({ ...newFilters });
  };

  return {
    loading,
    data,
    missionSearchRef,
    filters,
    showSortList,
    setShowSortList,
    handleFetchMore,
    handleFilterChange,
  };
};

export default useHome;
