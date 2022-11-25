import Colors from "@helpers/colors";
import {
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  TextStyle,
  PressableProps,
} from "react-native";

export type ButtonProps = {
  text: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
} & PressableProps;

const Button: React.FC<ButtonProps> = ({
  text,
  style,
  textStyle,
  onPress,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        style,
        { opacity: pressed ? 0.6 : 1 },
      ]}
      {...props}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Red,
    borderRadius: 50,
    marginLeft: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.White,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Button;
