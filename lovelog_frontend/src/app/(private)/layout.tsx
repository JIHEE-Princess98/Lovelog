import React from "react";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      네비게이션 <main>{children}</main>
    </div>
  );
}
