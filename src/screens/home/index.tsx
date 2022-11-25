import { Fragment, useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Image,
  View,
  TextInput,
  Text,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { GET_PAST_LAUNCHES } from "@helpers/queries";
import { useQuery } from "@apollo/client";

import Colors from "@helpers/colors";

import Button from "@components/Button";
import RocketIcon from "@components/icons/RocketIcon";
import ArrowDownIcon from "@components/icons/ArrowDownIcon";
import FilterIcon from "@components/icons/FilterIcon";

import styles from "./homeStyles";

import Planet from "@assets/Planet.png";
import Logo from "@assets/YouNeedMoreMars.png";
import Rocket from "@assets/Rocket.png";
import Banner from "@assets/SpaceTours.png";
import MissionsList from "./MissionList";

import { LaunchesPastResult } from "@components/typedef/LaunchType";
import ListItem from "@components/ListItem";

type FiltersType = {
  asc: boolean;
  sort: "rocket_name" | "rocket_type" | "launch_year";
};

const Home = () => {
  const [filters, setFilters] = useState<FiltersType>({
    asc: true,
    sort: "launch_year",
  });
  const [showSortList, setShowSortList] = useState(false);

  const { loading, data, fetchMore, refetch, client } =
    useQuery<LaunchesPastResult>(GET_PAST_LAUNCHES, {
      variables: {
        limit: 6,
        offset: 0,
        order: "asc",
        sort: "launch_year",
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
    });
    setFilters({ ...newFilters });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.Blue} barStyle="light-content" />

      <View style={styles.header}>
        <Image source={Planet} style={styles.headerPlanet} />
        <Image source={Logo} style={styles.headerLogo} />
        <View style={styles.headerRocketContainer} />
      </View>

      <View style={styles.content}>
        <Image source={Banner} style={styles.contentBanner} />

        <View style={styles.containerListPanel}>
          <View style={styles.contentSearchContainer}>
            <RocketIcon color={Colors.WhiteMilk} style={styles.rocketIcon} />
            <TextInput
              placeholder="Search for flights"
              placeholderTextColor={Colors.WhiteMilk}
              style={styles.searchInput}
            />
            <Button text="Search" style={styles.button} />
          </View>

          <View style={styles.searchFilters}>
            <Pressable
              style={styles.filterIcon}
              onPress={() => setShowSortList((prev) => !prev)}
            >
              <FilterIcon color={Colors.Blue} />
            </Pressable>
            <Pressable
              disabled={loading}
              style={styles.filterType}
              onPress={() =>
                handleFilterChange({ ...filters, asc: !filters.asc })
              }
            >
              <Text style={styles.filterText}>Mission Name</Text>
              <ArrowDownIcon
                style={[
                  styles.sortIcon,
                  {
                    transform: [filters.asc ? { scaleY: 1 } : { scaleY: -1 }],
                  },
                ]}
                color={Colors.Blue}
                width={16}
                height={14}
              />
            </Pressable>
            {showSortList && (
              <Fragment>
                <Pressable
                  style={styles.sortPickerBackDrop}
                  onPress={() => setShowSortList(false)}
                />
                <Pressable style={styles.sortPicker}>
                  <ListItem
                    text="Rocket Name"
                    style={styles.sortPickerItem}
                    textStyle={styles.sortPickerItemText}
                    onPress={() => {
                      handleFilterChange({ ...filters, sort: "rocket_name" });
                      setShowSortList(false);
                    }}
                  />
                  <ListItem
                    text="Rocket Type"
                    style={styles.sortPickerItem}
                    textStyle={styles.sortPickerItemText}
                    onPress={() => {
                      handleFilterChange({ ...filters, sort: "rocket_type" });
                      setShowSortList(false);
                    }}
                  />
                  <ListItem
                    text="Launch Year"
                    style={styles.sortPickerItem}
                    textStyle={styles.sortPickerItemText}
                    onPress={() => {
                      handleFilterChange({ ...filters, sort: "launch_year" });
                      setShowSortList(false);
                    }}
                  />
                </Pressable>
              </Fragment>
            )}
          </View>
          <View style={styles.separator} />
        </View>
        <MissionsList
          data={data}
          onLoadMorePress={handleFetchMore}
          loading={loading}
        />
      </View>

      <Image source={Rocket} style={styles.headerRocket} />
    </SafeAreaView>
  );
};

export default Home;
