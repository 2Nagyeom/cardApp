import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
export default function Splash() {

    // expo-router에서는 페이지 이동(네비게이션)을 위해 반드시 useRouter 훅을 사용해야 합니다:
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/Login');
        }, 2000);

        return () => clearTimeout(timer)
    }, [router])

    return (
        <SafeAreaView style={styles.bgContainer}>
            <View>
                <Image source={require('@/assets/icons/cardLabIcon.png')} style={{ alignSelf: 'center', width : 200, height : 200 }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgContainer : {
        flex : 1,
        backgroundColor : '#1A1A2E',
        alignItems : 'center',
        justifyContent : 'center'
    }
})