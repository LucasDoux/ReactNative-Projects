import React from 'react';
import { View, Text } from 'react-native'
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Container } from './styles';

 
const ListItem = ({name,symbol,currentPrice,priceChangePercentage,logoUrl}) => {
    
    const PriceChangeColor = priceChangePercentage > 0 ? '#34C759' : '#FF3839';

    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                {/*Lado esquedo*/}
                <View style={styles.leftWrapper}>

                    <Image source={{uri:logoUrl}} style={styles.image} />

                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                    </View>

                </View>


                {/*Lado direito*/}
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>${currentPrice.toLocaleString('en-US',{currency:'USD'})}</Text>
                    <Text style={[styles.subtitle, {color:PriceChangeColor}]}>{priceChangePercentage.toFixed(2)}%</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal:16,
        marginTop:24,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
    },

    leftWrapper: {
        flexDirection:'row',
        alignItems:'center',
    },

    image:{
        height: 48,
        width: 48,
    },
    
    titlesWrapper:{
        marginLeft:8
    },

    title:{
        fontSize:18,
    },

    subtitle:{
        color:'#A9ABB1',
        fontSize:14,
    },

    rightWrapper: {
       alignItems:'flex-end',

    }

})

export default ListItem;