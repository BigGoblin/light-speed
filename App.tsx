import React, { Suspense } from 'react';

import { routers } from '@/config/router';
import ConfigRouter from './utils/ConfigRouter';
// import { routerRedux } from 'dva/router';
// const { ConnectedRouter } = routerRedux;

// function RouterConfig({ history }: { history: any }) {
//   return (
//     <ConnectedRouter history={history}>
//       <Suspense fallback={'loading'}>
//         <ConfigRouter routers={routers} />
//       </Suspense>
//     </ConnectedRouter>
//   );
// }

function App() {
  return (
    <div className="App">
      <Suspense fallback={'loading'}>
        <ConfigRouter routers={routers} />
      </Suspense>
    </div>
  );
}
export default App;
