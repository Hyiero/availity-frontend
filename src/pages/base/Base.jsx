import { Grid, Typography } from "@mui/material";

export default function Base() {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Typography variant="h3">
                        Who's Ready For Some Homework?
                    </Typography>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={3.5} />
                <Grid item xs={4}>
                    <Typography sx={{ fontSize: 16 }}>
                        The navigation to your top left can be used to browse through the pages.
                        These pages will contain the answers that correspond with the homework sheet provided.
                    </Typography>
                </Grid>
                <Grid item xs={4.5} />
                <Grid item xs={12} />
                <Grid item xs={12} />
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Typography sx={{ fontSize: 13 }}>
                        I had fun with this so thank you for providing me with this excerise
                    </Typography>
                </Grid>
            </Grid>
        </div>
      );
}