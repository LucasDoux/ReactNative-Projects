import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Chart = ({currentPrice, logoUrl, name, symbol, priceChangePercentage, sparkline}) => {

    const PriceChangeColor = priceChangePercentage > 0 ? '#34C759' : '#FF3839';

    return (
        <View style={styles.charWrapper}>
            <View style={styles.titleWrapper}>
                <View style={styles.upperTitle}>
                    <View style={styles.upperLeftTtile}>
                        <Image source={{ uri: logoUrl }} style={styles.image} />
                        <Text style={styles.subtitle}>{name} ({symbol.toUpperCase()})</Text>
                    </View>

                    <Text style={styles.subtitle}>872824</Text>
                </View>

                <View style={styles.lowerTitle}>
                    <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US',{currency:'USD'})}</Text>
                    <Text style={[styles.title,{color:PriceChangeColor}]}>{priceChangePercentage.toFixed(2)}%</Text>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
charWrapper:{
    margin:16
},
titleWrapper:{

},
upperTitle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
},
upperLeftTtile:{
    flexDirection:'row',
    alignItems:'center'
},
image:{
    width:24,
    height:24,
    marginRight:4,
},
subtitle:{
    fontSize:14,
    color:'#A9ABB1' 
},

lowerTitle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
},
boldTitle:{
    fontSize:24,
    fontWeight:'bold'
},
title:{
    fontSize:18
}
})

export default Chart;