'use client';
import styles from './Collapse.module.css';
import { useState } from 'react';
import { useRef } from 'react';

function Collapse(props) {
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };
  const contentRef = useRef();

  return (
    <div className={styles.collapse__container}>
      <div className={styles.collapse__title}>
        <p>{props.collapseTitle}</p>
        <button
          aria-expanded={open ? 'true' : 'false'}
          aria-controls="collapse-parent"
          aria-label="open this collapse"
        >
          <label htmlFor="check">
            <input type="checkbox" id="check" onClick={toggle} />
            <span></span>
            <span></span>
          </label>
        </button>
      </div>

      <div
        id="collapse-parent"
        className={`${styles.collapse__parent} ${
          open ? styles.show : styles.hide
        }`}
        ref={contentRef}
        style={open ? { height: '70px' } : { height: '0px' }}
      >
        <div className={styles.collapse__content}>{props.children}</div>
      </div>
    </div>
  );
}

export default Collapse;