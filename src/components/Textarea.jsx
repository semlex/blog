import styled from 'styled-components'

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #000;
  font-size: 14px;
  padding: 35px 0;
  height: 100px;
  resize: none;

  &[data-error="true"], &:invalid {
    border: 1px solid #ff0000;
    background: #f7ecec;

    &:focus {
      border-color: #999999;
    }
  }
`

export default Textarea