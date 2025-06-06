"use client";

import ConversationFallback from "@/components/ui/shared/conversation/ConversationFallback";
import ItemList from "@/components/ui/shared/item-list/ItemList";
import React from "react";
import AddFriendDialog from "./_components/AddFriendDialog";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import { request } from "http";
import Request from "./_components/Request";

type Props = {};

const FriendsPage = (props: Props) => {
  const requests = useQuery(api.request.get);

  return (
    <>
      <ItemList title="Friends" action={<AddFriendDialog />}>
        {requests ? (
          requests.length === 0 ? (
            <p
              className="w-full h-full
             flex items-center
              justify-center"
            >
              No friend requests found
            </p>
          ) : (
            requests.map((request) => (
              <Request
                key={request.request._id}
                id={request.request._id}
                imageUrl={request.sender.imageUrl}
                username={request.sender.username}
                email={request.sender.email}
              />
            ))
          )
        ) : (
          <Loader2 className="h-8 w-8" />
        )}
      </ItemList>
      <ConversationFallback />
    </>
  );
};

export default FriendsPage;
