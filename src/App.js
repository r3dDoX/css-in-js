import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  
  > h2 {
    text-transform: ${props => props.uppercase ? 'uppercase' : 'capitalize'};
    transition: color .5s ease;
    
    &:hover {
      color: palevioletred;
    }
  }
  
  @media (max-width: 500px) {
    background-color: papayawhip;
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  ${props => props.backwards && 'animation-direction: reverse;'}
  height: 80px;
`;

const Intro = styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header uppercase>
          <Logo backwards src={logo} alt="logo" />
          <h2>welcome to react</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </AppContainer>
    );
  }
}

export default App;
