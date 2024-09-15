import React from 'react';
import { Button } from '@mui/material';
import { ChatWindow, ChatSidebar, ChatList, ChatFeed, PromptBar } from './gpt';

export function Layout() {
    return (
        <div className="container-fluid">
          <div className='row'>
              <ChatSidebar>
                <div className='d-flex flex-column'>
                  Custom Chat GPT
                  <Button variant='contained'>+ New Chat</Button>
                  <ChatList/>
                </div>
              </ChatSidebar>
              <ChatWindow>
                <div className='d-flex h-100' style={{flexDirection: 'column'}}>
                  <ChatFeed/>
                  <PromptBar onSubmitPrompt={(prompt) => {}}/>
                </div>
              </ChatWindow>
          </div>
        </div>
    )
}