import { Box, useMediaQuery } from "@mui/material";
import DashboardRow1 from "./DashboardRow1";
import DashboardRow2 from "./DashboardRow2";
import DashboardRow3 from "./DashboardRow3";
import gridTemplate from "./gridLayouts";
import { useGetKpisQuery } from "@/state/api";

// type Props = {}

const Dashboard = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
    const { data } = useGetKpisQuery();
    console.log(data);
    // const { palette } = useTheme();
    return (
        <Box width={"100%"} display={"grid"} gap={"1.5rem"}
            sx={isAboveMediumScreens ? {
                gridTemplateColumns: "repeat(3, minmax(180px, 1fr))",
                gridTemplateRows: "repeat(10, minmax(40px, 1fr))",
                gridTemplateAreas: gridTemplate.LargeScreens
            } : {
                gridTemplateColumns: "1fr",
                gridTemplateRows: "repeat(30, minmax(30px, 1fr))",
                gridTemplateAreas: gridTemplate.SmallScreens
            }}>
                <DashboardRow1 />
                <DashboardRow2 />
                <DashboardRow3 />
        </Box>
    )
}

export default Dashboard;