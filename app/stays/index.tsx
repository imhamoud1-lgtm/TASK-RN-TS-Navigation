import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Searchbar from "@/component/Searchbar";
import Line from "@/component/Line";
import StaysList from "@/component/StaysList";
import stays from "@/data/stays";

// This component will be accessible at /stays
export default function StaysIndex() {
  // State to manage the search input
  const [search, setSearch] = useState("");
  
  // Filter stays based on search query (case-insensitive)
  const displayStays = stays.filter((stay) =>
    stay.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Stays</Text>
      
      {/* Searchbar component that updates the search state */}
      <Searchbar setSearch={setSearch} />
      
      {/* Decorative lines */}
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Line width={"50%"} color="#1abc9c" />
        <Line width={"50%"} color="#1abc9c" />
      </View>

      {/* Render the list of stays */}
      <StaysList stays={displayStays} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});