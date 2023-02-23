import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as Yup from 'yup';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '2rem',
  },
  formTitle: {
    textAlign: 'center',
  },
}));

interface LoginFormProps {
  onSubmit: (values: { homeroom: string; studentNumber: number; nouns: string[] }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const classes = useStyles();

  const validationSchema = Yup.object({
    homeroom: Yup.string().required('Homeroom is required'),
    studentNumber: Yup.number()
      .typeError('Student number must be a number')
      .required('Student number is required'),
    noun1: Yup.string().required(),
    noun2: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      homeroom: '',
      studentNumber: 0,
      noun1: '',
      noun2: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const { homeroom, studentNumber, noun1, noun2 } = values;
      onSubmit({
        homeroom,
        studentNumber,
        nouns: [noun1, noun2],
      });
    },
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <h2 className={classes.formTitle}>Parent-Teacher Conference Login</h2>
      <TextField
        name="homeroom"
        label="Homeroom"
        variant="outlined"
        error={formik.touched.homeroom && Boolean(formik.errors.homeroom)}
        helperText={formik.touched.homeroom && formik.errors.homeroom}
        onBlur={formik.handleBlur}
        value={formik.values.homeroom}
        onChange={formik.handleChange}
      />
      <TextField
        name="studentNumber"
        label="Student Number"
        variant="outlined"
        type="number"
        error={formik.touched.studentNumber && Boolean(formik.errors.studentNumber)}
        helperText={formik.touched.studentNumber && formik.errors.studentNumber}
        onBlur={formik.handleBlur}
        value={formik.values.studentNumber}
        onChange={formik.handleChange}
      />
      <TextField
        name="noun1"
        label="Noun 1"
        variant="outlined"
        error={formik.touched.noun1 && Boolean(formik.errors.noun1)}
        helperText={formik.touched.noun1 && formik.errors.noun1}
        onBlur={formik.handleBlur}
        value={formik.values.noun1}
        onChange={formik.handleChange}
      />
      <TextField
        name="noun2"
        label="Noun 2"
        variant="outlined"
        error={formik.touched.noun2 && Boolean(formik.errors.noun2)}
        helperText={formik.touched.noun2 && formik.errors.noun2}
        onBlur={formik.handleBlur}
        value={formik.values.noun2}
        onChange={formik.handleChange}
      />
      <Box display="flex" justifyContent="center">
        <Button type="submit" variant="contained" color="primary">
          Join the Conference
        </Button>
      </Box>
    </form>
  );
