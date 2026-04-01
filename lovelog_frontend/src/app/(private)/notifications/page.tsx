"use client";

import {
  BellOutlined,
  CalendarOutlined,
  HeartOutlined,
  MessageOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
  Empty,
  Segmented,
  Space,
  Tag,
  Typography,
} from "antd";
import { useMemo, useState } from "react";

const { Title, Text } = Typography;

type NotificationType = "anniversary" | "memory" | "message" | "system";

interface NotificationItem {
  id: number;
  type: NotificationType;
  title: string;
  description: string;
  createdAt: string;
  isRead: boolean;
  isImportant?: boolean;
}

const initialNotifications: NotificationItem[] = [
  {
    id: 1,
    type: "anniversary",
    title: "우리의 200일이 다가와요 💕",
    description: "다가오는 기념일을 확인하고 함께할 일정을 계획해보세요.",
    createdAt: "2026-04-01 09:30",
    isRead: false,
    isImportant: true,
  },
  {
    id: 2,
    type: "memory",
    title: "새로운 추억 사진이 등록되었어요",
    description: "3월 28일 추억 앨범에 사진 5장이 추가되었어요.",
    createdAt: "2026-03-31 20:15",
    isRead: false,
  },
  {
    id: 3,
    type: "message",
    title: "상대방이 메모를 남겼어요",
    description: "함께 가고 싶은 장소가 메모에 추가되었어요.",
    createdAt: "2026-03-31 13:10",
    isRead: true,
  },
  {
    id: 4,
    type: "system",
    title: "알림 설정이 저장되었어요",
    description: "기념일 하루 전 알림이 활성화되었어요.",
    createdAt: "2026-03-30 18:00",
    isRead: true,
  },
];

function getTypeMeta(type: NotificationType) {
  switch (type) {
    case "anniversary":
      return {
        icon: <HeartOutlined />,
        label: "기념일",
        color: "#ff5ca2",
      };
    case "memory":
      return {
        icon: <CalendarOutlined />,
        label: "추억",
        color: "#8b5cf6",
      };
    case "message":
      return {
        icon: <MessageOutlined />,
        label: "메모",
        color: "#38bdf8",
      };
    case "system":
    default:
      return {
        icon: <BellOutlined />,
        label: "시스템",
        color: "#94a3b8",
      };
  }
}

export default function NotificationsPage() {
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [notifications, setNotifications] =
    useState<NotificationItem[]>(initialNotifications);

  const unreadCount = useMemo(
    () => notifications.filter((item) => !item.isRead).length,
    [notifications],
  );

  const filteredNotifications = useMemo(() => {
    if (filter === "unread") {
      return notifications.filter((item) => !item.isRead);
    }
    if (filter === "read") {
      return notifications.filter((item) => item.isRead);
    }
    return notifications;
  }, [filter, notifications]);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isRead: true } : item)),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, isRead: true })));
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "24px",
        background:
          "linear-gradient(180deg, #140a1d 0%, #0f0714 50%, #0b0610 100%)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Card
          variant="borderless"
          style={{
            marginBottom: 20,
            borderRadius: 24,
            background: "rgba(255,255,255,0.06)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.28)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
          }}
          styles={{
            body: {
              padding: 24,
            },
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <Space align="center" size={10}>
                <Badge count={unreadCount} color="#ff5ca2">
                  <BellOutlined
                    style={{
                      fontSize: 24,
                      color: "#ff8fbd",
                    }}
                  />
                </Badge>
                <Title level={3} style={{ margin: 0, color: "#fff" }}>
                  알림내역
                </Title>
              </Space>

              <Text style={{ color: "rgba(255,255,255,0.68)" }}>
                새로운 소식과 중요한 이벤트를 확인해보세요
              </Text>
            </div>

            <Space wrap>
              <Segmented
                value={filter}
                onChange={(value) =>
                  setFilter(value as "all" | "unread" | "read")
                }
                options={[
                  { label: "전체", value: "all" },
                  { label: "안 읽음", value: "unread" },
                  { label: "읽음", value: "read" },
                ]}
              />
              <Button
                icon={<CheckCircleOutlined />}
                onClick={markAllAsRead}
                style={{
                  borderRadius: 12,
                }}
              >
                전체 읽음
              </Button>
            </Space>
          </div>
        </Card>

        <div style={{ display: "grid", gap: 16 }}>
          {filteredNotifications.length === 0 ? (
            <Card
              variant="borderless"
              style={{
                borderRadius: 24,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Empty
                description={
                  <span style={{ color: "rgba(255,255,255,0.65)" }}>
                    표시할 알림이 없어요
                  </span>
                }
              />
            </Card>
          ) : (
            filteredNotifications.map((item) => {
              const meta = getTypeMeta(item.type);

              return (
                <Card
                  key={item.id}
                  hoverable
                  variant="borderless"
                  style={{
                    borderRadius: 22,
                    background: item.isRead
                      ? "rgba(255,255,255,0.045)"
                      : "rgba(255,255,255,0.075)",
                    border: item.isRead
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(255,92,162,0.35)",
                    boxShadow: item.isRead
                      ? "0 8px 24px rgba(0,0,0,0.18)"
                      : "0 12px 30px rgba(255,92,162,0.12)",
                    transition: "all 0.25s ease",
                  }}
                  styles={{
                    body: {
                      padding: 20,
                    },
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{ display: "flex", gap: 16, flex: 1, minWidth: 0 }}
                    >
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: 14,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `${meta.color}22`,
                          color: meta.color,
                          fontSize: 20,
                          flexShrink: 0,
                        }}
                      >
                        {meta.icon}
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <Space wrap style={{ marginBottom: 6 }}>
                          <Tag
                            style={{
                              borderRadius: 999,
                              paddingInline: 10,
                              border: "none",
                              background: `${meta.color}22`,
                              color: meta.color,
                            }}
                          >
                            {meta.label}
                          </Tag>

                          {!item.isRead && (
                            <Tag
                              style={{
                                borderRadius: 999,
                                border: "none",
                                background: "rgba(255,92,162,0.16)",
                                color: "#ff7db5",
                              }}
                            >
                              NEW
                            </Tag>
                          )}

                          {item.isImportant && (
                            <Tag
                              style={{
                                borderRadius: 999,
                                border: "none",
                                background: "rgba(250,204,21,0.16)",
                                color: "#facc15",
                              }}
                            >
                              중요
                            </Tag>
                          )}
                        </Space>

                        <div
                          style={{
                            fontSize: 17,
                            fontWeight: 700,
                            color: "#fff",
                            marginBottom: 6,
                          }}
                        >
                          {item.title}
                        </div>

                        <div
                          style={{
                            color: "rgba(255,255,255,0.72)",
                            marginBottom: 10,
                            lineHeight: 1.6,
                          }}
                        >
                          {item.description}
                        </div>

                        <Text style={{ color: "rgba(255,255,255,0.45)" }}>
                          {item.createdAt}
                        </Text>
                      </div>
                    </div>

                    <Space wrap>
                      {!item.isRead && (
                        <Button
                          icon={<CheckCircleOutlined />}
                          onClick={() => markAsRead(item.id)}
                          style={{ borderRadius: 10 }}
                        >
                          읽음 처리
                        </Button>
                      )}
                      <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => removeNotification(item.id)}
                        style={{ borderRadius: 10 }}
                      >
                        삭제
                      </Button>
                    </Space>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
