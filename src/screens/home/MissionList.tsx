import ChevronRightCircleIcon from "@components/icons/ChevronRightCircleIcon";
import ListItem from "@components/ListItem";
import LoadMoreItem from "@components/LoadMoreItem";
import { useCallback, Fragment, useState, memo, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from "react-native";
import Colors from "@helpers/colors";
import { LaunchesPastResult, LaunchType } from "@components/typedef/LaunchType";

const windowDimensions = Dimensions.get("window");

type MissionListProps = {
  loading?: boolean;
  data?: LaunchesPastResult;
  onLoadMorePress?: () => void;
};

const MissionsList: React.FC<MissionListProps> = ({
  loading,
  data,
  onLoadMorePress,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const [canFetchMore, setCanFetchMore] = useState(false);

  useEffect(() => {
    setCanFetchMore(
      Number(data?.launchesPastResult.result.totalCount) >
        Number(data?.launchesPastResult.data.length)
    );
  }, [data]);

  const renderItem = useCallback(
    (info: ListRenderItemInfo<LaunchType>) => {
      const isLastIndex =
        info.index === Number(data?.launchesPastResult?.data?.length) - 1 &&
        Number(data?.launchesPastResult?.data?.length);
      const isSelected = selectedItem === info.item.id;
      return (
        <Fragment key={`Item:${info.index}`}>
          <View>
            <ListItem
              disabled={isSelected}
              text={info.item.mission_name}
              style={[
                styles.listItem,
                isSelected
                  ? { backgroundColor: Colors.Red }
                  : { backgroundColor: Colors.WhiteMilk },
              ]}
              textStyle={[
                styles.listItemText,
                isSelected ? { color: Colors.White } : { color: Colors.Gray },
              ]}
              onPress={() => setSelectedItem(info.item.id)}
            />
            {isSelected && (
              <ChevronRightCircleIcon
                color={Colors.Red}
                style={styles.listItemIcon}
              />
            )}
          </View>
          {isLastIndex && canFetchMore && (
            <LoadMoreItem
              text={`${data?.launchesPastResult?.data.length} of ${data?.launchesPastResult.result?.totalCount}`}
              loading={loading}
              style={styles.loadMoreItem}
              onButtonPress={onLoadMorePress}
            />
          )}
        </Fragment>
      );
    },
    [selectedItem, data, loading, canFetchMore]
  );

  if (loading && !data?.launchesPastResult?.data)
    return (
      <ActivityIndicator style={{ flex: 2 }} color={Colors.Blue} size="large" />
    );
  return (
    <FlatList
      initialNumToRender={5}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={data?.launchesPastResult?.data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexBasis: "72%",
    flexGrow: 0,
  },
  listContent: {
    width: windowDimensions.width,
    paddingTop: 15,
    marginBottom: 5,
  },
  listItem: {
    width: "60%",
    alignSelf: "center",
    paddingVertical: 24,
    borderRadius: 15,
  },
  loadMoreItem: {
    width: "60%",
    alignSelf: "center",
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
});

export default memo(MissionsList);
