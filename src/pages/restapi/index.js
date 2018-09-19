import { Fragment } from 'react';
import { shape, string } from 'prop-types';
import axios from 'axios';

const RestAPI = ({ data }) => (
  <Fragment>
    {`Next.js stars: ${data.stargazers_count}`}
  </Fragment>
);

RestAPI.getInitialProps = async () => {
  try {
    const res = await axios({
      url: 'https://api.github.com/repos/zeit/next.js',
    });
    return {
      data: res.data,
    };
  } catch (error) {
    console.error(error);
  }
};

RestAPI.propTypes = {
  data: shape({
    stargazers_count: string,
  }).isRequired,
};

export default RestAPI;
