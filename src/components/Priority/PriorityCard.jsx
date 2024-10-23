import React,{useState,useEffect} from 'react'
const url="https://api.quicksell.co/v1/internal/frontend-assignment";
import Priority from './Priority';
const PriorityCard = ({sort}) => {
    // const [tasks,setTasks]=useState([]);
    const [urgent, setUrgent] = useState([]);
  const [high, setHigh] = useState([]);
  const [medium, setMedium] = useState([]);
  const [low, setLow] = useState([]);
  const [noPriority, setNoPriority] = useState([]);
    const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    
    // Reusable sorting function
    const sortArray = (arr) => {
        if (sort === 1) {
            // Sort by title
            return arr.sort((a, b) => {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            });
        } else if (sort === 2) {
            // Sort by priority
            return arr.sort((a, b) => {
                if (a.priority < b.priority) return -1;
                if (a.priority > b.priority) return 1;
                return 0;
            });
        }
        return arr;
    };

    const urgentTasks = sortArray(data.tickets.filter((t) => t.priority === 4));
    const highPriorityTasks = sortArray(data.tickets.filter((t) => t.priority === 3));
    const mediumPriorityTasks = sortArray(data.tickets.filter((t) => t.priority === 2));
    const lowPriorityTasks = sortArray(data.tickets.filter((t) => t.priority === 1));
    const noPriorityTasks = sortArray(data.tickets.filter((t) => t.priority === 0));

    setUrgent(urgentTasks);
    setHigh(highPriorityTasks);
    setMedium(mediumPriorityTasks);
    setLow(lowPriorityTasks);
    setNoPriority(noPriorityTasks);

    console.log("Sorted tasks by priority:", {
        urgentTasks,
        highPriorityTasks,
        mediumPriorityTasks,
        lowPriorityTasks,
        noPriorityTasks
    });
};

    useEffect(() => {
        fetchData();
    }, [sort]);
  return (
    <div className='status-card'>
     <Priority urgent={urgent} high={high} medium={medium} noPriority={noPriority} low={low}/>
    </div>
  )
}

export default PriorityCard
