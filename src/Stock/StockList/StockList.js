import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../../components/Header/Header";
import { makeStyles } from "./StockListStyles";
import { useTheme } from "@react-navigation/native";
import Container from "../../../components/Container/Container";
import stockData from "../../../assets/data/dummyData";
import { useNavigation } from "@react-navigation/native";

const StockList = () => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.container}>
        <Header title={"Stock List"} profile={"profile"} />
        <FlatList
          data={stockData}
          keyExtractor={(item) => item.symbol}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("StockDetail", { stockData: item })
              }
            >
              <Image source={item.image} style={styles.image} />
              <View style={styles.cardInner}>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>${item.symbol}</Text>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.price}>${item.price}</Text>

                  <Text
                    style={[
                      styles.dailyChange,
                      { color: item.daily_change > 0 ? "green" : "red" },
                    ]}
                  >
                    {item.daily_change > 0 ? "+" : ""}
                    {item.daily_change.toFixed(2)}%
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Container>
  );
};

export default StockList;
