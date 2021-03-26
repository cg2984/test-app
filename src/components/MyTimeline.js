import React, {Component} from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

class MyTimeline extends Component {
  render(props) {
    return(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>{this.props.item1}</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>{this.props.item2}</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>{this.props.item3}</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>{this.props.item4}</TimelineContent>
          </TimelineItem>  
      </Timeline>
    )
    
  }
}
export default MyTimeline;

