/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Get your PC Components delivered at your Adress to Enjoy High-End PC Games.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Get your PC Components On the basis of Partnership Deal. Please Read the terms and conditions carefully.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Get your PC Components on Subscription Base. you will find the whole Document Explaining our Subscription Criteria',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Get your PC Components on Our Customer Support Basis. Please fill our Customer Support Form, Given in the About Section of our Website',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{variant: "section.keyFeature"}} id='feature'>
<Container>
  <SectionHeader
  slogan="whats the Function"
  title="Meet the Feature of our product"
   />
   <Grid sx={styles.grid}>
     {data.map((item) =>(
       <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
