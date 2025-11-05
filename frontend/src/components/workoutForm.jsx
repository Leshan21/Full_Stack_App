import { useState } from "react"

const workoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');

    const handleSubmit = async (e) => {
      
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

export default workoutForm
