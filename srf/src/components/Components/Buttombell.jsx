import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from "react-bootstrap/esm/Badge";
import {BsFillBellFill} from 'react-icons/bs'
import styles from './Buttombell.module.css'


function ButtonBell() {
  return (
    <Dropdown className="">
      <Dropdown.Toggle className={`bg-transparent border border-0 ${styles.notification}`} align="end" id="notifications">
       <BsFillBellFill/>
       <span className={`${styles.badge}`}>
        1
          <span className="visually-hidden">unread messages</span>
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Não há notificações no momento</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ButtonBell;