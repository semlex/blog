import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  border: 1px solid #000;
  padding: 5px 0;
  margin-bottom: 15px;

  &[data-error="true"], &:invalid {
    border: 1px solid #ff0000;
    background: #f7ecec;

    &:focus {
      border-color: #999999;
    }
  }
`

export default Input