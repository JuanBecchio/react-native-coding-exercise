import Colors from "@helpers/colors";
import { Dimensions, StyleSheet } from "react-native";

const windowDimensions = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    height: windowDimensions.height,
    width: windowDimensions.width,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexBasis: "16%",
    width: "100%",
    backgroundColor: Colors.Blue,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerPlanet: {
    flexBasis: "10%",
    aspectRatio: 1,
    resizeMode: "contain",
    alignSelf: "flex-start",
  },
  headerLogo: {
    flexBasis: "50%",
    aspectRatio: 2,
    resizeMode: "contain",
  },
  headerRocketContainer: {
    flexBasis: "10%",
    aspectRatio: 0.5,
    resizeMode: "contain",
    alignItems: "center",
  },
  headerRocket: {
    position: "absolute",
    width: 100,
    height: 150,
    top: 5,
    right: 0,
    resizeMode: "contain",
    zIndex: 2,
  },
  content: {
    flexBasis: "84%",
    width: "100%",
    backgroundColor: Colors.OrangeSand,
    alignItems: "center",
  },
  contentBanner: {
    resizeMode: "contain",
    flexBasis: "12%",
    aspectRatio: 3.5,
  },
  containerListPanel: {
    flexBasis: "13%",
    width: "90%",
  },
  contentSearchContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center",
  },
  rocketIcon: {
    position: "absolute",
    left: 20,
    zIndex: 1,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    backgroundColor: Colors.Blue,
    color: Colors.OrangeSand,
    borderRadius: 50,
    paddingLeft: 55,
    paddingRight: 20,
    fontSize: 16,
  },
  button: {
    height: "100%",
    paddingHorizontal: 26,
  },
  searchFilters: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  filterIcon: {
    flexBasis: "7%",
    marginHorizontal: 17,
  },
  filterType: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  filterText: {
    color: Colors.Blue,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  sortIcon: {
    flexBasis: "10%",
    marginLeft: 20,
  },
  sortPickerBackDrop: {
    backgroundColor: "transparent",
    position: "absolute",
    width: windowDimensions.width,
    height: windowDimensions.height,
    transform: [{ translateY: 100 }],
    zIndex: 2,
  },
  sortPicker: {
    position: "absolute",
    width: "75%",
    backgroundColor: Colors.Blue,
    alignItems: "center",

    top: "100%",
    left: 0,
    zIndex: 10,
  },
  sortPickerItem: {
    width: "85%",
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 15,
  },
  sortPickerItemText: {
    fontWeight: "bold",
    color: Colors.Blue,
    textTransform: "uppercase",
    fontSize: 17,
  },
  separator: {
    height: 6,
    width: "100%",
    borderRadius: 8,
    backgroundColor: Colors.Blue,
  },
});
