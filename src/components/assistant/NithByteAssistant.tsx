"use client";

import React, { useState, useEffect } from "react";
import AssistantTrigger from "./AssistantTrigger";
import AssistantPanel from "./AssistantPanel";

export default function NithByteAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <AssistantTrigger isOpen={isOpen} onClick={() => setIsOpen(true)} />
      <AssistantPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
