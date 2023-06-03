import { React, useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  function handleTextChange(e) {
    setText(e.target.value);
  }
  function handleDayChange(e) {
    setDay(e.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (!text) {
      alert('Please add task!');
      return;
    }
    if (!day) {
      alert('Please add day and time!');
      return;
    }

    onAdd({ text, day, reminder });

    // Return to default state after submiting
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          value={text}
          onChange={handleTextChange}
          placeholder='Add Task'
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          value={day}
          onChange={handleDayChange}
          placeholder='Add Day and Time'
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
