import React, { useEffect, useState } from "react";
import moment from "moment";
import queryString from "query-string";
import { Grid, Paper } from "@material-ui/core";

function DashboardPanel() {
	const [queryData, setQueryData] = useState({
		start: moment().startOf("week").format("llll"),
		end: moment().endOf("week").format("llll"),
	});
	const [dashboardData, setDashboardData] = useState({});
	let query = queryString.stringify(queryData);
	console.log(query);
	useEffect(() => {
		async function getDashboardData() {
			let result = await fetch(
				`https://cashie-backend.herokuapp.com/api/transaction/dashboard?${query}`,
			);
			let data = await result.json();
			setDashboardData(data);
		}
		getDashboardData();
	}, []);
	return (
		<div>
			<h2>Dashboard</h2>
			<Grid container>
				<Grid items xs={12} lg={4}>
					<Paper>
						<h2>{dashboardData.data && dashboardData.data.count}</h2>
					</Paper>
				</Grid>
				<Grid items xs={12} lg={4}>
					<Paper>
						<h2>{dashboardData.data && dashboardData.data.qty}</h2>
					</Paper>
				</Grid>
				<Grid items xs={12} lg={4}>
					<Paper>
						<h2>{dashboardData.data && dashboardData.data.total}</h2>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default DashboardPanel;
