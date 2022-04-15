
import './App.css';
import Profile from './Profile/Profile'
import image from './Profile/Profile.jpg'
import PropTypes from 'prop-types';



function App() {
const fullname="ramzi"
const bio="acteur"
const profession="dev";
function getData(){
  alert("Hello Ramzi Profile")
}
  return (
    <div> 
      <Profile 
      fullname={fullname}
      bio={bio} 
      profession={profession}
      data={getData}
      ><img src={image} style={{width:"50%"}} ></img>
      </Profile>
    </div>
  );
}
Profile.propTypes={fullname:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,
  data:PropTypes.func 
    
}
Profile.defaultProps={fullname:"ramzi",bio:"acteur",profession:"dev"}
export default App;
