import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type StatsCardProps = {
  title: string;
  count: number;
  percentage: string;
  fromPercentage: number;
};

const StatsCard = ({
  title,
  count,
  percentage,
  fromPercentage,
}: StatsCardProps) => {
  return (
    <Box sx={{ backgroundColor: "white", borderRadius: '15px', padding: "15px" }}>
      <Typography sx={{ color: "#929494", fontSize: "12pt", fontWeight: 500 }}>
        {title}
      </Typography>
      <Typography sx={{ color: "black", fontSize: "20pt" }}>
        {new Intl.NumberFormat().format(count)}t
      </Typography>
      <Typography sx={{ color: "#B7B7B7", fontSize: "12pt" }}>CO2e</Typography>
      <Stack direction='row' spacing={2} alignItems='center' sx={{marginTop: '25px'}}>
        <Box
          sx={{
            paddingTop: "2px",
            paddingBottom: "2px",
            color: `${percentage === "0" ? "gray" : "#71C0A7"}`,
            backgroundColor: `${percentage === "0" ? "#F7FBFE" : "#DDFFF5"}`,
            fontWeight: 600,
            width: "fit-content",
            borderRadius: "15px",
            paddingLeft: "15px",
            fontSize: "9pt",
            paddingRight: "15px",
          }}
        >
          {percentage === "0" ? "0.00" : `${percentage} %`}
        </Box>
        <Typography sx={{ color: "#929494", fontSize: "9pt" }}>
          {fromPercentage !== 0 && `From ${fromPercentage} %`}
        </Typography>
      </Stack>
    </Box>
  );
};

export default StatsCard;
