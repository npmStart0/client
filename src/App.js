import './App.css';
import { Main } from './project/Main';

function App() {
  return (
    <div className="App">
            <Main></Main>
      {/* לא אמור להופיע פה */}
      {/* Home נמצא בקומפוננטת */}
      <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} className='logo' alt="logo" />
      <h2> ...האתר בשלבי פיתוח</h2>
      <h1><a href='https://github.com/NpmStart0' target="_blank">Github</a> מפתחים? עקבו אחרינו ב </h1>
      <h2 className='handwritting'><a href='mailto:npmstart2@gmail.com' target="_blank">npmstart2@gmail.com</a> ג'ונרית? רוצה להיות חלק מהצוות המוביל? צרי איתנו קשר  </h2>
    </div>
  );
}

export default App;
