import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,
    // 로딩된 애니 데이터 저장
    animations: [],
  };

  componentDidMount(){
    // 애니 데이터 로딩
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }

  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
