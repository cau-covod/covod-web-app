import styled from 'styled-components';
import React from 'react';
import Card from './card'
import H1 from './H1'
import { findByLabelText } from '@testing-library/react';

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`

export default function TopBar(props) {
  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Flex>
          <img src={require("../../sourceimages/covodLogo.png")} width="50" height="50" />
          <H1>CoVoD</H1>
        </Flex>
        <Flex>
          <p>
            {props.location}
          </p>
        </Flex>
        <Flex>
          <p>{props.user}</p>
        </Flex>
      </div>
    </Card>
  )
}