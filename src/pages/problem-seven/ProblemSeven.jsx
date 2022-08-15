import SimpleCard from '../../components/simple-card/SimpleCard';
import { Grid } from "@mui/material"; 
import React from 'react';

export default function ProblemTwoPage() {
    const textA = `a.) SELECT * FROM Customer where LastName like 'S%' order by LastName desc, FirstName Desc`;
    const textB = `b.) SELECT 
    CustID,
    SUM(COALESCE(OL.Cost, 0) * COALESCE(OL.Quantity, 0)) AS TotalCost
 FROM Customer C
 LEFT JOIN "Order" O ON C.CustID = O.CustomerID AND OrderDate > dateadd(month, -6,  cast(getdate() as date))
 LEFT JOIN OrderLine OL ON O.OrderId = OL.OrdID
 GROUP BY CustID`
    const textC = `c.) SELECT 
    CustID,
    SUM(COALESCE(OL.Cost, 0) * COALESCE(OL.Quantity, 0)) AS TotalCost
 FROM Customer C
 LEFT JOIN "Order" O ON C.CustID = O.CustomerID AND OrderDate > dateadd(month, -6,  cast(getdate() as date))
 LEFT JOIN OrderLine OL ON O.OrderId = OL.OrdID
 GROUP BY CustID
 HAVING  SUM(COALESCE(OL.Cost, 0) * COALESCE(OL.Quantity, 0)) > 100 AND SUM(COALESCE(OL.Cost, 0) * COALESCE(OL.Quantity, 0)) < 500`

 const answers = [textA, textB, textC];
    return (
        <Grid container>
            {
                answers.map((answer, i) => (
                    <React.Fragment
                        key={i}
                    >
                        <Grid item xs={3}/>
                        <Grid item xs={7} style={{ whiteSpace: 'pre', padding: 5 }}>
                            <SimpleCard text={answer} maxWidth={1000} />
                        </Grid>
                        <Grid item xs={2}/>
                    </React.Fragment>
                ))
            }
        </Grid>
      );
}