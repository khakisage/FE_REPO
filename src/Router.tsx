import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";
import MyPage from "./pages/MyPage";
import CreateChannelPage from "./pages/CreateChannelPage";
import { ModifyUserinfoPage } from "./pages/ModifyUserinfoPage";

const Router = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/createChannel" element={<CreateChannelPage />} />
				<Route path="/modifyUserinfo" element={<ModifyUserinfoPage />} />
			</Routes>
		</QueryClientProvider>
	);
};

export default Router;
