import React from "react";
import { 
  Box,
  Divider,
  Grid2 as Grid,
  Link,
  Typography
} from "@mui/material";
import * as styles from './index.module.scss';
import {
  Component2Img1,
  Component2Img2,
  Component2Img3
} from '../../assets/images/index';

const BottomSection = () => {
  const onImageClick = (e) => {
    console.log('Image clicked: ', e.target)
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.rootF}>
        <Grid container spacing={4}>
          <Grid size={12}>
            <Typography variant="h1">
              ALL THE LATEST FROM AEG
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}> 
            <Link
              href="#" 
              className={styles.anchorImage} 
              onClick={onImageClick}
            >
              <img
                src={Component2Img1}
                className={styles.img}
              />
            </Link>
            <Typography className={styles.title}>
              Summer Lunch Menu By Mark Best
            </Typography>
            <Typography className={styles.labelDesc}>
              AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather an entertaining at home.
            </Typography>
            <ReadMore />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}> 
            <Link
              href="#" 
              className={styles.anchorImage} 
              onClick={onImageClick}
            >
              <img
                src={Component2Img2}
                className={styles.img}
              />
            </Link>
            <Typography className={styles.title}>
              A Traditional Christmas Eve, Mark Best Style
            </Typography>
            <Typography className={styles.labelDesc}>
              One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.
            </Typography>
            <ReadMore />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Link
              href="#" 
              className={styles.anchorImage} 
              onClick={onImageClick}
            >
              <img
                src={Component2Img3}
                className={styles.img}
              />
            </Link>
            <Typography className={styles.title}>
              Taking Taste Further
            </Typography>
            <Typography className={styles.labelDesc}>
              This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.
            </Typography>
            <ReadMore />
          </Grid>
        </Grid>
    </Box>
  );
};

// Separate component for Read More to avoid redundancy
const ReadMore = () => {
  return (
    <div className={styles.readMore}>
      <Link href="#" underline="none">
        <Typography>READ MORE</Typography>
      </Link>
      <Divider className={styles.divider} />
    </div>
  );
}

export default BottomSection;
