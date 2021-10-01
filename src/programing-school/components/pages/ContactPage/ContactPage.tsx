import { makeStyles, Box } from '@material-ui/core';
import { Theme } from 'constants/themeConst';
// import { useForm } from 'react-hook-form';

import Title from 'components/atoms/Title';
import PageContainer from 'components/templates/PageContainer';
import Form from 'components/molecules/Form';
// import InputText from 'components/atoms/InputText';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 'auto',
    marginTop: theme.marginHeader,
    width: '80%',
  },
  container: {
    padding: '2rem 0',
  },
  gridItem: {
    padding: '1rem',
  },
  '@keyframes fadeIn': theme.animation.fadeIn,
}));

const ContactPage: React.VFC = () => {
  const classes = useStyles();

  return (
    <PageContainer>
      <Box className={classes.root}>
        <Title title="お問い合わせ" />
        <Form />
      </Box>
    </PageContainer>
  );
};

export default ContactPage;
