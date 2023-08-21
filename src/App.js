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

//V3 (Map)
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

function Food4({myFood}) {

  return (
    <div>
      <h1>my Favorite Food is {myFood}</h1>
    </div>

  );
}

function Food5(props){

  return (

    <div>
      <h1> my Faverite Food is {props.myFood}</h1>
    </div>

  );
}

function Food6({foodName}) {
  return (

    <div>
      <h1> my map food is {foodName}</h1>
    </div>

  );
}

const myFoodList = [

  {
    name: 'A'
  },
  {
    name: 'B'
  },
  {
    name: 'C'
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
      <hr />
      <Food4 myFood="Rice" />
      <hr/>
      <Food5 myFood="Hello" />
      <hr/>
      {
        myFoodList.map((myMenu) => {
          return <Food6 foodName={myMenu.name} />
        })
      }
    </div>
  );
}

export default App;
