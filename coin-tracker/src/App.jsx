import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [amount, setAmount] = useState(0) // 내가 가진 돈
  const [ticker, setTicker] = useState({}) // 내가 선택한 비트코인

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers') // HTTP 요청을 보내는 비동기 내장 함수(javascript). Promise 반환
      .then((response) => response.json()) // 1. 응답을 json으로 파싱.
      .then((json) => {
        // 2. 콘솔에 출력
        console.log(json)
        setCoins(json)
        setLoading(false)
      })
  }, [])

  const onChange = (e) => {
    setAmount(e.target.value)
  }

  const handleTicker = (e) => {
    coins.forEach((coin) => {
      if (coin.name === e.target.value) {
        setTicker(coin)
      }
    })
  }

  return (
    <div>
      <h1>The coins {!loading && coins.length}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <form>
        <input
          onChange={onChange}
          type='text'
          placeholder='enter the amount'
          value={amount}
        />
      </form>
      {/* <ul>
        {coins.map((coin) => ( // 암시적 return. 소괄호 사용
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) : {coin.quotes['USD'].price} USD
          </li>
        ))}
      </ul> */}
      {/* <ul>
        {coins.map((coin) => {
          // 명시적 return. 중괄호를 사용하면 return 키워드를 꼭 써줘야함
          return (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes['USD'].price} USD
            </li>
          )
        })}
      </ul> */}
      {/* 내가 가진 돈으로 내가 선택한 비트코인을 얼마만큼 살 수 있는지 */}
      {/* 로딩 true/false에 따라 노출 여부 변경하기! api 요청이 갑자기 안됨 ㅠㅠ */}
      <select onChange={handleTicker}>
        {coins.map((coin) => {
          // 명시적 return. 중괄호를 사용하면 return 키워드를 꼭 써줘야함
          return <option key={coin.id}>{coin.name}</option>
        })}
      </select>
      you can get {amount / ticker.quotes.USD.price} {ticker.symbol}
    </div>
  )
}

export default App
