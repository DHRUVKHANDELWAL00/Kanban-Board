import React,{useState,useEffect} from 'react'
const url="https://api.quicksell.co/v1/internal/frontend-assignment";
import Users from './Users';
const UserCard = ({sort}) => {
    // const [tasks,setTasks]=useState([]);
    const [usr1, setUsr1] = useState([]);
const [usr2, setUsr2] = useState([]);
const [usr3, setUsr3] = useState([]);
const [usr4, setUsr4] = useState([]);
const [usr5, setUsr5] = useState([]);
console.log(sort)
    const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("sort id", sort);

    // Reusable sorting function based on sort value
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
        return arr; // Return the array as-is if sort is 0 or an unknown value
    };

    // Filter and sort data for each user
    const arr1 = sortArray(data.tickets.filter((t) => t.userId === "usr-1"));
    const arr2 = sortArray(data.tickets.filter((t) => t.userId === "usr-2"));
    const arr3 = sortArray(data.tickets.filter((t) => t.userId === "usr-3"));
    const arr4 = sortArray(data.tickets.filter((t) => t.userId === "usr-4"));
    const arr5 = sortArray(data.tickets.filter((t) => t.userId === "usr-5"));

    // Set state for each user
    setUsr1(arr1);
    setUsr2(arr2);
    setUsr3(arr3);
    setUsr4(arr4);
    setUsr5(arr5);

    console.log("Sorted data:", arr1, arr2, arr3, arr4, arr5);
};

    useEffect(() => {
        fetchData();
    }, [sort]);
  return (
    <div className='status-card'>
     <Users usr1={usr1} usr2={usr2} usr3={usr3} usr4={usr4} usr5={usr5}/>
    </div>
  )
}

export default UserCard
