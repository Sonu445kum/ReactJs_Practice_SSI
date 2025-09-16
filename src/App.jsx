
import AddAndRemoveTodo from "./Components/UseState/AddAndRemoveTodo"
import AddRandomNum from "./Components/UseState/AddRandomNum"
import ChangeBackgroundClor from "./Components/UseState/ChangeBackgroundClor"
import CounterApp from "./Components/UseState/CounterApp"
import FormValidate from "./Components/UseState/FormValidate"
import IncreaseLikeBtn from "./Components/UseState/IncreaseLikeBtn"
import Profile from "./Components/Props/Profile"
import ShowHidePass from "./Components/UseState/ShowHidePass"
import ToggleText from "./Components/UseState/ToggleText"
import UpdateProperty from "./Components/UseState/UpdateProperty"



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

      {/* Props Concept */}
      <Profile name="Sonu" email="sonuroy1629@gmail.com" password="Sonu@123"/>


    </>
  )
}

export default App;
