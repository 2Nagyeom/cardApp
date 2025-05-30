import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";



export default function Scan() {
    const { uri } = useLocalSearchParams<{ uri: string }>();
    const [cardHeight, setCardHeight] = useState(0);

    const scanAnim = useRef(new Animated.Value(0)).current;
    const hasNavigated = useRef(false);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scanAnim, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(scanAnim, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true
                })
            ])
        ).start();
    }, [])

    useEffect(() => {
        if (hasNavigated.current) return;
        hasNavigated.current = true;

        const timeOut = setTimeout(() => {
            router.push({
                pathname: '/Result',
                params: { uri }
            })
        }, 3000);

        return () => clearTimeout(timeOut);
    }, [])

    const translateY = scanAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, cardHeight - 4],
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Scanning Card...</Text>
            <View
                style={styles.cardWrapper}
                onLayout={(e) => setCardHeight(e.nativeEvent.layout.height)}>
                <Image source={{ uri }} style={styles.image} />
                <Animated.View
                    style={[styles.scanner, { transform: [{ translateY }] }]}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
    },
    cardWrapper: {
        width: '90%',
        height: '70%',
        // position: 'relative',
        // overflow: 'hidden',
        borderRadius: 12,
        borderWidth: 2,
        // borderColor: '#444',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    scanner: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 4,
        width: '100%',
        backgroundColor: 'rgba(162,210,255,0.6)', // 녹색 스캔선
    },
});