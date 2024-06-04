import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  state = {isClicked: false, en: ''}

  changeEvent = event => {
    this.setState({en: event.target.value})
  }

  start = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked, en} = this.state
    return (
      <div>
        <div>
          <h1>Editable Text Input</h1>
          <div>
            {isClicked === true ? (
              <div>
                <p>{en}</p>
                <button type="button" onClick={this.start}>
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input type="search" value={en} onChange={this.changeEvent} />
                <button type="button" onClick={this.start}>
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default AppItem
