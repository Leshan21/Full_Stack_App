import { useState } from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const workout = {title, reps, load}; // create a workout object with title, load and reps

      const response = await fetch('http://localhost:3000/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout), // workout body convert in to json format
        headers: {
          'Content-Type': 'application/json' // set the content type to application json
        }
      });

      const json = await response.json(); // await the response and convert it to json format

      if(!response.ok){
        setError(json.error); // if response is not ok set the error message from the json response
      }

      if(response.ok){
        setTitle('');
        setLoad('');
        setReps('');
        setError(null);
        console.log("New workout successfully added...!", json)
      }
    }

  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a title</h3>
        <label>Exercise title: </label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>

        <label>Load in kg: </label>
        <input type="number" onChange={(e) => setLoad(e.target.value)} value={load}/>

        <label>Reps: </label>
        <input type="number" onChange={(e) => setReps(e.target.value)} value={reps}/>

        <button>Add workout</button>
    </form>
  )
}

export default WorkoutForm
