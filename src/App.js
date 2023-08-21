import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    //state : 상태를 저장하는 용도로 사용되며, 클래스형 컴포넌트를 사용하는 이유이기도 하다.
    state = {
        count: 0,
    };

    add = () => {

        console.log('add');

        //V1: Solution => setState를 사용하면 값을 변경할 수 있고, render()가 수행된다.
        //this.setState({count: this.state.count + 1});/

        //V2 : current 인자를 받아 객체를 받환하는 함수를 작성.
        this.setState(current => ({
            count: current.count + 1,
        }));
    }

    minus = () => {

        console.log('minus');
        /*
            //리액트는 state를 직접 변경하는 코드를 허용하지 않는다.
            this.state.count --;
            
            console.log(this.state.count);  
            // 리액트는 state가 변경되면 render() 함수를 다시 실행하여 변경된 state를 화면에 출력하지만,
            // state를 직접 변경하는 경우에는 render() 함수를 다시 실행하지 않는다.
        */

        //V1: Solution => setState를 사용하면 값을 변경할 수 있고, render()가 수행된다.
        //this.setState({count: this.state.count - 1});

        //V2 : current 인자를 받아 객체를 받환하는 함수를 작성.
        // => 직접 코드를 작성하여 state를 업데이트 하는 방법은 좋지 않다. (성능 문제, current를 사용하는 이유)
        this.setState(current => ({
            count: current.count - 1,
        }));
    }

    //연결 완료되었을 때? mount가 무엇?
    componentDidMount() {
        console.log ('component rendered');
    }

    //Update로 분류한 생명주기 함수.
    //화면이 업데이트 되면 실행되며, 버튼을 눌렀을 때 render() 다음으로 수행된다.
    // setState() => render() => componentDidUpdate()
    componentDidUpdate() {
        console.log ('Update~~');
    }

    //Unmount로 분류한 생명주기 함수.
    //컴포넌트가 죽을 때를 Unmount라고 하며, 이 때 수행된다.
    componentWillUnmount() {
        console.log ('Good bye.');
    }

    render() {
        //실행 순서 : constructor() => render() => componentDidMount() 
        // ====> 이들을 " *Mount로 분류한* 생명주기 함수" 라고 부른다.
        console.log("Rendering!!");

        //함수형 컴포넌트는 return 문이 JSX를 반환하지만,
        //클래스형 컴포넌트는 render() 함수가 JSX(JavaScript as XML) 를 반환한다.

        return (
            <div>
                <h1>The number is : {this.state.count} </h1>
                <button onClick={this.add}> Add </button>
                <button onClick={this.minus}> Minus </button>
            </div>
        );
    }

}

export default App;