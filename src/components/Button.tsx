import Colors from "@helpers/colors";
import {
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

type ButtonProps = {
  text: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const Button: React.FC<ButtonProps> = ({ text, style, textStyle }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        style,
        { opacity: pressed ? 0.6 : 1 },
      ]}
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
