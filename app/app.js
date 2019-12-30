import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import store from './store'
import App from "./components/App";
import Home from "./components/Home";
import DrawerContent from "./components/DrawerContent";

Vue.use(RadSideDrawer);

Vue.config.silent = (TNS_ENV === 'production');

new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(Home, { slot: 'mainContent' })
          ]
        )
      },
      store
  }).$start();
