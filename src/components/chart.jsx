import React from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment';
import _ from 'lodash';

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
  series: [
    {
      name: 'Standard',
      type: 'line',
      dashStyle: 'Dash',
      data: [],
      marker: {
        enabled: false
      }
    },
    {
      name: 'Actual',
      type: 'line',
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
    if(durationInMinutes <= 0) {
      return config;
    }
    config.series[0].data = []
    for(var minute=0; minute<durationInMinutes+1; minute++) {
      const x = start;
      config.series[0].data.push([
        Date.UTC(x.format('YYYY'), x.format('MM'), x.format('DD'), x.format('HH'), x.format('mm')),
        this.props.todo * (1 - minute / durationInMinutes)
      ]);
      start.add(1, 'minutes');
    }
    if (_.isArray(this.props.done)) {
      config.series[1].data = [];
      this.props.done.forEach((doneScreenshot) => {
        const t = doneScreenshot.datetime;
        config.series[1].data.push([
          Date.UTC(t.format('YYYY'), t.format('MM'), t.format('DD'), t.format('HH'), t.format('mm')),
          this.props.todo - doneScreenshot.value
        ])
      });
    }
    return config;
  }
  render () {
    return (
      <ReactHighcharts config={this.getConfig()} ref="chart" domProps={{style: {height: '100%', width: '100vw'} }}></ReactHighcharts>
    );
  }
}

export default Bdc;
