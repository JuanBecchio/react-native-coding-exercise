import { Fragment } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useQuery } from "@apollo/client";

import { Routes } from "@typedef/Routes";

import Colors from "@helpers/colors";
import { GET_LAUNCH } from "@helpers/queries";

import Button from "@components/Button";

import ChevronRightCircleIcon from "@components/icons/ChevronRightCircleIcon";

import Background from "@assets/TicketBackground.png";
import TicketFront from "@assets/Ticket.png";

import styles from "./ticketStyles";

type LaunchResponseType = {
  launch: {
    id: string;
    mission_name: string;
    rocket: {
      rocket_name: string;
      rocket_type: string;
    };
    launch_year: string;
  };
};

const Ticket = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const { params } = useRoute<RouteProp<Routes, "Ticket">>();

  const { loading, data } = useQuery<LaunchResponseType>(GET_LAUNCH, {
    variables: {
      id: params.launch_id,
    },
  });

  return (
    <Fragment>
      <Image
        source={Background}
        resizeMode={"cover"}
        resizeMethod={"scale"}
        style={styles.backgroundImage}
      />
      {loading ? (
        <ActivityIndicator
          style={{ flex: 2 }}
          color={Colors.Orange}
          size="large"
        />
      ) : (
        <View style={styles.container}>
          <Pressable
            style={styles.pressableIcon}
            onPress={() => navigation.goBack()}
          >
            <ChevronRightCircleIcon
              color={Colors.WhiteMilk}
              rotation={180}
              width={48}
              height={48}
            />
          </Pressable>
          <View style={styles.ticketContainer}>
            <Image
              source={TicketFront}
              style={styles.ticketImage}
              resizeMode={"stretch"}
            />
            <View style={styles.ticketFront}>
              <View style={styles.ticketLeft}>
                <View style={styles.leftContent}>
                  <Text style={styles.labelText}>Mission Name</Text>
                  <Text style={styles.missionNameText}>
                    {data?.launch.mission_name}
                  </Text>
                  <View style={styles.rocketInfo}>
                    <View>
                      <Text style={styles.labelText}>Rocket Name</Text>
                      <Text style={styles.rocketInfoText}>
                        {data?.launch.rocket.rocket_name}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.labelText}>Rocket Type</Text>
                      <Text style={styles.rocketInfoText}>
                        {data?.launch.rocket.rocket_type}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.ticketRight}>
                <View style={styles.rightContent}>
                  <Text style={styles.launchYearText}>Launch Year</Text>
                  <Text style={styles.launchYearNumber}>
                    {data?.launch.launch_year}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Button
            text="Print Ticket"
            style={styles.button}
            onPress={() =>
              Alert.alert(
                "Not implemented",
                "Print not implemented, sorry :(",
                [{ text: "Ok :(" }]
              )
            }
          />
        </View>
      )}
    </Fragment>
  );
};

export default Ticket;
