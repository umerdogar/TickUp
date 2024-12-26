import { StyleSheet } from "react-native";

// import { hp, wp } from "../../../../../Helpers/Responsiveness";

export const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#181A20",
      paddingHorizontal: 12,
    },

    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#1A1C23",
      marginBottom: 10,
      paddingHorizontal: 10,
      paddingVertical: 12,
      borderColor: "#24262D",
      borderWidth: 1,
      borderRadius: 10,
      width: "100%",
    },
    cardInner: {
      flexDirection: "row",
      width: "80%",
      justifyContent: "space-between",
    },
    image: {
      width: 36,
      height: 38,
      marginRight: 14,
      tintColor: "#7F63FF",
      resizeMode: "contain",
      //   borderRadius: 25,
    },
    name: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#FFFFFF",
      fontWeight: 800,
    },
    price: {
      fontSize: 13,
      color: "#A9A9A9",
      fontWeight: 800,
    },
    dailyChange: {
      fontSize: 13,
      fontWeight: 800,
    },
    detail: {
      alignItems: "flex-end",
    },
  });
