"use client";

import { Layout, Menu, Avatar, Badge } from "antd";
import {
  HomeOutlined,
  HeartOutlined,
  PictureOutlined,
  BellOutlined,
  UserOutlined,
  TeamOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const { Sider, Content, Header } = Layout;

const menuItems = [
  { key: "/dashboard", icon: <HomeOutlined />, label: "홈" },
  {
    key: "/anniversary",
    icon: <HeartOutlined />,
    label: "우리의 기념일",
  },
  { key: "/memories", icon: <PictureOutlined />, label: "추억쌓기" },
  {
    key: "/notifications",
    icon: <BellOutlined />,
    label: "알림내역",
  },
  { key: "/me", icon: <UserOutlined />, label: "내정보" },
  { key: "/users", icon: <TeamOutlined />, label: "사용자관리" },
  { key: "/codes", icon: <CodeOutlined />, label: "코드관리" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);

  const selectedKey = useMemo(() => {
    const found = menuItems.find((item) => pathname === item.key);
    return found ? [found.key] : ["/dashboard"];
  }, [pathname]);

  return (
    <Layout
      className="dashboard-shell"
      style={{
        minHeight: "100vh",
        background: "transparent",
      }}
    >
      <Sider
        width={220}
        collapsedWidth={76}
        collapsed={!hovered}
        trigger={null}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0,
          overflow: "hidden",
        }}
        className="dashboard-sider"
      >
        <div
          className={`flex h-full flex-col py-3 transition-all duration-300 ${
            hovered ? "px-3" : "px-2"
          }`}
        >
          {/* 로고 */}
          <div
            className={`mb-4 flex rounded-[24px] border border-white/10 bg-white/5 py-3 backdrop-blur-xl transition-all duration-300 ${
              hovered
                ? "items-center justify-start gap-3 px-3"
                : "items-center justify-center px-0"
            }`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 via-pink-500 to-fuchsia-500 text-xl font-bold text-white shadow-[0_10px_30px_rgba(255,92,162,0.35)]">
              ♥
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                hovered ? "ml-0 w-[110px] opacity-100" : "ml-0 w-0 opacity-0"
              }`}
            >
              <div className="whitespace-nowrap text-base font-semibold text-white">
                LoveLog
              </div>
              <div className="whitespace-nowrap text-xs text-pink-100/60">
                couple dashboard
              </div>
            </div>
          </div>

          {/* 메뉴 */}
          <div className="flex-1 overflow-y-auto">
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={selectedKey}
              items={menuItems}
              onClick={({ key }) => router.push(key)}
              inlineCollapsed={!hovered}
              className="dashboard-menu"
            />
          </div>

          {/* 푸터 프로필 */}
          <div
            className={`mt-4 flex rounded-[24px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-all duration-300 ${
              hovered
                ? "items-center justify-start gap-3"
                : "items-center justify-center px-0"
            }`}
          >
            <Badge dot color="#ff72b6">
              <Avatar
                size={44}
                icon={<UserOutlined />}
                className="!bg-white/10"
              />
            </Badge>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                hovered ? "w-[90px] opacity-100" : "w-0 opacity-0"
              }`}
            >
              <div className="whitespace-nowrap text-sm font-medium text-white">
                김지희
              </div>
              <div className="whitespace-nowrap text-xs text-white/50">
                관리자
              </div>
            </div>
          </div>
        </div>
      </Sider>

      <Layout
        style={{
          background: "transparent",
          minHeight: "100vh",
        }}
      >
        <Header
          className="dashboard-header px-3 sm:px-4 md:px-6"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            background: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(12px)",
            height: "auto",
            lineHeight: "normal",
          }}
        >
          <div className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h1 className="m-0 text-lg font-bold text-white sm:text-xl md:text-2xl break-words">
                LoveLog Dashboard
              </h1>
              <p className="m-0 mt-1 text-xs text-white/45 sm:text-sm break-words">
                우리의 시간과 추억을 한눈에 관리해요
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 self-end sm:self-auto text-white/80">
              <BellOutlined className="text-base sm:text-lg" />
              <UserOutlined className="text-base sm:text-lg" />
            </div>
          </div>
        </Header>

        <Content
          className="dashboard-content p-3 sm:p-4 md:p-6"
          style={{
            overflow: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
