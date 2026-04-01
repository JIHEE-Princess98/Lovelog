import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "../lib/react-query/provider";
import FancyCursor from "../components/common/FancyCursor";
import { ConfigProvider, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata: Metadata = {
  title: "LoveLog",
  description: "커플 기록 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
              token: {
                colorPrimary: "#ff5ca2",
                colorInfo: "#ff5ca2",
                colorSuccess: "#ff78aa",
                colorWarning: "#ffb3d1",
                colorError: "#ff6b9f",

                colorBgBase: "#0f0714",
                colorBgContainer: "rgba(255,255,255,0.05)",
                colorBgElevated: "#160a1b",
                colorBorder: "rgba(255,255,255,0.08)",
                colorText: "rgba(255,255,255,0.92)",
                colorTextSecondary: "rgba(255,255,255,0.58)",

                borderRadius: 20,
                fontFamily:
                  "Pretendard, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
              },
              components: {
                Layout: {
                  bodyBg: "#0f0714",
                  siderBg: "rgba(255,255,255,0.04)",
                  headerBg: "transparent",
                  triggerBg: "transparent",
                },
                Menu: {
                  darkItemBg: "transparent",
                  darkSubMenuItemBg: "transparent",
                  darkItemSelectedBg:
                    "linear-gradient(135deg, rgba(255,126,179,0.34), rgba(255,92,162,0.16))",
                  darkItemHoverBg:
                    "linear-gradient(90deg, rgba(255,126,179,0.2), rgba(255,92,162,0.08))",
                  darkItemColor: "rgba(255,255,255,0.68)",
                  darkItemSelectedColor: "#ffffff",
                },
                Card: {
                  colorBgContainer: "rgba(255,255,255,0.05)",
                  colorBorderSecondary: "rgba(255,255,255,0.08)",
                },
              },
            }}
          >
            <FancyCursor />
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
