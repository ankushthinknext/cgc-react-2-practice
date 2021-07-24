import React, { useEffect, useState } from "react";
import moment from "moment";
import queryString from "query-string";
import { Container, Grid, Paper } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
	table: {},
	chart: {
		height: "700px",
	},
	mCard: {
		height: "100px",
		borderRadius: "20px",
		padding: "10px",
	},
	cardRed: {
		background: `linear-gradient(16deg, rgba(234,81,121,1) 0%, rgba(172,54,115,1) 100%)`,
	},
});

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
};
function DashboardPanel() {
	const classes = useStyles();

	const [queryData, setQueryData] = useState({
		start: moment().startOf("week").format("llll"),
		end: moment().endOf("week").format("llll"),
		limit: 5,
	});
	const [dashboardData, setDashboardData] = useState(null);
	const [weeklyTransactions, setWeeklyTransactions] = useState(null);
	let query = queryString.stringify(queryData);
	let weeklyIncome = [];
	if (dashboardData) {
		for (let i = 1; i <= 7; i++) {
			let index = dashboardData.data.items.findIndex((item) => item._id == i);
			if (index === -1) weeklyIncome.push(0);
			else weeklyIncome.push(dashboardData.data.items[index]["grandtotal"]);
		}
	}

	const data = {
		labels: ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"],
		datasets: [
			{
				label: "# of Votes",
				data: weeklyIncome,
				fill: false,
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgba(255, 99, 132, 0.2)",
			},
		],
	};

	useEffect(() => {
		async function getDashboardData() {
			let result = await fetch(
				`${process.env.REACT_APP_BACKEND_API_URL}transaction/dashboard?${query}`,
			);
			let data = await result.json();
			setDashboardData(data);
		}
		getDashboardData();
	}, []);
	useEffect(() => {
		async function getWeeklyTransaction() {
			let result = await axios(
				`${process.env.REACT_APP_BACKEND_API_URL}transaction?${query}`,
			);
			setWeeklyTransactions(result.data.data.transactions);
		}
		getWeeklyTransaction();
	}, []);
	console.log(weeklyTransactions);
	return (
		<div>
			<Container>
				<h2>Dashboard</h2>
				<Grid container>
					<Grid items xs={12} lg={4}>
						<Paper className="d-cards d-card-maroon">
							<h2>{dashboardData && dashboardData.data.count}</h2>
						</Paper>
					</Grid>
					<Grid items xs={12} lg={4}>
						<Paper className="d-cards d-card-indigo">
							<h2>{dashboardData && dashboardData.data.qty}</h2>
						</Paper>
					</Grid>
					<Grid items xs={12} lg={4}>
						<Paper className="d-cards d-card-orange">
							<h2>
								{Math.round(dashboardData && dashboardData.data.total, 2)}
							</h2>
						</Paper>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item lg={6} sm={12}>
						<Paper>
							<Line className={classes.chart} data={data} options={options} />
						</Paper>
					</Grid>
					<Grid item lg={6} sm={12}>
						<Paper>
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Reciept no</TableCell>
										<TableCell align="right">Date</TableCell>
										<TableCell align="right">Quantity</TableCell>
										<TableCell align="right">Total</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{weeklyTransactions &&
										weeklyTransactions.map((row) => (
											<TableRow key={row._id}>
												<TableCell component="th" scope="row">
													{row._id}
												</TableCell>

												<TableCell align="right">
													{moment(row._createdAt).format("llll")}
												</TableCell>
												<TableCell align="right">{row.items.length}</TableCell>
												<TableCell align="right">{row.grandtotal}</TableCell>
											</TableRow>
										))}
								</TableBody>
							</Table>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default DashboardPanel;
