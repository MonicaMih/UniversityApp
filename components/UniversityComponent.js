import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function UniversityComponent() {
  const { params } = useRoute();
  const { country } = params;
  console.log(country);
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        paddingTop: 5,
        justifyContent: "flex-start",
        alignItems: "baseline",
        backgroundColor: "#8FBC8F",
      }}
    >
      <Image
        style={{
          width: 400,
          height: 170,
          resizeMode: "cover",
        }}
        source={{
          uri: "https://www.kaplanpathways.com/wp-content/uploads/2016/10/apply-north-american-university-header.jpg",
        }}
      />
      <Text style={styles.ftitle}>
        {"\n"}
        {`Name: ${country.name}`}
        {"\n"}
      </Text>

      <Text style={styles.ftitle}>
        {`Alpha two code: ${country.alpha_two_code}`} {"\n"}
      </Text>

      <Text style={styles.ftitle}>
        {`Domains: ${country.domains[0]}`} {"\n"}
      </Text>

      <Text style={styles.ftitle}>
        {`State-province: ${country["state-province"]}`} {"\n"}
      </Text>
      <Text style={styles.ftitle}>{`Web_pages: ${country.web_pages[0]}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ftitle: {
    color: "#000000",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
