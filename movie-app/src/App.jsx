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
    </div>
  )
}

export default App
