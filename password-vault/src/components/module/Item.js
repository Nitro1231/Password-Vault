import React from 'react'

class Item extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='h3'>Name: </div>
        <div className='h3'>URL: </div>
        <div className='h3'>ID: </div>
        <div className='h3'>PW: </div>
        <div className='h3'>Note: </div>
      </div>
    )
  }
}
export default Item
