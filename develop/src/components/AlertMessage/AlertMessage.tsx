import { useState, useEffect } from 'react';
import { Alert, AlertProps, IconButton, Collapse, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';


type Props = {
  successMessage: string,
  errorMessage: string,
  onClose: () => void,
}

const StyledAlert = styled(Alert)<AlertProps>({
  position: "fixed",
  bottom: "2rem",
})

const AlertMessage: React.FC<Props> = ({ successMessage, errorMessage, onClose }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dispMessage, setDispMessage] = useState(successMessage || errorMessage || '');
  const [color, setColor] = useState<'success' | 'error' | undefined>(undefined);

  useEffect(() => {
    if (successMessage) {
      setIsOpen(true);
      setDispMessage(successMessage);
      setColor('success');
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      setIsOpen(true);
      setDispMessage(errorMessage);
      setColor('error');
    }
  }, [errorMessage]);

  useEffect(() => {
    if (!successMessage && !errorMessage) {
      setIsOpen(false);
    }
  }, [successMessage, errorMessage]);

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
          {dispMessage}
        </StyledAlert>
      </Box>
    </Collapse>
  )
}

export default AlertMessage;