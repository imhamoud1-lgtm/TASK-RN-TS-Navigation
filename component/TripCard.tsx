import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";  // ADD THIS IMPORT

interface TripCardProps {
  trip: {
    id: number;
    name: string;
    city: string;
    slug: string;
    length1: string;
    difficulty: string;
    details: string;
    img: string;
    rating: string;
  };
}

const TripCard = ({ trip }: TripCardProps) => {
  return (
    // Link component wraps the View to make it clickable
    // href prop specifies the destination route
    // asChild prop tells Link to use the child component as the clickable element
    <Link href={`/trips/${trip.slug}` as any} asChild>
      <View style={styles.container}>
        <Image source={{ uri: trip.img }} style={styles.image} />
      </View>
    </Link>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});