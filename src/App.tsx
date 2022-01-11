import React, { useState } from 'react';
import RenderPage from './RenderPage';
import { RootSchemaNode } from './RenderPage/data';
import CodeEditor from './Editor';

import styles from './App.module.less';
import './App.css';

const testSchema: RootSchemaNode = {
  key: 'root',
  type: 'Page',
  data: {
    name: 'Jack',
    age: 16,
  },
  body: [
    'I am ${name}, ${age} years old!',
    '666',
    {
      key: 'test-tpl',
      type: 'Tpl',
      tpl: 'I am ${name}, ${age} years old, come from ${country}',
      data: {
        name: '张三',
        country: 'China',
      },
    },
    '<span style="color:blue">blue color</span>',
  ],
};

const App: React.FC = () => {
  const [schema, setSchema] = useState(JSON.stringify(testSchema, null, 2));

  return (
    <div className={styles.container}>
      <CodeEditor value={schema} onChange={setSchema} />
      <div className={styles.right}>
        <RenderPage node={JSON.parse(schema)} />
      </div>
    </div>
  );
};

export default App;
