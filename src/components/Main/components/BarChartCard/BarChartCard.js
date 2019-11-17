import moment from 'moment';
import React from 'react';
import { Bar, BarChart, Cell, XAxis, YAxis } from 'recharts';
import { convertTemperature } from '../../Main.utils';
import styles from './BarChartCard.css';

const CustomizedLabel = ({ x, y, fill, value, type }) => (
  <text x={x} y={y - 10} fontSize="14" fill={fill}>
    {convertTemperature(value, type)}
  </text>
);

const Label = ({ label }) => (
  <div className={styles.cardLabel}>
    {label}
  </div>
);

const BarChartCard = ({ labelDetails, data, activeScale }) => (
  <div className={styles.cardWrapper}>
    <Label label={labelDetails.label} />
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 25, right: 0, left: 0, bottom: 25 }}
    >
      <XAxis dataKey={labelDetails.xKey} tickSize tickFormatter={label => moment(Date.parse(label)).format('hh:mm')} />
      <YAxis hide />
      <Bar
        dataKey={labelDetails.name}
        barSize={40}
        fontFamily="sans-serif"
        label={<CustomizedLabel type={activeScale}/>}
      >
        {!!data && data.map((entry, index) => (
          <Cell key={index} fill={labelDetails.color} />
        ))}
      </Bar>
    </BarChart>
  </div>
);

export default BarChartCard;
