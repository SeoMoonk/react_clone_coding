import React from 'react';

class App extends React.Component {

    //https://yts.mx/api/v2/movie_details.json?movie_id=10
    state = {
        isLoading: true,
        movies: [],
    };

    //state 컴포넌트가 처음 마운트(생성?) 되었을 때, 처음 상태는 true(로딩중) 일 것이다.
    //마운트 되고 6초 후에, isLoading의 상태가 false(로딩 완료)로 변경되도록 한다.
    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading:false});
        },6000);
    }

    render() {
        
        const { isLoading } = this.state;

        return (
            <div>
                {/* 마운트 -> 로딩중 -> 6초후 -> 로딩 완료 */}
                <h1>{isLoading ? 'Loading ...' : 'We are ready'}</h1>
            </div>

        );
    }
}

export default App;