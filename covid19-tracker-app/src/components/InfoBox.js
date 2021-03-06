// Type 'rfce' to create react functional component
import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography } from '@material-ui/core'

function InfoBox({ title, cases, isRed, active, total, ...props }) {
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox-selected'} ${isRed && 'infoBox-red'}`}>
            <CardContent>
                {/* Title i.e. Coronavirus Cases */}
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>

                {/* +90 k Number of cases */}
                <h2 className={`infoBox_cases ${!isRed && "infoBox_cases-green"}`}>{cases}</h2>

                {/* 2.5M Total */}
                <Typography className="infoBox_total" color="textSecondary">{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
