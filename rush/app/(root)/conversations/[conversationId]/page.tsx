"use client";

import ConversationContainer from "@/components/ui/shared/conversation/ConversationContainer";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Loader, Loader2 } from "lucide-react";
import React, { useState } from "react";
import Header from "./_components/Header";
import Body from "./_components/body/Body";
import ChatInput from "./_components/input/ChatInput";

type Props = {
  params: {
    conversationId: Id<"conversations">;
  };
};

const ConversationPage = ({ params: { conversationId } }: Props) => {
  const conversation = useQuery(api.conversations.get, { id: conversationId });

  const[removeFriendDialogOpen,
    setRemoveFriendDialogOpen] = useState(false);

    const[deleteGroupDialogOpen,
      setDeleteGroupDialogOpen] = useState(false);

      const[leaveGroupDialogOpen,
        setleaveGroupDialogOpen] = useState(false);
        
        const[callType, setCallType] = useState<"audio" | "video" | null>(null); 

  return conversation === undefined ? (
    <div
      className="w-full h-full
         flex items-center justify-center"
    >
      <Loader2 className="h-8 w-8" />
    </div>
  ) : conversation === null ? (
    <p
      className="w-full h-full
         flex items-center justify-center"
    >
      Conversation not found
    </p>
  ) : (
    <ConversationContainer>
      <Header
        name={
          (conversation.isGroup
            ? conversation.name
            : conversation.otherMember.username) || ""
        }
        imageUrl={
          conversation.isGroup ? undefined : conversation.otherMember.imageUrl
        }

        options={conversation.isGroup ? [
          {
            label: "Leave group",
            destructive: false,
            onClick: () =>
              setleaveGroupDialogOpen(true),
          },
          {
            label: "Delete group",
            destructive: true,
            onClick: () =>
              setDeleteGroupDialogOpen(true),

          },
        ] : [
          {
            label: "Remove group",
            destructive: true,
            onClick: () =>
              setRemoveFriendDialogOpen(true),
          },
        ]}
      />
      <Body />
      <ChatInput />
    </ConversationContainer>
  );
};

export default ConversationPage;
