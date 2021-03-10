<template>
  <div class="home">
    <!-- 头部 -->
    <div class="logo father">
      <img src="./../assets/img/logo.png" alt srcset />
      <span class="rule" @click="showPopup"></span>
    </div>
    <!-- 标题 -->
    <div class="title">
      <img src="./../assets/img/title.png" alt />
    </div>

    <img src="./../assets/img/esim.png" alt class="esim" />
    <!-- 品牌 -->
    <div class="brand">
      <ul class="father">
        <li>
          <img src="./../assets/img/Nubia.png" @click="Nubia" alt srcset />
          <p>一等奖</p>
          <p style="line-height: 1.2;">努比亚腕机*1</p>
        </li>
        <li style="margin-left: 2.5%;">
          <img src="./../assets/img/Ticwatch.png" @click="Ticwatch" alt srcset />
          <p>二等奖</p>
          <p class="wenwen">
            TicWatch
            <br />Pro 4G*1
          </p>
        </li>
        <li style="margin-left: 2.5%;">
          <img src="./../assets/img/Xiaomi.png" @click="Xiaomi" alt srcset />
          <p>二等奖</p>
          <p style="line-height: 1.2;">小米手表*1</p>
        </li>
        <li style="float:right;">
          <img src="./../assets/img/TicPods2.png" @click="TicPods2" alt srcset />
          <p>三等奖</p>
          <p style="line-height: 1.2;">TicPods 2*3</p>
        </li>
      </ul>
      <p class="tishi">
        <img class="img1" src="./../assets/img/circle.png" alt srcset />
        <span>完成全部4关挑战即可参与手表大抽奖</span>
        <img class="img2" src="./../assets/img/circle.png" alt srcset />
      </p>
    </div>
    <!-- 游戏 -->
    <div class="game">
      <div class="game1">
        <div class="center father">
          <p class="centertitle">
            <b>第一关</b>
            <span class="xiangxiao">配对“消”消乐</span>
            <a class="anniu anniucopy" @click="gameThree">{{ gameOneStatus }}</a>
          </p>
          <div class="centerimg" v-show="gameOneStatus !== '待开放' ? true : false">
            <img src="./../assets/img/Coupon1.png" alt srcset />
            <p>限量50张，先到先得；挑战成功，立即领取</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 游戏2 -->
    <div class="game">
      <div class="game1">
        <div class="center father">
          <p class="centertitle">
            <b>第二关</b>
            <span>
              爱“拼”才会赢
              <br />
              <a href="javaScript:;">11月09日开放</a>
            </span>
            <a class="anniu" @click="gameOne">{{ gameTwoStatus }}</a>
          </p>
          <div class="centerimg" v-show="gameTwoStatus !== '待开放' ? true : false">
            <img src="./../assets/img/Coupon2.png" alt srcset />
            <p>限量100张，先到先得；挑战成功，立即领取</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 游戏3 -->
    <div class="game">
      <div class="game1">
        <div class="center father">
          <p class="centertitle">
            <b>第三关</b>
            <span>
              全民“抓”娃娃
              <br />
              <a href="javaScript:;">11月10日开放</a>
            </span>
            <a class="anniu" @click="gameFour">{{ gameThreeStatus }}</a>
          </p>
          <div class="centerimg" v-show="gameThreeStatus !== '待开放' ? true : false">
            <img src="./../assets/img/Coupon3.png" alt srcset />
            <p>限量150张，先到先得；挑战成功，立即领取</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 游戏4 -->
    <div class="game">
      <div class="game1">
        <div class="center father">
          <p class="centertitle">
            <b>第四关</b>
            <span>
              挑战“11.11”秒
              <br />
              <a href="javaScript:;">11月11日开放</a>
            </span>
            <a class="anniu" @click="gameTwo">{{ gameFourStatus }}</a>
          </p>
          <div class="centerimg" v-show="gameFourStatus !== '待开放' ? true : false">
            <img src="./../assets/img/Coupon4.png" alt srcset />
            <p>限量200张，先到先得；挑战成功，立即领取</p>
          </div>
        </div>
      </div>
    </div>
    <div class="quanma" @click="quanma">
      <p>我的优惠券</p>
    </div>
    <a href="tel:400-021-0356" class="tel">
      <img src="./../assets/img/tel.png" alt srcset />
    </a>
    <!-- 弹框 -->
    <van-popup v-model="show" class="vanpopup">
      <div class="popup">
        <img src="./../assets/img/huodong.png" alt srcset />
        <h3 class="h3">优惠券使用规则:</h3>
        <span class="span">TicPods 2、TicWatch Pro 4G、AMAZFIT 智能手表 2优惠券使用规则：</span>
        <p>1、用户挑战成功后点击【领取手表优惠券】-【我的优惠券】-【复制优惠券领取链接】</p>
        <p>2、在手机浏览器粘贴链接并打开，点击“立即领取”；</p>
        <p>3、登录京东账号，点击“去活动页”；</p>
        <p>4、选择优惠券适用商品进行下单；</p>
        <p>5、进入订单支付页面，选择京东优惠券即可。</p>
        <span class="span">瑞恒手表优惠券使用规则：</span>
        <p>1、用户挑战成功后点击【领取手表优惠券】-【我的优惠券】-【复制优惠券券码】</p>
        <p>2、至京东平台与瑞恒客服兑换优惠券即可使用。</p>
        <h3 class="h3">活动规则：</h3>
        <p>1、活动时间：2019/11/08~11/11(共计4天)；</p>
        <p>2、用户完成当天挑战，即有机会获得该日优惠券；</p>
        <p>3、每个用户每天只有3次挑战机会，完成额外任务可额外再增加3次，即一个用户每天最多6次挑战机会，仅当天使用，不限关数；</p>
        <p>4、活动期间，用户可挑战当天及当天前所有游戏；</p>
        <p>5、活动期间，游戏将按每天上午6点更新一关的速度进行开放，即11月11日，全部闯关开放挑战；</p>
        <p>6、用户完成全部闯关任务（4关），11月12日将由【第三方抽奖平台】随机抽出共计6名幸运用户获得奖励，且每人最多中奖1次；</p>
        <p>7、本活动确保公平、公开、公正，如存在用户作弊行为，一经查实，将一律取消获奖资格；</p>
        <p>8、请务必填写本人真实有效信息，如因信息有误而导致无法派奖，联通eSIM微信公众号概不负责；</p>
        <p>9、奖品将在开奖后7个工作日内进行派送；</p>
        <p>10、奖品以实物为准，产品图仅供参考；</p>
        <p>11、本活动最终解释权归联通eSIM智能穿戴设备公众号所有。</p>
      </div>
    </van-popup>
    <!-- 弹框信息录入-->
    <van-popup
      v-model="showinformation"
      class="information father"
      :close-on-click-overlay="closeonclickoverlay"
    >
      <img src="./../assets/img/baoming.png" alt srcset class="imgh3" />
      <form class="biao father">
        <div class="biaodan">
          <img class="sub_img" src="./../assets/img/name.png" alt />
          <input type="text" v-model="submit.username" placeholder="请输入姓名" />
        </div>
        <div class="biaodan">
          <img class="sub_img" src="./../assets/img/mobile.png" alt />
          <input type="tel" v-model="submit.mobile" placeholder="请输入手机号" />
        </div>
        <div class="biaodan">
          <img class="sub_img" src="./../assets/img/code.png" alt />
          <input type="tel" v-model="submit.verify" />
          <span class="yan" @click.prevent="handleFetchCode" v-if="timeFlag">获取验证码</span>
          <span class="yan" @click.prevent="handleFetchCode" v-else disabled>{{ count }}s</span>
        </div>
        <p class="neirong">*请确保您的信息填写准确，手机保持畅通，便于开奖后我司工作人员与您取得联系。</p>
      </form>
      <a class="but" @click="Submission">提交</a>
    </van-popup>
    <!-- 弹框成功 -->
    <van-popup v-model="showSuccess" class="success">
      <div class="successcenter">
        <p>挑战成功</p>
        <!-- <img src="./../assets/img/youhuiquan.png" alt class="youhuiquan" @click="getQuan" /> -->
        <div class="youhuiquan" @click="getQuan"></div>
        <div class="huoqu1" @click="huoqu">
          <img src="./../assets/img/shou.png" alt class="shou" />
        </div>
        <img src="./../assets/img/guang.png" alt class="guang" />
        <div class="jieshao">
          <img src="./../assets/img/icon1.png" alt srcset />
          <span class="titlespan">优惠券使用规则：</span>
          <p>1.用户挑战成功后点击【领取优惠券】-【我的优惠券】-【复制优惠券领取链接】</p>
          <p>2.在手机浏览器粘贴链接并打开，点击“立即领取”；</p>
          <p>3.登录京东账号，点击“去活动页”；</p>
          <p>4.选择优惠券适用商品进行下单；</p>
          <p>5.进入订单支付页面，选择京东优惠券即可。</p>
          <p>注：如果没有出现优惠券免减选项，请私信京东卖家客服处理。</p>
        </div>
        <img src="./../assets/img/x.png" alt srcset @click="successcancel" class="quxiao" />
      </div>
    </van-popup>
    <!-- 弹框成功  瑞恒 -->
    <van-popup v-model="showSuccessRui" class="success1">
      <div class="successcenter">
        <p>挑战成功</p>
        <!-- <img src="./../assets/img/youhuiquan.png" alt class="youhuiquan" @click="getQuan" /> -->
        <div class="youhuiquan" @click="getQuanRui"></div>
        <div class="huoqu1" @click="huoqu">
          <img src="./../assets/img/shou.png" alt class="shou" />
        </div>
        <img src="./../assets/img/guang.png" alt class="guang" />
        <div class="jieshao">
          <img src="./../assets/img/icon1.png" alt srcset />
          <span class="titlespan">优惠券使用规则：</span>
          <p>1、用户挑战成功后点击【领取手表优惠券】-【我的优惠券】-【复制优惠券券码】；</p>
          <p>2、至京东平台与瑞恒客服兑换优惠券即可使用。</p>
        </div>
        <img src="./../assets/img/x.png" alt srcset @click="successcancel" class="quxiao" />
      </div>
    </van-popup>

    <!-- <van-dialog id="van-dialog" /> -->
  </div>
