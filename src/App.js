// Вивести всіх юзерів, біля кожного юзера кнопка GetDetails.
// При натисканні на кнопку праворуч повинна з’явитися повністю вся інформація про юзера і кнопка при натисканні на яку знизу повинні з’явитися його пости
// Структура схематично зображена вище...




import './App.css'
import Users from "./components/Users";



function App() {
  return (
      <>
          {/*{actors.map(actor=><Actor key={actor.id} name1={actor.name} img1={actor.img}/>)}*/}
          <Users/>
      </>
  )
}

export default App;





