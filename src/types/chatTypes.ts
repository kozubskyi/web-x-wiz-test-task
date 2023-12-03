export interface IChat {
  createdAt: string;
  id: string;
  lastMessage: IMessage | null;
  members: IChatUser[];
  updatedAt: string;
}

export interface IMessage {
  content: string;
  createdAt: string;
  id: string;
  seenBy: IChatUser[];
  sender: IChatUser;
  updatedAt: string;
}

export interface IChatUser {
  avatarURL: string;
  createdAt: string;
  email: string;
  userName: string;
}

export interface IGetChatsResponse {
  getChats: {
    chats: IChat[];
  };
}

export interface ISendMessageResponse {
  sendMessage: IMessage;
}
