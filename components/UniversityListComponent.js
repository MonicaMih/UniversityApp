import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function UniversityListComponent() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const handlerUniversityPress = (country) => {
    navigation.navigate("UniversityComponent", {
      country,
    });
  };

  const getCountry = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country="
      );
      const countries = await response.json();
      setData(countries);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        paddingTop: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8FBC8F",
      }}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : error ? (
        <Button title="Retry" onPress={getCountry}></Button>
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ name }, index) => name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                handlerUniversityPress(item);
              }}
            >
              <Text>
                {item.country}, <Text style={styles.ftitle}>{item.name}</Text>
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
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
