import { useEffect, useState } from "react"
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts, serWorkouts] = useState(null);

    useEffect( () => {
     fetch('http://localhost:3000/api/workouts')
        .then((res) => res.json())
        .then((data) => serWorkouts(data))
        .catch((err) => console.error("Error fetching:", err));
    }, [])

  return (
    <div className="home">
      <div className="workouts">
        <ul>
            {workouts && workouts.map((workout) => (
                <li key={workout._id}>{workout.title}</li>
            ))}
        </ul>
        <WorkoutForm/>
      </div>
    </div>
  )
}

export default Home
