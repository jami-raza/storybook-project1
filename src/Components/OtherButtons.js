import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OtherButtons.css';

const OtherButtons = (props) => {
    const { variant='button-1',classes='buttons-1',children,...rest} = props
    return (
        <div>
            <Button className={`${classes} ${variant}`} {...rest}>{children}</Button>
        </div>
    )
}

export default OtherButtons
