<template>
  <div class="container">
    <div class="header-menu">
      <div class="justify-start">
        <div>
          <img class="logo" src="@/assets/images/logo.png"/>
          <span class="company-name">蜂鸟智煤</span>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#04214f"
                 text-color="#ffffff" active-text-color="#ffffff">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">关于我们</el-menu-item>
          <el-menu-item index="3">产品服务</el-menu-item>
          <el-menu-item index="4">应用案例</el-menu-item>
          <el-menu-item index="5">加入我们</el-menu-item>
        </el-menu>
      </div>
      <div style="margin-right: 100px">
        <img class="phone" src="../assets/images/phone.png"/>
        <a href="tel:(0536)-8869111" class="font-size-20 color-fff">咨询热线：(0536)-8869111</a>
      </div>
    </div>
    <div class="banner-container">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
            v-for="(item,index) in bannerList"
            :key="index">
          <!--          :style="{backgroundImage: 'url('+item.imageUrl+')',backgroundSize:'100%',backgroundRepeat:'no-repeat'}"-->
          <!--          <transition name="fade">-->
          <img class="bg-image" :src="item.imageUrl"/>
          <!--          </transition>-->
          <div class="text-content">
            <div class="box">
              <div class="explain">{{item.explain}}</div>
              <div class="title">{{item.title}}</div>
              <div class="dec-title">{{item.decTitle}}</div>
              <div class="dec">{{item.dec}}</div>
            </div>
            <img @click="handleClickNext" class="push" src="@/assets/images/push.png"/>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="head-block">
      <h1>蜂鸟智碳</h1>
      <div class="org-line"></div>
      <div class="dec-text">这里是文案区域 这里是文案区域 这里是文案区域</div>
    </div>
    <div class="block-1">
      <div class="item" v-for="(item,index) in blockList" :key="index" @mouseenter="item.state = 0"
           @mouseleave="item.state = 1"
           :style="{backgroundImage: 'url('+item.imageUrl+')',backgroundSize:'100%',backgroundRepeat: 'none'}">
        <!--        <div >-->
        <div class="default" v-if="item.state">
          <img class="icon" :src="item.icon">
          <div class="name">{{item.name}}</div>
        </div>
        <transition name="fade">
          <div class="active" v-if="!item.state">
            <div class="name">{{item.name}}</div>
            <div class="dec-title">{{item.decTitle}}</div>
            <div class="dec">{{item.dec}}</div>
          </div>
        </transition>
        <!--        </div>-->
      </div>
    </div>
    <div class="head-block">
      <h1>核心功能</h1>
      <div class="org-line"></div>
      <div class="dec-text">这里是文案区域 这里是文案区域 这里是文案区域</div>
    </div>

    <div class="tabs">
      <div class="item" :class="activeName == '1'?'active':''">企业能效管理</div>
      <div class="item" :class="activeName == '2'?'active':''">企业碳资产管理</div>
    </div>
    <div class="tab-box">
      <div class="dec-title">管理能源投入产出比，找到节能空间，对症下药，全方位提升能源利用率，达到节能减排的目的</div>
      <div class="block">
        <div class="item">
          <div class="head">
            <img class="icon" src="@/assets/images/core1.png">
            <span class="dec-title">识别机会</span>
          </div>
          <div class="dec">
            实时了解能源转换和利用情况、能源质量情况
            ，综合分析能源利用效率，识别潜在的能源利
            用改进机会
          </div>
        </div>
        <div class="item">
          <div class="head">
            <img class="icon" src="@/assets/images/core1.png">
            <span class="dec-title">挖掘潜能</span>
          </div>
          <div class="dec">
            通过对功能设备的运行分析，帮助企业掌握供
            能质量及设备运行状态，为指导用能优化和节
            能方案提供依据
          </div>
        </div>
        <div class="item">
          <div class="head">
            <img class="icon" src="@/assets/images/core1.png">
            <span class="dec-title">量化支持</span>
          </div>
          <div class="dec">
            监控分析高耗能设备和耗能时段，为节能方案
            制定提供量化支持
          </div>
        </div>
      </div>
      <ul class="breadcrumb">
        <li>能效概览</li>
        <li><img src="@/assets/images/arrow.png"/></li>
        <li>能效分析</li>
        <li><img src="@/assets/images/arrow.png"/></li>
        <li>能效评估</li>
        <li><img src="@/assets/images/arrow.png"/></li>
        <li>能效提升</li>
        <li><img src="@/assets/images/arrow.png"/></li>
        <li>管理服务</li>
      </ul>
      <ul class="breadcrumb-info">
        <li style="width: 23%">
          <div>企业双控指标</div>
          <div>多能全景监测</div>
          <div>企业能流图</div>
          <div>能效预警</div>
        </li>

        <li style="width: 21%">
          <div>负荷分析</div>
          <div>电能质量分析</div>
          <div>环比/同比分析</div>
          <div>用能行为分析</div>
        </li>

        <li style="width: 23%">
          <div>设备能效对标</div>
          <div>工序能效对标</div>
          <div>产线能效对标</div>
          <div>行业能效对标</div>
        </li>

        <li style="width: 21%">
          <div>设备节能</div>
          <div>系统节能</div>
          <div>管理节能</div>
          <div>工艺节能</div>
        </li>

        <li>
          <div>绿色企业认定</div>
          <div>节能补贴管理</div>
          <div>节能政策</div>
          <div>节能案例</div>
        </li>
      </ul>
    </div>

    <div class="application-case">
      <swiper ref="applicationCaseSwiper" :options="applicationCaseSwiperOptions">
        <swiper-slide
            v-for="(item,index) in applicationCaseList"
            :key="index">
          <img class="bg-image" :src="item.imageUrl"/>
          <!--          </transition>-->
          <div class="text-content">
            <h1>应用案例</h1>
            <div class="application-case-tabs">
              <div class="item" v-for="(itema,indexa) in applicationCaseTabs" :key="indexa"
                   :class="applicationCaseTabsActiveIndex == indexa ? 'active' : ''"
                   @click="handleClickApplicationCaseSlideTo(indexa)">
                {{itema.name}}
              </div>
            </div>
            <div class="box">
              <div class="explain">{{item.explain}}</div>
              <div class="title">{{item.title}}</div>
            </div>
            <div class="serve-clients-box">
              <div class="serve-clients-title">服务客户</div>
              <div class="serve-clients-list">
                <div class="item" v-for="item in 3" :key="item"></div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="core-advantage">
      <div class="head-block">
        <h1>核心优势</h1>
        <div class="org-line"></div>
        <div class="dec-text">这里是文案区域 这里是文案区域 这里是文案区域</div>
      </div>
      <div class="block-list">
        <div class="item">
          <div class="num">11+</div>
          <div class="font-size-22">
            多<br>
            丰富的项目安利，涉及11个行业
          </div>
        </div>
        <div class="item">
          <div class="num">15</div>
          <div class="font-size-22">
            快<br>
            标准化部署，15天快速交付
          </div>
        </div>
        <div class="item">
          <div class="num">17</div>
          <div class="font-size-22">
            好<br>
            历经17年市场检验，好用、易用
          </div>
        </div>
        <div class="item">
          <div class="num">17%</div>
          <div class="font-size-22">
            省<br>
            节省7%，云部署，低投入，高性价比
          </div>
        </div>
      </div>

      <div class="map-point" v-for="(item,index) in cityList" :key="index" :class="'point-'+index">
        <img src="@/assets/images/mappoint.png"/>
        <div class="map-city">{{item.name}}</div>
      </div>
    </div>

    <div class="footer">
      <div class="company-info">
        <div>
          <img class="logo" src="@/assets/images/logo.png"/>
          <span class="company-name">蜂鸟智煤</span>
        </div>
        <ul class="footer-menu">
          <li>首页</li>
          <li>关于我们</li>
          <li>产品服务</li>
          <li>应用案例</li>
          <li>加入我们</li>
        </ul>
        <div class="info">
          <img class="icon" src="@/assets/images/address.png"/>
          <span class="text">地址：山东省青岛市崂山区株洲路168号 1801室</span>
        </div>
        <div class="info">
          <img class="icon" src="@/assets/images/callme.png"/>
          <a href="tel:(0536)-8869111" class="text cursor-pointer">电话：(0536)-8869111</a>
        </div>
      </div>
      <div class="qr-code">
        <img src="@/assets/images/qr-code.png"/>
        <div class="text">关注了解更多资讯</div>
      </div>
    </div>
    <div class="archival-information">
      <a href="#" target="_blank">
        Copyright © 2022 鲁ICP备2022002673号-1 鲁ICP备2022002673号-2
      </a>
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37021202001302"
         style="display:inline-block;">
        <img src="@/assets/images/govbeian.png" align="absmiddle"/>
        鲁公网安备37021202001302号
      </a>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'Home',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        activeIndex: '1',
        activeName: '1',
        swiperOptions: {
          effect: 'fade',
          fadeEffect: {
            crossFade: false,
          }
        },
        bannerList: [
          {
            imageUrl: require('@/assets/images/bg.png'),
            explain: '青岛蜂鸟智碳信息技术有限公司',
            title: '蜂鸟能源双碳管理云平台',
            decTitle: '企业能源管理 碳管理专家',
            dec: '帮助用能企业实时掌握能源指标、碳排放指标，一键完成数据报送，实现能效提升、低碳发展'
          },
          {
            imageUrl: require('@/assets/images/bg.png'),
            explain: '青岛蜂鸟智碳信息技术有限公司',
            title: '蜂鸟能源双碳管理云平台2',
            decTitle: '企业能源管理 碳管理专家',
            dec: '帮助用能企业实时掌握能源指标、碳排放指标，一键完成数据报送，实现能效提升、低碳发展'
          }
        ],
        blockList: [
          {
            imageUrl: require('@/assets/images/pic1.png'),
            name: '能源消耗',
            icon: require('@/assets/images/icon1.png'),
            decTitle: '实时掌控',
            dec: '这里是实时掌控的简单描述这里是实时掌控的简单描述',
            state: 1
          },
          {
            imageUrl: require('@/assets/images/pic2.png'),
            name: '能源分析',
            icon: require('@/assets/images/icon2.png'),
            decTitle: '实时掌控',
            dec: '这里是实时掌控的简单描述这里是实时掌控的简单描述',
            state: 1
          },
          {
            imageUrl: require('@/assets/images/pic3.png'),
            name: '能源管理',
            icon: require('@/assets/images/icon3.png'),
            decTitle: '实时掌控',
            dec: '这里是实时掌控的简单描述这里是实时掌控的简单描述',
            state: 1
          },
          {
            imageUrl: require('@/assets/images/pic4.png'),
            name: '能源决策',
            icon: require('@/assets/images/icon4.png'),
            decTitle: '实时掌控',
            dec: '这里是实时掌控的简单描述这里是实时掌控的简单描述',
            state: 1
          }
        ],
        applicationCaseSwiperOptions: {
          effect: 'fade',
          fadeEffect: {
            crossFade: false,
          }
        },
        applicationCaseList: [
          {
            imageUrl: require('@/assets/images/bg.png'),
            explain: '这里是文案部分的标题',
            title: '这里是文案部分这里是文案部分这里是文案部分这里是文案部分这里是文案部分这里是文案部分\n' +
              '这里是文案部分这里是文案部分',
          },
          {
            imageUrl: require('@/assets/images/bg.png'),
            explain: '这里是文案部分的标题2',
            title: '这里是文案部分2这里是文案部分这里是文案部分这里是文案部分这里是文案部分这里是文案部分\n' +
              '这里是文案部分这里是文案部分',
          },
          {
            imageUrl: require('@/assets/images/bg.png'),
            explain: '这里是文案部分的标题3',
            title: '这里是文案部分3这里是文案部分这里是文案部分这里是文案部分这里是文案部分这里是文案部分\n' +
              '这里是文案部分这里是文案部分',
          }
        ],
        applicationCaseTabsActiveIndex: 0,
        applicationCaseTabs: [
          {name: '制造'},
          {name: '政府及公共事业'},
          {name: '医疗与教育'},
          {name: '能源'},
          {name: '娱乐游戏'},
          {name: '娱乐游戏'},
          {name: '娱乐游戏'},
        ],
        cityList: [
          {name: '北京', class: ''},
          {name: '大连', class: ''},
          {name: '潍坊', class: ''},
          {name: '青岛', class: ''},
          {name: '杭州', class: ''},
          {name: '上海', class: ''},
          {name: '广州', class: ''},
          {name: '成都', class: ''},
        ]
      };
    },
    methods: {
      handleClickNext() {
        this.$nextTick(() => {
          // console.log(this.$refs.mySwiper.swiper.activeIndex)

          if (this.$refs.mySwiper.swiper.activeIndex == (this.bannerList.length - 1))
            this.$refs.mySwiper.swiper.slideTo(0);
          else
            this.$refs.mySwiper.swiper.slideNext();
        })
      },
      handleClickApplicationCaseSlideTo(index) {
        this.$nextTick(() => {
          this.applicationCaseTabsActiveIndex = index
          this.$refs.applicationCaseSwiper.swiper.slideTo(index);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    width: 47px;
    height: 47px;
    vertical-align: middle;
    margin-left: 159px;
    margin-right: 11px;
  }

  .company-name {
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 500;
    margin-right: 60px;
  }

  .header-menu {
    height: 94px;
    line-height: 94px;
    background: #04214f;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    .phone {
      width: 30px;
      height: 30px;
      vertical-align: middle;
      margin-right: 13px;
    }

    ::v-deep .el-menu.el-menu--horizontal {
      border: none;
    }

    ::v-deep .el-menu-item {
      height: 91px;
      line-height: 91px;
      margin: 0 32px;
      border-bottom: 3px;
      font-size: 16px;
    }

    ::v-deep .el-menu-item.is-active {
      border-bottom: 3px solid #ffffff !important;
    }
  }

  .banner-container {
    width: 100%;
    height: 908px;

    .swiper-container {
      height: 100%;
      text-align: center;
      color: #ffffff;
      position: relative;

      .swiper-slide {
        .bg-image {
          width: 100%;
          height: auto;
          min-height: 100%;
          transition: 1s linear;
          transform: scale(1.1, 1.1);
        }

        .text-content .box * {
          transition-duration: 2s;
          transform: translate3d(0, 80px, 0);
          opacity: 0;
        }
      }

      .swiper-slide-active, .swiper-slide-duplicate-active {

        .bg-image {
          transition: 2s linear;
          transform: scale(1, 1);
        }

        .text-content .box * {
          transform: translate3d(0,-10px, 0);
          opacity: 1;
        }

        .title {
          transition-delay: .7s
        }

        .explain {
          transition-delay: .3s
        }
      }

      .push {
        position: absolute;
        width: 85px;
        bottom: 112px;
      }

      .text-content {
        position: absolute;
        top: 0;
        z-index: 1;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;

        /*margin-bottom: 368px;*/
        .box {
          margin-top: 20%;

          .explain {
            font-size: 30px;
            color: #FFFFFF;
            font-weight: 600;
            margin-bottom: 9px;
          }

          .title {
            font-size: 52px;
            color: #FFFFFF;
            text-align: center;
            font-weight: 600;
            margin-bottom: 38px;
          }

          .dec-title {
            font-size: 22px;
            color: #FFFFFF;
            text-align: center;
            line-height: 48px;
            font-weight: 500;
            opacity: 0.7;
            margin-bottom: 4px;
          }

          .dec {
            font-size: 18px;
            color: #FFFFFF;
            text-align: center;
            line-height: 24px;
            font-weight: 400;
            opacity: 0.7;
            max-width: 738px;
            margin: auto;
          }
        }

      }
    }
  }

  .head-block {
    text-align: center;
    margin: 52px 0 73px 0;

    .org-line {
      width: 65px;
      height: 5px;
      background: #F58332;
      border-radius: 2px;
      margin: auto;
      margin-bottom: 26px;
    }

    .dec-text {
      opacity: 0.8;
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: #1F2433;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
    }
  }

  .block-1 {
    margin: 20px 141px 0 141px;
    display: flex;
    justify-content: space-between;

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
      opacity: 0;
    }

    /*padding: 0;*/
    /*display: block;*/
    /*list-style-type: disc;*/

    .item {
      /*list-style-type: none;*/
      /*display: inline-flex;*/
      width: 390px;
      height: 431px;
      text-align: center;
      /*margin-right: 26px;*/
    }

    /*li:last-child {*/
    /*  margin-right: 0 !important;*/
    /*}*/

    .default {
      width: 100%;
      height: 100%;
      /*  padding-top: 40%;*/
      /*  box-sizing: border-box;*/

      .icon {
        width: 52px;
        height: 52px;
        margin-bottom: 5px;
        padding-top: 40%;
      }

      .name {
        font-family: PingFangSC-Semibold;
        font-size: 30px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        font-weight: 600;
      }

    }

    .active {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      /*  padding-top: 20%;*/
      /*  box-sizing: border-box;*/
      .name {
        font-family: PingFangSC-Semibold;
        font-size: 30px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        font-weight: 600;
        padding-top: 20%;
      }

      .dec-title {
        font-size: 24px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        font-weight: 500;
        padding-top: 58px;
        box-sizing: border-box;
      }

      .dec {
        max-width: 288px;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 28px;
        font-weight: 400;
        padding-top: 23px;
        box-sizing: border-box;
        margin: auto;
      }

    }
  }

  .tabs {
    margin: 0 141px;
    display: flex;
    justify-content: center;

    .item {
      width: 818px;
      height: 50px;
      font-family: PingFangSC-Medium;
      font-size: 36px;
      color: #1F2433;
      letter-spacing: 0;
      text-align: center;
      font-weight: 500;
    }

    .active {
      border-bottom: 2px solid #F58332;
    }
  }

  .tab-box {
    width: 100%;
    min-height: 926px;
    background-image: linear-gradient(145deg, #F6FBFC 0%, #E1E4E8 100%);
    padding: 96px 143px 63px 139px;
    box-sizing: border-box;

    .dec-title {
      font-family: PingFangSC-Regular;
      font-size: 30px;
      color: #000000;
      letter-spacing: 0;
      margin-bottom: 62px;
    }

    .block {
      height: 295px;
      background: #FFFFFF;
      padding: 53px 58px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;

      .item {
        .head {
          margin-bottom: 36px;

          .icon {
            width: 37px;
            height: 39px;
            vertical-align: middle;
            margin-right: 22px;
          }

          .dec-title {
            font-family: PingFangSC-Medium;
            font-size: 32px;
            color: #1F2433;
            letter-spacing: 0;
            font-weight: 500;
          }
        }

        .dec {
          width: 440px;
          font-family: PingFangSC-Regular;
          font-size: 22px;
          color: #1F2433;
          letter-spacing: 0;
          line-height: 34px;
          font-weight: 400;
        }
      }
    }

    .breadcrumb {
      height: 94px;
      line-height: 94px;
      background: #FFFFFF;
      display: flex;
      justify-content: space-between;
      padding: 0 50px;

      /*li:nth-child(2n) {*/
      /*  width: auto;*/
      /*}*/

      li {
        list-style-type: none;
        display: inline-flex;
        font-family: PingFangSC-Medium;
        font-size: 32px;
        color: #1F2433;
        letter-spacing: 0;
        font-weight: 500;

        img {
          width: 12px;
          height: 24px;
          opacity: 0.5;
          margin: auto;
        }
      }
    }

    .breadcrumb-info {
      display: flex;
      justify-content: flex-start;
      padding-left: 50px;

      li {
        /*width: 260px;*/
        list-style-type: none;
        text-align: left;
        opacity: 0.7;
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: #1F2433;
        letter-spacing: 0;
        font-weight: 400;
        line-height: 50px;
        /*padding-right: 194px*/
      }

      li:last-child {
        padding: 0;
      }
    }
  }

  .application-case {
    width: 100%;
    height: 888px;

    .swiper-container {
      height: 100%;
      text-align: center;
      color: #ffffff;
      position: relative;

      .swiper-slide {
        .text-content .box * {
          transition-duration: .7s;
          transform: translate3d(0, 80px, 0);
          opacity: 0;
        }
      }

      .swiper-slide-active, .swiper-slide-duplicate-active {

        .text-content .box * {
          transform: translate3d(0, 0px, 0);
          opacity: 1;
        }

        .title {
          transition-delay: .2s
        }

        .explain {
          transition-delay: .1s
        }
      }

      .text-content {
        position: absolute;
        top: 0;
        z-index: 1;
        bottom: 0;
        left: 0;
        right: 0;
        width: calc(100% - 276px);
        height: 100%;
        margin: auto;

        .application-case-tabs {
          height: 60px;
          line-height: 60px;
          display: flex;
          justify-content: space-around;
          border-bottom: 1px solid rgba(255, 255, 255, 1);
          margin-top: 60px;

          .item {
            width: auto;
            font-size: 22px;
            color: #FFFFFF;
            cursor: pointer
          }

          .active {
            color: #F58332 !important;
            position: relative;
            margin-bottom: -1px;
          }

          .item::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            width: 0;
            height: 5px;
            background-color: #F58332;
            margin: auto;
            -webkit-transition: .2s;
            transition: .2s;
            border-radius: 2px;
          }

          .item.active::after {
            width: 100%;
          }
        }

        .box {
          text-align: left;

          .explain {
            font-family: PingFangSC-Semibold;
            font-size: 32px;
            color: #FFFFFF;
            letter-spacing: 0;
            font-weight: 600;
            margin-top: 107px;
          }

          .title {
            max-width: 840px;;
            font-size: 20px;
            color: #FFFFFF;
            letter-spacing: 0;
            font-weight: 400;
            margin-top: 23px;
          }
        }

        .serve-clients-box {
          position: absolute;
          bottom: 103px;
          text-align: left;

          .serve-clients-title {
            font-size: 32px;
            color: #FFFFFF;
            letter-spacing: 0;
            font-weight: 600;
            margin-top: 121px;
          }

          .serve-clients-list {
            display: flex;
            justify-content: flex-start;
            margin-top: 48px;

            .item {
              width: 256px;
              height: 101px;
              background: rgba(255, 255, 255, 0.20);
            }
          }
        }
      }
    }

  }

  .core-advantage {
    width: 100%;
    height: 888px;
    background-image: url(../assets/images/map.png);
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    box-sizing: border-box;

    .block-list {
      margin-left: 137px;
      padding-top: 50px;
      width: calc(430px * 2);
      display: flex;
      flex-flow: row wrap;

      .item {
        width: 425px;

        .num {
          font-size: 72px;
          color: #1F2433;
          letter-spacing: 0;
          font-weight: 400;
          margin-bottom: 13px;
        }

        padding-bottom: 57px;
      }
    }

    .map-point {
      display: flex;
      position: absolute;

      img {
        width: 31px;
        height: 47px;
        vertical-align: bottom;
      }

      .map-city {
        width: 70px;
        height: 31px;
        background: #FFFFFF;
        box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
        border-radius: 2px;
        margin-left: 18px;
        font-size: 22px;
        color: #1F2433;
        letter-spacing: 0;
        font-weight: 400;
        text-align: center;
      }
    }

    .point-0 {
      right: 270px;
      top: 380px;
    }

    .point-1 {
      right: 170px;
      top: 400px;
    }

    .point-2 {
      right: 230px;
      top: 460px;
    }

    .point-3 {
      right: 200px;
      top: 480px;
    }

    .point-4 {
      right: 190px;
      top: 600px;
    }

    .point-5 {
      right: 170px;
      top: 590px;
    }

    .point-6 {
      right: 320px;
      top: 750px;
    }

    .point-7 {
      right: 500px;
      top: 590px;
    }
  }

  .footer {
    width: 100%;
    height: 378px;
    background: #474747;
    border-radius: 1px;
    padding: 42px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .footer-menu {
      display: flex;
      justify-content: flex-start;
      margin-left: 159px;
      padding: 53px 0 19px 0;

      li {
        list-style-type: none;
        padding: 0 28px;
        border-right: 1px solid rgba(151, 151, 151, 1);
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        font-weight: 400;
      }

      li:first-child {
        padding-left: 0;
      }

      li:last-child {
        border: none;
      }
    }

    .info {
      margin: 22px 0 22px 159px;

      .icon {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-right: 10px;
      }

      .text {
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        font-weight: 400;
      }
    }

    .qr-code {
      margin: 50px 150px 0 0;

      img {
        width: 140px;
        height: 142px;
      }

      .text {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        font-weight: 400;
        margin-top: 10px;
      }
    }
  }

  .archival-information {
    height: 60px;
    line-height: 60px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
    text-align: center;
    background: #474747;
    border-top: 2px solid rgba(151, 151, 151, 0.29);

    img {
      width: 18px;
      height: 18px;
    }
  }
</style>
