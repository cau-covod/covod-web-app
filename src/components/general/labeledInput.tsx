import React from 'react'
import styled from 'styled-components'
import BigInput from './bigInput'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
ont-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 8px 4px 4px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function LabeledInput(props) {
  return (
    <Flex>
      <Label>{props.label}</Label>
      <BigInput />
    </Flex>
  )
}

// export default LabeledInput