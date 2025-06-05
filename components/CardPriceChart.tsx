import { useState } from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import {
    LineChart
} from 'react-native-wagmi-charts';

const { width } = Dimensions.get('window');

// chart data
const data = [
    { timestamp: 1629398400000, value: 120000 },
    { timestamp: 1629484800000, value: 140000 },
    { timestamp: 1629571200000, value: 120000 },
    { timestamp: 1629657600000, value: 170000 },
    { timestamp: 1629744000000, value: 160000 },
    { timestamp: 1629830400000, value: 120000 },
    { timestamp: 1629657600000, value: 170000 },
    { timestamp: 1629744000000, value: 160000 },
    { timestamp: 1629484800000, value: 140000 },
    { timestamp: 1629484800000, value: 140000 },
    { timestamp: 1629744000000, value: 160000 },
    { timestamp: 1629830400000, value: 120000 },
    { timestamp: 1629830400000, value: 120000 },
];

// trade data
const trades = [
    { price: 120000, date: 1629398400000 },
    { price: 110000, date: 1629484800000 },
    { price: 130000, date: 1629571200000 },
    { price: 130000, date: 1629571200000 },
    { price: 130000, date: 1629571200000 },
    { price: 130000, date: 1629571200000 },
    { price: 120000, date: 1629571200000 },
    { price: 110000, date: 1629571200000 },
    { price: 120000, date: 1629571200000 },
    { price: 110000, date: 1629571200000 },
];

const dayData = ['1D', '1W', '1M', '1Y']

function generateYTicks(data: { value: number }[], tickCount = 5): number[] {
    const values = data.map((d) => d.value);
    const min = Math.min(...values);
    const max = Math.max(...values);

    const range = max - min;
    const step = Math.ceil(range / (tickCount - 1) / 1000) * 1000; // 천 단위 정렬
    const top = Math.ceil(max / 1000) * 1000;

    const ticks = [];
    for (let i = 0; i < tickCount; i++) {
        ticks.push(top - i * step);
    }

    return ticks;
}

const yTicks = generateYTicks(data); // 원하는 눈금

export default function CardPriceChart() {
    const [daySelected, setDaySelected] = useState('1D')

    return (
        <View style={{
            backgroundColor: '#fff',
        }}>
            <FlatList
                style={{
                    backgroundColor: '#ECF0F4',
                    padding: 4,
                    borderRadius: 10,
                    marginVertical: 24
                }}
                contentContainerStyle={{}}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                data={dayData}
                horizontal
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                    const isSelected = item === daySelected;

                    return (
                        <TouchableOpacity
                            onPress={() => setDaySelected(item)}
                            style={{
                                width: (width - 48) / dayData.length,
                                height: 34,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: isSelected ? '#fff' : 'transparent',
                                borderRadius: 8,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: isSelected ? '700' : '600',
                                    color: isSelected ? '#000' : '#666',
                                }}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            />

            <LineChart.Provider data={data}>
                <View style={{ flexDirection: 'row', gap: 12 }}>
                    {/* Y축 */}
                    <View style={{
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                        marginRight: 6,
                        height: 200,
                    }}>
                        {yTicks.map((val) => (
                            <Text
                                key={val}
                                style={{ fontSize: 12, fontWeight: '700', color: '#A6A6A6' }}
                            >
                                {(val / 1000).toFixed(0)}k
                            </Text>
                        ))}
                    </View>
                    <LineChart
                        width={width / 1.3}
                        height={width / 2}>
                        <LineChart.Path color='#A2D2FF' />
                        <LineChart.CursorCrosshair>
                            <LineChart.Tooltip
                                textStyle={{
                                    backgroundColor: '#1A1A2E',
                                    borderRadius: 4,
                                    color: 'white',
                                    fontSize: 15,
                                    padding: 6,
                                }} />
                        </LineChart.CursorCrosshair>
                    </LineChart>
                </View>
            </LineChart.Provider>

            <Text style={{ marginTop: 48, fontSize: 18, fontWeight: '600' }}>Recent Transaction Details</Text>
            <FlatList
                data={trades}
                style={{ marginTop: 24 }}
                keyExtractor={(_, idx) => idx.toString()}
                ListHeaderComponent={() => (
                    <View style={{
                        flexDirection: 'row',
                        padding: 8,
                        borderRadius: 8,
                        justifyContent: 'space-between',
                        borderBottomWidth: 2,
                        borderBottomColor: '#ECF0F4'
                    }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: '#666' }}>Transaction Price</Text>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: '#666' }}>Trading Date</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
                        <Text style={{ fontWeight: 'bold' }}>{item.price.toLocaleString()}</Text>
                        <Text style={{ fontWeight: 'bold' }}>{`${new Date(item.date).getFullYear()}/${(new Date(item.date).getMonth() + 1).toString().padStart(2, '0')}/${new Date(item.date).
                            getDate()
                            .toString()
                            .padStart(2, '0')}`}</Text>
                    </View>
                )}
            />
        </View>
    )
}
