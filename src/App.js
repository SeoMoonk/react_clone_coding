import React from 'react';

//V1
function Food({ fav }) {
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
function Food3({ name, image }) {
  return (
    <div>
      <h1>I Like {name}</h1>
      <img src={image}></img>
    </div>
  );
}

const foodILike = [
  {
    //( 클래스의 성질 : 인스턴스의 성질 ) => 객체 생성
    //각 데이터가 들어왔을 때, 동일한 데이터가 들어올 수 있지만, 각 데이터별로 구분이 가능해야 한다 => PK(Primary Key, 기본키) 가 필요하다. => id 사용
    id: 1,
    name: 'Coffee',
    image: 'https://kr.object.ncloudstorage.com/calocheck/post/046957ea-d8d8-4f21-863f-1df518b0232b.png',
    rating : 5
  },
  {
    id: 2,
    name: 'Cutlet',
    image: 'https://kr.object.ncloudstorage.com/calocheck/post/09ad8c53-abe9-4830-b2ea-cb0e026ada34.png',
    rating: 2.3
  },
  {
    id: 3,
    name: 'RiceCake',
    image: 'https://kr.object.ncloudstorage.com/calocheck/sample/sample_img_no.png',
    rating: 4.1
  }
]

// map Ver2 (화살표 함수가 익숙하지 않다면, 함수를 따로 선언하여 사용할 수도 있다.)
function renderFood(dish) {
  return <Food3 name={dish.name} image={dish.image}/>;
}

function Rating({id, name, rating}) {

  return (

    <div>
      <h3> 음식ID : {id} </h3>
      <h3> 음식 이름 : {name} </h3>
      <h3> 별점 : {rating} 점 </h3>

      <hr/>
    </div>

  );

}

function viewRating(food) {
  return <Rating id={food.id} name={food.name} rating={food.rating}/>
}

function App() {
  return (
    <div>
      <h1>Hello123</h1>

      <hr />

      <Food fav="Potato" />
      <Food fav="Orange" />
      <Food fav="Ice Cream" />

      <hr />

      <Food2 fav="Chicken" />
      <Food2 fav="Milk" />
      <Food2 fav="Apple" />

      <hr />

      {/* foodILike 자료(배열, 맵 혹은 JSON타입) 의 내용을 읽어와서, 각각을 dish라고 칭한다. 각 dish(key)들의 name과 image 값(value)을 가지고 각각 다른 내용으로 출력되게 한다.  */}
      {foodILike.map((dish) => {
        return <Food3 name={dish.name} image={dish.image} />
      })}

      <hr/>

      {foodILike.map(renderFood)} {/* map Ver2 */}

      <hr/>

      {/* Rating map V1 */}
      {foodILike.map((food) => {
        return <Rating id={food.id} name={food.name} rating={food.rating} />
      })}

      <hr/>

      {/* Rating map V2 */}
      {foodILike.map(viewRating)}

      <hr />

    </div>
  );
}

export default App;
