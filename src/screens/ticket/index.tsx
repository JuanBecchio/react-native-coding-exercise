import { Dimensions, Image, View } from "react-native";
import Background from "@assets/TicketBackground.png";
import TicketFront from "@assets/Ticket.png";
import Button from "@components/Button";
import { Fragment } from "react";

const windowDimensions = Dimensions.get("window");
const Ticket = () => {
  return (
    <Fragment>
      <Image
        source={Background}
        resizeMode={"cover"}
        resizeMethod={"scale"}
        style={{
          position: "absolute",
          width: windowDimensions.width * 2,
          height: windowDimensions.height,
        }}
      />
      <View style={{ alignItems: "center" }}>
        <Image
          source={TicketFront}
          resizeMode={"contain"}
          style={{
            width: windowDimensions.width,
            height: windowDimensions.height * 0.9,
          }}
        />
        <Button text="Print Ticket" />
      </View>
    </Fragment>
  );
};

export default Ticket;
