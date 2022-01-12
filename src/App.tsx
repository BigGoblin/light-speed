import React, { useState } from 'react';
import RenderPage from './RenderPage';
import { PageSchemaNode } from './RenderPage/data';
import CodeEditor from './Editor';

import styles from './App.module.less';
import './App.css';
import { isJsonString } from './utils';

const testSchema: PageSchemaNode = {
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
    {
      key: 'test-form',
      type: 'Form',
      name: 'test-form',
      // body:[{

      // }]
    },
  ],
};

const App: React.FC = () => {
  const [schema, setSchema] = useState(JSON.stringify(testSchema, null, 2));

  const handleChange = (s: string) => {
    if (isJsonString(s)) {
      setSchema(s);
    }
  };

  return (
    <div className={styles.container}>
      <CodeEditor value={schema} onChange={handleChange} />
      <div className={styles.right}>
        <RenderPage node={JSON.parse(schema)} />
      </div>
    </div>
  );
};

export default App;
