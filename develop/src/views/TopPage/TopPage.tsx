import { Box, Typography } from '@mui/material';

import PageTemplate from 'components/PageTemplate/PageTemplate';

import { useProduct } from 'utils/contexts/product';

import TopTable from './TopTable';

const TopPage: React.FC = () => {
  const product = useProduct();

  return (
    <PageTemplate header footer>
      <Box sx={{
        padding: "5rem"
      }}>
        <Typography
          variant='h1' sx={{
            textAlign: 'left',
            fontSize: '2rem',
            paddingBottom: '1rem',
          }}
        >
          用品一覧
        </Typography>
        <TopTable
          product={product}
        />
      </Box>
    </PageTemplate>
  )
}

export default TopPage;