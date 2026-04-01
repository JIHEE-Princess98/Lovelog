"use client";

import { useMemo, useState } from "react";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Image,
  Input,
  Modal,
  Typography,
  Upload,
  Empty,
  Row,
  Col,
  Space,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Title, Text } = Typography;
const { TextArea } = Input;

type MemoryItem = {
  id: string;
  date: string;
  title: string;
  description?: string;
  images: string[];
};

export default function MemoriesPage() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const [memories, setMemories] = useState<MemoryItem[]>([
    {
      id: "1",
      date: "2026-04-01",
      title: "벚꽃 데이트",
      description: "같이 산책하고 사진 많이 찍은 날 🌸",
      images: [
        "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
      ],
    },
  ]);

  const [fileList, setFileList] = useState<any[]>([]);

  const groupedMemories = useMemo(() => {
    return [...memories].sort((a, b) => b.date.localeCompare(a.date));
  }, [memories]);

  const handleCreate = async () => {
    try {
      const values = await form.validateFields();

      const imageUrls = fileList
        .map((file) => file.thumbUrl || file.url)
        .filter(Boolean);

      if (imageUrls.length === 0) {
        message.warning("이미지를 1장 이상 추가해주세요.");
        return;
      }

      const newMemory: MemoryItem = {
        id: String(Date.now()),
        date: values.date.format("YYYY-MM-DD"),
        title: values.title,
        description: values.description,
        images: imageUrls,
      };

      setMemories((prev) => [newMemory, ...prev]);

      form.resetFields();
      setFileList([]);
      setOpen(false);
      message.success("추억이 등록되었어요.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#120a16] px-4 py-6 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <Title level={2} style={{ color: "white", margin: 0 }}>
              추억쌓기
            </Title>
            <Text style={{ color: "rgba(255,255,255,0.65)" }}>
              날짜별로 사진과 추억을 기록해보세요
            </Text>
          </div>

          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            onClick={() => setOpen(true)}
          >
            추억 추가
          </Button>
        </div>

        {groupedMemories.length === 0 ? (
          <Card
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Empty
              description={
                <span style={{ color: "#fff" }}>아직 추억이 없어요</span>
              }
            />
          </Card>
        ) : (
          <div className="space-y-6">
            {groupedMemories.map((memory) => (
              <Card
                key={memory.id}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                }}
              >
                <Space
                  orientation="vertical"
                  size={6}
                  style={{ width: "100%" }}
                >
                  <Text style={{ color: "#ff8db8", fontWeight: 700 }}>
                    {dayjs(memory.date).format("YYYY년 MM월 DD일")}
                  </Text>

                  <Title level={4} style={{ color: "white", margin: 0 }}>
                    {memory.title}
                  </Title>

                  {memory.description && (
                    <Text style={{ color: "rgba(255,255,255,0.72)" }}>
                      {memory.description}
                    </Text>
                  )}

                  <Row gutter={[12, 12]} style={{ marginTop: 12 }}>
                    {memory.images.map((img, idx) => (
                      <Col xs={12} sm={8} md={6} key={idx}>
                        <Image
                          src={img}
                          alt={`${memory.title}-${idx}`}
                          className="rounded-xl object-cover"
                          style={{
                            width: "100%",
                            height: 180,
                            objectFit: "cover",
                            borderRadius: 12,
                          }}
                        />
                      </Col>
                    ))}
                  </Row>
                </Space>
              </Card>
            ))}
          </div>
        )}

        <Modal
          title="추억 추가"
          open={open}
          onCancel={() => setOpen(false)}
          onOk={handleCreate}
          okText="등록"
          cancelText="취소"
        >
          <Form form={form} layout="vertical">
            <Form.Item
              label="날짜"
              name="date"
              rules={[{ required: true, message: "날짜를 선택해주세요." }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="제목"
              name="title"
              rules={[{ required: true, message: "제목을 입력해주세요." }]}
            >
              <Input placeholder="예: 벚꽃 데이트" />
            </Form.Item>

            <Form.Item label="설명" name="description">
              <TextArea rows={4} placeholder="오늘의 추억을 적어보세요" />
            </Form.Item>

            <Form.Item label="이미지 업로드" required>
              <Upload
                listType="picture-card"
                fileList={fileList}
                beforeUpload={() => false}
                onChange={({ fileList }) => {
                  const nextList = fileList.map((file) => {
                    if (!file.thumbUrl && file.originFileObj) {
                      file.thumbUrl = URL.createObjectURL(file.originFileObj);
                    }
                    return file;
                  });
                  setFileList(nextList);
                }}
                multiple
              >
                {fileList.length >= 10 ? null : (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>업로드</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
