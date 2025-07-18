import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([]) // 초기값 : 빈배열

  const onChange = (e) => {
    setTodo(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (todo === '') {
      return
    }
    setTodo('')
    setTodos((currentArray) => [todo, ...currentArray]) // 기존 array를 가져와서 새로운 array를 return // arrary를 직접적으로 수정하지 않으면서 setTodos로 array에 element 추가하기
  }

  return (
    <div>
      <h2>myTodos {todos.length}</h2>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type='text'
          placeholder='write your todo ...'
        />
        <button>add to do</button>
      </form>
      <hr />
      <ul>
        {todos.map(
          (
            item,
            index // 결론적으로 여러 li로 구성된 하나의 새 array가 나옴
          ) => (
            <li key={index}>{item}</li> // react가 기본적으로 list에 있는 모든 item들을 인식하기 때문에 key를 넣어줘야함
          )
        )}
      </ul>
    </div>
  )
}

export default App

// useState에서 setXXX 사용법
// 1) 값 부여 setTodo('')
// 2) 함수 보내는 법 setTodo(현재상태 => 새로운 상태)

// map 함수
// array의 element들을 다 바꾸고 싶고 다 바뀐 새로운 array를 가지고 싶을때
// array.map(함수) 모든 item에 대해 함수 수행 + return한 값이 새로운 array에 들어감

// ['there', 'are', 'you', 'are', 'how', 'hello'] 라는 array가 있을 때
// ['there', 'are', 'you', 'are', 'how', 'hello'].map(() => ':)')
// => 결과 [':)', ':)', ':)', ':)', ':)', ':)']

// ['there', 'are', 'you', 'are', 'how', 'hello'].map(item => item.toUpperCase())
// => 결과 ['THERE', 'ARE', 'YOU', 'ARE', 'HOW', 'HELLO']
