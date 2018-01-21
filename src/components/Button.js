import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.type === 'primary' ? 'btn-primary' : 'btn-default'}
    >
      버튼
    </button>
  );
}
