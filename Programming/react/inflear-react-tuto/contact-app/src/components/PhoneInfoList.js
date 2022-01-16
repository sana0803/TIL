import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  }
  render() {
    const { data } = this.props

    // 에러 방지를 위해 data없으면 null 반환
    // 하지만 위에 defaultProps 설정하면 필요없다
    // if (!data) return null 

    const list = data.map(
      info => (<PhoneInfo info={info} key={info.id} />)
    )

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;