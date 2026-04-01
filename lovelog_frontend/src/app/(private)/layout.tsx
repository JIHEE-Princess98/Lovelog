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
    key: "/dashboard/anniversary",
    icon: <HeartOutlined />,
    label: "우리의 기념일",
  },
  { key: "/dashboard/memories", icon: <PictureOutlined />, label: "추억쌓기" },
  {
    key: "/dashboard/notifications",
    icon: <BellOutlined />,
    label: "알림내역",
  },
  { key: "/dashboard/me", icon: <UserOutlined />, label: "내정보" },
  { key: "/dashboard/users", icon: <TeamOutlined />, label: "사용자관리" },
  { key: "/dashboard/codes", icon: <CodeOutlined />, label: "코드관리" },
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
    <Layout className="dashboard-shell">
      <Sider
        width={220}
        collapsedWidth={76}
        collapsed={!hovered}
        trigger={null}
        className="dashboard-sider"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
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
                ? "items-center gap-3 px-3 justify-start"
                : "items-center justify-center px-0"
            }`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 via-pink-500 to-fuchsia-500 text-xl font-bold text-white shadow-[0_10px_30px_rgba(255,92,162,0.35)]">
              ♥
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                hovered ? "w-[110px] opacity-100 ml-0" : "w-0 opacity-0 ml-0"
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
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selectedKey}
            items={menuItems}
            onClick={({ key }) => router.push(key)}
            inlineCollapsed={!hovered}
            className="dashboard-menu flex-1"
          />

          {/* 푸터 프로필 */}
          <div
            className={`mt-4 flex rounded-[24px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-all duration-300 ${
              hovered
                ? "items-center gap-3 justify-start"
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

      <Layout style={{ background: "transparent" }}>
        <Header className="dashboard-header px-6">
          <div className="flex items-center justify-between py-5">
            <div>
              <h1 className="m-0 text-3xl font-bold text-white">
                LoveLog Dashboard
              </h1>
              <p className="m-0 mt-1 text-sm text-white/45">
                우리의 시간과 추억을 한눈에 관리해요
              </p>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <BellOutlined className="text-lg" />
              <UserOutlined className="text-lg" />
            </div>
          </div>
        </Header>

        <Content className="dashboard-content p-6">{children}</Content>
      </Layout>
    </Layout>
  );
}
