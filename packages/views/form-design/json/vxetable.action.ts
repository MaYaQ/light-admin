export default {
  schemas: [
    {
      component: 'Button',
      formItem: false,
      type: 'showItem',
      label: '表格操作栏',
      field: 'button_1',
      colProps: {
        span: 24,
      },
      hiddenLabel: true,
      componentProps: {
        value: 'primary',
        type: 'primary',
        size: 'default',
        onClick__func: `    let formData=this.getFormData()     
             this.getModal("modal").show(formData)     `,
        style: '',
        shape: '',
        color: '',
        iconSize: 14,
      },
      width: '200px',
      itemProps: {
        labelCol: {},
        wrapperCol: {},
      },
    },
    {
      component: 'Modal',
      label: '对话框',
      formItem: false,
      type: 'container',
      componentProps: {
        title: '表格工具栏编辑',
        width: 1000,
        slots: {},
        onOkButtonClick__func: `     let modal=this.getModal('modal');     
     let formData=modal.getFormData();     
     let props=this.getFormData();     
     Object.assign(props,formData);    
     return true;     `,
        onCancelButtonClick__func: `          `,
        onDialogOpened__func: `          `,
        onDialogBeforeClose__func: `          `,
        style: '',
      },
      children: [
        {
          component: 'GridSubForm',
          label: '多行表单',
          field: 'actions',
          type: 'containerItem',
          formItem: true,
          componentProps: {
            onRowDelete__params: ['{idx,data,row}'],
            onRowInsert__params: ['{idx,data,row}'],
            onRowAdd__params: ['{idx,data,row}'],
            onRowChange__params: ['data'],
            style: '',
            onRowDelete__func: `          `,
            onRowInsert__func: `          `,
            onRowAdd__func: `          `,
            onRowChange__func: `          `,
          },
          children: [
            {
              component: 'Input',
              label: '按钮名称',
              icon: 'bi:input-cursor-text',
              field: 'label',
              colProps: {
                span: 24,
              },
              componentProps: {
                type: 'text',
                placeholder: '',
                style: '',
                defaultValue: '',
                prefix: '',
                suffix: '',
                addonBefore: '',
                addonAfter: '',
                maxLength: 100,
              },
              defaultValue: '',
              width: '200px',
              key: 'input_2',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'RadioButtonGroup',
              label: '颜色',
              icon: 'carbon:radio-button-checked',
              field: 'color',
              colProps: {
                span: 24,
              },
              componentProps: {
                options: [
                  {
                    label: '错误',
                    value: 'error',
                  },
                  {
                    label: '成功',
                    value: 'success',
                  },
                ],
                style: '',
              },
              defaultValue: '',
              _type: 'custom',
              width: '200px',
              key: 'radiobuttongroup_6',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'CodeInput',
              label: '点击事件',
              icon: 'ant-design:credit-card-outlined',
              componentProps: {
                buttonText: '编辑',
                mode: 'application/json',
                editorTitle: '代码编辑',
                bordered: true,
                autoFormat: true,
                readonly: false,
                style: '',
                prefix: 'function({ record, tableRef }){',
                suffix: '}',
              },
              defaultValue: '',
              _type: 'custom',
              width: '200px',
              colProps: {
                span: 24,
              },
              key: 'codeinput_3',
              field: 'onClick__func',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'Input',
              label: '弹框确认信息',
              icon: 'bi:input-cursor-text',
              field: 'popConfirm.title',
              colProps: {
                span: 12,
              },
              componentProps: {
                type: 'text',
                placeholder: '',
                style: '',
                defaultValue: '',
                prefix: '',
                suffix: '',
                addonBefore: '',
                addonAfter: '',
                maxLength: 100,
                hideSub: true,
              },
              defaultValue: '',
              width: '200px',
              key: 'input_1',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'CodeInput',
              label: '弹框确认函数',
              icon: 'ant-design:credit-card-outlined',
              componentProps: {
                buttonText: '编辑',
                mode: 'application/json',
                editorTitle: '代码编辑',
                bordered: true,
                autoFormat: true,
                readonly: false,
                style: '',
                hideSub: true,
                prefix: 'function({ record, tableRef }){',
                suffix: '}',
              },
              defaultValue: '',
              _type: 'custom',
              width: '200px',
              colProps: {
                span: 13,
              },
              key: 'codeinput_2',
              field: 'popConfirm.confirm__func',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
          ],
          colProps: {
            span: 24,
          },
          options: {
            gutter: 0,
          },
          _type: 'custom',
          width: '200px',
          itemProps: {
            labelCol: {},
            wrapperCol: {},
          },
          key: 'gridsubform_10',
        },
      ],
      _type: 'custom',
      width: '200px',
      colProps: {
        span: 24,
      },
      field: 'modal',
      itemProps: {
        labelCol: {},
        wrapperCol: {},
      },
    },
    {
      component: 'Button',
      formItem: false,
      type: 'showItem',
      label: '工具栏',
      field: 'button_10',
      colProps: {
        span: 24,
      },
      hiddenLabel: true,
      componentProps: {
        value: 'primary',
        type: 'primary',
        size: 'default',
        onClick__func: ` let formData=this.getFormData()     
             this.getModal("modal_2").show(formData) `,
      },
      width: '200px',
      itemProps: {
        labelCol: {},
        wrapperCol: {},
      },
    },
    {
      component: 'Modal',
      label: '对话框',
      formItem: false,
      type: 'container',
      componentProps: {
        title: '对话框',
        width: 1000,
        slots: {},
        onOkButtonClick__func: `     let modal=this.getModal('modal_2');     
        let formData=modal.getFormData();     
        let props=this.getFormData();     
        Object.assign(props,formData);    
        return true;     `,
        onCancelButtonClick__func: `  `,
        onDialogOpened__func: `  `,
        onDialogBeforeClose__func: `  `,
      },
      children: [
        {
          component: 'GridSubForm',
          label: '多行表单',
          field: 'gridOptions.toolbarConfig.buttons',
          type: 'containerItem',
          formItem: true,
          icon: 'ant-design:border-bottom-outlined',
          componentProps: {
            onRowDelete__params: ['{idx,data,row}'],
            onRowInsert__params: ['{idx,data,row}'],
            onRowAdd__params: ['{idx,data,row}'],
            onRowChange__params: ['data'],
          },
          children: [
            {
              component: 'Input',
              label: '按钮内容',
              icon: 'bi:input-cursor-text',
              field: 'content',
              colProps: {
                span: 24,
              },
              componentProps: {
                type: 'text',
                defaultValue: '',
              },
              width: '200px',
              key: 'input_13',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'Select',
              label: '按钮渲染组件',
              icon: 'gg:select',
              field: 'buttonRender.name',
              colProps: {
                span: 24,
              },
              componentProps: {
                options: [
                  {
                    label: 'ant按钮',
                    value: 'AButton',
                  },
                ],
              },
              defaultValue: '',
              width: '200px',
              key: 'select_15',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'RadioButtonGroup',
              label: '风格',
              icon: 'carbon:radio-button-checked',
              field: 'buttonRender.props.type',
              colProps: {
                span: 24,
              },
              componentProps: {
                options: [
                  {
                    label: 'primary',
                    value: 'primary',
                  },
                  {
                    label: 'success',
                    value: 'success',
                  },
                  {
                    label: 'warning',
                    value: 'warning',
                  },
                ],
              },
              defaultValue: '',
              _type: 'custom',
              width: '200px',
              key: 'radiobuttongroup_16',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'IconPicker',
              label: '图标选择',
              icon: 'line-md:iconify2',
              colProps: {
                span: 24,
              },
              field: 'buttonRender.props.preIcon',
              componentProps: {},
              width: '200px',
              key: 'iconpicker_17',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'CodeInput',
              label: '点击事件',
              icon: 'ant-design:credit-card-outlined',
              componentProps: {
                buttonText: '编辑',
                mode: 'application/json',
                editorTitle: '代码编辑',
                bordered: true,
                autoFormat: true,
                readonly: false,
                prefix: 'function({tableRef}){',
                suffix: '}',
              },
              defaultValue: '',
              _type: 'custom',
              width: '200px',
              colProps: {
                span: 24,
              },
              key: 'codeinput_18',
              field: 'buttonRender.events.click__func',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
          ],
          colProps: {
            span: 24,
          },
          options: {
            gutter: 0,
          },
          _type: 'custom',
          width: '200px',
          key: 'gridsubform_12',
          itemProps: {
            labelCol: {},
            wrapperCol: {},
          },
        },
      ],
      _type: 'custom',
      width: '200px',
      colProps: {
        span: 24,
      },
      field: 'modal_2',
      itemProps: {
        labelCol: {},
        wrapperCol: {},
      },
    },
  ],
  layout: 'horizontal',
  labelLayout: 'flex',
  labelWidth: 100,
  labelCol: {},
  wrapperCol: {},
};
