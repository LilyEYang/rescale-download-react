import React from 'react'

import { ButtonS } from "./styles";

const Button: React.FC = ({ children }) => {
  return <button><ButtonS>{children}</ButtonS></button>
}

export default Button
