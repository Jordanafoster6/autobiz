import React, {ReactNode} from 'react';

export interface ChatWindowProps {
  children?: ReactNode
}

export function ChatWindow(props: ChatWindowProps) {
  return (
    <div className='chat-window col-12 col-md-9 p-3' style={{height: '100vh'}}>
      {props.children ?? <></>}
    </div>
  )
}
