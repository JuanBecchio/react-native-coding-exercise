import Colors from "@helpers/colors";
import { Dimensions, StyleSheet } from "react-native";

const windowDimensions = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexBasis: "17%",
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
    flexBasis: "83%",
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
  list: {
    flexBasis: "75%",
  },
  listContent: {
    width: windowDimensions.width,
    paddingVertical: 15,
    marginBottom: 5,
  },
  listItem: {
    width: "60%",
    alignSelf: "center",
    paddingVertical: 24,
    borderRadius: 15,
  },
  listItemText: {
    fontSize: 14,
    textAlign: "center",
  },
  listItemIcon: {
    position: "absolute",
    right: "8%",
    top: "30%",
  },
  separator: {
    height: 6,
    width: "100%",
    borderRadius: 8,
    backgroundColor: Colors.Blue,
  },
});
