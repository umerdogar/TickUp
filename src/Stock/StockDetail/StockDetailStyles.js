import { StyleSheet } from "react-native";

// import { hp, wp } from "../../../../../Helpers/Responsiveness";

export const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#181A20",
      paddingHorizontal: 12,
    },
    detailCard: {
      borderWidth: 1,
      height: "50%",
      borderRadius: 20,
      borderColor: "#24262D",
    },
    stockImage: {
      height: "65%",
      width: "100%",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    innerTop: {
      paddingHorizontal: 12,
      marginTop: 14,
    },
    innerDetail: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    name: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#FFFFFF",
      fontWeight: 800,
      marginBottom: 6,
    },
    priceGreen: {
      fontSize: 14,
      fontWeight: "bold",
      color: "green",
      fontWeight: 800,
      marginBottom: 6,
    },
    priceRed: {
      fontSize: 14,
      fontWeight: "bold",
      color: "red",
      fontWeight: 800,
      marginBottom: 6,
    },
    stock: {
      fontSize: 13,
      color: "#A9A9A9",
      fontWeight: 800,
    },
    buttonTop: {
      position: "absolute",
      bottom: 10,
      width: "100%",
      alignSelf: "center",
    },
  });
