import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const Container = (props) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        animated={true}
        backgroundColor={
          props.backgroundColor ? props.backgroundColor : "#181A20"
        }
        barStyle={props.barStyle ? props.barStyle : "#181A20"}
      />
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
