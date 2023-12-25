import { useState } from "react";

export const ModifyUserinfoPage = () => {
	// 선생님
	// 이름, 학교 이름, 채널 이름 수정 가능

	// 학생
	// 이름, 학교 이름 수정 가능

	// 그런데, 학교 이름을 수정해야 한다.
	// 선생님은 학교를 이동하실 수 있고, 학생도 전학이 가능하므로...
	const [name, setName] = useState<string>("");
	const [schoolName, setSchoolName] = useState<string>("");
	const [channelName, setChannelName] = useState<string>("");

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleSchoolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSchoolName(event.target.value);
	};

	const handleChannelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChannelName(event.target.value);
	};

	return (
		<div className="mx-auto h-[852px] w-[393px] bg-[#ffffff] ">
			<div className="flex h-[852px] flex-col justify-end gap-4">
				<h1 className=" ml-4 text-[30px] font-[700]">프로필</h1>
				<div
					className="mx-4 mb-16 mt-4 flex h-auto w-[361px] flex-col gap-4 rounded"
					id="modifySection"
				>
					<label htmlFor="name" className="font-[700]">
						이름
					</label>
					<input
						type="text"
						id="name"
						placeholder="이름"
						value={name}
						onChange={handleNameChange}
						autoComplete="off"
						className="border-b pb-2 placeholder-gray-300 focus:border-b focus:border-gray-700 focus:outline-none"
					/>
					<label htmlFor="school-name" className="font-[700]">
						학교 이름
					</label>
					<input
						type="text"
						id="school-name"
						placeholder="학교 이름"
						value={schoolName}
						onChange={handleSchoolChange}
						autoComplete="off"
						className="border-b pb-2 placeholder-gray-300 focus:border-b focus:border-gray-700 focus:outline-none"
					/>
					<label htmlFor="channel-name" className="font-[700]">
						채널 이름
					</label>
					<input
						type="text"
						id="channel-name"
						placeholder="채널 이름"
						value={channelName}
						onChange={handleChannelChange}
						autoComplete="off"
						className="border-b pb-2 placeholder-gray-300 focus:border-b focus:border-gray-700 focus:outline-none"
					/>
				</div>
				<div
					className="mb-8 ml-4 flex h-[51px] w-[361px] items-center justify-center rounded bg-[#3d348b]"
					id="button"
				>
					<p className="font-[500] text-white">수정하기</p>
				</div>
			</div>
		</div>
	);
};
