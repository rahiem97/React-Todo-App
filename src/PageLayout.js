import React from 'react';
import App from './App_Class';

//Page layout is just a page functional component that uses jsx to display the layout of our page
//Take a look at App.js in order to see the todo list functionality
function Page() {
    return(
<div className="App">
      <header className="App-header">
        <img src="MyRTWhite.png" className="App-logo" alt="logo" />
        <p>
          This is my React TO-DO application
        </p>
       <App></App>
      </header>
    </div>
    );

}

export default Page;
