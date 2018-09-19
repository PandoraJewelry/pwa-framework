// import Home from '../src/pages/homepage';

// export default Home;


import { withI18next } from '../src/utils/withI18next'
import Link from 'next/link'

import PureComponent from '../src/components/PureComponent'
import ExtendedComponent from '../src/components/ExtendedComponent'
import ComponentWithTrans from '../src/components/ComponentWithTrans'

const TestContent =  withI18next(['home', 'common'])(({ t, initialI18nStore }) => (
  <div>
    <h1>{t('welcome')}</h1>
    <p>{t('common:integrates_react-i18next')}</p>
      <p>{t('sample_test')}</p>
      <div>
          <button>{t('sample_button')}</button>
      </div>
    <PureComponent t={t} />
    <ExtendedComponent />
    <ComponentWithTrans />
    <Link href='/page2'>
      <a>{t('link.gotoPage2')}</a>
    </Link>
    <br />
    <Link href='/page3'>
      <a>{t('link.gotoPage3')}</a>
    </Link>
  </div>
))


const Test = () => {
    return(
        <TestContent/>
    )
}

export default Test;