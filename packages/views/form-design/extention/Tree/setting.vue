<template>
  <div>
    <light-form logic="system.db.table" :formModel="formModel" />
  </div>
</template>
<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { defHttp as axios } from '@utils/http/axios';
  //import { useMessage } from '@h/web/useMessage';
  import { useRuleFormItem } from '@h/component/useFormItem';
  import { flattenObject, formModelToData } from '../../utils';
  import { cloneDeep } from 'lodash-es';

  const props = defineProps({
    schema: {
      type: Object,
      default: () => ({}),
    },
    props: {
      type: Object,
      default: () => ({}),
    },
  });
  const [formState] = useRuleFormItem(props, 'props', 'update:props');
  const formModel = ref(flattenObject(formState.value));

  watch(
    () => formState.value,
    () => {
      console.log('formstate change!');
      formModel.value = cloneDeep(flattenObject(formState.value));
    },
  );
  watch(
    () => formModel.value,
    async () => {
      console.log('formModel change!');
      let formData = formModelToData(formModel.value);
      if (formData.componentProps.table) {
        let fieldNames = await axios.get({
          url: `/api/crud/tree/config/${formData.componentProps.db}/${formData.componentProps.table}`,
        });
        formData.componentProps.fieldNames = fieldNames;
      }
      Object.assign(formState.value, formData);
    },
    { deep: true },
  );
</script>
