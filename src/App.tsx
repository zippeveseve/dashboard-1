import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SideBar from "./components/SideBar";
import {
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import StatsCard from "./components/StatsCard";
import ChartIndicator from "./components/ChartIndicator";
import { BarChart, CalendarToday, GridView, NotificationsNone, Search } from "@mui/icons-material";
import ColChart from "./components/ColChart";
import PieChart from "./components/PieChart";
import axios from "axios";

type db_dataType = {
  statsCards: [
    {
      title: string;
      percentage: string;
      count: number;
      fromPercentage: number;
    }
  ];
  pieChartData: {
    labels: [string];
    series: [number];
  };
  colChartData: {
    Xaxis: [string];
    series: [
      {
        name: string;
        data: [number];
      }
    ];
  };
};

function App() {
  const [db_data, set_db_data] = React.useState({
    statsCards: [{ title: "", percentage: "", count: 0, fromPercentage: 0 }],
    pieChartData: { labels: [""], series: [0] },
    colChartData: { Xaxis: [""], series: [{ name: "", data: [0] }] },
  });
  axios({
    method: "get",
    url: "https://api.npoint.io/c3132bcbffd9cdbe3e55",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      responseType: "json",
      crossorigin: true,
    },
  })
    .then(function (res) {
      //console.log(res.data);
      set_db_data(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#F2F3F7", p: 3, height: "100vh" }}
      >
        <Box>
          <Stack
            sx={{
              width: "100%",
              height: "60px",
              backgroundColor: "white",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            spacing={6}
          >
            <TextField
              id="outlined-start-adornment"
              sx={{ width: "100%" }}
              size="small"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <Stack direction='row' spacing={4} alignItems='center'>
              <NotificationsNone />
              <CalendarToday />
              <GridView />
              <img src='/icon.png' style={{width: '40px', height: '40px'}} />
            </Stack>
          </Stack>
          <Box sx={{ margin: "24px" }}>
            <Grid container spacing={2}>
              {db_data.statsCards.map((card) => (
                <Grid item xs={3} key={card.count}>
                  <StatsCard
                    title={card.title}
                    percentage={card.percentage}
                    count={card.count}
                    fromPercentage={card.fromPercentage}
                  />
                </Grid>
              ))}
            </Grid>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="top"
              spacing={2}
              sx={{ marginTop: "20px", width: "100%" }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  padding: "15px",
                  width: "65%",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "16pt",
                      marginLeft: "10px",
                      fontWeight: 600,
                    }}
                  >
                    Carbon Footprint
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ChartIndicator text="Spinning" circleColor="#58CC77" />
                    <ChartIndicator
                      text="Transportation"
                      circleColor="#54DCDC"
                    />
                    <ChartIndicator text="Carding" circleColor="#E1FF30" />
                    <ChartIndicator
                      text="Heating & Cooling"
                      circleColor="#FCC302"
                    />
                    <BarChart sx={{ color: "#50DC79" }} />
                  </Stack>
                </Stack>
                <ColChart colChartData={db_data.colChartData} />
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  padding: "15px",
                  width: "35%",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "16pt",
                      margin: "auto",
                      fontWeight: 600,
                    }}
                  >
                    Top Emissions By Type
                  </Typography>
                  <PieChart pieChartData={db_data.pieChartData} />
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
