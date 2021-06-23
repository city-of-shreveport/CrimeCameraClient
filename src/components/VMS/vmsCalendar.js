import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/globalContext';

export default function VMSCalendar() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleCalendarChange = (e) =>
    dispatch({
      type: 'updateState',
      payload: { selectedVMSDate: e },
    });

  const handleTimeMinChange = (e) =>
    dispatch({
      type: 'UPDATE_VMSTIMEMINVALUE',
      payload: e,
    });

  const handleTimeHourChange = (e) =>
    dispatch({
      type: 'updateState',
      payload: { selectedVMSTimeHour: e },
    });

  const handleTimePMChange = (e) =>
    dispatch({
      type: 'updateState',
      payload: { vmsTimePM: e },
    });

  return <div></div>;
}
