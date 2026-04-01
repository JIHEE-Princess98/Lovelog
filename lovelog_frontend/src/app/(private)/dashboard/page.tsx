"use client";

import {
  Avatar,
  Button,
  Card,
  Col,
  Progress,
  Row,
  Space,
  Statistic,
  Tag,
  Typography,
} from "antd";
import {
  CalendarOutlined,
  CameraOutlined,
  ClockCircleOutlined,
  HeartFilled,
  MessageOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const recentMemories = [
  {
    id: 1,
    title: "한강 데이트",
    date: "2026-03-28",
    description: "오랜만에 한강에서 산책하고 라면 먹었던 날",
  },
  {
    id: 2,
    title: "벚꽃 구경",
    date: "2026-03-24",
    description: "사진 엄청 많이 찍고 카페도 갔던 날",
  },
  {
    id: 3,
    title: "집에서 영화 보기",
    date: "2026-03-20",
    description: "넷플릭스 보면서 배달 음식 먹고 푹 쉬었던 날",
  },
];

const upcomingSchedules = [
  {
    id: 1,
    title: "행궁동 데이트",
    date: "2026-04-04 14:00",
    tag: "데이트",
  },
  {
    id: 2,
    title: "석촌호수 데이트",
    date: "2026-04-11 13:00",
    tag: "데이트",
  },
];

const photoPreview = [
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400",
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400",
  "https://images.unsplash.com/photo-1518621012420-8f0c2b5a54a2?q=80&w=400",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400",
];

const cardStyle = {
  borderRadius: 20,
  height: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
  backdropFilter: "blur(12px)",
};

export default function DashboardPage() {
  return (
    <div
      style={{
        padding: "16px 12px",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(255,92,162,0.10), transparent 30%), #0f0714",
      }}
    >
      <Space orientation="vertical" size={24} style={{ width: "100%" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} xl={6}>
            <Card variant="borderless" style={cardStyle}>
              <Space orientation="vertical" size={12} style={{ width: "100%" }}>
                <Space>
                  <HeartFilled style={{ color: "#ff5ca2", fontSize: 20 }} />
                  <Text strong style={{ color: "rgba(255,255,255,0.92)" }}>
                    D-Day
                  </Text>
                </Space>
                <Statistic title="만난 지" value={24} suffix="일" />
                <Text
                  type="secondary"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  다음 기념일까지 13일 남았어요
                </Text>
                <Progress percent={78} showInfo={false} strokeColor="#ff5ca2" />
              </Space>
            </Card>
          </Col>

          <Col xs={24} md={12} xl={6}>
            <Card variant="borderless" style={cardStyle}>
              <Space orientation="vertical" size={12}>
                <Space>
                  <MessageOutlined style={{ color: "#ff8fc0", fontSize: 20 }} />
                  <Text strong style={{ color: "rgba(255,255,255,0.92)" }}>
                    오늘의 한마디
                  </Text>
                </Space>

                <div
                  style={{
                    padding: 16,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Text
                    style={{ fontSize: 15, color: "rgba(255,255,255,0.9)" }}
                  >
                    “오늘도 내 하루의 가장 예쁜 부분은 원준이야 ❤️”
                  </Text>
                </div>
              </Space>
            </Card>
          </Col>

          <Col xs={24} md={12} xl={6}>
            <Card variant="borderless" style={cardStyle}>
              <Space orientation="vertical" size={12} style={{ width: "100%" }}>
                <Space>
                  <CalendarOutlined
                    style={{ color: "#ff7eb3", fontSize: 20 }}
                  />
                  <Text strong style={{ color: "rgba(255,255,255,0.92)" }}>
                    다가오는 일정
                  </Text>
                </Space>

                {upcomingSchedules.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: 12,
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <Space
                      style={{
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text strong style={{ color: "rgba(255,255,255,0.92)" }}>
                        {item.title}
                      </Text>
                      <Tag
                        color={item.tag === "기념일" ? "magenta" : "processing"}
                      >
                        {item.tag}
                      </Tag>
                    </Space>
                    <div style={{ marginTop: 8 }}>
                      <Text type="secondary">{item.date}</Text>
                    </div>
                  </div>
                ))}
              </Space>
            </Card>
          </Col>

          <Col xs={24} md={12} xl={6}>
            <Card variant="borderless" style={cardStyle}>
              <Space orientation="vertical" size={12} style={{ width: "100%" }}>
                <Text strong style={{ color: "rgba(255,255,255,0.92)" }}>
                  활동 요약
                </Text>
                <Statistic title="총 추억" value={42} suffix="개" />
                <Statistic title="이번 달 일정" value={6} suffix="건" />
                <Statistic title="사진 업로드" value={128} suffix="장" />
              </Space>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              title="최근 추억"
              variant="borderless"
              style={cardStyle}
              extra={<Button type="link">전체보기</Button>}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {recentMemories.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: 12,
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Avatar
                      style={{
                        background: "rgba(255,92,162,0.16)",
                        color: "#ff7eb3",
                      }}
                      icon={<HeartFilled />}
                    />

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          color: "rgba(255,255,255,0.92)",
                          fontWeight: 600,
                        }}
                      >
                        {item.title}
                      </div>

                      <div
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        {item.date}
                      </div>

                      <div style={{ color: "rgba(255,255,255,0.78)" }}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              title="사진 앨범"
              variant="borderless"
              style={cardStyle}
              extra={<Button type="link">앨범보기</Button>}
            >
              <Row gutter={[12, 12]}>
                {photoPreview.map((src, index) => (
                  <Col xs={12} key={index}>
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        borderRadius: 12,
                        overflow: "hidden",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <img
                        src={src}
                        alt={`photo-${index}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>

          <Col xs={24}>
            <Card variant="borderless" style={cardStyle}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    block
                    size="large"
                    style={{ height: 52, borderRadius: 12 }}
                  >
                    추억 추가하기
                  </Button>
                </Col>
                <Col xs={24} md={8}>
                  <Button
                    icon={<CalendarOutlined />}
                    block
                    size="large"
                    style={{ height: 52, borderRadius: 12 }}
                  >
                    일정 등록하기
                  </Button>
                </Col>
                <Col xs={24} md={8}>
                  <Button
                    icon={<CameraOutlined />}
                    block
                    size="large"
                    style={{ height: 52, borderRadius: 12 }}
                  >
                    사진 업로드
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xs={24}>
            <Card variant="borderless" style={cardStyle}>
              <Space orientation="vertical" size={8}>
                <Space>
                  <ClockCircleOutlined style={{ color: "#ff9ac6" }} />
                  <Text strong style={{ color: "rgba(255,255,255,0.92)" }}>
                    오늘의 기록 알림
                  </Text>
                </Space>
                <Text type="secondary">
                  오늘 하루의 추억을 아직 남기지 않았어요. 짧게라도
                  기록해보세요.
                </Text>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
}
