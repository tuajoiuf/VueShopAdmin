import Vue from 'vue'


import {
  Button, Form, FormItem, Input, Message, Container,
  Header, Main, Footer, Aside, Submenu, MenuItemGroup, MenuItem, Menu,
  Breadcrumb,BreadcrumbItem,Card,Row,Col,Table,TableColumn,Switch,Tooltip,
  Pagination,Dialog, MessageBox, Tag, Tree, Select, Option,Steps,Step,Alert,Tabs,
    TabPane,Cascader, CheckboxGroup, Checkbox, Upload
} from 'element-ui'

import Timeline from '../plugins/timeline'
import TimelineItem from '../plugins/timeline-item'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Cascader)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Upload)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm