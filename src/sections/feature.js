/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Processors',
    text:
      'Get yourself a fast and new-gen Processor to Enjoy your Favoraite Games without Lag.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Virtual Wallet',
    text:
      'We provide Virtual Wallet for you to Store your Credit Coins for Easy Purchasing.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Some Partnership Deals has been given to our Subscribed Customers for massive Discounts and Sales.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Your Satisfaction is our first Priority. If you ran into a problem, do not worry! we got you. ',
  },
];

export default function Feature() {
  return (
    <section sx={{variant : 'section.feature'}}>
      <Container>
        <SectionHeader
        slogan = "Quality Features"
        title ="Quality and Reliable Products For Your Gaming Experience" 
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
            
            />

          ))}
        </Grid>

        
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
