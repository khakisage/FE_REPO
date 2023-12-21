import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: [
			{ find: "@", replacement: resolve(__dirname, "src") },
			{ find: "@assets", replacement: resolve(__dirname, "src/assets") },
			{
				find: "@components",
				replacement: resolve(__dirname, "src/components"),
			},
			{
				find: "@pages",
				replacement: resolve(__dirname, "src/pages"),
			},
		],
	},
	// 백엔드 서버 올라갔을 때 추가 예정 target은 env로 설정
	// server: {
	// 	proxy: {
	// 		"/api": {
	// 			target: "웹사이트",
	// 			changeOrigin: true,
	// 			rewrite: (path) => path.replace(/^\/api/, ""),
	// 			ws: true,
	// 		},
	// 	},
	// },
});
