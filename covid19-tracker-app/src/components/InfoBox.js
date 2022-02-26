// Type 'rfce' to create react functional component
import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

function InfoBox({ title, cases, total }) {
    return (
        <Card>
            <CardContent>
                {/* Title i.e. Coronavirus Cases */}

                {/* +90 k Number of cases */}

                {/* 2.5M Total */}
            </CardContent>
        </Card>
    )
}

export default InfoBox
