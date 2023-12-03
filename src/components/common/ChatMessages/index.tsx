import { FC } from 'react';
import { IChat } from 'types/chatTypes';
import { UserAvatar } from '../UserAvatar';

import s from './ChatMessages.module.scss';

interface ChatMessagesProps {
  chats: IChat[] | undefined;
  onSelectChat: (chat: IChat) => void;
}

export const ChatMessages: FC<ChatMessagesProps> = ({
  chats,
  onSelectChat,
}) => {
  return (
    <div>
      <ul>
        {chats?.map((chat) => {
          const sender = chat.lastMessage?.sender;
          return (
            <li
              className={s.chat}
              onClick={() => onSelectChat(chat)}
              key={chat.id}
            >
              <div className={s.chat_sender}>
                <UserAvatar
                  avatarURL={sender?.avatarURL}
                  userName={sender?.userName || 'NAme'}
                />
                <div>
                  <span className={s.chat_sender_name}>
                    {sender?.userName || 'Name'}
                  </span>
                  <p className={s.chat_sender_message}>
                    <span>
                      {chat.lastMessage?.content || 'Lorem Lorem Lorem'}
                    </span>
                  </p>
                </div>
                <div className={s.chat_date}>
                  <span>{chat.lastMessage?.updatedAt || '2 Min ago'}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
