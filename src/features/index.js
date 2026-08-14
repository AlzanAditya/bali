import * as header from './header';
import * as mobile_menu from './mobile-menu';
import * as booking from './booking';
import * as home_animations from './home-animations';
import * as filters from './filters';
import * as content_animations from './content-animations';
import * as detail_interactions from './detail-interactions';
import * as transport_interactions from './transport-interactions';

export function initSiteFeatures() {
  header.init();
  mobile_menu.init();
  booking.init();
  home_animations.init();
  filters.init();
  content_animations.init();
  detail_interactions.init();
  transport_interactions.init();
}
