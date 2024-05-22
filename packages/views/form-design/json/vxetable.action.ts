export default {
  schemas: [
    {
      component: 'Button',
      formItem: false,
      type: 'showItem',
      label: '操作栏编辑',
      field: 'button_1',
      colProps: {
        span: 24,
      },
      hiddenLabel: true,
      componentProps: {
        value: 'primary',
        type: 'primary',
        size: 'default',
        onClick__func: `let formData=this.getFormData()                          
this.getModal("modal").show(formData)                          `,
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
        title: '操作栏编辑',
        width: 1000,
        slots: {},
        onOkButtonClick__func: `       let formData=this.getModal().getFormData();                          
                          let props=this.getFormData();                          
                          Object.assign(props,formData);                         
                          return true;                          `,
        onCancelButtonClick__func: `                                                    `,
        onDialogOpened__func: `              `,
        onDialogBeforeClose__func: `                                                    `,
        style: '',
      },
      children: [
        {
          component: 'GridSubForm',
          label: '数据源配置',
          field: 'actions',
          type: 'containerItem',
          formItem: true,
          componentProps: {
            onRowDelete__params: ['{idx,data,row}'],
            onRowInsert__params: ['{idx,data,row}'],
            onRowAdd__params: ['{idx,data,row}'],
            onRowChange__params: ['data'],
            style: '',
            onRowDelete__func: `                                                    `,
            onRowInsert__func: `                                                    `,
            onRowAdd__func: `                                                    `,
            onRowChange__func: `                                                    `,
            hideSub: true,
          },
          children: [
            {
              component: 'Input',
              label: '按钮名称',
              icon: 'bi:input-cursor-text',
              field: 'label',
              colProps: {
                span: 8,
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
                span: 8,
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
                span: 8,
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
      label: '工具栏编辑',
      field: 'button_10',
      colProps: {
        span: 24,
      },
      hiddenLabel: true,
      componentProps: {
        value: 'primary',
        type: 'primary',
        size: 'default',
        onClick__func: `                      let formData=this.getFormData()                          
                                  this.getModal("modal_2").show(formData)                      `,
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
        onOkButtonClick__func: `       let formData=this.getModal().getFormData();                          
                             let props=this.getFormData();                          
                             Object.assign(props,formData);                         
                             return true;                          `,
        onCancelButtonClick__func: `                                            `,
        onDialogOpened__func: `                                            `,
        onDialogBeforeClose__func: `                                            `,
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
            hideSub: true,
          },
          children: [
            {
              component: 'Input',
              label: '按钮内容',
              icon: 'bi:input-cursor-text',
              field: 'content',
              colProps: {
                span: 12,
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
                span: 12,
              },
              componentProps: {
                options: [
                  {
                    label: 'ant按钮',
                    value: 'AButton',
                  },
                ],
              },
              defaultValue: null,
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
                span: 12,
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
                span: 12,
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
                prefix: 'function({tableRef,createMessage}){',
                suffix: '}',
              },
              defaultValue: '',
              _type: 'custom',
              width: '200px',
              colProps: {
                span: 12,
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
    {
      component: 'Button',
      formItem: false,
      type: 'showItem',
      label: '数据代理编辑',
      field: 'button_2',
      colProps: {
        span: 24,
      },
      hiddenLabel: true,
      componentProps: {
        value: 'primary',
        type: 'primary',
        size: 'default',
        onClick__func: `                let formData=this.getFormData()                          
                                  this.getModal("modal_3").show(formData)                `,
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
        onOkButtonClick__func: `                let modal=this.getModal('modal_3');                          
                          let formData=modal.getFormData();                          
                          let props=this.getFormData();                          
                          Object.assign(props,formData);                         
                          return true;                `,
        onCancelButtonClick__func: `                                          `,
        onDialogOpened__func: `                                          `,
        onDialogBeforeClose__func: `                                          `,
      },
      children: [
        {
          component: 'Input',
          label: '数据列',
          icon: 'bi:input-cursor-text',
          field: 'api.columns',
          colProps: {
            span: 12,
          },
          componentProps: {
            type: 'text',
            defaultValue: '',
          },
          width: '200px',
          key: 'input_1',
          itemProps: {
            labelCol: {},
            wrapperCol: {},
          },
        },
        {
          component: 'CodeInput',
          label: '查询全部',
          componentProps: {
            buttonText: '编辑',
            mode: 'application/json',
            editorTitle: '代码编辑',
            bordered: true,
            autoFormat: true,
            readonly: false,
            prefix: 'async function(form){',
            suffix: '}',
          },
          defaultValue: '',
          _type: 'custom',
          width: '200px',
          colProps: {
            span: 12,
          },
          field: 'gridOptions.proxyConfig.ajax.queryAll__func',
          itemProps: {
            labelCol: {},
            wrapperCol: {},
          },
          key: 'gridOptions.proxyConfig.ajax.queryAll__func',
        },
        {
          component: 'CodeInput',
          label: '查询函数',
          componentProps: {
            buttonText: '编辑',
            mode: 'application/json',
            editorTitle: '代码编辑',
            bordered: true,
            autoFormat: true,
            readonly: false,
            prefix: 'async function({page,form}){',
            suffix: '}',
          },
          defaultValue: '',
          _type: 'custom',
          width: '200px',
          colProps: {
            span: 12,
          },
          field: 'gridOptions.proxyConfig.ajax.query__func',
          itemProps: {
            labelCol: {},
            wrapperCol: {},
          },
          key: 'gridOptions.proxyConfig.ajax.query__func',
        },
      ],
      _type: 'custom',
      width: '200px',
      colProps: {
        span: 24,
      },
      field: 'modal_3',
      itemProps: {
        labelCol: {},
        wrapperCol: {},
      },
    },
    {
      component: 'Button',
      formItem: false,
      type: 'showItem',
      label: '输入表单配置',
      field: 'button_4',
      colProps: {
        span: 24,
      },
      hiddenLabel: true,
      componentProps: {
        value: 'primary',
        type: 'primary',
        size: 'default',
        onClick__func: `            let formData=this.getFormData()                          
                                  this.getModal("modal_5").show(formData)            `,
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
        onOkButtonClick__func: `           let modal=this.getModal('modal_5');                          
                          let formData=modal.getFormData();                          
                          let props=this.getFormData();                          
                          Object.assign(props,formData);                         
                          return true;           `,
        onCancelButtonClick__func: `                        `,
        onDialogOpened__func: `                        `,
        onDialogBeforeClose__func: `                        `,
      },
      children: [
        {
          component: 'GridSubForm',
          label: '多行表单',
          field: 'gridOptions.formConfig.items',
          type: 'containerItem',
          formItem: true,
          icon: 'ant-design:border-bottom-outlined',
          componentProps: {
            onRowDelete__params: ['{idx,data,row}'],
            onRowInsert__params: ['{idx,data,row}'],
            onRowAdd__params: ['{idx,data,row}'],
            onRowChange__params: ['data'],
            maxLength: 100,
          },
          children: [
            {
              component: 'Input',
              label: '字段',
              icon: 'bi:input-cursor-text',
              field: 'field',
              colProps: {
                span: 12,
              },
              componentProps: {
                type: 'text',
                defaultValue: '',
              },
              width: '200px',
              key: 'input_1',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'Input',
              label: '名称',
              icon: 'bi:input-cursor-text',
              field: 'title',
              colProps: {
                span: 12,
              },
              componentProps: {
                type: 'text',
                defaultValue: '',
                max: 100,
                step: 1,
              },
              width: '200px',
              key: 'input_2',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'Slider',
              label: '宽度',
              icon: 'vaadin:slider',
              field: 'span',
              colProps: {
                span: 12,
              },
              componentProps: {
                max: 24,
                min: 0,
                defaultValue: 6,
                step: 1,
              },
              defaultValue: 0,
              width: '200px',
              key: 'slider_1',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'Select',
              label: '组件',
              icon: 'gg:select',
              field: 'itemRender.name',
              colProps: {
                span: 12,
              },
              componentProps: {
                options: [
                  {
                    label: '输入框',
                    value: 'AInput',
                  },
                  {
                    label: '下拉框',
                    value: 'AApiSelect',
                  },
                  {
                    label: '按钮组',
                    value: 'AButtonGroup',
                  },
                ],
                defaultValue: 'AInput',
                max: 100,
                step: 1,
                maxLength: 100,
                mode: null,
              },
              defaultValue: '',
              width: '200px',
              key: 'select_1',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'CollapseContainer',
              label: '下拉数据源',
              formItem: false,
              type: 'container',
              icon: 'ant-design:border-outlined',
              componentProps: {
                title: '数据源',
                hideSub: true,
              },
              children: [
                {
                  component: 'CodeInput',
                  label: '下拉数据源',
                  icon: 'ant-design:credit-card-outlined',
                  componentProps: {
                    buttonText: '编辑',
                    mode: 'application/json',
                    editorTitle: '代码编辑',
                    bordered: true,
                    autoFormat: true,
                    readonly: false,
                    prefix: 'function(){',
                    suffix: '}',
                    maxLength: 100,
                  },
                  defaultValue: '',
                  _type: 'custom',
                  width: '200px',
                  colProps: {
                    span: 12,
                  },
                  key: 'codeinput_1',
                  field: 'itemRender.props.api__func',
                  itemProps: {
                    labelCol: {},
                    wrapperCol: {},
                  },
                },
                {
                  component: 'Input',
                  label: '标签字段',
                  icon: 'bi:input-cursor-text',
                  field: 'itemRender.props.labelField',
                  colProps: {
                    span: 12,
                  },
                  componentProps: {
                    type: 'text',
                    defaultValue: 'name',
                  },
                  width: '200px',
                  key: 'input_2',
                  itemProps: {
                    labelCol: {},
                    wrapperCol: {},
                  },
                },
                {
                  component: 'Input',
                  label: '结果字段',
                  icon: 'bi:input-cursor-text',
                  field: 'itemRender.props.resultField',
                  colProps: {
                    span: 12,
                  },
                  componentProps: {
                    type: 'text',
                    defaultValue: 'list',
                  },
                  width: '200px',
                  key: 'input_3',
                  itemProps: {
                    labelCol: {},
                    wrapperCol: {},
                  },
                },
                {
                  component: 'Input',
                  label: 'ID字段',
                  icon: 'bi:input-cursor-text',
                  field: 'itemRender.props.valueField',
                  colProps: {
                    span: 12,
                  },
                  componentProps: {
                    type: 'text',
                    defaultValue: 'id',
                  },
                  width: '200px',
                  key: 'input_1',
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
              key: 'collapsecontainer_1',
              field: 'collapsecontainer_1',
              itemProps: {
                labelCol: {},
                wrapperCol: {},
              },
            },
            {
              component: 'GridSubForm',
              label: '按钮组配置',
              field: 'itemRender.children',
              type: 'containerItem',
              formItem: true,
              icon: 'ant-design:border-bottom-outlined',
              componentProps: {
                onRowDelete__params: ['{idx,data,row}'],
                onRowInsert__params: ['{idx,data,row}'],
                onRowAdd__params: ['{idx,data,row}'],
                onRowChange__params: ['data'],
                hideSub: true,
              },
              children: [
                {
                  component: 'RadioGroup',
                  label: '类型',
                  icon: 'carbon:radio-button-checked',
                  field: 'props.htmlType',
                  colProps: {
                    span: 12,
                  },
                  componentProps: {
                    options: [
                      {
                        label: '提交',
                        value: 'submit',
                      },
                      {
                        label: '重置',
                        value: 'reset',
                      },
                    ],
                    optionType: 'button',
                    maxLength: 100,
                  },
                  width: '200px',
                  key: 'radiogroup_2',
                  itemProps: {
                    labelCol: {},
                    wrapperCol: {},
                  },
                },
                {
                  component: 'RadioGroup',
                  label: '风格',
                  icon: 'carbon:radio-button-checked',
                  field: 'props.type',
                  colProps: {
                    span: 12,
                  },
                  componentProps: {
                    options: [
                      {
                        label: 'primary',
                        value: 'primary',
                      },
                      {
                        label: 'default',
                        value: 'default',
                      },
                    ],
                    optionType: 'button',
                    maxLength: 100,
                    hideSub: true,
                  },
                  width: '200px',
                  key: 'radiogroup_1',
                  itemProps: {
                    labelCol: {},
                    wrapperCol: {},
                  },
                },
                {
                  component: 'Input',
                  label: '按钮名称',
                  icon: 'bi:input-cursor-text',
                  field: 'props.content',
                  colProps: {
                    span: 12,
                  },
                  componentProps: {
                    type: 'text',
                    defaultValue: '',
                    ds: '',
                  },
                  width: '200px',
                  key: 'input_2',
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
              key: 'gridsubform_1',
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
          key: 'gridsubform_1',
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
      field: 'modal_5',
      itemProps: {
        labelCol: {},
        wrapperCol: {},
      },
    },
    {
      component: 'Button',
      formItem: false,
      type: 'showItem',
      label: 'vxe基础配置',
      field: 'button_3',
      colProps: {
        span: 24,
      },
      hiddenLabel: true,
      componentProps: {
        value: 'primary',
        type: 'primary',
        size: 'default',
        onClick__func: `                let formData=this.getFormData()                          
                                  this.getModal("modal_4").show(formData)                `,
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
        onOkButtonClick__func: `           let modal=this.getModal('modal_4');                          
                          let formData=modal.getFormData();                          
                          let props=this.getFormData();                          
                          Object.assign(props,formData);                         
                          return true;           `,
        onCancelButtonClick__func: `                                  `,
        onDialogOpened__func: `                                  `,
        onDialogBeforeClose__func: `                                  `,
      },
      children: [
        {
          component: 'Divider',
          label: '可编辑项配置',
          icon: 'radix-icons:divider-horizontal',
          colProps: {
            span: 24,
          },
          field: 'divider_3',
          componentProps: {
            orientation: 'center',
            dashed: true,
          },
          width: '200px',
          key: 'divider_3',
          itemProps: {
            labelCol: {},
            wrapperCol: {},
          },
        },
        {
          component: 'RadioButtonGroup',
          label: '触发方式',
          icon: 'carbon:radio-button-checked',
          field: 'gridOptions.editConfig.trigger',
          colProps: {
            span: 12,
          },
          componentProps: {
            options: [
              {
                label: '点击',
                value: 'click',
              },
              {
                label: '双击',
                value: 'dblclick',
              },
              {
                label: '手动',
                value: 'manual',
              },
            ],
          },
          defaultValue: '',
          _type: 'custom',
          width: '200px',
          key: 'radiobuttongroup_5',
          itemProps: {
            labelCol: {},
            wrapperCol: {},
          },
        },
        {
          component: 'RadioButtonGroup',
          label: '编辑模式',
          icon: 'carbon:radio-button-checked',
          field: 'gridOptions.editConfig.mode',
          colProps: {
            span: 12,
          },
          componentProps: {
            options: [
              {
                label: '单元格',
                value: 'cell',
              },
              {
                label: '行',
                value: 'row',
              },
            ],
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
          component: 'Checkbox',
          label: '显示修改状态',
          icon: 'ant-design:check-circle-outlined',
          colProps: {
            span: 12,
          },
          field: 'gridOptions.editConfig.showStatus',
          componentProps: {
            defaultValue: false,
          },
          width: '200px',
          key: 'checkbox_7',
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
      field: 'modal_4',
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
