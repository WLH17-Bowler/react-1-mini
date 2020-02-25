import React, {Component} from 'react'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }
  updatePicture = (val) => {
    this.setState({picture: val})
  }
  updateName = (val) => {
    this.setState({name: val})
  }
  addFriend = () => {
    // const {friends, picture, name} = this.state
    let newFriends = this.state.friends.slice()
    newFriends.push({picture: this.state.picture, name: this.state.name})
    this.setState({friends: newFriends, picture: '', name: ''})
  }
  render() {
    console.log(this.state.friends)
    const friends = this.state.friends.map((element, index) => (
      <div key={index} >
        <img src={element.picture} atl="" width='100px' />
        <span> {element.name} </span>
      </div>
    ))
    // const friend = this.state.friends.map((element, index) => (
    //   <div key={ `element-${index}-${element.name}`}>
    //   console.log(friend)
    //     <img width="100px" src={element.picture} alt=''/>
    //     <span>{ element.name }</span>
    //   </div>
    // ));
    return (
      <div>
        <header>
          <h1> React-1-mini </h1>
        </header>
        <div id='main'>
          <div id='center'>
            <input id='boxes' placeholder='img url' onChange={(e) => this.updatePicture(e.target.value)} value={this.state.picture} />
            <input id='boxes' placeholder='name' onChange={(e) => this.updateName(e.target.value)} value={this.state.name} />
            <button id='boxes' onClick={() => this.addFriend()} > Add Friend </button>
            {friends}
          </div>
        </div>
      </div>
    )
  }
}
export default App