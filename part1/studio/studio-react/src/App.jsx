import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RecipeDescription from './components/Description.jsx'
import RecipeIngredients from './components/Ingredients.jsx'
import RecipePhoto from './components/Photos.jsx'
import './App.css'
function App() {


  return (
    <>
      <div className="App">
        <div>  
          <RecipePhoto />
           <div >
              <RecipeDescription />
              <RecipeIngredients />
              </div>
          </div>
      </div>
    </>
  )
}

export default App
