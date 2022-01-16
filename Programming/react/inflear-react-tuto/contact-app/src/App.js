import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0

  state = {
    info: [], // handleCreate에서 받아온 자식 data를 app에도 넣어주기
  }
  
  handleCreate = (data) => {
    console.log(data)
    // info 배열에 data 넣겠다고 this.state.info.push(data) 이렇게 하면 안됨
    // this.setState({ info: this.state.info }) 이것도 안됨..
    // 리액트는 불변성을 유지해줘야하므로 concat이라는 내장함수 사용!
    // 비구조화 할당 문법을 사용하면 코드가 짧아진다
    const { info } = this.state
    this.setState({
      info: info.concat({
        ...data,
        id: this.id++
      })
      // info: this.state.info.concat(data)
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />        
        <PhoneInfoList data={this.state.info}/>
        {JSON.stringify(this.state.info)} {/* string 형태로 반환 */}
      </div>
    );
  }
}

export default App;
