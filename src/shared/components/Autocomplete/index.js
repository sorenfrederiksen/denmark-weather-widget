// @flow

import React, { Component } from 'react';
import Awesomplete from 'awesomplete';
import styles from './Autocomplete.module.css';

type Props = {
  elementId: string,
  initialText?: string,
  placeholderText: string,
  options: Array<string>,
  onChangeValue: Function,
};
type State = {};

//
// Component
// --------------------------------------------------------------------

class Autocomplete extends Component<Props, State> {
  static defaultProps = {
    initialText: '',
  };

  constructor(props: Props) {
    super(props);
    const { initialText } = props;
    this.state = {
      inputString: initialText,
      autocompleter: null,
    };
  }

  // on component loading
  componentDidMount() {
    this.initAwesomplete();
  }

  componentDidUpdate() {
    const { options } = this.props;
    const { autocompleter } = this.state;

    if (options && options !== autocompleter.list) {
      autocompleter.list = options;
    }
  }

  // Init awesomplete
  initAwesomplete = () => {
    const { elementId, options } = this.props;
    const input = document.getElementById(elementId);

    //use Awesomplete lib
    this.setState({
      autocompleter: new Awesomplete(input, {
        list: options,
        minChars: 2,
        autocomplete: 'off',
      }),
    });

    input.addEventListener('awesomplete-selectcomplete', this.onSelection);
  };

  onChange = (event) => {
    const { value } = event.target;

    this.setState({
      inputString: value,
    });
  };

  onSelection = (event) => {
    const { onChangeValue, elementId } = this.props;
    const selectedValue = event.text;
    const input = document.getElementById(elementId);

    this.setState({
      inputString: selectedValue,
      inputValue: selectedValue,
    });

    onChangeValue(selectedValue);
    input.blur();
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { onChangeValue, elementId } = this.props;
    const { inputString } = this.state;
    const input = document.getElementById(elementId);

    this.setState({
      inputValue: inputString,
    });

    onChangeValue(inputString);
    input.blur();
    return false;
  };

  render() {
    const { elementId, placeholderText } = this.props;
    return (
      <div>
        <form
          className={styles.autocomplete}
          onSubmit={this.onSubmit}
          autoComplete="off"
          method="POST"
          action="/get-city-weather-by-form"
        >
          <input
            name="city"
            value={this.state.inputString}
            type="text"
            id={elementId}
            onChange={this.onChange}
            placeholder={placeholderText}
            tabIndex="1"
          />
          <button>
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-search" />
            </svg>
          </button>
        </form>
      </div>
    );
  }
}

export default Autocomplete;
