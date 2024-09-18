import React from "react";
import { 
  Box,
  Divider,
  Grid2 as Grid,
  Typography
} from "@mui/material";
import * as styles from './index.module.scss';
import {
  Component1Img1,
  Component1Img2,
  Component1Img3
} from '../../assets/images/index'

const MainSection = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.rootF}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}> 
            <img
              src={Component1Img1}
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container spacing={2}>
              <Grid>
                <img
                  src={Component1Img2}
                  style={{ maxWidth: "100%" }}
                />
              </Grid>
              <Grid>
                <img
                  src={Component1Img3}
                  style={{ maxWidth: "100%" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }} 
            spacing={2} 
            className={styles.pl_12}
          >
            <Grid container>
              <Grid>
                <Typography
                  variant="h2" 
                  className={styles.header}
                >
                  ANSWER YOUR BODY'S NEEDS
                </Typography>
                <Divider className={styles.divider} />
              </Grid>
              <Grid className={styles.description}>
                <Typography>
                  The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.
                </Typography>
              </Grid>
              <Grid className={styles.description}>
                <Typography variant="caution">
                  BE MINDFUL
                </Typography>
                <Typography className={styles.description_caution}>
                  Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Box>
  );
};

export default MainSection;
