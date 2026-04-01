"use client";

import { useEffect, useRef, useState } from "react";

export default function FancyCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const dot = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  const [active, setActive] = useState(false);

  useEffect(() => {
    let frame = 0;

    const moveCursor = () => {
      dot.current.x += (mouse.current.x - dot.current.x) * 0.35;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.35;

      ring.current.x += (mouse.current.x - ring.current.x) * 0.14;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      frame = requestAnimationFrame(moveCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'button, a, input, textarea, select, [role="button"], .ant-menu-item, .ant-btn, .ant-input, .ant-card',
      );

      setActive(Boolean(interactive));
    };

    const handleMouseDown = () => setActive(true);
    const handleMouseUp = () => setActive(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    frame = requestAnimationFrame(moveCursor);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={`cursor-ring ${active ? "active" : ""}`} />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
