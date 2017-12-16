import React from 'react'
import { Segment } from 'semantic-ui-react'

const SegmentComponent = ({children}) => (
  <Segment raised>
    {children}
  </Segment>
)

export default SegmentComponent