import Vue from 'vue';
import App from './App';
import { router } from './router';
import { Tabbar, TabbarItem,Form,Button,Field,NavBar,Picker,Popup,Pagination } from 'vant';
import { Image as VanImage } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Grid, GridItem ,Calendar} from 'vant';
import { Sidebar, SidebarItem,ActionSheet,Overlay,Loading ,Notify,Tag} from 'vant';

Vue.use(Loading);Vue.use(Overlay);Vue.use(Calendar);Vue.use(Pagination);Vue.use(VanImage);
Vue.use(Popup);Vue.use(Tabbar);Vue.use(TabbarItem);Vue.use(Button);Vue.use(NavBar);
Vue.use(Form);Vue.use(Field);Vue.use(Picker);Vue.use(Cell);Vue.use(CellGroup);Vue.use(Grid);
Vue.use(GridItem);Vue.use(Sidebar);Vue.use(SidebarItem);Vue.use(ActionSheet);Vue.use(Notify);
Vue.use(Tag);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

