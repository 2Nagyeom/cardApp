import React from 'react';
import { Dimensions, View } from 'react-native';
import {
    VictoryAxis,
    VictoryChart,
    VictoryLine,
    VictoryTooltip,
} from 'victory-native';

const { width, height } = Dimensions.get('window');

const priceData = [
  { x: new Date('2025-01-12'), y: 120000 },
  { x: new Date('2025-02-12'), y: 140000 },
  { x: new Date('2025-03-12'), y: 120000 },
  { x: new Date('2025-04-12'), y: 170000 },
  { x: new Date('2025-05-12'), y: 160000 },
  { x: new Date('2025-06-12'), y: 120000 },
];

export default function CardPriceChart() {
    return (
        <View style={{marginLeft : -20, width : width, height: 400, justifyContent : 'center', backgroundColor : 'green' }}>
            <VictoryChart
                domainPadding={{ y: 40 }}
                scale={{ x: 'time' }}
            >
                {/* X축 (날짜) */}
                <VictoryAxis
                    fixLabelOverlap
                    tickFormat={(t) => `${new Date(t).getMonth() + 1}월`}
                    style={{
                        axis: { stroke: '#ccc' },
                        tickLabels: { fontSize: 22, fill: '#333' },
                        grid: { stroke: 'transparent' },
                    }}
                />

                {/* Y축 (가격) */}
                <VictoryAxis
                    dependentAxis
                    tickFormat={(t) => 
                        `${t / 1000}k`}
                    style={{
                        axis: { stroke: '' },
                        tickLabels: { fontSize: 33, fill: '#333' },
                        grid: { stroke: '#eee' },
                    }}
                />

                {/* 선 + 라벨 */}
                <VictoryLine
                    data={priceData}
                    interpolation="monotoneX"
                    labels={({ datum }) => `${datum.y.toLocaleString()}원`}
                    labelComponent={
                        <VictoryTooltip
                            renderInPortal={false}
                            flyoutStyle={{ fill: '#fff', stroke: '#999' }}
                            style={{ fontSize: 12, fill: '#000' }}
                            dy={-25}
                        />
                    }
                    style={{
                        data: { stroke: '#A2D2FF', strokeWidth: 2 },
                    }}
                />
            </VictoryChart>
        </View>
    );
}
