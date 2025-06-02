import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const {width, height} = Dimensions.get('screen');
// 예시 데이터 (y축: 가격, x축: 월)
const priceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apri', 'May', 'Jun'],
    datasets: [
        {
            data: [120000, 140000, 120000, 170000, 160000, 120000],
            color: (opacity = 1) => `rgba(162, 210, 255, ${opacity})`, //' 선 색상
            strokeWidth: 2, // 선 두께
        },
    ],
};

const chartConfig = {
    // backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: () => '#fff',
    labelColor: () => '#ACACAC',
    style: {
        borderRadius: 16,
    },
    // propsForDots: {
    //     r: '4',
    //     strokeWidth: '2',
    //     stroke: '#A2D2FF',
    // },
};

export default function CardPriceChart() {

    return (
        <View style={{marginTop : 44}}>
            <LineChart
                data={priceData}
                width={width - 20}
                height={240}
                chartConfig={chartConfig}
                style={{ borderRadius: 16 }}
                formatYLabel={(y) => {
                    const val = Number(y);
                    return isNaN(val) ? '' : `${val / 1000}k`;
                }}
                fromZero
            />
        </View>
    );
}
