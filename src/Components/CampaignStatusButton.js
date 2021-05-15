import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CampaignStatusButton.css'

const CampaignStatusButton = (props) => {
    const {variant='actives', children, ...rest} = props
    return (
        <div>
            <Button className={`campaign-status-button ${variant}` }{...rest}>{children}</Button>
        </div>
    )
}

export default CampaignStatusButton
