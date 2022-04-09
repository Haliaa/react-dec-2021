import './App.css'
import Actor from "./components/Actor";
import Users from "./components/Users";

const actors = [
    {id:1, name: 'Tom', img: 'https://i.pinimg.com/originals/68/a6/7c/68a67c62366eaff0fa686f81d18ed4ea.png'},
    {id:2, name: 'Jerry', img: 'https://i.pinimg.com/564x/a1/66/75/a1667537bfd23e4d72a3c826e2b8db8d.jpg'},
    {id:3, name: 'Luntik', img: 'https://i.pinimg.com/564x/72/62/c2/7262c2118c72347a08db8cce57527957.jpg'},
    {id:4, name: 'Minion', img: 'https://i.pinimg.com/564x/cb/c5/fd/cbc5fd14edc9546da00ee7961f59a086.jpg'}
]


function App() {
  return (
      <>
          {/*{actors.map(actor=><Actor key={actor.id} name1={actor.name} img1={actor.img}/>)}*/}
          <Users/>
      </>
  )
}

export default App;





