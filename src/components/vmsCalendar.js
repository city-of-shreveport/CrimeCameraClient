import Card from 'react-bootstrap/Card';
import React, { useContext, useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Calendar from 'react-calendar';
import ListGroup from 'react-bootstrap/ListGroup';

import { GlobalContext } from '../contexts/globalContext';
export default function VMSCalendar() {
  const [state, dispatch] = useContext(GlobalContext);
  const handleCalendarChange = (e) =>
    dispatch({
      type: 'UPDATE_VMSCALVALUE',
      payload: e,
    });
  const handleTimeMinChange = (e) =>
    dispatch({
      type: 'UPDATE_VMSTIMEMINVALUE',
      payload: e,
    });
  const handleTimeHourChange = (e) =>
    dispatch({
      type: 'UPDATE_VMSTIMEHOURVALUE',
      payload: e,
    });
  const handleTimePMChange = (e) =>
    dispatch({
      type: 'UPDATE_VMSTIMEAMPM',
      payload: e,
    });
  return <div></div>;
}
