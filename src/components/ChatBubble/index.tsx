import { Theme } from '@/utils/types/components/component-base.type';
import React, { FC } from 'react';
import { ChatBubblePosition, ChatBubbleProps } from './chat-bubble.type';
import classNames from 'classnames';

const themeClasses: Record<Theme, string> = {
    accent: 'chat-bubble-accent',
    error: 'chat-bubble-error',
    info: 'chat-bubble-info',
    neutral: 'chat-bubble-neutral',
    primary: 'chat-bubble-primary',
    secondary: 'chat-bubble-secondary',
    success: 'chat-bubble-success',
    warning: 'chat-bubble-warning',
    default: '',
};
const positionClasses: Record<ChatBubblePosition, string> = {
    start: 'chat-start',
    end: 'chat-end',
};
const ChatBubble: FC<ChatBubbleProps> = ({
    children,
    position = 'start',
    theme = 'primary',
    classname,
}) => {
    const ChatContainerClasses = classNames(
        'chat',
        {
            [`${positionClasses[position]}`]: position,
        },
        classname,
    );
    const ChatBubbleClasses = classNames('chat-bubble', {
        [`${themeClasses[theme]}`]: theme,
    });
    return (
        <div className={ChatContainerClasses}>
            <div className={ChatBubbleClasses}>{children}</div>
        </div>
    );
};

export default ChatBubble;
