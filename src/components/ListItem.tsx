import Colors from "@helpers/colors";
import {
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Pressable,
} from "react-native";

type ListItemProps = {
  text: string;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  onPress?: () => void;
};

const ListItem: React.FC<ListItemProps> = ({
  text,
  style,
  textStyle,
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.listItem,
        style,
        { opacity: pressed ? 0.6 : 1 },
      ]}
      onPress={onPress}
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
