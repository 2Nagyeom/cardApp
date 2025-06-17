import { HeaderBar } from '@/components/ui/HeaderBar';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { APIS } from '../apis/APIS';
import { Card } from '../TYPE/cardType';

type CateSection = {
    title: String;
    data: cateItem[];
}

type cateItem = {
    label: string;
    img: any;
    style: any;
    onPress: () => void;
}

export default function TabTwoScreen() {

    const [newCards, setNewCards] = useState<Card[]>([])

    useEffect(() => {
        APIS()
            .then((json) => {
                setNewCards(json.result);
            })
            .catch((e) => console.log(e));
    }, []);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginBottom : 60 }}>
            <HeaderBar
                title="CardLab"
                rightButton={{
                    child: <IconSymbol size={24} name={'magnifyingglass'} color={'#1A1A2E'} />,
                    onPress: () => router.push('/Search')
                }}
                leftButton={{
                    child: <Image source={require('@/assets/icons/cardLabIcon.png')} style={{ width: 44, height: 44 }} />
                }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {
                    sections.map((section) => (
                        <View style={{ marginTop: 16, gap: 16 }}>
                            <Text style={[styles.mainText, { marginBottom: 12, paddingHorizontal: 20 }]}>{section.title}</Text>
                            <FlatList
                                data={section.data}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item.label}
                                renderItem={({ item, index }) => {
                                    let itemConatainerStyle = styles.itemContainer;
                                    if (section.title === 'New Card release!') {
                                        itemConatainerStyle = styles.newItemContainer;
                                    }
                                    return (
                                        <TouchableOpacity
                                            style={itemConatainerStyle}
                                            onPress={item.onPress}>
                                            <Image source={item.img} style={item.style} />
                                            <Text style={styles.itemText}>{item.label}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                            <View style={styles.splitContainer} />
                        </View>
                    ))
                }
                {
                    newCards.length > 0 && (
                        <View style={{ marginTop: 16, gap: 16 }}>
                            <Text style={[styles.mainText, { paddingHorizontal: 20 }]}>New Card release!</Text>
                            <FlatList
                                data={newCards}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.cardNo}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={styles.newItemContainer}
                                        // onPress={() => router.push({
                                        //     pathname : '/Info',
                                        //     params : {
                                        //         // img : item.cardImage,
                                        //         // name : item.cardName,
                                        //         // price : item.cardPrice,
                                        //         // cardNo : item.cardNo,

                                        //     })} // 상세로 이동하는 로직 추가 가능
                                    >
                                        <Image
                                            source={{ uri: item.cardImage }}
                                            style={{ width: 150, height: 210, borderRadius: 10 }}
                                        />
                                        <Text style={styles.itemText}>{item.cardName}</Text>
                                        {/* <Text style={[styles.itemText, { fontSize: 14, color: '#555' }]}>₩{item.cardPrice}</Text> */}
                                    </TouchableOpacity>
                                )}
                            />
                            <View style={styles.splitContainer} />
                        </View>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const sections: CateSection[] = [
    {
        title: 'Card Categories',
        data: [
            { label: 'OnePiece', img: require('@/assets/images/cateOne.png'), style: { width: 84, height: 84, borderRadius: 24 }, onPress: () => { } },
            { label: 'Poketmon', img: require('@/assets/images/catePoket.png'), style: { width: 84, height: 84, borderRadius: 24 }, onPress: () => { } },
            { label: 'Digimon', img: require('@/assets/images/catePoket.png'), style: { width: 84, height: 84, borderRadius: 24 }, onPress: () => { } },
        ]
    },
    // {
    //     title: 'New Card release!',
    //     data: [
    //         { label: 'Zoro Leader Pereal', img: require('@/assets/cards/OP01-001.png'), style: { width: 140, height: 200, borderRadius: 10 }, onPress: () => { router.push('/Info') } },
    //         { label: 'Low Leader Pereal', img: require('@/assets/cards/OP01-002.png'), style: { width: 140, height: 200, borderRadius: 10 }, onPress: () => { router.push('/Info') } },
    //         { label: 'Loopy Leader Pereal', img: require('@/assets/cards/OP01-003.png'), style: { width: 140, height: 200, borderRadius: 10 }, onPress: () => { router.push('/Info') } },
    //         { label: 'Doplamingo Leader Pereal', img: require('@/assets/cards/OP01-060.png'), style: { width: 140, height: 200, borderRadius: 10 }, onPress: () => { router.push('/Info') } },
    //     ]
    // },
    {
        title: 'Recommend for you',
        data: [
            { label: 'Shanks Leader Pereal', img: require('@/assets/cards/OP01-120.png'), style: { width: 124, height: 174, borderRadius: 10 }, onPress: () => { } },
            { label: 'Kaido Leader Pereal', img: require('@/assets/cards/OP01-061.png'), style: { width: 124, height: 174, borderRadius: 10 }, onPress: () => { } },
            { label: 'Crokerdail Leader Pereal', img: require('@/assets/cards/OP01-062.png'), style: { width: 124, height: 174, borderRadius: 10 }, onPress: () => { } },
            { label: 'King Leader Pereal', img: require('@/assets/cards/OP01-091.png'), style: { width: 124, height: 174, borderRadius: 10 }, onPress: () => { } },
        ]
    }
]

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 6
    },
    newItemContainer: {
        width: 160,
        height: 236,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginLeft: 20,
        backgroundColor: 'rgba(191, 215, 234, 0.6)'
    },
    splitContainer: {
        width: '100%',
        height: 10,
        backgroundColor: '#ECF0F4',
        marginTop: 12
    },
    mainText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1A1A2E'
    },
    itemText: {
        fontWeight: '600',
        fontSize: 16,
        color: '#1A1A2E',
        maxWidth: 120,
        textAlign: 'center'
    }
});
