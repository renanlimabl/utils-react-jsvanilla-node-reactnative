import React, { useState } from 'react';


function App() {
  const [inputFields, setInputFields] = useState([
    { firstName: '', lastName: '' },
    { firstName: '', lastName: '' },
  ])

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    // console.log(index, event.target.name)    
    values[index][event.target.name] = event.target.value
    setInputFields(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('InputFields', inputFields)
  }

  return (
    <>
      <h1>Input dinâmico</h1>
      <form onSubmit={handleSubmit}>
        {
          inputFields.map((input, index) => (
            <div key={index}>
              <input
                name="firstName"
                type="text"
                value={input.firstName}
                onChange={e => handleChangeInput(index, e)}
              />
              <input
                name="lastName"
                type="text"
                value={input.lastName}
                onChange={e => handleChangeInput(index, e)}
              />
            </div>
          ))
        }
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default App;