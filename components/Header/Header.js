import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Header = ({ title, profile, back, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      {profile && (
        <Image
          source={require("../../assets/images/Profile.png")}
          style={styles.profile}
          testID="profile-image" // Added for testing
        />
      )}
      {back && (
        <TouchableOpacity
          onPress={onBackPress}
          hitSlop={{ top: 10, bottom: 20, left: 20, right: 20 }}
          testID="back-button" // Added for testing
        >
          <Image
            source={require("../../assets/images/ArrowLeft.png")}
            style={styles.back}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.spacer} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
  },
  profile: {
    height: 36,
    width: 36,
    resizeMode: "cover",
  },
  back: {
    height: 20,
    width: 20,
    resizeMode: "cover",
  },
  spacer: {
    width: 36, // Match the width of the profile icon to maintain alignment
  },
});
