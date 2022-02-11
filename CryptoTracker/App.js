import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,SafeAreaView } from 'react-native';

import ListItem from './Components/ListItem';
import { SAMPLE_DATA } from './assets/Data/sampleData.js';

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}> Criptos </Text>
    </View>
    <StatusBar style="auto" />

    <View style={styles.divider} />
  </>
) 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>


      <FlatList
        keyExtractor={(item) => item.id}
        data={SAMPLE_DATA}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage={item.price_change_percentage_7d_in_currency}
            logoUrl={item.image}
          />
        )}
        ListHeaderComponent={<ListHeader />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16
  },

  largeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#8b008b'
  },

  divider: {
    height: 2,
    backgroundColor: '#5b008b',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 15

  }
});
