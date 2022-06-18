import React from 'react'
import Layout from  '../../Layout/layout'

function Header(props) {
  return (
    <>
    <Layout />
    {props.childern}
    </>
  )
}

export default Header