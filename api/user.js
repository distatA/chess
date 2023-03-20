import { request }  from '@/utils/request.js'

// 获取个人信息
export const getInfo = (data) => {
    return request({
        url: '/member/fly.users/getInfo',
        method: 'POST',
        data
    })
}
