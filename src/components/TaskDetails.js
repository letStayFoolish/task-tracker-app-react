import { React, useState, useEffect } from 'react';
import {
  useParams,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Button from './Button';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();

      if (res.status === 404) {
        setError('Task not found.');
      }

      setTask(data);
      setLoading(false);
    };
    fetchTask();
  });

  if (error) {
    return <Navigate to='/' />;
  }

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button onClick={() => navigate(-1)} text='Go back' />
    </div>
  );
};

export default TaskDetails;
