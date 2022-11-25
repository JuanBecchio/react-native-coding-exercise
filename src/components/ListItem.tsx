import Colors from "@helpers/colors";
import {
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Pressable,
  PressableProps,
} from "react-native";

type ListItemProps = {
  text: string;
  textStyle?: TextStyle | TextStyle[];
  style?: ViewStyle;
} & PressableProps;

const ListItem: React.FC<ListItemProps> = ({
  text,
  style,
  textStyle,
  onPress,
  ...props
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.listItem,
        style,
        { opacity: pressed ? 0.6 : 1 },
      ]}
      onPress={onPress}
      {...props}
    >
      <Text style={[styles.listItemText, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    backgroundColor: Colors.WhiteMilk,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 20,
  },
  listItemText: {
    color: Colors.Gray,
    fontSize: 18,
  },
});

export default ListItem;
