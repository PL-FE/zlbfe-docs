/*
 * 开发时的环境变量
 * */
// 提测或者上线后会使用另外的配置，通过docker
const devConfig = {
  // 注意key对应的是后端模块，与mock上的关联: 即api接口的前缀
  mockUrl: {
    // ums: 'http://192.168.100.37/mock/11',
    // config: 'http://192.168.100.37/mock/15',
    // crm: 'http://122.51.95.99:40001/mock/70',
    // auth: 'http://122.51.95.99:40001/mock/22',
    // file: 'http://122.51.95.99:40001/mock/46',
    // common: 'http://122.51.95.99:40001/mock/142',
    common: 'http://192.168.100.37/mock/142',
    // notice: 'http://192.168.100.215:9530',
    // 园区模块
    parK: 'http://122.51.95.99:40001/mock/86',
    // 政务系统
    // 'government-affair': 'http://192.168.100.37/mock/39',
    // 渠道模块
    adviser: 'http://122.51.95.99:40001/mock/110',
    // 协议模块
    agreement: 'http://192.168.100.37/mock/63',
    // 入驻模块
    ems: 'http://122.51.95.99:40001/mock/126',
    // 优税猫后台管理
    htUrl: 'http://192.168.100.37/mock/51',
    // 营销系统板块
    marketing: 'http://192.168.100.37/mock/43',
    // 流程模块
    bpm: 'http://192.168.100.37/mock/66',
    // 财务模块
    finance: 'http://192.168.100.113:9537',
  },
};

window.RSK_CONFIG = {
  baseURL: 'https://api-resico.test.zlbzb.cn',
  // 版本号
  apiVersion: 'v1',
  authKey: 'auth.test',
  domain: 'test.zlbzb.cn',
  loginUrl: 'http://sso.test.zlbzb.cn',
  defaultUrl: 'http://test.zlbzb.cn:9001',
  // 后台
  umsUrl: 'http://test.zlbzb.cn:9001',
  // 财税服务
  ftaxUrl: 'http://test.zlbzb.cn:9002',
  // CRM
  crmUrl: 'http://test.zlbzb.cn:9003',
  fmsUrl: 'http://test.zlbzb.cn:9004',
  // 文件预览地址
  fileUrl:
    'http://dcsapi.com/?k=52308004720502374540135&url={url}',
  // 文件地址是否加密
  fileUrlEncodeFlag: true,
  // 优税猫后台
  htUrl: 'http://test.zlbzb.cn:9005',
  // 系统设置
  systemUrl: 'http://test.zlbzb.cn:9007',
  // 财务
  fncmsUrl: 'http://test.zlbzb.cn:9009',
  // 自然人代开
  sciUrl: 'http://test.zlbzb.cn:9010',
  // 个体户
  iobUrl: 'http://test.zlbzb.cn:9012',
  // 登陆需要的参数START
  // 客户端ID，向后端申请 有环境的区分
  clientId: 'resico',
  // 客户端密码，向后端申请 有环境的区分
  clientSecret: 'resico888',
  platformNo: 1,
  // 登陆需要的参数END

  // 只在开发环境配置的环境
  ...devConfig,
};

window.CONFIG = {}