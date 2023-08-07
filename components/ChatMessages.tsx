"use client";

import { Companion } from "@prisma/client";
import { useState, useEffect } from "react";

import ChatMessage, { ChatMessageProps } from "@/components/ChatMessage";

interface ChatMessagesProps {
  companion: Companion;
  isLoading: boolean;
  messages: ChatMessageProps[];
}

const ChatMessages = ({ companion, isLoading, messages = [] }: ChatMessagesProps) => {
  const [fakeLoading, setFakeLoading] = useState<boolean>(messages.length > 0 ? false : true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        isLoading={fakeLoading}
        role="system"
        content={`Hello, I am ${companion.name}, ${companion.description}`}
        src={companion.src}
      />
    </div>
  );
};

export default ChatMessages;
