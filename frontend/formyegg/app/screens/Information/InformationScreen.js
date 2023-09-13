import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import FinanceScreen from "./FinanceScreen";
import PolicyScreen from "./PolicyScreen";
const FirstRoute = () => (
  <FinanceScreen/>
);

const SecondRoute = () => (
  <PolicyScreen/>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "금융상품" },
    { key: "second", title: "출산,육아 지원 정책" }
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
