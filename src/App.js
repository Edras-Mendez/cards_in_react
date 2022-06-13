import WebDescription from './components/webDescription.jsx';
import CardsInfo from './components/cardsDescription.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="description__wrapper">
        <WebDescription 
          image='description_image.svg'
        />
      </div>

      <div className="Cards__wrapper">
        <CardsInfo 
          imagen='comunication.svg'
          title='Comunication'
          content='Lorem eos suscipit laborum debitis est delectus? Est blanditiis eum officia officiis consectetur dicta optio Quae beatae quis tenetur expedita cum Adipisci sapiente nihil quos omnis aperiam Labore sequi ipsam.'
        />
        <CardsInfo 
          imagen='social.svg'
          title='Social'
          content='Lorem eos suscipit laborum debitis est delectus? Est blanditiis eum officia officiis consectetur dicta optio Quae beatae quis tenetur expedita cum Adipisci sapiente nihil quos omnis aperiam Labore sequi ipsam.'
        />
        <CardsInfo 
          imagen='social_network.svg'
         title='Social-Network'
          content='Lorem eos suscipit laborum debitis est delectus? Est blanditiis eum officia officiis consectetur dicta optio Quae beatae quis tenetur expedita cum Adipisci sapiente nihil quos omnis aperiam Labore sequi ipsam.'
        />
      </div>
    </div>
  );
}

export default App;
