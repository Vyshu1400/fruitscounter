// Write your code here
import {component} from 'react'
import './index.css'

class FruitsCounter extends component {
  state = {mangocount: 0, bananacount: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value${prevState.count}`)
      return {count: prevState.mangocount + 1}
    })
  }

  bananaIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value${prevState.count}`)
      return {count: prevState.bananacount + 1}
    })
  }

  render() {
    const {mangocount, bananacount} = this.state
    return (
      <div>
        <h1>
          Bob ate {mangocount} mangoes {bananacount} bananas
        </h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
            className="fruitimage"
          />
          <button type="button" onClick={this.onIncrement}>
            Eat Mango
          </button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
            className="fruitimage"
          />
          <button type="button" onClick={this.bananaIncrement}>
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
