import React, { useRef, useMemo, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

import ListItem from './Components/ListItem';
import Chart from './Components/Chart';

import { SAMPLE_DATA } from './assets/Data/sampleData.js';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';



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

  const [selectCoinData, setSelectCoinData] = useState(null);


  const bottomSheetModalRef = useRef(null);


  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item) => {
    setSelectCoinData(item);
    bottomSheetModalRef.current?.present();
  }

  return (
    <BottomSheetModalProvider>
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
              onPress={() => openModal(item)}
            />
          )}
          ListHeaderComponent={<ListHeader />}
        />
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomsheet}

      >
        {selectCoinData ? (
          <Chart
            currentPrice={selectCoinData.current_price}
            logoUrl={selectCoinData.image}
            name={selectCoinData.name}
            symbol={selectCoinData.symbol}
            priceChangePercentage={selectCoinData.price_change_percentage_7d_in_currency}
            sparkline={selectCoinData.sparkline_in_7d.price}
          />
        )
          : null}


      </BottomSheetModal>
    </BottomSheetModalProvider>
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

  },
  bottomsheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
