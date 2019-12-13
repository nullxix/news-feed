import React, {useState} from 'react';
import Input from './components/Input';
import Output from './components/Output';
import Credits from './components/Credits';
import LinkObject from './components/LinkObject';
import defaultArticles from './defaultArticles.json';
import apiKey from './news-api-key.json';
import {Link} from 'react-router-dom';

export default function Main() {
  const [articles, setArticles] = useState([]);
  const [areArticledGenerated, setAreArticlesGenerated] = useState(false);
  const categoryNames = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
  const [categories, setCategories] = useState(categoryNames.map( cat => {
    return (
      {
        name: cat,
        active: false,
        _id: cat + Math.random(),
      }
  )}))
   
  const handleInputChange = (id, type) => {
    let newCategories = categories.map(category => {
        let newCat = category;

        //Only ONE category can be active at a time
        category._id === id ?
          newCat.active = ! newCat.active:
          newCat.active = false

        return newCat
    })

    console.log("WE BE JARMIN")
    setCategories(newCategories)
  }

  const generateRequest = () => {
    let activeCategories = categories.reduce((acc, cv, i) => {
        
          // this commented out code was designed 
          // to allow MULTIPLE categories
          //     a) news api doesn't support that
          //     b) this code doesn't work anyway
          //
          //  let prefix = i === 0 ? "" : ",";
          //  let returnMe = cv.active ? 
          //               prefix + cv.name 
          //               : "";
          
          let returnMe = cv.active ? cv.name : "";
          return acc + returnMe
    }, "")

    console.log(activeCategories)

    return `https://newsapi.org/v2/top-headlines?category=${activeCategories}&country=us&apiKey=` + apiKey.key
  }

  const generateArticles = (e) => {
    e.preventDefault();
    fetch( generateRequest())
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
        <Input 
          handleSubmit={generateArticles} 
          categories={categories}
          handleChange={handleInputChange}
        > 
        
        </Input>
        <Output areArticlesGenerated={areArticledGenerated} articles={articles}/>
        <Credits/>
      </div>
      <LinkObject to="/SW" label="SPAAACE" position="left"/>
      <LinkObject to="/ISS" label="STAAATION" position="right"/>
    </>
  );
}
