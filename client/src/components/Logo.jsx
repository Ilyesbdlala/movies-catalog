import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``


export default class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://ilyesbdlala.github.io/">
                <img src={logo} width="50" height="50" alt="ilyesbdlala.github.io" />
            </Wrapper>
        )
    }
}