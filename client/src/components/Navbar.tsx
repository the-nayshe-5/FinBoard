import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { BrowserRouter, Link } from "react-router-dom";
import FlexBetweenBox from "@/components/FlexBetweenBox";
import { useTheme } from "@mui/material";
import TollIcon from '@mui/icons-material/Toll';

function Navbar() {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");
    return (
        <FlexBetweenBox marginBottom="0.25rem" padding="0.5rem 0rem" color={palette.grey[300]}>
            {/* {LEFT SIDE: LOGO & NAME} */}
            <FlexBetweenBox gap={"0.5rem"}>
                <TollIcon sx={{fontSize: "28px"}}/>
                <Typography variant="h4" fontSize={"16px"}>
                    FinBoard
                </Typography>
            </FlexBetweenBox>

            {/* {RIGHT SIDE: PAGE NAVIGATION} */}
            <FlexBetweenBox gap={"2rem"} >
                <Box sx={{"&:hover": {color: palette.primary[300]}}}>
                    <BrowserRouter>
                        <Link to={"/"} 
                            onClick={() => setSelected("dashboard")}
                            style={{color: selected === "dashboard" ? "inherit" : palette.grey[700],
                                    textDecoration:"inherit"
                            }}
                        >
                            Dashboard
                        </Link>
                    </BrowserRouter>
                </Box>
                    
                <Box sx={{"&:hover": {color: palette.primary[300]}}}>
                    <BrowserRouter>
                        <Link to={"/predictions"}
                            onClick={() => setSelected("predictions")}
                            style={{color: selected === "predictions" ? "inherit" : palette.grey[700],
                                    textDecoration: "inherit"
                            }}
                        >
                            Predictions
                        </Link>
                    </BrowserRouter>
                    
                </Box>
            </FlexBetweenBox>


        </FlexBetweenBox>
  );
};

export default Navbar