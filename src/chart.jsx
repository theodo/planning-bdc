import React from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment'

var config = {
  title: null,
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: null
    }
  },
  legend: {
    enabled: false
  },
  series: [
    {
      type: 'line',
      dashStyle: 'Dash',
      data: [],
      marker: {
        enabled: false
      }
    }
  ]
};

class Bdc extends React.Component {
  getConfig () {
    const start = moment(this.props.start, 'HH:mm')
    const end = moment(this.props.end, 'HH:mm')
    const durationInMinutes = end.diff(start, 'minutes');
    console.log(durationInMinutes);
    if(durationInMinutes <= 0) {
      return config;
    }
    config.series[0].data = []
    for(var minute=0; minute<durationInMinutes; minute++) {
      const x = start.add(1, 'minutes')
      config.series[0].data.push([
        Date.UTC(x.format('YYYY'), x.format('MM'), x.format('DD'), x.format('HH'), x.format('mm')),
        this.props.todo * (1 - minute / durationInMinutes)
      ]);
    }
    return config;
  }
  render () {
    return (
      <ReactHighcharts config={this.getConfig()} ref="chart"></ReactHighcharts>
    );
  }
}

export default Bdc;
