import * as monaco from 'monaco-editor';
import React, { useRef, useEffect } from 'react';

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

interface CodeEditorProps extends monaco.editor.IStandaloneEditorConstructionOptions {
  onChange?: (v: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  const { onChange, ...restProps } = props;
  const editorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (editorRef.current) {
      const editorIns = monaco.editor.create(editorRef.current, {
        language: 'json',
        folding: true,
        theme: 'vs',

        ...restProps,
      });
      editorIns.getModel()?.onDidChangeContent((e) => {
        const value = editorIns.getValue();
        onChange?.(value);
      });
    }
  }, [editorRef]);
  return <div style={{ height: '100%', width: 600 }} ref={editorRef}></div>;
};

export default CodeEditor;
