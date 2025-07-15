import { useState, useEffect } from 'react'
import Button from './Button'
import styles from './App.module.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [keyword, setKeyword] = useState('')

  const onClick = () => {
    setCounter((prev) => prev + 1)
  }
  console.log('i run all the time') // 현재 코드에서는 state가 변할때마다 실행됨

  const iRunOnlyOnce = () => {
    console.log('i run only once') // 한 번만 실행됨
  }

  const onChange = (event) => {
    setKeyword(event.target.value)
  }

  useEffect(iRunOnlyOnce, []) // component가 생성되는 첫 시작점에 실행됨
  useEffect(() => console.log('call the API'), []) // 한 번만 실행됨

  useEffect(() => {
    if (keyword !== '' && keyword.length >= 5) {
      console.log('SEARCH FOR', keyword)
    }
  }, [keyword]) // keyword가 변화할때만 코드 실행, counter가 변화할때는 실행X

  useEffect(() => {
    console.log('i run only ONCE')
  }, []) // 아무것도 지켜보지 않음. 처음 한번만 실행됨

  useEffect(() => {
    console.log('i run when "keyword" changes')
  }, [keyword])

  useEffect(() => {
    console.log('i run when "counter" changes')
  }, [counter])

  useEffect(() => {
    console.log('i run when "keyword & counter" changes')
  }, [keyword, counter]) // 시작할때 & keyword나 counter 둘 중 하나가 변화시에 실행

  return (
    <div>
      <h1 className={styles.title}>react</h1>
      <Button text={'continue'} />
      <hr />
      <input // search keyword에 변화가 있을때만 keyword를 검색하려고 함. counter가 변할때에는 검색X
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='search here'
      />
      <h3>{counter}</h3>
      <button onClick={onClick}>click me</button>
    </div>
  )
}

export default App
// 다시 render 될때마다 반복 실행되어도 괜찮은 코드가 있지만 아닌 코드도 있음
// 처음 render 될때만 component 코드가 실행되길 원함
// ex. 처음 component render에서 API call -> state가 변할때마다 rerender X. 다시 불러올 필요없음
// => 특정 코드의 실행을 제한하는 방법 "useEffect"
// useEffect(실행하고 싶은 코드, dependencyList) : effect will only activate if the values in the list change
// 언제 코드를 실행할지 안할지 결정할 tool
// 무언가 변화할때 특정 코드 실행 가능
// react의 작동 => state를 변화시킬 때 component를 재실행시키는 것
