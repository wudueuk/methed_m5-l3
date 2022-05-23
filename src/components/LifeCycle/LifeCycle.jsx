import React from 'react';
import style from './LifeCycle.module.css';

export class LifeCycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      field: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  componentDidMount() { }

  handler = () => {
    this.setState(state => ({ filed: state.field + 1 }));
  };

  render() {
    return (
      <div>
        <h1 className={style.title}>Жизненный цикл</h1>

        <div className={style.container}>
          <div>
            <h2 className={style.title}>Типы</h2>
            <ul className={style.list}>
              <li>Монтирование</li>
              <li>Обновление</li>
              <li>Размонтирование</li>
              <li>Ошибки</li>
            </ul>
          </div>

          <div className='stage'>
            <h2 className={style.title}>Этапы</h2>
            <ul className={style.list}>
              <li>Render</li>
              <li>Pre-commit</li>
              <li>Commit</li>
            </ul>
          </div>
        </div>
        <button className={style.btn}
          onClick={this.handler()}>Клик {this.state.field}</button>
      </div>
    );
  }
}
