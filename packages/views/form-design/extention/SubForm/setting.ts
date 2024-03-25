import { MODE } from '@c/CodeEditor';

export default [
  {
    component: 'CodeInput',
    label: 'onRowDelete函数',
    name: 'onRowDelete__func',
    type: 'showItem',
    componentProps: {
      mode: MODE.JS,
      buttonText: '编辑',
      editorTitle: '删除事件',
      bordered: true,
      autoFormat: true,
      prefix: 'function onRowDelete({idx,data,row}){',
      suffix: '}',
    },
    defaultValue: '',
  },
  {
    component: 'CodeInput',
    label: 'onRowInsert函数',
    name: 'onRowInsert__func',
    type: 'showItem',
    componentProps: {
      mode: MODE.JS,
      buttonText: '编辑',
      editorTitle: '新增事件',
      bordered: true,
      autoFormat: true,
      prefix: 'function onRowInsert({idx,data,row}){',
      suffix: '}',
    },
    defaultValue: '',
  },
  {
    component: 'CodeInput',
    label: 'onRowAdd函数',
    name: 'onRowAdd__func',
    type: 'showItem',
    componentProps: {
      mode: MODE.JS,
      buttonText: '编辑',
      editorTitle: '新增事件',
      bordered: true,
      autoFormat: true,
      prefix: 'function onRowAdd({idx,data,row}){',
      suffix: '}',
    },
    defaultValue: '',
  },
];
