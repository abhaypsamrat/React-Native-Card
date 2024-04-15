import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa Mahal</Text>
        <Text style={styles.cardLable}>Pink city, Jaipur</Text>
        <Text style={styles.cardDescriptaion}>
          The Hawa Mahal is a palace in the city of Jaipur, India. Build from
          red and pink sandstone, it is on the edge of the City Palace.
        </Text>
        <Text style={styles.cardFooter}>12 min away</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  cardElevated: {},
  cardImage: {
    height: 150,
  },
  cardBody: {},
  cardTitle: {},
  cardLable: {},
  cardDescriptaion: {},
  cardFooter: {},
});
