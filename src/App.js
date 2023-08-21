import React from 'react';

//V1
function Food({fav}) {
  return (
    <div>
      <h1>I Like {fav}</h1>
    </div>
  );
}

//V2 (Props)
function Food2(props) { //props => properties
  return (
    <div>
      <h1>I Like {props.fav}</h1>
    </div>
  );
}

//V3
function Food3({name}){
  return (
    <div>
      <h1>I Like {name}</h1>
    </div>
  );
}

const foodILike = [
  {
    name: 'Coffee',
    image: ''
  },
  {
    name: 'Cutlet',
    image: ''
  },
  {
    name: 'RiceCake',
    image: ''
  }
]

function App() {
  return (
    <div>
      <h1>Hello123</h1>
      <hr />
      <Food fav="Potato" />
      <Food fav="Orange" />
      <Food fav="Ice Cream" />
      <hr />
      <Food2 fav="Chiken" />
      <Food2 fav="Milk" />
      <Food2 fav="Apple" />
      <hr />
      {foodILike.map((dish) => {
        return <Food3 name={dish.name} />
      })}
    </div>
  );
}

export default App;
