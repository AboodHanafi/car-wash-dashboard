import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
const data = [
  { name: " الرابع", حجز: 100 },
  { name: "الثالث", حجز: 63 },
  { name: "الثاني", حجز: 44 },
  { name: "الأول", حجز: 13 },
];
const ChartBar = () => {
  return (
    <BarChart
      style={{ backgroundColor: "#F6F6F6" }}
      width={500}
      height={380}
      data={data}
    >
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis
        // tickFormatter={(10, 3)}
        // minTickGap={10}
        // tickCount={"10"}
        padding={{ top: 10 }}
        tickMargin={25}
        ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
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
        }}
        contentStyle={{
          backgroundColor: "#4C2784",
          borderRadius: 20,
          border: "none",
        }}
        wrapperStyle={{ width: 100, borderRadius: 20 }}
      />

      <Bar radius={[30, 30, 0, 0]} dataKey="حجز" fill="#BCABFF" barSize={22} />
    </BarChart>
  );
};

export default ChartBar;
