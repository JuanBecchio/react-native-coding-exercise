import React from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
} from "react-native";

import Colors from "@helpers/colors";
import Button, { ButtonProps } from "./Button";

type LoadMoreItemProps = {
  loading?: boolean;
  text?: string;
  buttonText?: string;
  onButtonPress?: () => void;
  buttonProps?: ButtonProps;
  style?: ViewStyle | ViewStyle[];
};

const LoadMoreItem: React.FC<LoadMoreItemProps> = ({
  loading,
  text,
  buttonText,
  onButtonPress,
  buttonProps,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {loading ? (
        <ActivityIndicator
          style={{ flex: 2 }}
          color={Colors.Blue}
          size="large"
        />
      ) : (
        <View style={styles.content}>
          {text && <Text style={styles.textStyle}>{text}</Text>}
          <Button
            text={buttonText || "Load More"}
            style={styles.buttonStyle}
            onPress={onButtonPress}
            {...buttonProps}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 13,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textStyle: {
    flex: 1,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 5,
    color: Colors.Blue,
  },
  buttonStyle: {
    flex: 1.5,
    paddingHorizontal: 0,
    paddingVertical: 7,
  },
});

export default LoadMoreItem;
