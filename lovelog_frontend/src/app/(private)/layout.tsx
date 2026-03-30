import React from "react";
import { Button } from "antd";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      네비게이션 <main>{children}</main>
    </div>
  );
}
