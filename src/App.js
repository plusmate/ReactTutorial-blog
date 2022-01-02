/* eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {
  
  let [currentTitle, changingTitle] = useState(['남자 코트 추천', '남녀 코디 모음', '올해의 코디'])
  let [postNumber, changingPostNumber] = useState(0)
  let [like, changingLike] = useState(0)
  // let [likeNumber, changingLikeNumber] = useState([postLikeNumber1=0, postLikeNumber2=0, postLikeNumber3=0])
  //likeNumber[i]
  let [modal, changingModal] = useState(false)
  // let [addressModal, changingAddressModal] = useState(false)

  /* state의 변수들은 그냥 데이터 변경이 불가능 */
  // function likeButton() {
  //   countingLike = like + 1
  //   return countingLike
  // }

  function changingTitleFunction(){
    var sexArray = [...currentTitle]  //deep copy
    sexArray[0] = '여자 코트 추천'
    changingTitle(sexArray)
  }

  function changingOrderFunction(){
    var orderArray = [...currentTitle]
    orderArray.sort()
    changingTitle(orderArray)
  }

  function changingLikeFunction() {
    changingLike(like+1)
  }

  // function changingLikeNumberFunction() {
  //   return(
  //     likeNumber.map(function(arrayData, i){
  //     changingLikeNumber(arrayData[i]+1)
  //   }))
  // }

  function modalFunction() {
    // changingModal(true)
    changingModal(!modal)
  }

  function addressModalFunction() {
    changingAddressModal(!addressModal)
  }

  // function Post() {
  //   var postArray = []

  //   for (var i = 0; i<3; i++){
  //     postArray.push(
  //       <div className="list">
  //         <h3 onClick={ () => changingPosts(i)}>{currentTitle[i]} </h3>
  //         <span onClick={ changingLikeFunction }>👍</span> {like}
  //         <p>?월 ?일 발행</p>
  //         <hr />
  //       </div>
  //     )
  //   }

  //   return postArray
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={ changingTitleFunction }>남/녀</button>
      <button onClick={ changingOrderFunction }>정렬</button>

      {/* {Post()} */}
      {
        currentTitle.map( function(titleData, i){
          return(
            <div className="list">
            <h3 onClick={() => {changingPostNumber(i)}}>{titleData} </h3>
            <span onClick={ changingLikeFunction }>👍</span> {like}
            <p>?월 ?일 발행</p>
            <hr />
          </div>
          )
        })
      }

      <button onClick={modalFunction}>포스트</button>
      {/* 자식component에 props전달 ) <자식component 작명={state명}/>*/}
      {modal === true ? <Modal currentTitle={currentTitle} postNumber={postNumber}/> : null} 
    </div>

    
  );
}

function Modal(props){
  return(
      <div className='modal'>
        <h2>{props.currentTitle[props.postNumber]}</h2>   
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

// function Address() {
//   return(
//     <div className='modal'>
//       <p>ㅁㅁ시ㅁㅁ구ㅁㅁ동ㅁㅁ로ㅇㅇㅇ</p>
//     </div>
//   )
// }

export default App;