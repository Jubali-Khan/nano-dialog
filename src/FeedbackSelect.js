import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import { useState } from 'react';

export default function FeedbackSelect(props) {
  const [feedback, setFeedback] = useState('Seitenverhaltnis passt nicht.');
  const handleChange = (event) => {
    setFeedback(event.target.value);
  };
  console.log('FeedbackSelect props.activeButton: ', props.activeButton);
  const handleDelete = (feedbackItem) => {
    props.setSelectCountArray(
      props.selectCountArray.filter((item) => item !== feedbackItem),
    );
  };

  return (
    <div style={{ display: 'flex', alignContent: 'center' }}>
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Feedback {props.number}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={feedback}
          onChange={handleChange}
          label="Feedback"
          sx={{ width: '15em', textAlign: 'left' }}
        >
          {/* <MenuItem value="">
            <em>Feedback waehlen</em>
          </MenuItem> */}
          <MenuItem value={'Seitenverhaltnis passt nicht.'}>
            Seitenverhaltnis passt nicht.
          </MenuItem>
          <MenuItem value={'Videodauer passt nicht.'}>
            Videodauer passt nicht.
          </MenuItem>
          <MenuItem value={'Video braucht mehr Energie.'}>
            Video braucht mehr Energie.
          </MenuItem>
          <MenuItem value={'Entferne die Filter oder Effekte.'}>
            Entferne die Filter oder Effekte.
          </MenuItem>
          <MenuItem value={'Entferne das Voiceover.'}>
            Entferne das Voiceover.
          </MenuItem>
          <MenuItem value={'Entferne die Musik.'}>Entferne die Musik.</MenuItem>
          <MenuItem value={'Ueperpruefe die Rechtschreibung.'}>
            Ueperpruefe die Rechtschreibung.
          </MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={() => {
          handleDelete(props.number);
        }}
        sx={{ display: 'inline-flex' }}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
}
