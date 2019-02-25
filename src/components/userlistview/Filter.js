import React from 'react';


export default class Filter extends React.Component {

  render() {
    return (
      <section className='filter border-box'>
        <input
          type='search'
          className='filter__search border-box'
          autoFocus={!( /Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) )}
          placeholder='Search user'
          onFocus={(event) => event.target.placeholder = ''}
          onBlur={(event) => event.target.placeholder = 'Search user'}
          onChange={event => this.props.handleChange(event)} />
      </section>
    )
  }

}
