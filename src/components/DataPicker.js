import React, { Component, PropTypes } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';


const weekdaysLong = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const weekdaysShort = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const firstDayOfWeek = 1;

const localeUtils = {
  formatDay: (d) =>
    `${weekdaysLong[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`,
  formatWeekdayShort: (index) => weekdaysShort[index],
  formatWeekdayLong: (index) => weekdaysLong[index],
  getFirstDayOfWeek: () => firstDayOfWeek,
  getMonths: () => months,
  formatMonthTitle: (d) => `${months[d.getMonth()]} ${d.getFullYear()}`,
};


class DataPicker extends React.Component {

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  state = {
    selectedDay: null,
    from: null,
    to: null,
  };

  handleDayClick(e, day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick(e) {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  }


  render() {
    const { from, to } = this.state;


    return (
      <div className="RangeExample">
        <DayPicker
          style={{'width': 260 +'px'}}
          ref="daypicker"
          numberOfMonths={ 1 }
          selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
          onDayClick={ this.handleDayClick }
          localeUtils={ localeUtils }
          modifiers={ { sunday: day => day.getDay() === 0 } }
        />
        { !from && !to && <p>Пожалуйста выберите <strong>начальную дату</strong>.</p> }
        { from && !to && <p>Пожалуйста выберите <strong>конечную дату</strong>.</p> }
        { from && to &&
          <p>
            Выбранный диапазон дат: от <strong>{ this.state.from.toLocaleDateString() }</strong> до <strong>{ this.state.to.toLocaleDateString() }</strong>.
            { ' ' }<a href="#" onClick={ this.handleResetClick }>Очистить</a>
          </p>
        }
      </div>
    );
  }
}

export default DataPicker