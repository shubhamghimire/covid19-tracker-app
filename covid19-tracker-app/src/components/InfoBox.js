// Type 'rfce' to create react functional component
import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

function InfoBox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/* Title i.e. Coronavirus Cases */}
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>

                {/* +90 k Number of cases */}
                <h2 className="infoBox_cases">{cases}</h2>

                {/* 2.5M Total */}
                <Typography className="infoBox_total" color="textSecondary">{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
