import './App.css'
import { useState } from 'react'

const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])

  const handleAddFighter = (fighter) => {
    if (money - fighter.price < 0) console.log("Not enogh money")
    else {
      setMoney(money-fighter.price)
      setZombieFighters(zombieFighters.filter(target => target.id !== fighter.id))
      setTeam([...team, fighter])

    }
  }

  const handleRemoveFighter = (fighter) => {
    setZombieFighters([...zombieFighters, fighter])
    setTeam(team.filter(member => member.id !== fighter.id))
    setMoney(money+fighter.price)
  }


  return (
    <>
      <h1>Zombie Fighters</h1>

      <h2>Team Summary</h2>
      <p>Budget to spend: {money}</p>
      <p>Total Strength: {team.reduce((acc, cur) => acc + cur.strength, 0)}</p>
      <p>Total Agility: {team.reduce((acc, cur) => acc + cur.agility, 0)}</p>
      <p>{team.length <= 0 ? 'Pick some members from the availabe fighters below': ''}</p>
      <ul>
        {team.map(fighter => (
          <li>
            <p>Name: {fighter.name}</p>
            <img src={fighter.img} />
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <p>Price: {fighter.price}</p>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Available Fighters</h2>
      <ul>
        {zombieFighters.map(fighter => (
          <li>
            <p>Name: {fighter.name}</p>
            <img src={fighter.img} />
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <p>Price: {fighter.price}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
