import React from 'react';

class Detail extends React.Component {


  componentDidMount() {
    //마운트 되면, 구조 분해 할당으로 location, history를 얻는다.
    const { state, history } = this.props;

    //단, 이미지 클릭이 아닌 직접 url을 입력해서 접근하려는 경우(undefined)
    // home으로 리다이렉트 시킴.
    if (!state) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;

    if (location.state) {
      const { title } = location.state;
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }

  }
}

export default Detail;