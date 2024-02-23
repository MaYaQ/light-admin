import { MODE } from '@c/CodeEditor';

export default {
  label: '代码',
  componentProps: {
    mode: MODE.JSON,
    bordered: true,
    autoFormat: true,
    readonly: false,
    height: 10,
    prefix: 'function(){',
    suffix: '}',
  },
};
