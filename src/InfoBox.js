import React from 'react'
import {Card, CardContent, Typography} from "@material-ui/core"
function InfoBox({title, cases, total}) {
    return (
        <Card className = "infoBox">
            <CardContent>
                <Typography className="infoBox__title" color = 'textSecondary'>
                    {title}
                </Typography>

                <h2 className = "infoBox__cases">{cases}</h2>

                <Typography color='textSecondary' className="infoBox__total">
                    {total} Total
                </Typography>
                {/* Title */}
                {/* No. of cases */}
                {/* Total */}
            </CardContent>
        </Card>
    )
}

export default InfoBox
