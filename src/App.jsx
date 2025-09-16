import AddAndRemoveTodo from "./Components/AddAndRemoveTodo"
import AddRandomNum from "./Components/AddRandomNum"
import ChangeBackgroundClor from "./Components/ChangeBackgroundClor"
import CounterApp from "./Components/CounterApp"
import FormValidate from "./Components/FormValidate"
import IncreaseLikeBtn from "./Components/IncreaseLikeBtn"
import ShowHidePass from "./Components/ShowHidePass"
import ToggleText from "./Components/ToggleText"
import UpdateProperty from "./Components/UpdateProperty"



function App() {
 
  return (
    <>
      <h1>Hello Sonu..!! Nice To Meet You!!</h1>
      <CounterApp/>
      <br />
      <ToggleText/>
      <br /><br />
      <ShowHidePass/>
      <br /> <br />
      <ChangeBackgroundClor/>
      <AddRandomNum/>

      <UpdateProperty/>

      <IncreaseLikeBtn/>

      <FormValidate/>

      <AddAndRemoveTodo/>
    </>
  )
}

export default App
