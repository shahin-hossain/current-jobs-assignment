import React, { PureComponent, useCallback, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

import bg1 from '../../assets/images/bg1.png'

const data = [
    { name: 'Assignment-1', value: 50 },
    { name: 'Assignment-2', value: 60 },
    { name: 'Assignment-3', value: 55 },
    { name: 'Assignment-4', value: 45 },
    { name: 'Assignment-5', value: 60 },
    { name: 'Assignment-6', value: 50 },
    { name: 'Assignment-7', value: 55 },
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Marks ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const Statistics = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <div>
            <div className='relative'>
                <img src={bg1} alt="" />
                <h2 className='text-3xl font-bold absolute top-1/2  md:start-[450px] text-violet-800'>Marks Statistics</h2>
            </div>

            <PieChart width={1000} height={500}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx={560}
                    cy={250}
                    innerRadius={100}
                    outerRadius={200}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>

        </div>
    );
};

export default Statistics;