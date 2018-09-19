import { Responsive, Segment } from 'semantic-ui-react';

import Page from '../../components/layout/Default';

const ReactTesting = () => (
  <Page>
    <h1>Responsive Test</h1>

    <Segment.Group>
      <Responsive as={Segment} {...Responsive.onlyMobile}>
          Mobile
      </Responsive>
      <Responsive as={Segment} {...Responsive.onlyTablet}>
          Tablet
      </Responsive>
      <Responsive as={Segment} {...Responsive.onlyComputer}>
          Computer
      </Responsive>
      <Responsive as={Segment} {...Responsive.onlyLargeScreen}>
          Large Screen
      </Responsive>
      <Responsive as={Segment} {...Responsive.onlyWidescreen}>
          Widescreen
      </Responsive>
      <Responsive as={Segment} minWidth={768}>
        Visible only if display has
        {' '}
        <code>768px</code>
        {' '}
width and higher
      </Responsive>
      <Responsive as={Segment} minWidth={992}>
        Visible only if display has
        {' '}
        <code>992px</code>
        {' '}
width and higher
      </Responsive>
    </Segment.Group>
  </Page>
);

export default ReactTesting;
