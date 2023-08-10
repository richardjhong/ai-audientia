"use client";

import { Companion } from "@prisma/client";
import { useState, useEffect, useRef, ElementRef } from "react";

import ChatMessage, { ChatMessageProps } from "@/components/ChatMessage";

interface ChatMessagesProps {
  companion: Companion;
  isLoading: boolean;
  messages: ChatMessageProps[];
}

const ChatMessages = ({ companion, isLoading, messages = [] }: ChatMessagesProps) => {
  const scrollRef = useRef<ElementRef<"div">>(null);
  const [fakeLoading, setFakeLoading] = useState<boolean>(messages.length > 0 ? false : true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        isLoading={fakeLoading}
        role="system"
        content={`${companion.name === "T-800" ? "" : "Hello, "}I am ${companion.name}, ${
          companion.description
        }`}
        src={companion.src}
      />
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          role={message.role}
          content={message.content}
          createdAt={message.createdAt}
          src={companion.src}
        />
      ))}
      {isLoading && (
        <ChatMessage
          role="system"
          src={companion.src}
          isLoading
        />
      )}
      <div ref={scrollRef} />
    </div>
  );
};

export default ChatMessages;
