
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './Chip.css';
import VideoCartContainer from '../MainContainer/VideoContainer/VideoCartContainer';

export default function ClickableChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className='main'>
       <div className='chipsContainer'>
       <Stack direction="row" spacing={1}>
      <Chip label="ALL" onClick={handleClick} />
      <Chip label="Music" variant="outlined" onClick={handleClick} />
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
    </Stack>
       </div>
       <div className='data-from-Youtube'>
        <VideoCartContainer />
       </div>
    </div>
  );
}