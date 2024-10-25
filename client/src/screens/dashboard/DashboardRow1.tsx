import DashboardBox from "../../components/DashboardBox";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useMemo } from "react";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material"; 

// type Props = {}

const DashboardRow1 = () => {
  const { palette } = useTheme();
  const { data } = useGetKpisQuery();
  console.log("data:", data);
  const revenueExpenses = useMemo(() => {
    return (
      data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0,3),
          revenue: revenue,
          expenses: expenses
        };
      })
    );
  }, [data]);

  return (
    <>
        <DashboardBox gridArea={"a"}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={revenueExpenses}
              margin={{
                top: 30,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox gridArea={"b"}>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={revenueExpenses}
              margin={{
                top: 30,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="expenses" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
            </AreaChart>
          </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox gridArea={"c"}></DashboardBox>
    </>
  )
}

export default DashboardRow1