</template>

<script>
import { Button, Popup, Toast, Dialog } from "vant";
import { initStatus, code, login, gameStatus } from "./services/home";
import {
  isGetRui,
  isGetOther,
  getOther,
  getRui,
  getOpenid
} from "./services/game";
import md5 from "md5";
import Cookies from "js-cookie";
// import qs from 'qs'

export default {
  name: "home",
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog
  },
  data() {
    return {
      mobile: "",
      token: "",
      show: false,
      showinformation: false,
      submit: {
        username: "",
        mobile: "",
        verify: "",
        code: ""
      },
      timeFlag: true,
      count: 30,
      isOn: 1,
      gameOneStatus: "待挑战",
      gameTwoStatus: "待挑战",
      gameThreeStatus: "待挑战",
      gameFourStatus: "待挑战",
      closeonclickoverlay: false,
      showSuccess: false,
      showSuccessRui: false,
      type: "" // 领取券类别
    };
  },
  mounted() {
    let that = this;
    let mobile = Cookies.get("mobile");

    if (mobile) {
      that.mobile = mobile;
      that.getToken();
      let token = Cookies.get("token");
      that.token = token;
      that.getGameStatus();

      that.dialog();
    } else {
      that.getGameChu();
      // that.getUser();
    }
  },
  methods: {
    //获取url中的参数
    getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg); //匹配目标参数
      if (r != null) return unescape(r[2]);
      return null; //返回参数值
    },

    getUser() {
      var code = this.getUrlParam("code");
      if (code == null) {
        var curPath = "http://esimwx.10010sh.cn:8999/html/eSIMgame/index.html";
        var realPath =
          "https://www.shyy6688.com/wxunicom/index.php/Esim/Wx/getParamCode?backUrl=" +
          curPath;
        var url =
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx908fb9ef140ecc17&redirect_uri=" +
          encodeURIComponent(realPath) +
          "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
        window.location.href = url;
      } else {
        this.submit.code = code;
        
        this.getOpen();
      }
    },
    dialog() {
      let mobile = Cookies.get("mobile");

      if (mobile == "17633184810") {
        Dialog.alert({
          message: "恭喜您，您已抽中一等奖，请联系客服领取奖品吧~"
        }).then(() => {
          // on close
        });
      } else if (mobile == "18826220371" || mobile == "15532187663") {
        Dialog.alert({
          message: "恭喜您，您已抽中二等奖，请联系客服领取奖品吧~"
        }).then(() => {
          // on close
        });
      } else if (
        mobile == "17563716661" ||
        mobile == "18079149978" ||
        mobile == "18686220113"
      ) {
        Dialog.alert({
          message: "恭喜您，您已抽中三等奖，请联系客服领取奖品吧~"
        }).then(() => {
          // on close
        });
      } else {
        Dialog.alert({
          message: "您好，活动已结束~~您未中奖哦(ㄒoㄒ)~~"
        }).then(() => {
          // on close
        });
      }
    },
    getOpen() {
      getOpenid(this.submit.code).then(res => {
        let openid = res.data.openId;
        if (openid == "ogcfW05w_cFg0eKQMCHQKmqTQPyg") {
          Dialog.alert({
            message: "恭喜您，您已抽中一等奖，请联系客服领取奖品吧~"
          }).then(() => {
            // on close
          });
        } else if (
          openid == "ogcfW0x4Xnq80yYjvKded6PkMS-c" ||
          openid == "ogcfW0w7WFWS488cwkk7I1FQvr6k"
        ) {
          Dialog.alert({
            message: "恭喜您，您已抽中二等奖，请联系客服领取奖品吧~"
          }).then(() => {
            // on close
          });
        } else if (
          openid == "ogcfW0z6LC3UJq1FEIndOkwONjXQ" ||
          openid == "ogcfW0wgzBDnucKRILTtFaafuBY4" ||
          openid == "ogcfW0-vLW2ewlCdgiQuukKhJqPM"
        ) {
          Dialog.alert({
            message: "恭喜您，您已抽中三等奖，请联系客服领取奖品吧~"
          }).then(() => {
            // on close
          });
        } else {
          Dialog.alert({
            message: "您好，活动已结束~~您未中奖哦(ㄒoㄒ)~~"
          }).then(() => {
            // on close
          });
        }
      });
    },
    getGameChu() {
      initStatus().then(res => {
        if (res.msg == "success") {
          this.gameOneStatus =
            res.data.game_current_state_text.game_one_state_text;
          this.gameTwoStatus =
            res.data.game_current_state_text.game_two_state_text;
          this.gameThreeStatus =
            res.data.game_current_state_text.game_three_state_text;
          this.gameFourStatus =
            res.data.game_current_state_text.game_four_state_text;
        }
      });
    },
    showPopup() {
      this.show = true;
    },
    Nubia() {
      window.location.href = "http://suo.im/4MDIk0";
    },
    Ticwatch() {
      window.location.href = "http://suo.im/4U9VvX";
    },
    Xiaomi() {
      window.location.href = "http://suo.im/5hBaav";
    },
    TicPods2() {
      window.location.href = "http://suo.im/4q5xxX";
    },
    // 配对
    gameThree() {
      // if (this.token) {
        if (this.gameOneStatus == "待挑战" || this.gameOneStatus == "去挑战") {
          this.$router.push({
            path: "/gamethree"
          });
        } else if (this.gameOneStatus == "已挑战") {
          isGetOther(1, this.token).then(res => {
            if (res.msg == "success") {
              if (res.data.isReceived) {
                Toast("您已完成本关挑战");
              } else {
                this.showSuccess = true;
                this.type = 1;
              }
            }
          });
        }
      // } 
      // else if (this.token == "" && this.gameOneStatus == "待挑战") {
      //   this.showinformation = true;
      // }
    },
    // 拼图
    gameOne() {
      // if (this.token) {
        if (this.gameTwoStatus == "待挑战" || this.gameTwoStatus == "去挑战") {
          this.$router.push({
            path: "/gameone"
          });
        } else if (this.gameTwoStatus == "已挑战") {
          isGetOther(2, this.token).then(res => {
            if (res.msg == "success") {
              if (res.data.isReceived) {
                Toast("您已完成本关挑战");
              } else {
                this.showSuccess = true;
                this.type = 2;
              }
            }
          });
        }
      // } 
      // else if (this.token == "" && this.gameTwoStatus == "待挑战") {
      //   this.showinformation = true;
      // }
    },
    // 抓娃娃
    gameFour() {
      // if (this.token) {
        if (
          this.gameThreeStatus == "待挑战" ||
          this.gameThreeStatus == "去挑战"
        ) {
          this.$router.push({
            path: "/gamefour"
          });
        } else if (this.gameThreeStatus == "已挑战") {
          isGetRui(this.token).then(res => {
            if (res.msg == "success") {
              if (res.data.isReceived) {
                Toast("您已完成本关挑战");
              } else {
                this.showSuccessRui = true;
              }
            }
          });
        }
      // } 
      // else if (this.token == "" && this.gameThreeStatus == "待挑战") {
      //   this.showinformation = true;
      // }
    },
    // 11秒
    gameTwo() {
      // if (this.token) {
        if (
          this.gameFourStatus == "待挑战" ||
          this.gameFourStatus == "去挑战"
        ) {
          this.$router.push({
            path: "/gametwo"
          });
        } else if (this.gameFourStatus == "已挑战") {
          isGetOther(3, this.token).then(res => {
            if (res.msg == "success") {
              if (res.data.isReceived) {
                Toast("您已完成本关挑战");
              } else {
                this.showSuccess = true;
                this.type = 4;
              }
            }
          });
        }
      // } 
      // else if (this.token == "" && this.gameFourStatus == "待挑战") {
      //   this.showinformation = true;
      // }
    },
    failcancel() {
      this.showinformation = false;
    },
    quanma() {
      this.$router.push({
        path: "/quanma"
      });
    },
    // 获取验证码
    handleFetchCode() {
      // 11位数字 13014005575
      let reg = /^1[0-9]{10}$/g;
      const mobile = this.submit.mobile;
      let verify = {
        mobile
        // debug: true
      };
      if (reg.test(mobile)) {
        code(verify).then(res => {
          if (res.msg === "success") {
            this.$toast.success(res.data.info);
            this.timeDown();
          } else {
            this.$toast.fail(res.msg);
          }
        });
      } else {
        this.$toast.fail("请输入11位手机号");
      }
    },
    // 再次获取验证码倒计时
    timeDown() {
      const TIME_COUNT = 30;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.timeFlag = false;
        this.timer = setInterval(() => {
          if (this.count > 1) {
            this.count--;
          } else {
            this.timeFlag = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    // 报名提交
    Submission(e) {
      let regPhone = /^1[0-9]{10}$/;
      // console.log(this.submit);
      if (regPhone.test(this.submit.mobile)) {
        login(this.submit).then(res => {
          console.log(res);
          if (res.msg === "success") {
            this.showinformation = false; // 关闭弹框
            this.token = res.data.token; // 赋值token
            this.getGameStatus(); // 调用获取当前首页游戏状态

            Cookies.set("token", res.data.token); // 存token
            Cookies.set("mobile", this.submit.mobile); // 存用户手机号每隔一个小时获取新的token以便token失效
          } else {
            this.$toast.fail(res.msg);
          }
        });
      } else {
        this.$toast.fail("请将信息填写完整");
      }
    },
    // 首页当前游戏状态
    getGameStatus() {
      gameStatus(this.token).then(res => {
        console.log(res);
        if (res.msg == "success") {
          this.gameOneStatus =
            res.data.game_current_state_text.game_one_state_text;
          this.gameTwoStatus =
            res.data.game_current_state_text.game_two_state_text;
          this.gameThreeStatus =
            res.data.game_current_state_text.game_three_state_text;
          this.gameFourStatus =
            res.data.game_current_state_text.game_four_state_text;

          // Cookies.set('play_num', res.data.play_num); // 存次数
        }
      });
    },
    // 每进入页面如果mobile存在重新获取token
    getToken() {
      let submit = {
        mobile: this.mobile
      };
      login(submit).then(res => {
        console.log(res);
        if (res.msg === "success") {
          this.token = res.data.token; // 赋值token
          Cookies.set("token", res.data.token); // 存token
        } else {
          this.$toast.fail(res.msg);
        }
      });
    },
    // 成功取消
    successcancel() {
      this.showSuccess = false;
      this.showSuccessRui = false;
    },
    // 领取优惠券
    getQuan() {
      getOther(this.type, this.token).then(res => {
        if (res.msg == "success") {
          Toast.success(res.data.info);
          this.$router.push({
            path: "/quanma"
          });
        } else {
          Toast.fail(res.msg);
        }
      });
    },
    // 领取优惠券 瑞恒
    getQuanRui() {
      getRui(this.token).then(res => {
        if (res.msg == "success") {
          Toast.success(res.data.info);
          this.$router.push({
            path: "/quanma"
          });
        } else {
          Toast.fail(res.msg);
        }
      });
    },
    huoqu() {
      window.location.href =
        "http://mp.weixin.qq.com/s?__biz=MzU1NDA2ODM1Mw==&mid=100006210&idx=1&sn=524be77c6c924ac81d209326a95c41dc&chksm=7be869ac4c9fe0ba9f03343cbbbf55b5f3e2b2a38cecf3787e8593ddc86ce9dfcba07c647202#rd";
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("./../assets/css/bootstrap.min.css");
* {
  margin: 0 auto;
  padding: 0;
}
[contenteditable="true"],
input,
textarea {
  -webkit-user-select: text !important;
  -khtml-user-select: text !important;
  -moz-user-select: text !important;
  -ms-user-select: text !important;
  -o-user-select: text !important;
  user-select: text !important;
}
.father:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.father {
  zoom: 1;
}
.fr {
  float: right;
}
a {
  text-decoration: none;
}
.home {
  width: 750px;
  height: 100%;
  background: url("./../assets/img/bg_big.jpg") no-repeat;
  background-size: 100%;
  background-color: #3d73ed;
  text-align: center;
  padding: 0 0 80px 0;
  // 顶部
  .logo {
    padding: 40px 20px 0 20px;
    position: relative;
    img {
      display: block;
      width: 120px;
      float: left;
    }
    .van-button {
      float: right;
      height: 60px;
      line-height: 40px;
      padding: 10px;
    }
    .rule {
      position: absolute;
      right: 20px;
      top: 30px;
      width: 40px;
      height: 120px;
      background: url(./../assets/img/rule1.png) no-repeat;
      background-size: 100%;
    }
  }
  // 头部标题
  .title {
    width: 60%;
    img {
      width: 100%;
      margin-top: -20px;
    }
  }
  .esim {
    display: block;
    width: 56%;
    margin-bottom: 50px;
  }
  // 品牌
  .brand {
    ul {
      width: 90%;
      margin: 0 auto;
      li {
        width: 23%;
        height: 220px;
        background: url("./../assets/img/prizebg.png") no-repeat;
        background-size: 100% 100%;
        float: left;
        margin: 0 auto;
        // padding: 5px;
        border-radius: 15px;
        img {
          width: 75px;
          height: 108px;
          margin-top: 20px;
        }
        p {
          color: #235bf5;
          margin: 5px auto;
          font-size: 20px;
          line-height: 1.5;
        }
        .wenwen {
          // width: 120px;
          font-size: 18px;
          line-height: 1;
        }
      }
    }
    .tishi {
      padding: 0 120px;
      margin-top: 30px;
      .img1 {
        width: 37px;
        float: left;
      }
      .img2 {
        width: 37px;
        float: right;
      }
      span {
        color: #fff;
        font-size: 26px;
        display: inline-block;
        line-height: 37px;
      }
    }
  }
  // 游戏
  .game {
    padding: 30px 90px 0;
    .game1 {
      background-image: url("./../assets/img/levelbg1.png");
      background-size: 560px 100%;
      background-repeat: no-repeat;
      .gametitle {
        display: inline-block;
        padding: 20px 40px;
        background-color: blueviolet;
        font-size: 28px;
        color: #fff;
        box-shadow: 0px 10px 10px #888888;
      }
      .center {
        padding: 30px 40px 20px;
        .centertitle {
          height: 100%;
          b {
            display: inline-block;
            width: 90px;
            height: 90px;
            line-height: 90px;
            font-size: 22px;
            border: 4px solid #fee34b;
            border-radius: 50%;
            float: left;
            color: #8e1ef9;
            font-weight: bold;
            background-color: #fff;
          }
          .xiangxiao {
            font-size: 32px;
            font-weight: bold;
            height: 40px;
            line-height: 40px;
            margin-bottom: 20px;
            margin-top: 20px;
          }
          span {
            display: inline-block;
            font-size: 30px;
            font-weight: bold;
            height: 80px;
            line-height: 40px;
            color: #fff;
            // margin-left: 60px;
            // margin-right: 60px;
            a {
              display: inline-block;
              text-align: left;
              width: 100%;
              font-size: 24px;
              color: #fff;
            }
          }
          .anniu {
            display: inline-block;
            padding: 10px 30px;
            font-size: 26px;
            font-weight: bold;
            background-color: #f6bc10;
            // box-shadow: 0px 10px 10px #888888;
            text-decoration: none;
            color: #7c42ff;
            border-radius: 30px;
            float: right;
          }
          .anniucopy {
            margin-top: 20px;
          }
        }
        .centerimg {
          margin-top: 20px;
          img {
            width: 100%;
            height: 147px;
          }
          p {
            font-size: 18px;
            margin-top: 20px;
            color: #fff;
          }
        }
      }
    }
  }
  .quanma {
    position: fixed;
    bottom: 0;
    // left: 25%;
    width: 100%;
    height: 80px;
    background-image: url("./../assets/img/button5.png");
    background-size: 100% 100%;
    p {
      height: 70px;
      line-height: 80px;
      font-size: 30px;
      color: #7c42ff;
    }
  }
  .tel {
    display: inline-block;
    width: 70px;
    img {
      width: 70px;
      position: fixed;
      right: 0;
      top: 50%;
    }
  }
  // 弹框
  .van-popup.vanpopup {
    width: 70%;
    height: 70%;
    border-radius: 20px;
    img {
      width: 116px;
      margin-top: 30px;
      margin-bottom: 30px;
      display: inherit;
    }
    .popup {
      text-align: left;
      padding: 0 30px 20px 30px;
      font-size: 24px;
      line-height: 1.5;
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
  }
  // 信息录入弹框
  .van-popup.information {
    width: 70%;
    text-align: center;
    padding: 40px 20px 60px;
    border-radius: 20px;
    .img1 {
      width: 50px;
      border-radius: 25px;
      float: right;
      margin-top: -40px;
      margin-right: -20px;
    }
    .imgh3 {
      width: 140px;
      margin-top: 30px;
    }
    .biao {
      .biaodan {
        position: relative;
        display: flex;
        margin-top: 30px;
        padding: 0 30px;
        .sub_img {
          position: absolute;
          left: 60px;
          top: 16px;
          width: 30px;
          height: 35px;
          z-index: 3;
        }

        input {
          width: 95%;
          height: 60px;
          border-radius: 6px;
          // margin-left: 10px;
          font-size: 30px;
          padding-left: 16.66%;
          border: 2px solid #ccc;
          position: relative;
        }
        .yan {
          position: absolute;
          right: 12%;
          // background-color: #33a8ff;
          color: #000;
          font-size: 24px;
          height: 62px;
          line-height: 62px;
          &:disabled {
            // background-color: #ccc;
          }
        }
      }
      .neirong {
        padding: 0 30px;
        margin-top: 30px;
        text-align: left;
        font-size: 20px;
        line-height: 1.8;
        color: #235bf5;
      }
    }
    .but {
      width: 280px;
      height: 80px;
      line-height: 70px;
      background-image: url("./../assets/img/button3.png");
      background-size: 100%;
      display: inline-block;
      font-size: 36px;
      color: #fff;
      margin-top: 30px;
    }
  }
  // 弹框成功
  .van-popup.success {
    background-color: transparent;
    width: 100%;
    // height: 50%;
    .successcenter {
      background-image: url("./../assets/img/bg_small.png");
      width: 520px;
      background-size: 100%;
      background-repeat: no-repeat;
      text-align: center;
      padding-top: 40px;
      // padding: 40px 0px 0px;
      height: 100%;
      margin-top: 100px;
      p {
        color: #fff;
        font-size: 60px;
        font-weight: bold;
        // margin-top: 40px;
      }
      .youhuiquan {
        width: 280px;
        height: 65px;
        display: inherit;
        background: url(./../assets/img/youhuiquan.png) no-repeat;
        background-size: 100%;
        margin-bottom: 20px;
        margin-top: 25px;
        position: relative;
        z-index: 999;
      }
      .huoqu1 {
        background-image: url("./../assets/img/huoqu.png");
        height: 64px;
        width: 400px;
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
        z-index: 999;
        img.shou {
          width: 60px;
          position: absolute;
          top: 40px;
          right: 0%;
        }
      }
      img.guang {
        width: 450px;
        position: absolute;
        top: -60px;
        left: 50%;
        margin-left: -225px;
        animation: rotation 6s linear infinite;
      }
      @-webkit-keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      .jieshao {
        text-align: left;
        padding-left: 30px;
        padding-right: 20px;
        margin-top: 20px;
        padding-bottom: 140px;
        img {
          width: 16px;
          display: inline-block;
        }
        .titlespan {
          display: inline-block;
          font-size: 26px;
          color: #fff;
          font-weight: bold;
          margin-left: 10px;
          margin-bottom: 10px;
          margin-top: 10px;
        }
        p {
          font-size: 24px;
          color: #fff;
          font-weight: 200;
          text-indent: -0.8em;
          margin-left: 0.8em;
        }
      }
      img.quxiao {
        width: 60px;
        position: absolute;
        bottom: 0;
        left: 45%;
        // margin-top: 80px;
      }
    }
  }
  // 弹框成功
  .van-popup.success1 {
    background-color: transparent;
    width: 100%;
    // height: 50%;
    .successcenter {
      background-image: url("./../assets/img/bg_gui.png");
      width: 520px;
      background-size: 100%;
      background-repeat: no-repeat;
      text-align: center;
      // padding: 40px 0px 150px;
      padding-top: 40px;
      height: 100%;
      margin-top: 100px;
      p {
        color: #fff;
        font-size: 60px;
        font-weight: bold;
        // margin-top: 40px;
      }
      .youhuiquan {
        width: 280px;
        height: 65px;
        display: inherit;
        background: url(./../assets/img/youhuiquan.png) no-repeat;
        background-size: 100%;
        margin-bottom: 20px;
        margin-top: 25px;
        position: relative;
        z-index: 999;
      }
      .youhuiquan1 {
        width: 280px;
        height: 65px;
        display: inherit;
        background: url(./../assets/img/youhuiquan1.png) no-repeat;
        background-size: 100%;
        margin-bottom: 20px;
        margin-top: 25px;
        position: relative;
        z-index: 999;
      }
      .huoqu1 {
        background-image: url("./../assets/img/huoqu.png");
        height: 64px;
        width: 400px;
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
        z-index: 999;
        img.shou {
          width: 60px;
          position: absolute;
          top: 40px;
          right: 0%;
        }
      }
      img.guang {
        width: 450px;
        position: absolute;
        top: -60px;
        left: 50%;
        margin-left: -225px;
        animation: rotation 6s linear infinite;
      }
      @-webkit-keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      .jieshao {
        text-align: left;
        padding-left: 30px;
        padding-right: 20px;
        margin-top: 20px;
        padding-bottom: 140px;
        img {
          width: 16px;
          display: inline-block;
        }
        .titlespan {
          display: inline-block;
          font-size: 26px;
          color: #fff;
          font-weight: bold;
          margin-left: 10px;
          margin-bottom: 10px;
          margin-top: 10px;
        }
        p {
          font-size: 24px;
          color: #fff;
          font-weight: 200;
          text-indent: -0.8em;
          margin-left: 0.8em;
        }
      }
      img.quxiao {
        width: 60px;
        position: absolute;
        bottom: 0;
        left: 45%;
        // margin-top: 80px;
      }
    }
  }
}
</style>
