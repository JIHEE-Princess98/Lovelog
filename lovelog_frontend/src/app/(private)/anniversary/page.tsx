"use client";

import { useMemo } from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Space,
  Tag,
  Button,
  List,
  Divider,
  Progress,
} from "antd";
import {
  HeartFilled,
  CalendarOutlined,
  ClockCircleOutlined,
  PlusOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

const { Title, Text, Paragraph } = Typography;

type AnniversaryItem = {
  id: number;
  title: string;
  date: string;
  description?: string;
  type: "love" | "milestone" | "special";
};

const relationshipStartDate = "2026-03-08";

const anniversaryItems: AnniversaryItem[] = [
  {
    id: 1,
    title: "처음 만난 날",
    date: "2026-03-08",
    description: "우리가 두번째 만나서 술먹고 고백공격ㅋㅋ",
    type: "special",
  },
];

function getDayCount(startDate: string) {
  return dayjs().diff(dayjs(startDate), "day") + 1;
}

function getNextMilestones(startDate: string) {
  const start = dayjs(startDate);
  const today = dayjs();

  const milestones = [100, 200, 300, 365, 500, 730];

  return milestones
    .map((day) => {
      const targetDate = start.add(day - 1, "day");
      const remain = targetDate.diff(today, "day");
      return {
        label: day === 365 ? "1주년" : day === 730 ? "2주년" : `${day}일`,
        day,
        date: targetDate.format("YYYY.MM.DD"),
        remain,
      };
    })
    .filter((item) => item.remain >= 0)
    .slice(0, 4);
}

function getTypeColor(type: AnniversaryItem["type"]) {
  switch (type) {
    case "love":
      return "magenta";
    case "milestone":
      return "gold";
    case "special":
      return "purple";
    default:
      return "default";
  }
}

export default function AnniversaryPage() {
  const dayCount = useMemo(() => getDayCount(relationshipStartDate), []);

  const nextMilestones = useMemo(
    () => getNextMilestones(relationshipStartDate),
    [],
  );

  const progressPercent = useMemo(() => {
    const currentCycle = dayCount % 100;
    return currentCycle === 0 ? 100 : currentCycle;
  }, [dayCount]);

  return (
    <div className="min-h-screen bg-[#0f0714] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <Title level={2} style={{ color: "#fff", marginBottom: 4 }}>
              우리의 기념일
            </Title>
            <Text style={{ color: "rgba(255,255,255,0.7)" }}>
              함께한 시간과 소중한 순간들을 기록해보세요.
            </Text>
          </div>

          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            style={{
              background: "#ff5ca2",
              borderColor: "#ff5ca2",
              boxShadow: "0 6px 18px rgba(255,92,162,0.28)",
            }}
          >
            기념일 추가
          </Button>
        </div>

        <Row gutter={[16, 16]}>
          <Col xs={24} lg={14}>
            <Card
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
              }}
              styles={{ body: { padding: 24 } }}
            >
              <Space orientation="vertical" size={14} style={{ width: "100%" }}>
                <Space>
                  <HeartFilled style={{ color: "#ff5ca2", fontSize: 20 }} />
                  <Text strong style={{ color: "#fff", fontSize: 18 }}>
                    대표 D+Day
                  </Text>
                </Space>

                <div>
                  <Text style={{ color: "rgba(255,255,255,0.65)" }}>
                    사귄 날 기준
                  </Text>
                  <Title
                    level={1}
                    style={{
                      color: "#fff",
                      margin: "8px 0 0 0",
                      fontSize: 46,
                    }}
                  >
                    D+{dayCount}
                  </Title>
                </div>

                <Card
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,92,162,0.20), rgba(255,255,255,0.04))",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 18,
                  }}
                >
                  <Space
                    orientation="vertical"
                    size={10}
                    style={{ width: "100%" }}
                  >
                    <Text style={{ color: "#fff" }}>다음 100일까지 진행률</Text>
                    <Progress
                      percent={progressPercent}
                      strokeColor="#ff5ca2"
                      railColor="rgba(255,255,255,0.08)"
                    />
                    <Text style={{ color: "rgba(255,255,255,0.65)" }}>
                      오늘도 함께 추억을 쌓는 중 💕
                    </Text>
                  </Space>
                </Card>
              </Space>
            </Card>
          </Col>

          <Col xs={24} lg={10}>
            <Card
              title={
                <span style={{ color: "#fff" }}>
                  <ClockCircleOutlined
                    style={{ marginRight: 8, color: "#ff5ca2" }}
                  />
                  다가오는 기념일
                </span>
              }
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
              }}
              styles={{
                header: {
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                },
              }}
            >
              <List
                dataSource={nextMilestones}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      borderBlockEnd: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex w-full items-center justify-between gap-3">
                      <div>
                        <Text
                          strong
                          style={{ color: "#fff", display: "block" }}
                        >
                          {item.label}
                        </Text>
                        <Text style={{ color: "rgba(255,255,255,0.65)" }}>
                          {item.date}
                        </Text>
                      </div>

                      <Tag
                        color="pink"
                        style={{
                          marginInlineEnd: 0,
                          fontWeight: 600,
                          paddingInline: 10,
                        }}
                      >
                        D-{item.remain}
                      </Tag>
                    </div>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        <Divider
          style={{ borderColor: "rgba(255,255,255,0.08)", margin: "28px 0" }}
        />

        <Card
          title={
            <span style={{ color: "#fff" }}>
              <CalendarOutlined style={{ marginRight: 8, color: "#ff5ca2" }} />
              기념일 타임라인
            </span>
          }
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
          }}
          styles={{
            header: {
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            },
            body: {
              padding: 20,
            },
          }}
        >
          <Row gutter={[16, 16]}>
            {anniversaryItems.map((item) => (
              <Col xs={24} md={12} xl={8} key={item.id}>
                <Card
                  hoverable
                  style={{
                    height: "100%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 18,
                  }}
                  styles={{ body: { padding: 20 } }}
                >
                  <Space
                    orientation="vertical"
                    size={10}
                    style={{ width: "100%" }}
                  >
                    <Space
                      style={{ justifyContent: "space-between", width: "100%" }}
                    >
                      <Tag color={getTypeColor(item.type)}>{item.title}</Tag>
                      <GiftOutlined style={{ color: "#ff8fc1" }} />
                    </Space>

                    <Title level={4} style={{ color: "#fff", margin: 0 }}>
                      {item.date}
                    </Title>

                    <Paragraph
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        marginBottom: 0,
                      }}
                    >
                      {item.description || "설명이 아직 등록되지 않았어요."}
                    </Paragraph>

                    <Text style={{ color: "#ff9cc5" }}>
                      {dayjs(item.date).isBefore(dayjs(), "day")
                        ? `${dayjs().diff(dayjs(item.date), "day")}일 전의 추억`
                        : `${dayjs(item.date).diff(dayjs(), "day")}일 남음`}
                    </Text>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    </div>
  );
}
