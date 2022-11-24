import Colors from "@helpers/colors";
import {
  SafeAreaView,
  StatusBar,
  Image,
  View,
  TextInput,
  Text,
  Pressable,
} from "react-native";
import styles from "./homeStyles";

import Planet from "@assets/Planet.png";
import Logo from "@assets/YouNeedMoreMars.png";
import Rocket from "@assets/Rocket.png";
import Banner from "@assets/SpaceTours.png";

import RocketIcon from "@assets/rocket-icon.png";
import FilterIcon from "@assets/filter-icon.png";
import ArrowDownIcon from "@assets/arrow-down-icon.png";

const Home = () => {
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
            <Image source={RocketIcon} style={styles.rocketIcon} />
            <TextInput
              placeholder="Search for flights"
              placeholderTextColor={Colors.WhiteMilk}
              style={styles.searchInput}
            />
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Search</Text>
            </Pressable>
          </View>
          <View style={styles.searchFilters}>
            <Image source={FilterIcon} style={styles.filterIcon} />
            <View style={styles.filterType}>
              <Text style={styles.filterText}>Mission Name</Text>
              <Image source={ArrowDownIcon} style={styles.sortIcon} />
            </View>
          </View>
          <View style={styles.separator} />
        </View>

        <View style={styles.contentList}></View>
      </View>

      <Image source={Rocket} style={styles.headerRocket} />
    </SafeAreaView>
  );
};

export default Home;
