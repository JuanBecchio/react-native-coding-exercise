import Colors from "@helpers/colors";
import { Dimensions, StyleSheet } from "react-native";

const windowDimensions = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: windowDimensions.width,
    height: windowDimensions.height,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
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
    flex: 5,
    width: "100%",
    backgroundColor: Colors.OrangeSand,
    alignItems: "center",
  },
  contentBanner: {
    resizeMode: "contain",
    flex: 1,
    aspectRatio: 3,
  },
  containerListPanel: {
    flex: 1.1,
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
    resizeMode: "contain",
    left: 30,
    height: "100%",
    width: 30,
    zIndex: 2,
  },
  searchInput: {
    flex: 2,
    height: "100%",
    backgroundColor: Colors.Blue,
    color: Colors.OrangeSand,
    borderRadius: 50,
    paddingLeft: 70,
    paddingRight: 20,
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    flex: 1.25,
    backgroundColor: Colors.Red,
    height: "100%",
    borderRadius: 50,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  searchFilters: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  filterIcon: {
    flexBasis: "15%",
    resizeMode: "contain",
    width: 20,
    height: 20,
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
    flexBasis: "15%",
    resizeMode: "contain",
    width: 16,
    height: 16,
  },
  contentList: {
    backgroundColor: "red",
    flex: 5,
  },
  separator: {
    height: 6,
    width: "100%",
    borderRadius: 8,
    backgroundColor: Colors.Blue,
  },
});
