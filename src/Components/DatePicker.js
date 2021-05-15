import React,{useState} from 'react'

import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { DatePicker } from 'react-date-picker';

export default function Datepick() {
    const [value, onChange] = useState(new Date());

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [focus, setFocus] = useState(START_DATE)
    const handleFocusChange = newFocus => {
      setFocus(newFocus || START_DATE)
    }
    return (
        
      <div className="date-picker" style={{maxWidth:'500px'}}>
        <p>Selected start date: {startDate ? format(startDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
        <p>Selected end date: {endDate ? format(endDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
        <p>Currently selecting: {focus}.</p>
        <DateRangePickerCalendar
          MOTHS
          startDate={startDate}
          endDate={endDate}
          focus={focus}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onFocusChange={handleFocusChange}
          locale={enGB}
          
        />
      </div>
    )
};


