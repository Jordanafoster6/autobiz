import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export interface PromptBarProps {
  onSubmitPrompt?: (prompt: string) => void
}

export function PromptBar(props: PromptBarProps) {
  const [prompt, setPrompt] = useState('');
  const isValidPrompt = (prompt !== '');
  const submitPrompt = () => {
    (!!props.onSubmitPrompt && isValidPrompt) && props.onSubmitPrompt(prompt);
    setPrompt(''); // reset prompt
  }
  return (
    <div className='prompt-bar'>
      <div className='mx-auto mb-3' style={{maxWidth: '48rem'}}>
        <TextField
          id="prompt-input"
          variant="outlined"
          fullWidth
          placeholder='Enter prompt here...'
          value={prompt}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPrompt(event.target.value);
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton disabled={!isValidPrompt} onClick={submitPrompt}>
                    <ArrowCircleUpIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </div>
    </div>
  )
}
