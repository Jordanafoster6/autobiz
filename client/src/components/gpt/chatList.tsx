import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

export function ChatList() {
    return (
      <div className='chat-list text-white' style={{color: '#202123'}}>
        <List>
            <ListItemButton>
              <ListItemText primary="Single-line item" />
            </ListItemButton>
        </List>
      </div>
    )
}