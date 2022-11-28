import Colors from "@helpers/colors";
import { StyleSheet, Dimensions } from "react-native";

const windowDimensions = Dimensions.get("window");
const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: windowDimensions.width * 2,
    height: windowDimensions.height,
  },
  container: { alignItems: "center", justifyContent: "space-around", flex: 1 },
  pressableIcon: {
    height: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  ticketContainer: {
    width: windowDimensions.width,
    height: windowDimensions.height * 0.85,
    justifyContent: "center",
    alignItems: "center",
  },
  ticketImage: {
    width: "100%",
    height: "100%",
  },
  ticketFront: {
    position: "absolute",
    height: windowDimensions.width * 0.75,
    width: windowDimensions.height * 0.75,
    transform: [{ rotate: "90deg" }],
    flexDirection: "row",
  },
  ticketLeft: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  leftContent: {
    height: "40%",
    width: "60%",
    bottom: 10,
    left: -20,
  },
  labelText: {
    textTransform: "uppercase",
    color: Colors.OrangeSand,
    fontSize: 8,
    fontWeight: "300",
  },
  missionNameText: {
    fontSize: 18,
    color: Colors.OrangeSand,
  },
  rocketInfo: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  rocketInfoText: {
    fontSize: 10,
    color: Colors.OrangeSand,
    fontWeight: "600",
    paddingVertical: 2,
  },
  ticketRight: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContent: {
    height: "75%",
    width: "65%",
    left: 5,
  },
  launchYearText: {
    textTransform: "uppercase",
    fontSize: 8,
    color: Colors.Blue,
  },
  launchYearNumber: { fontSize: 14, color: Colors.Blue, fontWeight: "300" },
  button: {
    bottom: 20,
  },
});

export default styles;
