import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item-body.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import 'web-animations-js/web-animations-next.min.js';
import '@polymer/neon-animation/neon-animatable.js';
import '@polymer/neon-animation/neon-animated-pages.js';
import '@polymer/neon-animation/animations/fade-in-animation.js';
import '@polymer/neon-animation/animations/fade-out-animation.js';


import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import css from './main-page.css';
import template from './main-page.pug';


/**
 * Entry point for application UI.
 */

import utilitiesMixin from './utilities-mixin.js';

/**
 * Entry point for application UI.
 */
export class MainPage extends utilitiesMixin(PolymerElement) {
    static get template() {
        // const vars = {logo};
        return html([
            // `<h1>Hello World</h1>${template()}`]
            `<style>${css.toString()}</style>${template()}`]
        );
    }
    static get properties() {
        return {};
    }
}
window.customElements.define('main-page', MainPage);
