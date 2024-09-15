import React, {ReactNode} from 'react';

export interface ChatSidebarProps {
  children?: ReactNode
}

export function ChatSidebar(props: ChatSidebarProps) {
    return (
      <div className='chat-sidebar col-12 col-md-3 p-3' style={{backgroundColor: '#202123', height: '100vh'}}>
        {props.children ?? <></>}
      </div>
    )
}