import { Button } from 'semantic-ui-react';
import getConfig from 'next/config';

import { withI18next } from '../../utils/withI18next'
import css from './homepage.less';
import Page from '../../components/layout/Default';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

const Homepage = () => (
  <Page className={css.homepageBg}>
    <p>
      Hello World! The API_URL is:
      {API_URL}
    </p>

    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </Page>
);

export default Homepage;