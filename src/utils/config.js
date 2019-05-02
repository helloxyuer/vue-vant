let config = {
  baseUrl: window.location.origin + '/',
  userName: localStorage.getItem('userName') || '',
  baseUserId: localStorage.getItem('ry-baseUserId') || '',
  platformId: localStorage.getItem('ry-platformId') || '',
  qrCodeUrl: window.location.origin + '/webPages/entRouter.html?entId=',
  entForSource: ['未知', 'APP', 'WEB', 'BOSS', '合作伙伴导入', '微信公众号', '微信小程序', 'manager'],
  manType: ['未知', '个人货主', '司机用户', '物流企业用户', '货主企业用户'],
  auditType: ['未知', '未认证', '已认证'],
  seXArr: ['未知', '男', '女'],
  identityType: ['未知', '管理员', '企业用户', '司机用户'],
  personStateArr: ['未知', '正常', '冻结', '未知', '邀请待注册'],
}

export default config;
