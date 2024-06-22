import request from '@/utils/request'

//获取首页房子信息
export const houseDetailService = () => {
  return request.post('/house/detail')
}
//搜索预约信息
export const previewSearchService = (skuId) => {
  return request.post('/house/search1', { skuId })
}
//预约生成订单
export const insertPreviewService = ({
  userId,
  orderSkuId,
  orderSpuId,
  orderCreateTime,
  orderStatus,
  orderBadTime,
  orderEndTime,
  description,
  skuId,
  totalPrice
}) => {
  return request.post('/house/preview1', {
    userId,
    orderSkuId,
    orderSpuId,
    orderCreateTime,
    orderStatus,
    orderBadTime,
    orderEndTime,
    description,
    skuId,
    totalPrice
  })
}

//获取订单
export const judgeOrderService = (skuId) => {
  return request.post('/house/preview2', { skuId })
}
//模糊查询

//条件选择

//查询某个房子信息
export const houseCertainService = (skuId) => {
  return request.post('/house/certain', {
    skuId
  })
}

//发布房源申请提交
export const houseDeclareService = ({
  city,
  field,
  position,
  expPrice,
  nickname,
  confirmPassword,
  userId
}) => {
  return request.post('/house/declare', {
    city,
    field,
    position,
    expPrice,
    nickname,
    confirmPassword,
    userId
  })
}

//管理房屋初始化
export const houseManageService = (page) => {
  return request.post('/house/manage', { page })
}

//管理订单初始化
export const previewManageService = (page) => {
  return request.post('/house/previewManage', { page })
}

//房屋上架
export const houseUploadService = (houseId) => {
  return request.post('/house/uploadHouse', { houseId })
}

//房屋下架
export const houseTakeOffService = (houseId) => {
  return request.post('/house/takeOffHouse', { houseId })
}

//初始化评价
export const houseCommentService = (houseId) => {
  return request.post('/house/initComment', {
    houseId
  })
}

//发布评价
export const houseDeclareCommentService = ({
  houseId,
  id,
  userId,
  parentId,
  content,
  createTime,
  receiverId
}) => {
  return request.post('/house/declareComment', {
    houseId,
    id,
    userId,
    parentId,
    content,
    createTime,
    receiverId
  })
}

//回复评价
export const houseReplyCommentService = ({
  houseId,
  id,
  userId,
  parentId,
  content,
  createTime,
  receiverId
}) => {
  return request.post('/house/replyComment', {
    houseId,
    id,
    userId,
    parentId,
    content,
    createTime,
    receiverId
  })
}

//发送文件信息
export const houseSaveService = (data) => {
  return request.post('/file/save', data, {
    headers: {
      'Content-Type': 'multipart/form-data' // 设置请求头为 form-data
    }
  })
}

export const houseSaveNoFileService = (data) => {
  return request.post('/file/saveNoFile', data, {
    headers: {
      'Content-Type': 'multipart/form-data' // 设置请求头为 form-data
    }
  })
}

//同意退款
export const previewReturnService = ({
  orderSkuId,
  userId,
  orderSpuId,
  orderCreateTime,
  orderStatus,
  orderBadTime,
  orderEndTime,
  description,
  skuId,
  totalPrice
}) => {
  return request.post('/house/return', {
    orderSkuId,
    userId,
    orderSpuId,
    orderCreateTime,
    orderStatus,
    orderBadTime,
    orderEndTime,
    description,
    skuId,
    totalPrice
  })
}

//初始化预约时间大
export const houseInitSmallTimeService = () => {
  return request.post('/house/initSmallTime')
}

//初始化预约时间小
export const houseInitBigTimeService = () => {
  return request.post('/house/initBigTime')
}

//初始化预约价格
export const houseInitMoneySerVice = () => {
  return request.post('/house/initMoney')
}

//保存预约价格
export const houseMoneyEditService = (data) => {
  return request.post('/house/editMoney', data)
}

//保存预约时间大
export const houseBigTimeEditService = (data) => {
  return request.post('/house/editBigTime', data)
}

//保存预约时间小
export const houseSmallTimeEditService = (data) => {
  return request.post('/house/editSmallTime', data)
}

//搜索特定房屋预约时间小
export const houseManageTimeService = (skuId) => {
  return request.post('/house/manageTime', { skuId })
}

//搜索特定房屋预约时间大
export const houseOrderTimeService = (skuId) => {
  return request.post('/house/orderTime', { skuId })
}

//查询某个用户关注的房屋
export const houseSearchFocusedUserService = (userId) => {
  return request.post('/house/searchUserFocus', { userId })
}

//搜索某个用户发布的房源
export const houseSearchDeclaredUserService = (userId) => {
  return request.post('/house/searchUserDeclare', { userId })
}

//搜索房子
export const searchContentByKeyService = (searchBig, searchSmall) => {
  return request.post('/house/searchByKey', { searchBig, searchSmall })
}

//筛选搜素
export const selectedOptionService = (search1, search2, search3) => {
  return request.post('/house/searchOption', { search1, search2, search3 })
}
//订单分类
export const clarifyOrderService = (data) => {
  return request.post('/clarify/order',data)
}