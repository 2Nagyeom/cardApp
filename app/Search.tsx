import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { HeaderBar } from '@/components/ui/HeaderBar';
import { IconSymbol } from '@/components/ui/IconSymbol';

const {width} = Dimensions.get('window')

type RecommendSection = {
    title: String;
    from : String;
    img : any;
    seller : Number;
    onPress : () => void;
}

export default function Search() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <HeaderBar
                style={{marginTop : 8, borderBottomColor : '#1A1A2E', paddingBottom : 16}}
                rightButton={{
                    child: <IconSymbol size={24} name={'magnifyingglass'} color={'#1A1A2E'} />,
                    onPress: () => router.push('/Search')
                }}
                leftButton={{
                    child:  <IconSymbol size={24} name={'chevron.left'} color={'#1A1A2E'} />,
                    onPress : () => router.back()
                }}
            />
            <View style={{flex : 1, paddingHorizontal : 20}}>
                <View style={styles.searchContainer}>
                    <View style={styles.recentContainer}>
                        <Text style={{fontSize : 16, fontWeight : '500', color : '#10375C'}}>recent search</Text>
                        <TouchableOpacity><Text style={{fontSize : 14, fontWeight : '500', color : '#A2D2FF'}}>add all</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.splitLine}>
                    <View style={styles.searchClickContainer}>
                        <TouchableOpacity style={styles.searchClickContent}>
                            <View style={{width : 28, height : 28, justifyContent : 'center', alignItems : 'center', borderRadius : 50, backgroundColor : '#F5F5F5'}}>
                                <IconSymbol size={18} name={'magnifyingglass'} color={'#1A1A2E'} />
                            </View>
                            <Text style={{fontWeight : '500', color : '#10375C'}}>nami manga</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelContent}>
                            <Text style={{color : '#A2D2FF'}}>25.04.29</Text>
                            <IconSymbol size={18} name={'xmark'} color={'#A2D2FF'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{gap : 24}}>
                    <Text style={{fontSize : 20, fontWeight : '700', color : '#10375C'}}>Recommend for you</Text>
                    <ScrollView 
                        style={{marginBottom : 24}}
                        showsVerticalScrollIndicator={false}>
                    {
                        sections.map((section) => (
                            <View style={styles.itemContainer}>
                                <Image source={section.img} style={{width : 70, height : 108, borderRadius : 4}} />
                                <View style={styles.itemTitleContainer}>
                                    <View>
                                        <Text style={{fontSize : 16, fontWeight : '700', color : '#10375C'}}>{section.title}</Text>
                                        <Text style={{fontSize : 14, fontWeight : '500', color : '#10375C'}}>{section.from}</Text>
                                    </View>
                                    <View style={styles.itemContactContainer}>
                                        <Text style={{fontSize : 14, fontWeight : '600', color : '#E94560'}}>{String(section.seller)} Sellers Sell This Card</Text>
                                        <TouchableOpacity 
                                            onPress={section.onPress}>
                                                <Text style={{fontSize : 14, fontWeight : '600', color : '#3E82F1'}}>contact now!</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const sections: RecommendSection[] = [
    { title : 'Zoro Leader Pereal', from : 'season OP01', img : require('@/assets/cards/OP01-001.png'), seller : 3, onPress : () => {}},
    { title : 'Low Leader Pereal', from : 'season OP01', img : require('@/assets/cards/OP01-002.png'), seller : 3, onPress : () => {}},
    { title : 'Loopy Leader Pereal', from : 'season OP01', img : require('@/assets/cards/OP01-003.png'), seller : 2, onPress : () => {}},
    { title : 'Doplamingo Leader Pereal', from : 'season OP01', img : require('@/assets/cards/OP01-060.png'), seller : 5, onPress : () => {}},
    { title : 'Shank manga', from : 'season OP01', img : require('@/assets/cards/OP01-120.png'), seller : 10, onPress : () => {}},
    { title : 'King Leader Pereal', from : 'season OP01', img : require('@/assets/cards/OP01-091.png'), seller : 1, onPress : () => {}},
]

const styles = StyleSheet.create({
    searchContainer : {
        marginTop : 24, 
        gap : 8
    },
    recentContainer : {
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        alignItems : 'center'
    },
    splitLine : {
        marginVertical : 12, 
        gap : 8, 
        paddingBottom : 8, 
        borderBottomWidth: 1, 
        borderBottomColor : '#DADADA'
    },
    searchClickContainer : {
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        alignItems : 'center'
    },
    searchClickContent : {
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        alignItems : 'center', 
        gap : 8
    },
    cancelContent : {
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        alignItems : 'center', 
        gap : 8
    },
    itemContainer : {
        flexDirection : 'row', 
        justifyContent : 'flex-start', 
        gap : 24, 
        marginBottom : 24 
    },
    itemTitleContainer : {
        flexDirection : 'column',
        justifyContent : 'space-between',
        flex : 1
    },
    itemContactContainer : {
        flexDirection : 'row', 
        alignItems : 'center', 
        justifyContent : 'space-between'
    },
});
