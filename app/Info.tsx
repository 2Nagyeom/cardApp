import { HeaderBar } from "@/components/ui/HeaderBar";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { router } from "expo-router";
import React from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, View } from "react-native";

const { width, height } = Dimensions.get('window');
export default function Info() {

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
                    <View style={{paddingHorizontal : 20}}>
                        
                    </View>
                </ScrollView>
        </SafeAreaView>
    )
}