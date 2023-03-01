import { PieChart, Pie, Cell } from 'recharts';

let RGB = '47, 88, 205';

let data = [{ name: 'A', value: 20, color: `rgba(${RGB},0.7)` },
{ name: 'B', value: 30, color: `rgba(${RGB},0.85)` },
{ name: 'C', value: 20, color: `rgba(${RGB},1)` }
]

const RADIAN = Math.PI / 180;
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;

const needle = (value, cx, cy, iR, oR, color) => {
    let total = 100;
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 10;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
        <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
        <path d={`M${xba},${yba}L${xbb},${ybb},L${xp},${yp},L${xba},${yba}`} stroke="#none" fill={color} />,
    ];
};

const HumidityChart = (props) => {
    let humidity = 20;
    return (
        <PieChart width={300} height={300}>
            <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx={cx}
                cy={cy}
                innerRadius={iR}
                outerRadius={oR}
                fill="#aaaab1"
                stroke="none"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))}

            </Pie>
            {needle(humidity, cx, cy, iR, oR, '#150050')}
        </PieChart>
    );
}

export default HumidityChart;