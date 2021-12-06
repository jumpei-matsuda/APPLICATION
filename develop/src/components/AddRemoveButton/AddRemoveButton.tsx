import { IconButton, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

type Props = {
  onClickAdd: () => void,
  onClickRemove: () => void,
};

const AddRemoveButton: React.FC<Props> = ({ onClickAdd, onClickRemove, children }) => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <IconButton onClick={onClickRemove} >
      <RemoveCircleOutlineIcon />
    </IconButton>
    {children}
    <IconButton onClick={onClickAdd} >
      <AddCircleOutlineIcon />
    </IconButton>
  </Box>
)

export default AddRemoveButton;