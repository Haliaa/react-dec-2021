import './App.css'
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";


function App() {
  return (
      <>
          {/*{actors.map(actor=><Actor key={actor.id} name1={actor.name} img1={actor.img}/>)}*/}
          <hr/>
          <h2>Users:</h2>
          <hr/>
          <Users/>
          <hr/>
          <h2>Posts:</h2>
          <hr/>
          <Posts/>
          <hr/>
          <h2>Comments:</h2>
          <hr/>
          <Comments/>
      </>
  )
}


export default App;






