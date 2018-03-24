import React, {Fragment} from 'react';
import Header from '../Header/Header';

const layout = (props) => (
    <Fragment>
      <Header/>

      <main>
        {props.children}
      </main>
    </Fragment>
);

export default layout;
