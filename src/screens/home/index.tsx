import { Fragment } from "react";
import {
  StatusBar,
  Image,
  View,
  TextInput,
  Text,
  Pressable,
} from "react-native";

import Colors from "@helpers/colors";

import Button from "@components/Button";
import RocketIcon from "@components/icons/RocketIcon";
import ArrowDownIcon from "@components/icons/ArrowDownIcon";
import FilterIcon from "@components/icons/FilterIcon";
import ListItem from "@components/ListItem";
import useHome from "./useHome";

import Planet from "@assets/Planet.png";
import Logo from "@assets/YouNeedMoreMars.png";
import Rocket from "@assets/Rocket.png";
import Banner from "@assets/SpaceTours.png";
import MissionsList from "./MissionList";

import styles from "./homeStyles";

type FilterItemType = {
  label: string;
  value: "launch_year" | "rocket_name" | "rocket_type";
};
const FILTER_ITEMS: FilterItemType[] = [
  { label: "Rocket Name", value: "rocket_name" },
  { label: "Rocket Type", value: "rocket_type" },
  { label: "Launch Year", value: "launch_year" },
];

const Home = () => {
  const {
    loading,
    data,
    missionSearchRef,
    filters,
    showSortList,
    setShowSortList,
    handleFetchMore,
    handleFilterChange,
  } = useHome();

  return (
    <View style={styles.container}>
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
              onChangeText={(text) => (missionSearchRef.current = text)}
            />
            <Button
              text="Search"
              style={styles.button}
              onPress={() => handleFilterChange({ ...filters })}
            />
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
                  {FILTER_ITEMS.map((item, index) => {
                    const isSelected = filters.sort === item.value;
                    return (
                      <ListItem
                        key={`Item-${index}-${item.value}`}
                        text={item.label}
                        style={[
                          styles.sortPickerItem,
                          {
                            backgroundColor: isSelected
                              ? Colors.Gray
                              : Colors.WhiteMilk,
                          },
                        ]}
                        disabled={isSelected}
                        textStyle={styles.sortPickerItemText}
                        onPress={() => {
                          handleFilterChange({ ...filters, sort: item.value });
                          setShowSortList(false);
                        }}
                      />
                    );
                  })}
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
    </View>
  );
};

export default Home;
