"use client";

import { useTheme } from "next-themes";
import { BeatLoader } from "react-spinners";
import { Copy } from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import BotAvatar from "@/components/BotAvatar";
import UserAvatar from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";

export interface ChatMessageProps {
  role: "system" | "user";
  content?: string;
  isLoading?: boolean;
  createdAt?: Date;
  src?: string;
}

const ChatMessage = ({ role, content, isLoading, createdAt, src }: ChatMessageProps) => {
  const { toast } = useToast();
  const { theme } = useTheme();

  const onCopy = () => {
    if (!content) return;

    navigator.clipboard.writeText(content);
    toast({
      description: "Message copied to clipboard",
    });
  };

  const formatChatTime = (createdAt: Date) => {
    return createdAt.toLocaleString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
  };

  return (
    <div
      className={cn("group flex items-start gap-x-3 py-4 w-full", role === "user" && "justify-end")}
    >
      {role !== "user" && src && <BotAvatar src={src} />}
      <div className="flex-col">
        <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
          {isLoading ? (
            <BeatLoader
              color={theme === "light" ? "black" : "white"}
              size={5}
            />
          ) : (
            content
          )}
        </div>
        {createdAt && !isLoading && (
          <p className="flex items-center justify-center px-4 py-2 max-w-xs text-xs">
            {formatChatTime(createdAt)}
          </p>
        )}
      </div>
      {role === "user" && <UserAvatar />}
      {role !== "user" && !isLoading && (
        <Button
          onClick={onCopy}
          className="opacity-0 group-hover:opacity-100 transition"
          size="icon"
          variant="ghost"
        >
          <Copy className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default ChatMessage;
