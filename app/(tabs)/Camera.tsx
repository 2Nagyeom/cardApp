import { Image, SafeAreaView, StyleSheet } from 'react-native';

import { HeaderBar } from '@/components/ui/HeaderBar';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
    return (
        <SafeAreaView style={{flex : 1, backgroundColor : '#fff'}}>
            <HeaderBar
                title="CardLab"
                rightButton={{
                    child : <IconSymbol size={24} name={'magnifyingglass'} color={'#1A1A2E'} />
                }}
                leftButton={{
                    child : <Image source={require('@/assets/icons/cardLabIcon.png')} style={{width : 44, height :44}} />
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
