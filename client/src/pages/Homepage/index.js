import React from 'react';
import { NewGameForm } from '../../components/NewGameForm';
import { Leaderboard } from '../../components/Leaderboard'
import { Timer } from '../../components/Timer'
import './styles.css'

export const Homepage = () => {
  const renderNewForm = e => {
    console.log(e.target.className)
    const div = document.querySelector('.form')
    if (e.target.className === 'hidden'){
      e.target.className = ''
      div.style.display = 'block'

    }
    else {
      e.target.className = 'hidden'
      div.style.display = 'none'
    }
   
  }
  const renderLeaderboard = e => {
    console.log(e.target.className)
    const div = document.querySelector('.leaderboard')
    if (e.target.className === 'hidden'){
      e.target.className = ''
      div.style.display = 'block'

    }
    else {
      e.target.className = 'hidden'
      div.style.display = 'none'
    }
  }
  return (
    <>
    <div className='home'>
      <h1>Welcome to You're a Quizard, Harry!</h1>

      <div className='rules'>
        <h3>The Rules</h3>
        <p>here are some rules</p>
      </div>
      <Timer/>
      
      <button className='hidden' onClick={renderNewForm}>New Game</button>
      <button>Join Game</button>
      <button className='hidden' onClick={renderLeaderboard}>Leaderboard</button>
      
      
    </div>
    <div className='form'>
    <NewGameForm/>
    </div>
    <div className='leaderboard'>
    <Leaderboard/>
    </div>
    </>
  )
}


