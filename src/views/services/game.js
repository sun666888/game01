import request from '../../util/request'
// import qs from 'qs'

// 游戏开始
export function gameStar ( token ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/games/start?token='+token,
    method: 'get',
  })
}

// 游戏提交   配对消消乐
export function gameSubOne ( gameSubOne ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/games/playOne',
    method: 'post',
    data: gameSubOne
  })
}

// 游戏提交   拼图
export function gameSubTwo ( gameSubTwo ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/games/playTwo',
    method: 'post',
    data: gameSubTwo
  })
}

// 游戏提交   抓娃娃
export function gameSubThree ( gameSubThree ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/games/playThree',
    method: 'post',
    data: gameSubThree
  })
}

// 游戏提交   11秒
export function gameSubFour ( gameSubFour ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/games/playFour',
    method: 'post',
    data: gameSubFour
  })
}

// 额外次数  
export function gameNum ( gameNum ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/games/extra',
    method: 'post',
    data: gameNum
    })
  }

  // 用户是否已领取瑞恒券码
export function isGetRui ( token ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/coupons/ruihengState?token='+token,
    method: 'get',
  })
}

// 用户是否已领取其他券码
export function isGetOther ( type, token ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/coupons/otherState?type=' + type + '&token=' + token,
    method: 'get',
  })
}

// 领取瑞恒券码
export function getRui ( token ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/coupons/ruiheng?token='+token,
    method: 'get',
  })
}

// 领取其他券码
export function getOther ( type, token ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/coupons/other?type=' + type + '&token=' + token,
    method: 'get',
  })
}

// 券码列表
export function quanList ( token ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/coupons/list?token=' + token,
    method: 'get',
  })
}