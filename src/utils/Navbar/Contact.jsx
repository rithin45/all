import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import Navsidebar from './Navsidebar';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
    <Navsidebar/>
    <Container maxWidth="md" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <Typography variant="h2" align="center" gutterBottom>Contact Us</Typography>
      <Typography variant="body1" align="center" paragraph>
        We are here to assist you. Please fill out the form below, and we'll get back to you shortly.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </div>
  );
};

export default Contact;
