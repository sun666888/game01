<template>
<div class="quanma">
    <p class="tishi">
        <img class="img1" src="./../assets/img/cion1.png" alt="" srcset="">
        <span>我的券码</span>
        <img class="img2" src="./../assets/img/cion2.png" alt="" srcset="">
    </p>
    <div class="center" v-show="other.length == 0 ? false : true" v-for="other in others" :key="other.id" >
        <div :class="['father', other.coupon_id == 1 ? 'center-quan1' : other.coupon_id == 2 ? 'center-quan2' :'center-quan3' ]">
            <p class="ma">{{ other.couponInfo.coupon_link }}</p>
        </div>
        <p class="bnt" @click="copyMa($event,other.couponInfo.coupon_link)">复制优惠链接</p>
    </div>
    <div class="center" v-show="ruiheng == null ? false : true">
        <div class="center-rui father">
            <p class="ma">{{ ruiheng == null ? '' : ruiheng.coupon_code }}</p>
        </div>
        <p class="bnt" @click="copyMa($event,ruiheng.coupon_code)">复制券码</p>
    </div>
    <div v-show="others.length == 0 && ruiheng == null" class="others">
        ╥﹏╥...<br /><br />
        您还没有优惠券，请先去挑战吧~
    </div>
    <div v-show="others.length !== 0 || ruiheng !== null" class="popup">
        <h3 class="h3">优惠券使用规则:</h3>
        <span class="span">TicPods 2、TicWatch Pro 4G、AMAZFIT 智能手表 2优惠券使用规则：</span>
        <p>1、用户挑战成功后点击【领取手表优惠券】-【我的优惠券】-【复制优惠券领取链接】</p>
        <p>2、在手机浏览器粘贴链接并打开，点击“立即领取”；</p>
        <p>3、登录京东账号，点击“去活动页”；</p>
        <p>4、选择优惠券适用商品进行下单；</p>
        <p>5、进入订单支付页面，选择京东优惠券即可。</p>
        <span class="span">瑞恒手表优惠券使用规则：</span>
        <p>1、用户挑战成功后点击【领取手表优惠券】-【我的优惠券】-【复制优惠券券码】;</p>
        <p>2、至京东平台与瑞恒客服兑换优惠券即可使用。</p>
      </div>
      <div class="fanhui" @click="Return">
          <p>返回活动主页</p>
      </div>
</div>
</template>

<script>
import { Button,Popup, Toast } from "vant";
import Clip from './../util/clipboard';
import Cookies from "js-cookie";
import { quanList } from "./services/game";

export default {
    name: "home",
    components: {
        [Button.name]: Button,
        [Popup.name]: Popup,
        [Toast.name]: Toast
    },
    data (){
        return {
            others: [],
            ruiheng: null,
            token: ''
        }
    },
    mounted() {
        this.token = Cookies.get("token"); // 获取存储的token
        this.getList()

    },
    methods: {
        copyMa($event,code) {
            // 复制成功
            Clip($event, code);
            Toast("复制成功");
        },
        getList() {
            quanList(this.token).then(res => {
                this.ruiheng = res.data.ruihengCouponInfo
                this.others = res.data.otherCouponList

            })
        },
        Return () {
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0 auto;
    padding: 0;
}
.father:after{
    content: '';
    display: block;
    height: 0;
    clear: both;
}
.father{
    zoom: 1;
}
a {
  text-decoration: none;
}
.quanma {
    width: 750px;
    min-height: 100vh;
    background: url("./../assets/img/quanmabg1.jpg") no-repeat;
    background-size: 100% 100%;
    text-align: center;
    padding-top:40px ;
    background-color: #e6d0ff;
    padding-bottom: 30px;
    .tishi{
        padding: 0 180px;
        margin-top: 60px;
        .img1{
            width: 75px;
            float: left;
        }
        .img2{
            width: 75px;
            float: right
        }
        span{
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            display: inline-block;
            line-height: 25px;
        }
    }
    .center {
        width: 560px;
        height: 262px;
        background-image: url("./../assets/img/wireframe.png");
        background-size: 100%;
        background-repeat:no-repeat;
        margin-top: 60px;
        padding: 25px 45px;
        .center-quan1 {
            height: 160px;
            background-image: url("./../assets/img/quan1.png");
            background-size: 100% 100%;
            background-repeat:no-repeat;
            
            .ma {
                font-size: 26px;
                padding-top: 40px;
                padding-left: 160px;
                color: #7c42ff;
                font-weight: bold;
            }
        }
        .center-quan2 {
            background-image: url("./../assets/img/quan2.png");
            background-size: 100% 100%;
            background-repeat:no-repeat;
            height: 160px;
            .ma {
                font-size: 26px;
                padding-top: 40px;
                padding-left: 160px;
                color: #7c42ff;
                font-weight: bold;
            }
        }
        .center-quan3 {
            background-image: url("./../assets/img/quan4.png");
            background-size: 100% 100%;
            background-repeat:no-repeat;
            height: 160px;
            .ma {
                font-size: 26px;
                padding-top: 40px;
                padding-left: 160px;
                color: #7c42ff;
                font-weight: bold;
            }
        }
        .center-rui {
            background-image: url("./../assets/img/quan3.png");
            background-size: 100% 100%;
            background-repeat:no-repeat;
            height: 160px;
            .ma {
                font-size: 26px;
                padding-top: 40px;
                padding-left: 150px;
                color: #7c42ff;
                font-weight: bold;
            }
        }
        p.bnt{
            width: 160px;
            height: 46px;
            line-height: 46px;
            font-size: 24px;
            font-weight: bold;
            background: url("./../assets/img/quanam.png") no-repeat;
            background-size: 100%;
            margin-top: 20px;
            color: #7c42ff;
        }
    }
    .others {
        font-size: 30px;
        font-weight: bold;
        color: rgb(235, 235, 241);
        margin-top: 150px;
    }
    .popup {
      text-align: left;
      padding: 0 45px 20px 45px;
      font-size: 24px;
      line-height: 1.5;
      color: #fff;
      .h3 {
        font-size: 26px;
        color: #235bf5;
        margin-bottom: 10px;
        margin-top: 20px;
      }
      .span {
        display: inline-block;
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 10px;
      }
      p {
        font-size: 24px;
        // text-indent: -1.4em;
        // margin-left: 1.4em;
        line-height: 1.5;
      }
    }
    .fanhui {
      width: 370px;
      height: 70px;
      margin-top: 40px;
    //   margin-bottom: 30px;
      background-image: url("./../assets/img/button4.png");
      background-size: 100% 100%;
      p {
        height: 70px;
        line-height: 70px;
        font-size: 30px;
        color: #7c42ff;
      }
   }
}
</style>