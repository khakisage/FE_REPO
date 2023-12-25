import { ReactNode } from "react";

type TLayoutProps = {
	children: ReactNode;
};
export const Layout = ({ children }: TLayoutProps) => {
	return (
		<div className="h-[852px] w-[393px] bg-purple-800 bg-opacity-5">
			{children}
		</div>
	);
};
