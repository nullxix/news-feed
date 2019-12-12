import React, {useState} from 'react';
import Input from './components/Input';
import Output from './components/Output';
import Credits from './components/Credits';
import defaultArticles from './defaultArticles.json';
import apiKey from './news-api-key.json'

function App() {
  const [articles, setArticles] = useState([]);
  const [areArticledGenerated, setAreArticlesGenerated] = useState(false);
  let topArticles;
   
  const generateRequest = () => {
    return "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey.key
  }

  const generateArticles = () => {
    console.log("generating articles . . .")
    topArticles = fetch( generateRequest())
      .then( resp =>
        resp.json())
      .then( resp => {
        setArticles(resp.articles);
        setAreArticlesGenerated(true);
      })
  }

  return (
    <>
      <div id='app'>
        <Input handleSubmit={generateArticles}> 
        
        </Input>
        <Output areArticlesGenerated={areArticledGenerated} articles={articles}/>
        <Credits/>
      </div>
    </>
  );
}

export default App;
