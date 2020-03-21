import React from 'react'
import styled from 'styled-components'
import BigInput from '../general/bigInput'
import Label from '../general/label'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

export default function LabeledInput(props) {
  return (
    <Flex>
      <Label>{props.label}</Label>
      <BigInput />
    </Flex>
  )
}