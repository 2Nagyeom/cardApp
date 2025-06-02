import CardPriceChart from "@/components/CardPriceChart";
import { HeaderBar } from "@/components/ui/HeaderBar";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { router } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get('window');
export default function Info() {

    const [count, setCount] = useState(0);
    const [isBook, setIsBook] = useState(false);

    const bookCount = () => {
        isBook ? setCount(count - 1) : setCount(count + 1)
    }

    const hasBook = () => {
        setIsBook(!isBook)
    }


    return (
        <SafeAreaView style={{flex : 1, backgroundColor : '#fff'}}>
            <HeaderBar
                style={{ borderBottomColor: '#ECF0F4', color: '#fff' }}
                leftButton={{
                    child: <IconSymbol size={24} name={'chevron.left'} color={"#1A1A2E"} />,
                    onPress: () => router.back()
                }}
                title={'.'}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                    <View style={{paddingVertical : 24, backgroundColor : '#D9D9D9', justifyContent : 'center', alignItems : 'center'}}>
                        <Image source={require('@/assets/cards/OP01-001.png')}style={{width : width*0.63, height : width*0.88, borderRadius : 8}} />
                    </View> 
                    <View style={styles.infoContainer}>
                        <Text style={{fontSize : 20, fontWeight : '600'}}>Zoro Leader Pearl</Text>
                        <Text style={{marginTop : 6, fontSize : 16, fontWeight : '500'}}>from OP01</Text>
                        <Text style={{fontSize : 15, color : '#ACACAC'}}>Dooong * 1 During your turn, the power of all your characters + 1000</Text>
                        <View style={{marginTop : 24, flexDirection : 'row', justifyContent : 'space-between', alignItems : 'flex-start'}}>
                            <Text style={{fontWeight : '600', color :'#ACACAC'}}>recent transaction Price</Text>
                            <View style={{alignItems : 'flex-end'}}>
                                <Text style={{fontSize : 24, fontWeight : '700'}}>120,000</Text>
                                <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-start', marginTop : 4, gap : 4}}>
                                <IconSymbol size={16} name="triangle.fill" color={'#E94560'} />
                                {/* <IconSymbol size={16} name="triangle.fill" color={'#A2D2FF'} style={{transform : [{ rotate : '180deg'}]}}/> */}
                                <Text>20,000</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.marketPriceContainer}>
                            <Text style={{fontSize : 18, fontWeight : '600'}}>Market Price</Text>
                            <CardPriceChart />
                        </View>
                    </View>
            </ScrollView>
            <View style={styles.bottomBarContainer}>
                <TouchableOpacity 
                    style={{marginTop : 12, alignItems : 'center'}}
                    onPress={() => {
                        bookCount(),
                        hasBook()}}>
                    {
                        isBook ? <IconSymbol size={24} name="bookmark.fill" color={'#1A1A2E'} /> : <IconSymbol size={24} name="bookmark" color={'#1A1A2E'} />
                    }
                    <Text>{count}</Text>
                </TouchableOpacity>
                <View style={styles.bottomBtnContainer}>
                <TouchableOpacity style={[styles.bottomBtn, {backgroundColor : '#E94560'}]}>
                    <Text style={{fontSize : 20, fontWeight : '600', color : '#fff', }}>buy</Text>
                    <View style={{width : 1, height : 50, backgroundColor : '#A93145'}}/>
                    <View>
                        <Text style={{fontSize : 16, fontWeight : '600', color : '#fff' }}>120,000</Text>
                        <Text style={{color : '#A93145'}}>Current</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottomBtn, {backgroundColor : '#A2D2FF'}]}>
                    <Text style={{fontSize : 20, fontWeight : '600', color : '#fff', }}>Sell</Text>
                    <View style={{width : 1, height : 50, backgroundColor : '#8BB5DB'}}/>
                    <View>
                        <Text style={{fontSize : 16, fontWeight : '600', color : '#fff' }}>100,000</Text>
                        <Text style={{color : '#8BB5DB'}}>Current</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    infoContainer : {
        paddingHorizontal : 20,
        marginTop : 18
    },
    bottomBarContainer : {
        height : 58,
        borderTopWidth : 1,
        borderTopColor : '#D9D9D9',
        marginTop : 0,
        paddingHorizontal : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'flex-start'
    },
    bottomBtnContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        gap : 12,
        marginTop : 12
        // flex : 1
    },
    bottomBtn : {
        width : width*0.38,
        height : 50,
        borderRadius : 12,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        paddingHorizontal : 12,
        gap : 8
    },
    marketPriceContainer : {
        marginTop : 44,
        width : width-40,
        height : height,
        // borderWidth : 1,
        // borderColor : 'red'
    }
})