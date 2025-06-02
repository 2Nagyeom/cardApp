import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import { useMemo, useRef } from "react";
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { HeaderBar } from "@/components/ui/HeaderBar";
import { IconSymbol } from "@/components/ui/IconSymbol";

const { width, height } = Dimensions.get('window')

export default function Reseult() {
    // camera component 에서 받아온 이미지 uri 불러오기

    const bottomSheetRef = useRef<BottomSheet>(null)
    const snapPoints = useMemo(() => ['5%', '60%', '90%'], [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <HeaderBar
                style={{ borderBottomColor: '#000', color: '#fff' }}
                leftButton={{
                    child: <IconSymbol size={24} name={'chevron.left'} color={"#1A1A2E"} />,
                    onPress: () => router.push('/(tabs)/Camera')
                }}
                title={'.'}
            />
            <LinearGradient colors={["#1A1A2E", "#000"]} style={{ flex: 1, left: 0, right: 0, top: 0 }}>
                <View style={styles.imageContainer}>
                    <Image source={require('@/assets/cards/OP01-120.png')} style={{marginTop : 44, width: width*0.92, height: height*0.6, borderRadius: 8 }} />
                    <TouchableOpacity
                        style={styles.imageTextView}
                        onPress={() => router.push('/Info')}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: '#10375C' }}>Shank manga</Text>
                        <Text style={{ fontWeight: '500', color: '#10375C' }}>from Onepiece OP01</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => bottomSheetRef.current?.snapToIndex(1)}>
                        <Text style={styles.questionText}>Isn't this the card?</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
            >
                <BottomSheetView
                    style={styles.bottomSheetContainer}
                >
                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#1A1A2E' }}>A silmilar Card</Text>
                    <FlatList
                        data={images}
                        keyExtractor={item => String(item.id)}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        renderItem={({ item }) => (
                            <TouchableOpacity 
                                style={{ alignItems: 'center', marginBottom: 24 }}>
                                <Image source={item.src} style={{ width: 168, height: 230, borderRadius: 8 }} />
                            </TouchableOpacity>
                        )}
                    />
                </BottomSheetView>
            </BottomSheet>
        </SafeAreaView>
    )
}

const images = [
    { id: 0, src: require('@/assets/cards/OP02-013.png') },
    { id: 1, src: require('@/assets/cards/OP02-013.png') },
    { id: 2, src: require('@/assets/cards/OP02-013.png') },
    { id: 3, src: require('@/assets/cards/OP02-013.png') },
]

const styles = StyleSheet.create({
    imageContainer: {
        height: height,
        flex : 1,
        alignItems: 'center',
        gap: 20,
    },
    imageTextView: {
        width: width - 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: '#BFD7EA'
    },
    bottomSheetContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 16,
        gap: 16
    },
    questionText: {
        // marginTop: 12,
        color: '#A2D2FF',
        fontSize: 18,
        fontWeight: '500',
        textDecorationLine: 'underline',
    }
})