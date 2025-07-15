import { useState, useEffect } from 'react'

const Hello = () => {
  useEffect(() => {
    // Hello 컴포넌트를 render할때 이부분도 같이 실행됨
    console.log('created :)')
    return () => console.log('destroyed') // component가 destory 될때 실행될 function
  }, [])
  return <h1>hello</h1> // hide하면 숨겨지는게 아니라 아예 없어짐 - 개발자 도구 elements 확인
}

function Appp() {
  const [showing, setShowing] = useState(false)

  const onClick = () => {
    setShowing((prev) => !prev)
  }

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'hide' : 'show'}</button>
    </div>
  )
}

export default Appp

// component : jsx를 return 하는 function
// cleaning function
