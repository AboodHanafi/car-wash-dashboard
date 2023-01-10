import { useMediaQuery } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "حي الصفا", حجز: 240 },
  { name: "حي ابحر الشمالية", حجز: 190 },
  { name: "حي الحمدانية", حجز: 160 },
  { name: "حي المرجان	", حجز: 120 },
  { name: "حي النعيم	", حجز: 112 },
  { name: "حي السلامة	", حجز: 56 },
  { name: "حي الشاطئ	", حجز: 45 },
  { name: "حي الكورنيش الشمالي", حجز: 56 },
];
const LocationsChartBar = () => {
  const bigLabtob = useMediaQuery("(max-width:1024px)");

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        style={{
          backgroundColor: "#F6F6F6",
          fontSize: "12px",
          borderRadius: "0 0 10px 10px",
        }}
        data={data}
      >
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis
          // tickFormatter={(10, 3)}
          // minTickGap={10}
          tickCount={10}
          padding={{ top: 10 }}
          tickMargin={35}
          // ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          width={50}
          // range={[10, 20, 30, 40, 50, 60, 70, 80, 90]}
        />
        <Tooltip
          separator=" "
          labelStyle={{ display: "none" }}
          itemStyle={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-around",
            //   margin: "",
            border: "none",
            color: "#FCFCFC",
            fontSize: "12px",
          }}
          contentStyle={{
            backgroundColor: "#4C2784",
            borderRadius: 20,
            border: "none",
          }}
          wrapperStyle={{ width: 60, borderRadius: 20 }}
        />

        <Bar dataKey="حجز" fill="#BCABFF" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LocationsChartBar;
