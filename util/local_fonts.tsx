import localFont from "next/font/local";

const Pretendard = localFont({
    src: [{ path: '../../public/fonts/PretendardVariable.ttf'}],
    variable: "--font-pretendard"
});

export { Pretendard };