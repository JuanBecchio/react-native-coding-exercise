import { Fragment, useCallback, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Image,
  View,
  TextInput,
  Text,
  FlatList,
  ActivityIndicator,
  ListRenderItemInfo,
} from "react-native";
import { useQuery } from "@apollo/client";

import Colors from "@helpers/colors";
import { GET_PAST_LAUNCHES } from "@helpers/queries";

import ListItem from "@components/ListItem";
import Button from "@components/Button";

import styles from "./homeStyles";

import Planet from "@assets/Planet.png";
import Logo from "@assets/YouNeedMoreMars.png";
import Rocket from "@assets/Rocket.png";
import Banner from "@assets/SpaceTours.png";

import RocketIcon from "@components/icons/RocketIcon";
import ArrowDownIcon from "@components/icons/ArrowDownIcon";
import FilterIcon from "@components/icons/FilterIcon";
import ChevronRightCircleIcon from "@components/icons/ChevronRightCircleIcon";

const Home = () => {
  const { loading, data, fetchMore } = useQuery(GET_PAST_LAUNCHES, {
    variables: {
      limit: 5,
      offset: 0,
      order: "asc",
      sort: "mission_name",
    },
  });

  const [selectedItem, setSelectedItem] = useState();

  const renderItem = useCallback(
    (info: ListRenderItemInfo<any>) => {
      const isSelected = selectedItem === info.item.id;
      return (
        <Fragment>
          <ListItem
            text={info.item.mission_name}
            style={[
              styles.listItem,
              isSelected
                ? { backgroundColor: Colors.Red }
                : { backgroundColor: Colors.WhiteMilk },
            ]}
            textStyle={[
              styles.listItemText,
              isSelected ? { color: Colors.White } : { color: Colors.Gray },
            ]}
            onPress={() => setSelectedItem(info.item.id)}
          />
          {isSelected && (
            <ChevronRightCircleIcon
              color={Colors.Red}
              style={styles.listItemIcon}
            />
          )}
        </Fragment>
      );
    },
    [selectedItem]
  );

  // <ActivityIndicator
  //           style={{ flex: 2 }}
  //           color={Colors.Blue}
  //           size="large"
  //         />

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
            <FilterIcon style={styles.filterIcon} color={Colors.Blue} />
            <View style={styles.filterType}>
              <Text style={styles.filterText}>Mission Name</Text>
              <ArrowDownIcon
                style={styles.sortIcon}
                color={Colors.Blue}
                width={16}
                height={14}
              />
            </View>
          </View>
          <View style={styles.separator} />
        </View>

        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={data?.launchesPastResult?.data || []}
          renderItem={renderItem}
        />
      </View>

      <Image source={Rocket} style={styles.headerRocket} />
    </SafeAreaView>
  );
};

export default Home;
