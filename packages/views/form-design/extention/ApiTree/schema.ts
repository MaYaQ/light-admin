import { treeOptionsListApi } from '@/api/demo/tree';

export default {
  label: '远程Tree',
  helpMessage: ['ApiTree组件', '使用接口提供的数据生成选项'],
  required: true,
  componentProps: {
    api: treeOptionsListApi,
    params: {
      count: 2,
    },
    afterFetch: (v) => {
      //do something
      return v;
    },
    resultField: 'list',
  },
  colProps: {
    span: 8,
  },
};
