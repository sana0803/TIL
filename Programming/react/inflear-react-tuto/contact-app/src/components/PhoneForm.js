import React, { Component } from 'react';

class PhoneForm extends Component {

  state = {
    name: '',
    phone: '',
  }

  // e는 이벤트 객체. 파라미터로 받아옴
  handleChanege = (e) => {
    this.setState({
      // e.target = input
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault(); // form 특유의 submit 기능을 방지
    this.props.onCreate(this.state) // submit하면 App으로 state값 보냄
    // 넣어둔 입력값 초기화
    this.setState({
      name: '',
      phone: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='name'
          placeholder='이름'
          onChange={this.handleChanege}
          value={this.state.name}
        />
        <input
          name='phone'
          placeholder='전화번호'
          onChange={this.handleChanege}
          value={this.state.phone}
        />
        <button type='submit'>등록</button>
        {/* <div> 현재 입력값 보여주기
          {this.state.name} {this.state.phone}
        </div> */}
      </form>
    );
  }
}

export default PhoneForm;