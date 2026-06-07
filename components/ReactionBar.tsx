"use client";

import { useState } from "react";

type Props = {
  postId: string;
};

export default function ReactionBar({ postId }: Props) {
  const [counts, setCounts] = useState({
    yiyo: 0,
    cmart: 0,
    sbwl: 0,
    neyva: 0
  });

  const [floating, setFloating] = useState<string | null>(null);

  const triggerFloat = (type: string) => {
    setFloating(type);

    setTimeout(() => {
      setFloating(null);
    }, 1200);
  };

  const handleReact = (type: keyof typeof counts) => {
    setCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 1
    }));

    if (type === "yiyo" || type === "neyva") {
      triggerFloat(type);
    }
  };

  return (
    <div className="relative">

      {/* FLOATING ANIMATION */}
      {floating === "yiyo" && (
        <div className="absolute bottom-10 left-1/2 text-3xl animate-bounce">
          🔥
        </div>
      )}

      {floating === "neyva" && (
        <div className="absolute bottom-10 left-1/2 text-3xl animate-bounce">
          👎🏽
        </div>
      )}

      {/* BUTTONS */}
      <div className="flex gap-4 text-sm mt-2">

        <button onClick={() => handleReact("yiyo")}>
          🔥 {counts.yiyo}
        </button>

        <button onClick={() => handleReact("cmart")}>
          🤝 {counts.cmart}
        </button>

        <button onClick={() => handleReact("sbwl")}>
          🥵 {counts.sbwl}
        </button>

        <button onClick={() => handleReact("neyva")}>
          👎 {counts.neyva}
        </button>

      </div>

    </div>
  );
}
