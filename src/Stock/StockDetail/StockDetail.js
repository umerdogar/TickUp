import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../../components/Header/Header";
import { makeStyles } from "./StockDetailStyles";
import { useTheme } from "@react-navigation/native";
import Container from "../../../components/Container/Container";
import stockData from "../../../assets/data/dummyData";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../../components/Button/Button";

const StockDetail = (props) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  const navigation = useNavigation();
  console.log("props", props?.route?.params?.stockData);

  return (
    <Container>
      <View style={styles.container}>
        <Header
          title={"Stock Detail"}
          back={"back"}
          onBackPress={() => navigation.goBack()}
        />
        <View style={styles.detailCard}>
          <Image
            source={
              props?.route?.params?.stockData.increase
                ? require("../../../assets/images/PositiveStock.webp")
                : require("../../../assets/images/NegativeStock.webp")
            }
            style={styles.stockImage}
          />
          <View style={styles.innerTop}>
            <View style={styles.innerDetail}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.stock}>
                {props?.route?.params?.stockData.name}
              </Text>
            </View>
            <View style={styles.innerDetail}>
              <Text style={styles.name}>Symbol</Text>
              <Text style={styles.stock}>
                {props?.route?.params?.stockData.symbol}
              </Text>
            </View>
            <View style={styles.innerDetail}>
              <Text style={styles.name}>Price</Text>
              <Text style={styles.stock}>
                {props?.route?.params?.stockData.price}
              </Text>
            </View>
            <View style={styles.innerDetail}>
              <Text style={styles.name}>
                {props?.route?.params?.stockData.increase
                  ? "Increase"
                  : "Decrease"}
              </Text>
              <Text
                style={
                  props?.route?.params?.stockData.increase
                    ? styles.priceGreen
                    : styles.priceRed
                }
              >
                {props?.route?.params?.stockData.increase ? "+" : ""}{" "}
                {props?.route?.params?.stockData.daily_change}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonTop}>
          <CustomButton
            title="Click To Invest"
            onPress={() => alert("Feature Coming Soon!")}
            backgroundColor="#28a745"
            textColor="#FFFFFF"
          />
        </View>
      </View>
    </Container>
  );
};

export default StockDetail;
