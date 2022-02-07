import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import FeedbackSelect from './FeedbackSelect';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: 'small',
  boxShadow: 'none',
}));

export default function MainContent(props) {
  const [selectCountArray, setSelectCountArray] = useState([]);

  console.log('MainContent props.activeButton: ', props.activeButton);
  if (selectCountArray.length === 0) {
    props.setActiveButton(false);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={6}>
          <Item>
            <CardMedia
              sx={{
                marginTop: '5em',
                marginBottom: '5em',
                border: '1px solid black',
                borderRadius: '10px',
              }}
              component="video"
              alt={`${props.videoAlt}`}
              src={`${props.videoSource}`}
            />
          </Item>
        </Grid>
        <Grid item xs={10} sx={{ width: '55vw' }}>
          <Item>
            {selectCountArray.map((feedbackItem) => (
              <FeedbackSelect
                number={feedbackItem}
                setSelectCountArray={setSelectCountArray}
                selectCountArray={selectCountArray}
                activeButton={props.activeButton}
                setActiveButton={props.setActiveButton}
                key={`feedback-${feedbackItem}`}
              />
            ))}
            <br />
            <Button
              onClick={() => {
                props.setActiveButton(true);
                if (selectCountArray.length === 5) {
                  return;
                }
                setSelectCountArray([
                  ...selectCountArray,
                  selectCountArray.length + 1,
                ]);
              }}
            >
              <AddRoundedIcon />
            </Button>
            <p>max. 5 Feedback-Kommentare</p>
            <br />
            <br />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
