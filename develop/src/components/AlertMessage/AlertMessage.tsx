import { useState, useEffect } from 'react';
import { Alert, AlertProps, IconButton, Collapse, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

import { useMessage } from 'utils/contexts/message';


const StyledAlert = styled(Alert)<AlertProps>({
  position: "fixed",
  bottom: "2rem",
})

const AlertMessage: React.FC = () => {
  const [color, setColor] = useState<'success' | 'error' | undefined>(undefined)
  const { message, result, isOpen, onClose } = useMessage();

  useEffect(() => {
    if (result === 'success') {
      setColor('success')
    } else if (result === 'error') {
      setColor('error')
    }
  }, [message, result])

  return (
    <Collapse in={isOpen}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <StyledAlert
          color={color}
          action={
            <IconButton
              onClick={onClose}
              aria-label="close"
              color="inherit"
              size="small"
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </StyledAlert>
      </Box>
    </Collapse>
  )
}

export default AlertMessage;