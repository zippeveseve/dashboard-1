import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type ChartIndicatorProps = {
  circleColor: string;
  text: string;
};

const ChartIndicator = ({ circleColor, text }: ChartIndicatorProps) => {
  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <Box
        sx={{
          width: "10px",
          height: "10px",
          borderRadius: "9999px",
          backgroundColor: circleColor,
        }}
      ></Box>
      <Typography sx={{ fontSize: "8pt", color: "black", fontWeight: 700 }}>
        {text}
      </Typography>
    </Stack>
  );
};

export default ChartIndicator;
