import React,{useState,useEffect} from 'react'
const url="https://api.quicksell.co/v1/internal/frontend-assignment";
import Status from './Status';
const StatusCard = ({sort}) => {
    const [tasks,setTasks]=useState([]);
    const [backlog,setBacklog]=useState([]);
    const [todo,setTodo]=useState([]);
    const [inProgress,setInProgress]=useState([]);
    const [cancelled,setCancelled]=useState([]);
    const [done,setDone]=useState([]);
    const fetchData = async () => {
          const response = await fetch(url);
          const data = await response.json();
          setTasks(data.tickets);  // Set all tasks

          // Reusable sorting function
          const sortArray = (arr) => {
              if (sort == 1) {
                  // Sort by title
                  return arr.sort((a, b) => {
                      if (a.title < b.title) return -1;
                      if (a.title > b.title) return 1;
                      return 0;
                  });
              } else if (sort == 2) {
                  // Sort by priority
                  return arr.sort((a, b) => {
                      if (a.priority < b.priority) return -1;
                      if (a.priority > b.priority) return 1;
                      return 0;
                  });
              }
              return arr; // Return unsorted array if sort is 0 or another value
    };

    // Filter and sort tasks based on status
    const todoTasks = sortArray(data.tickets.filter((t) => t.status === 'Todo'));
    const inProgressTasks = sortArray(data.tickets.filter((t) => t.status === 'In progress'));
    const backlogTasks = sortArray(data.tickets.filter((t) => t.status === 'Backlog'));
    const cancelledTasks = sortArray(data.tickets.filter((t) => t.status === 'Cancelled'));
    const doneTasks = sortArray(data.tickets.filter((t) => t.status === 'Done'));

    // Set state for each status category
    setTodo(todoTasks);
    setInProgress(inProgressTasks);
    setBacklog(backlogTasks);
    setCancelled(cancelledTasks);
    setDone(doneTasks);

    console.log("Sorted tasks by status:", {
        todoTasks,
        inProgressTasks,
        backlogTasks,
        cancelledTasks,
        doneTasks
    });
};

    useEffect(() => {
        fetchData();
    }, [sort]);
  return (
    <div className='status-card'>
     <Status todo={todo} inProgress={inProgress} backlog={backlog} cancelled={cancelled} done={done}/>
    </div>
  )
}

export default StatusCard
