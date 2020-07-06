/* eslint-disable */
/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from 'vue'
import vueScroll from 'vuescroll'
import {
  ConfigProvider,
  Layout,
  Input,
  InputNumber,
  Button,
  Switch,
  Radio,
  Checkbox,
  Select,
  Card,
  Form,
  Row,
  Col,
  Modal,
  Table,
  Tabs,
  Icon,
  Badge,
  Popover,
  Dropdown,
  List,
  Avatar,
  Breadcrumb,
  Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  Alert,
  Tag,
  Divider,
  DatePicker,
  TimePicker,
  Upload,
  Progress,
  Skeleton,
  Popconfirm,
  message,
  notification,
  Collapse,
  Cascader,
  Timeline,
  FormModel
} from 'ant-design-vue'
// import VueCropper from 'vue-cropper'

Vue.use(vueScroll)
Vue.prototype.$vuescrollConfig = {
  vuescroll: {
    mode: 'native',//选择一个模式, native 或者 slide(pc&app)
    sizeStrategy: 'number ',//如果父容器不是固定高度，请设置为 number , 否则保持默认的percent即可
    detectResize: true//是否检测内容尺寸发生变化
  },
  scrollPanel: {
    initialScrollY: false,//只要组件mounted之后自动滚动的距离。 例如 100 or 10%
    initialScrollX: false,
    scrollingX: false,//是否启用 x 或者 y 方向上的滚动
    scrollingY: true,
    speed: 300,//多长时间内完成一次滚动。 数值越小滚动的速度越快
    easing: undefined,//滚动动画 参数通animation
    verticalNativeBarPos: 'right'//原生滚动条的位置
  },
  rail: {//轨道
    background: '#c3c3c3',//轨道的背景色
    opacity: 0,
    size: '6px',
    specifyBorderRadius: false,//是否指定轨道的 borderRadius， 如果不那么将会自动设置
    gutterOfEnds: null,
    gutterOfSide: '0px',//轨道距 x 和 y 轴两端的距离
    keepShow: false //是否即使 bar 不存在的情况下也保持显示
  },
  bar: {
    showDelay: 500,//在鼠标离开容器后多长时间隐藏滚动条
    onlyShowBarOnScroll: false,//当页面滚动时显示
    keepShow: false,//是否一直显示
    background: '#c3c3c3',
    opacity: 1,
    hoverStyle: false,
    specifyBorderRadius: false,
    minSize: false,
    size: '6px',
    disable: false//是否禁用滚动条
  },// 在这里设置全局默认配置
  name: 'vuescroll' // 在这里自定义组件名字，默认是vueScroll
}
Vue.use(ConfigProvider)
Vue.use(Layout)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Card)
Vue.use(Form)
Vue.use(Row)
Vue.use(Col)
Vue.use(Modal)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Badge)
Vue.use(Popover)
Vue.use(Dropdown)
Vue.use(List)
Vue.use(Avatar)
Vue.use(Breadcrumb)
Vue.use(Steps)
Vue.use(Spin)
Vue.use(Menu)
Vue.use(Drawer)
Vue.use(Tooltip)
Vue.use(Alert)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Skeleton)
Vue.use(Popconfirm)
// Vue.use(VueCropper)
Vue.use(notification)
Vue.use(Collapse)
Vue.use(Cascader)
Vue.use(Timeline)
Vue.use(FormModel)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning