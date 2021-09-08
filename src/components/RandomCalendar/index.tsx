import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import {subYears} from 'date-fns'
import { Container } from './styles';

type HeatMap

const RandomCalendar: React.FC = () => {
    const startDate = subYears(new Date(), 1);
    const endDate = new Date();
  return (

    <Container>
      <div className="wrapper">
        <Heatmap
          startDate = {startDate}
          endDate = {endDate}
          values = {[]}
          gutterSize = {3.5}
          classForValue = {}
        />
      </div>
      <span>Random calendar(do not represent actual data)</span>
    </Container>
  );
}

export default RandomCalendar;