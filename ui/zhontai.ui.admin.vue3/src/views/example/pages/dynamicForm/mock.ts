// 表单数据选项(自行扩展)
export const formData = [
  {
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名',
    clearable: true,
    disabled: false,
    required: true,
    type: 'input',
    i18n: false,
    i18nText: '',
    isShow: true,
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 4,
  },
  {
    label: '邮箱',
    prop: 'email',
    placeholder: '请输入用户邮箱',
    clearable: true,
    disabled: false,
    required: true,
    type: 'input',
    i18n: false,
    i18nText: '',
    isShow: true,
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 4,
  },
  {
    label: '登陆时间',
    prop: 'autograph',
    placeholder: '选择时间',
    clearable: true,
    disabled: false,
    required: true,
    type: 'date',
    i18n: false,
    i18nText: '',
    isShow: true,
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 4,
  },
  {
    label: '职务',
    prop: 'occupation',
    placeholder: '请选择职务',
    clearable: true,
    disabled: false,
    required: true,
    type: 'select',
    i18n: false,
    i18nText: '',
    options: [
      {
        label: '计算机 / 互联网 / 通信',
        value: '1',
      },
      {
        label: '生产 / 工艺 / 制造',
        value: '2',
      },
      {
        label: '医疗 / 护理 / 制药',
        value: '3',
      },
    ],
    isShow: true,
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 4,
  },
  {
    label: '',
    prop: '',
    placeholder: '',
    clearable: true,
    disabled: false,
    required: true,
    type: '',
    i18n: false,
    i18nText: '',
    isShow: true,
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
  },
  {
    label: '备注',
    prop: 'remarks',
    placeholder: '请输入',
    clearable: true,
    disabled: false,
    required: true,
    type: 'textarea',
    i18n: false,
    i18nText: '',
    isShow: true,
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
  },
]
