"use client";

import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Space,
  Typography,
  Upload,
  message,
} from "antd";
import { CameraOutlined, SaveOutlined, UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Title, Text } = Typography;

type ProfileFormValues = {
  userId: string;
  userName: string;
  email: string;
  birthDate: dayjs.Dayjs | null;
  profileImage?: string;
};

export default function MePage() {
  const [form] = Form.useForm<ProfileFormValues>();
  const [imageUrl, setImageUrl] = useState<string>("");

  const initialValues: ProfileFormValues = {
    userId: "kimji1113",
    userName: "김지희",
    email: "kimjihee@gmail.com",
    birthDate: dayjs("1998-11-13"),
    profileImage: "",
  };

  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImageUrl(result);
      form.setFieldValue("profileImage", result);
    };
    reader.readAsDataURL(file);
    return false;
  };

  const onFinish = (values: ProfileFormValues) => {
    console.log("수정 저장값:", {
      ...values,
      birthDate: values.birthDate?.format("YYYY-MM-DD") ?? null,
    });

    message.success("내 정보가 저장되었습니다.");
  };

  return (
    <div className="p-4 md:p-6">
      <Card
        className="mx-auto w-full max-w-3xl rounded-2xl shadow-lg"
        variant="borderless"
      >
        <div className="mb-8">
          <Title level={3} className="!mb-1">
            내 정보
          </Title>
          <Text type="secondary">
            기본 회원 정보를 확인하고 수정할 수 있어요.
          </Text>
        </div>

        <div className="mb-8 flex flex-col items-center justify-center gap-4">
          <Avatar
            size={110}
            src={imageUrl || initialValues.profileImage}
            icon={
              !imageUrl && !initialValues.profileImage ? (
                <UserOutlined />
              ) : undefined
            }
            className="shadow-md"
          />

          <Upload
            showUploadList={false}
            beforeUpload={handleImageChange}
            accept="image/*"
          >
            <Button icon={<CameraOutlined />}>프로필 이미지 변경</Button>
          </Upload>
        </div>

        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
          onFinish={onFinish}
        >
          <Form.Item label="유저 아이디" name="userId">
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="사용자 이름"
            name="userName"
            rules={[{ required: true, message: "사용자 이름을 입력해주세요." }]}
          >
            <Input placeholder="사용자 이름 입력" />
          </Form.Item>

          <Form.Item
            label="이메일"
            name="email"
            rules={[
              { required: true, message: "이메일을 입력해주세요." },
              { type: "email", message: "올바른 이메일 형식이 아닙니다." },
            ]}
          >
            <Input placeholder="이메일 입력" />
          </Form.Item>

          <Form.Item label="생일" name="birthDate">
            <DatePicker
              className="w-full"
              format="YYYY-MM-DD"
              placeholder="생일 선택"
            />
          </Form.Item>

          <Form.Item name="profileImage" hidden>
            <Input />
          </Form.Item>

          <Form.Item className="!mb-0">
            <Space>
              <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                저장하기
              </Button>
              <Button htmlType="button" onClick={() => form.resetFields()}>
                초기화
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
