// import React, { Component } from 'react';

// class EventPractice extends Component {

//     state = {
//         name: '',
//         message: ''
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: [e.target.value]
//         })
//     }
//     handleClick = () => {
//         alert(this.state.name + ":" + this.state.message)
// this.setState({
//             name: '',
//             message: ''
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>이벤트연습</h1>
//                 <input
//                     type="text"
//                     name="name"
//                     value={this.state.name}
//                     placeholder="이름을 입력하시오"
//                     onChange={this.handleChange}
//                 />

//                 <input
//                     type="text"
//                     name="message"
//                     value={this.state.message}
//                     placeholder="아무거나 입력하시오"
//                     onChange={this.handleChange}
//                 />
//                 <button
//                     onClick={this.handleClick}>확인</button>
//             </div>
//         )
//     }
// }

// export default EventPractice;

import React, { useState } from 'react';

const EventPracice = () => {
  const [username, setUsername] = useState('');
  const [message, setmessage] = useState('');

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setmessage(e.target.value);

  const onClick = () => {
    alert(username + ':' + message);
    setUsername('');
    setmessage('');
  };
  return (
    <div>
      <h1>함수형 컴포넌트로 이벤트 처리</h1>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="사용자"
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        value={message}
        placeholder="메세지"
        onChange={onChangeMessage}
      />

      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracice;
