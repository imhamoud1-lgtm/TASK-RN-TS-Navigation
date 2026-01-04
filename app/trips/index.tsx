import DifficultyFilter from "@/component/DifficultyFilter";
import Line from "@/component/Line";
import Searchbar from "@/component/Searchbar";
import TripList from "@/component/TripList";
import trips from "@/data/trips";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

// This component will be accessible at /trips
export default function TripsIndex() {
  // State to manage the search input
  const [search, setSearch] = useState("");
  
  // Filter trips based on search query (case-insensitive)
  const displayTrips = trips.filter((trip) =>
    trip.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Trips</Text>
      
      {/* Searchbar component that updates the search state */}
      <Searchbar setSearch={setSearch} />

      {/* Difficulty filter component */}
      <DifficultyFilter />

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
      
      {/* Render the list of trips */}
      <TripList trips={displayTrips} />
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