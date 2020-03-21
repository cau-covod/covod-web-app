import React from 'react'
import styled from 'styled-components'
import Card from '../general/card'
import H1 from '../general/H1'

const CenteringRowContainer = styled.div`
display:flex;
flex-direction:row;
margin: 10px 0px;
justify-content:center;
`

const CenteringColContainer = styled.div`
display:flex;
flex-direction:column;
margin: 10px 0px;
align-items:center;
`

const LeftRightContainer = styled.div`
display:flex;
direction:row;
justify-content:space-between;
padding:10px;
width:100%;
`
// TODO: I want width=parent, not 100%

export default function FeedEntry(props) {
  return (
    <Card>
      <LeftRightContainer>
        <div>
          {props.author}@{props.course}
        </div>
        <div>
          {props.time}
        </div>
      </LeftRightContainer>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {props.description}
      </div>
      <CenteringColContainer>
        <CenteringRowContainer>
          <a href={props.videoPage}>
            <img src={props.thumbnail} alt="thumbnail" height="200px" />
          </a>
        </CenteringRowContainer>
        <LeftRightContainer>
          <p>
            {props.duration} long <br />
            {props.numberOfTimestamps} Timestamps
          </p>
          <p>
            {props.numberOfQuestions} Questions <br />
            {props.openQuestions} Open
          </p>
        </LeftRightContainer>
      </CenteringColContainer>
    </Card>
  )
}