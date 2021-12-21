import React, { Component } from "react";

export default class TrashIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size,
      color: props.color,
    };
  }
  render() {
    return (
      <svg
        width={this.state.size}
        height={this.state.size}
        viewBox="0 0 76 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.1 1.59999C25.8 2.49999 24.2 4.79999 23.4 6.59999C22.6 8.49999 21.6 9.89999 21.2 9.89999C20.8 9.79999 17.5 9.79999 13.8 9.89999C5.19999 9.99999 1.49999 12.8 0.399989 19.6C-0.300011 24.6 1.09999 29 3.39999 29C4.69999 29 4.89999 33.2 5.19999 56.7C5.59999 95.2 3.49999 93 38.8 93C72.6 93 71 94.9 71 55.8V29.5L73.3 28.5C75.1 27.7 75.6 26.6 75.8 22.2C76.1 17.3 75.8 16.6 72.7 13.5C69.3 10.1 68.9 9.99999 61.6 9.99999H54L52.6 6.59999C50.3 1.19999 47.7 -1.35932e-05 38 -1.35932e-05C31.7 -1.35932e-05 28.8 0.399986 27.1 1.59999ZM45.8 8.09999C46 9.39999 44.8 9.69999 38 9.69999C32.2 9.69999 30 9.39999 30 8.39999C30 6.49999 31.8 6.09999 39 6.29999C44 6.49999 45.5 6.89999 45.8 8.09999ZM68.4 18.2C69.2 19.4 69.7 20.7 69.4 21.2C69.1 21.6 55 22 37.9 22C7.89999 22 6.99999 21.9 6.99999 20C6.99999 19 7.79999 17.6 8.79999 17.1C9.79999 16.5 21.4 16 38.7 16C66.5 16 66.9 16 68.4 18.2ZM64 56.4C64 83.7 64 83.9 61.8 85.4C59.9 86.7 55.9 87 37.8 87C17.3 87 15.9 86.9 14 85C12.1 83.1 12 81.7 12 56V29H38H64V56.4Z"
          fill={this.state.color}
        />
        <path
          d="M22.7 40.6C22.3 41 22 49.1 22 58.6C22 73.5 22.2 75.9 23.6 76.4C27.5 77.9 28.1 75.5 27.8 57.6C27.5 41.3 27.4 40.5 25.5 40.2C24.3 40 23.1 40.2 22.7 40.6Z"
          fill={this.state.color}
        />
        <path
          d="M35.7 40.6C35.3 41 35 48.9 35 58C35 75.5 35.6 77.9 39.4 76.4C40.9 75.8 41 73.8 40.8 58.1C40.5 41.2 40.4 40.5 38.5 40.2C37.3 40 36.1 40.2 35.7 40.6Z"
          fill={this.state.color}
        />
        <path
          d="M49.2 41.2C48.4 42 48 47.3 48 58.6C48 76.2 48.6 78.3 52.9 76C54.9 75 55 74.1 55 59C55 50.3 54.7 42.5 54.4 41.6C53.7 39.7 50.9 39.5 49.2 41.2Z"
          fill={this.state.color}
        />
      </svg>
    );
  }
}
