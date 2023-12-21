import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";

const Router = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</QueryClientProvider>
	);
};

export default Router;
