import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../src/Splash/SplashScreen";
import StockList from "../src/Stock/StockList/StockList";
import StockDetail from "../src/Stock/StockDetail/StockDetail";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer
      screenOptions={{
        animationEnabled: true,
        animationTypeForReplace: "pop", // Choose suitable animation
      }}
    >
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StockList"
          component={StockList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StockDetail"
          component={StockDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
