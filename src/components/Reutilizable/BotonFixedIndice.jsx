import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const BotonFixedIndice = ({ to }) => {
  return (
      <ButtonIndice to={`${to}`} className='link_indice'>Índice</ButtonIndice>
  )
}

export default BotonFixedIndice


export const ButtonIndice = styled(Link)`
    background-color: rgb(11, 95, 251);
    border-radius: 2em;
    padding: 4px 20px;
    cursor: pointer;
    transition: all 0.1s ease 0s;
    border-width: 0px;
    box-shadow: rgb(35 41 53) 1px 4px 0px 0px;
    text-decoration: none;
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 1px;
    position: absolute;
    top: 0.4rem;
    right: 2.5rem;
    z-index: 5;
    :hover {
        transform: translateY(-8px);
        box-shadow: 1px 9px 0 0 #232935;
    }
    :active {
        transform: translateY(8px);
        box-shadow: 0px 0px 0 0 #232935;
    }
    @media (min-width: 1024px) {
      padding: 7px 25px;
      top: 1.7rem;
      right: 2.5rem;
    }
`;
