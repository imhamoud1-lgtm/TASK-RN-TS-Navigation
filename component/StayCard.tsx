import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";  // ADD THIS IMPORT

interface StayCardProps {
  stay: {
    id: number;
    name: string;
    slug: string;  // ADD THIS - make sure it matches the stays data structure
    img: string;
    rating: number;
    price: number;
    location: string;
  };
}

const StayCard = ({ stay }: StayCardProps) => {
  return (
    // Link component wraps the View to make it clickable
    // href prop specifies the destination route using the stay's slug
    // asChild prop tells Link to use the child component as the clickable element
    <Link href={`/stays/${stay.slug}` as any} asChild>
      <View style={styles.container}>
        <Image source={{ uri: stay.img }} style={styles.image} />
      </View>
    </Link>
  );
};

export default StayCard;

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