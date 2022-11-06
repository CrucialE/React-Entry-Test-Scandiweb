import React, { Component } from 'react'
import styled from 'styled-components/macro'
import{COLORS} from './constants'
import Navigation from './UI/Navigation'
const HeaderWrapper = styled.header`
  /* position:fixed;  */
  /* top:0; */
  /* z-index:1000; */
  width:100%;
  background:${COLORS.WHITE};

`
export default class Header extends Component {
  render() {
    return (
    <HeaderWrapper>
      <Navigation/>
    </HeaderWrapper>
  
    )
  }
}


