import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Box, Paper, Typography } from '@mui/material';

const PrettyResponse = () => {
	const [response, setResponse] = useState("");

	useEffect(() => {
		// Fetch the data
		fetch("http://time2do.works/mbti/all")
			.then((res) => res.json())
			.then((data) => {
				// Format the response with indentation
				const formattedResponse = JSON.stringify(data, null, 2);
				setResponse(formattedResponse);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} sx={{ padding: '2rem' }}>
        <Typography variant="h6" component="pre">
          {response}
        </Typography>
      </Paper>
    </Box>
  );
};

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<PrettyResponse />
		<App />
	</React.StrictMode>
);

reportWebVitals();
