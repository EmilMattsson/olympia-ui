import React from 'react'
import Button from './button'

function NavBar(props) {
  const title = props.title
  return (
    <header className={'mdc-top-app-bar'}>
      <div className={'mdc-top-app-bar__row'}>
        <section className={'mdc-top-app-bar__section mdc-top-app-bar__section--align-start'}>
          <Button text={'menu'} className={'material-icons mdc-top-app-bar__navigation-icon'} href={''} />
          <span className={'mdc-top-app-bar__title'}>{title}</span>
        </section>
      </div>
    </header>
  )
}

export default NavBar