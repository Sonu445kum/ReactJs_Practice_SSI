
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
import Default_Greeting from "./Components/Deafult_Props/Default_Greeting"
import DisplayListItems from "./Components/List_Conditional_Rendering/DisplayListItems"
import Ternary_Operator from "./Components/List_Conditional_Rendering/Ternary_Operator"
import Logical_And_operator from "./Components/List_Conditional_Rendering/Logical_And_operator"
import Inline_Conditional_Function from "./Components/List_Conditional_Rendering/Inline_Conditional_Function"
import List_Task from "./Components/List_Conditional_Rendering/List_Task"
import Controlled_Input from "./Components/Controlled_Uncontrolled/Controlled_Input"
import SignupForm from "./Components/Controlled_Uncontrolled/SignupForm"
import CountEffects from "./Components/UseEffects/CountEffects"
import CountEffectWithDependArr from "./Components/UseEffects/CountEffectWithDependArr"
import CleanUpFunc from "./Components/CleanUpFunctions/CleanUpFunc"
import DataFetching from "./Components/UseCase_UseEffects/DataFetching"
import ParentCompo from "./Components/PropDrilling/ParentCompo"
import { createContext } from "react"
import ParentCom from "./Components/UseContext/ParentCom"
import CounterWithReducers from "./Components/UseReducers/CounterWithReducers"
import FormReducers from "./Components/UseReducers/FormReducers"


// create here useContext
 export const UserContext =createContext();


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

  // Here i m Create An Object as Person which pass the Props from the Parent->Child-GrandChild
  const Person={
    name:"Sonu",
    email:"sonuroy1629@gmail.com",
    password:"sonu@123",
    age:22,
  }
  // create An Object as Animal for useContext
  const Animal ={
    name:"Cow",
    color:"White",
    weight:"80Kg",
    age:"23"
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
      <Greeting/>

      {/* Deafult Props */}
      <Default_Greeting/>

      {/* passing some inputs */}
      <Default_Greeting name="Sonu" message="Hi there i M Sonu"/>

      {/* List  */}
      <DisplayListItems/>

      {/* Ternary Operator */}
      <Ternary_Operator/>

      {/* Logical Operators */}
      <Logical_And_operator/>

      {/* Inline Conditional Functions */}
      <Inline_Conditional_Function/>

      {/* Rendering List of Task */}
      <List_Task/>

      {/* Controlled And Uncontrolled Componenets */}
      <Controlled_Input/>

      {/* SignUpForm */}
      <SignupForm/>

      {/* Useffects Problems */}
      {/* <CountEffects/> */}

      {/* UseEffect With Dependency Array */}
      <CountEffectWithDependArr/>

      {/* CleanUp Functions */}
      <CleanUpFunc/>

      {/* Data Fetching */}
      <DataFetching/>

      {/* Prop Drilling */}
      <ParentCompo Person={Person}/>

      {/* UseContext */}
      <UserContext.Provider value={Animal}>
        <ParentCom/>
      </UserContext.Provider>

      {/* UseReducers */}
      <CounterWithReducers/>

      {/* FormReducers */}
      <FormReducers/>
    </>
  )
}

export default App;
