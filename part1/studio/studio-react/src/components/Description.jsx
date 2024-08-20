import React from 'react';
import styles from './Description.module.css';

 function RecipeAuthor(){
    let authorLink = "https://www.101cookbooks.com/";
    let authorPhoto = "https://images.101cookbooks.com/HOMEMADE-PASTA-RECIPE-h.jpg?w=1200&auto=compress&auto=format";
    let authorName = "Homemade Pasta";


return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Blog name</a> 
       </div>
    </div>
 );
}
 class RecipeDescription extends React.Component{
    render(){
        return(
            <div> 
   <div>
      <h1>Homemade Pasta</h1>
      <p>Everything I know about making homemade pasta. Four ingredients! If you have flour, two eggs, a splash of olive oil, and a bit of salt, you can do it right now.</p>
   </div>
   <RecipeAuthor />
</div>
        );
    }
 }
 export default RecipeDescription;