
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
import Greeting from "./Components/Props/Greeting"
import UserCard from "./Components/Props/UserCard"
import ButtonComp from "./Components/Props/ButtonComp"
import "./App.css";
import MessageComp from "./Components/Props/MessageComp"
import UserInfo from "./Components/Props/UserInfo"


function App() {

  // create a functions for handleClick
  const handleClick=()=>{
    alert("The button is Clickable..!!")
  }

  // here i Creating the Object of UserDetails:
  const userDeatils ={
    name:"Sonu",
    age:27,
    Address:"Bihar Patna",
    Pincode:842001
  }
 
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
      <Greeting name="Anushka"/>
      <UserCard name="Thanos" age="20" email="thanos@gmail.com"/>
      <ButtonComp text="hi there i sonu" onClick={handleClick}/>
      <div>
      <MessageComp text="Operation successful!" type="success" />
      <MessageComp text="Something went wrong!" type="error" />
      <MessageComp text="Here is some information." type="info" />
      <MessageComp text="Default message with no type." />
    </div>

      <UserInfo userDeatils={userDeatils}/>

    </>
  )
}

export default App;
