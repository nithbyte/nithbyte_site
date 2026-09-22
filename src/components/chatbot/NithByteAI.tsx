"use client";

import React from "react";
import { useNithByteChat } from "@/hooks/useNithByteChat";
import ChatLauncher from "./ChatLauncher";
import ChatPanel from "./ChatPanel";

export default function NithByteAI() {
  const {
    isOpen,
    setIsOpen,
    messages,
    isLoading,
    isThinking,
    sendMessage,
    resetConversation,
  } = useNithByteChat();

  return (
    <>
      <ChatLauncher isOpen={isOpen} onClick={() => setIsOpen(true)} />
      <ChatPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onReset={resetConversation}
        messages={messages}
        isLoading={isLoading}
        isThinking={isThinking}
        onSendMessage={sendMessage}
        onQuickAction={sendMessage}
      />
    </>
  );
}
