import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.startNewGame();
  }

  startNewGame() {
    return {
      result: 'Введите число',
      userNumber: '',
      randomNumber:
        Math.floor(Math.random() * this.props.max - this.props.min) +
        this.props.min,
      count: 0,
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState(state => ({
      count: state.count + 1,
    }));

    this.setState(state => {
      if (!state.userNumber) {
        return {
          result: 'Введите число',
        };
      }

      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного`,
        };
      }

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загаданного`,
        };
      }

      return {
        result: `Вы угадали, загаданное число ${state.randomNumber},
          попыток ${state.count}`,
      };
    });

    this.setState(() => ({
      userNumber: '',
    }));
  };

  handleChange = e => {
    this.setState(() => ({
      userNumber: e.target.value,
    }));
  };

  componentDidMount = () => {
    const btnNewGame = document.getElementById('new-game');
    btnNewGame.addEventListener('click', () => {
      this.setState(() => ({
        result: 'Введите число',
        userNumber: '',
        randomNumber:
          Math.floor(Math.random() * this.props.max - this.props.min) +
          this.props.min,
        count: 0,
      }));
    });
  };

  render() {
    return (
      <div className={style.game}>

        <p className={style.result}>{this.state.result}</p>

        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor='user_number'>
            Угадай число
          </label>

          <input className={style.input} type='number' id='user_number'
            onInput={this.handleChange} value={this.state.userNumber} />
          <button className={style.btn}>Угадать</button>
        </form>
        <button className={style.btn} id='new-game'>Сыграем еще</button>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
