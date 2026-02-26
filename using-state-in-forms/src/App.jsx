import { useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import './App.css'

function App() {
  //initializing state for name, email, and feedback
  const [formData, setFormData] = useState({
    //set all as empty string bc if it was prefilled, submit would automatically work without use putting in their own data
    name: "",
    email: "",
    feedback: ""
  })
  //single function to handle all onChanges
  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    //passing formData and the handleChange function as props
    <>
      <FeedbackForm formData={formData} handleChange={handleChange} />
    </>
  )
}

export default App
