/** @jsx jsx */
import { jsx, useColorMode, Box, Container, Grid } from 'theme-ui';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '../components/Page';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [mode, setMode] = useColorMode();
  return (
    <>
      <Page title="About | Greg Gamel">
        <SkipNavContent tabIndex="0" />
        <Header />
        <Box
          sx={{
            background: mode === 'dark' ? '#101010' : '#f5f5f5',
            pb: '1px',
            minHeight: '100vh',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns:
                'minmax(1.2rem, 1fr) minmax(auto, 66ch) minmax(1.2rem, 1fr);',
              '*': {
                gridColumn: 2,
              },
              pt: 5,
            }}
          >
            <h1>About Greg</h1>
            <p>
              Greg is a designer and developer. Creating hardware and software
              projects, [write more later]{' '}
            </p>

            <h2>Bio</h2>
            <img src="https://placekitten.com/512/512" />
            <p>bio here</p>
            <p>bio here</p>
            <p>bio here</p>

            <h2>What I do</h2>
            <p>do stuff here</p>
            <p>do stuff here</p>
            <p>do stuff here</p>
          </Box>
        </Box>
      </Page>
      <Footer />
    </>
  );
};

export default AboutPage;
