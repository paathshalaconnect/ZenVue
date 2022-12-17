import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Sidebar from '../pages/Sidebar.vue'
import Page00_Hello_World from '../pages/00-Hello-World.vue'
import Page01_Data_Setup from '../pages/01-Data-Setup.vue'
import Page02_Binding_v_bind from '../pages/02-Binding-v-bind.vue'
import Page03Conditional_Rendering_v_if from '../pages/03-Conditional-Rendering-v-if.vue'
import Page04_List_Rendering_v_for from '../pages/04-List-Rendering-v-for.vue'
import Page05_Methods from '../pages/05-Methods.vue'
import Page06_Event_Handling_v_on from '../pages/06-Event-Handling-v-on.vue'
import Page07_Form_Handling from '../pages/07-Form-Handling.vue'
import Page08_Computed_Properties from '../pages/08-Computed-Properties.vue'
import Page09_Watchers from '../pages/09-Watchers.vue'
import Page10_Components_and_props from '../pages/10-Components-and-props.vue'
import Page11_Provide_and_Inject from '../pages/11-Provide-and-Inject.vue'
import Page12_Component_Events from '../pages/12-Component-Events.vue'
import Page13_Reflective_Two_Way_Data_v_model from '../pages/13-Reflective-Two-Way-Data-v-model.vue'
import Page14_Slots_and_Slotprops from '../pages/14-Slots-and-Slotprops.vue'
import Page15_Component_Styles from '../pages/15-Component-Styles.vue'
import Page16_Dynamic_Components_and_Keep_Alive from '../pages/16-Dynamic-Components-and-Keep-Alive.vue'
import Page17_Teleport_Component from '../pages/17-Teleport-Component.vue'
import Page18_HTTP_and_Components from '../pages/18-HTTP-and-Components.vue'
import Page19_Lifecycle_Hooks from '../pages/19-Lifecycle-Hooks.vue'
import Page20_Template_refs from '../pages/20-Template-refs.vue'
import Page21_Reusability_via_mixins_and_composables from '../pages/21-Reusability-via-mixins-and-composables.vue'
import Page22_Composition_API_Ref_Reactive_Tokens from '../pages/22-Composition-API-Ref-Reactive-Tokens.vue'
import Page23_Composition_API_Ref_Reactive_Methods from '../pages/23-Composition-API-Ref-Reactive-Methods.vue'
import Page24_Composition_API_Ref_Reactive_Computed_Properties from '../pages/24-Composition-API-Ref-Reactive-Computed-Properties.vue'
import Page25_Composition_API_Ref_Reactive_Watchers from '../pages/25-Composition-API-Ref-Reactive-Watchers.vue'
import Page26_Composition_API_Ref_Reactive_Template_Refs from '../pages/26-Composition-API-Ref-Reactive-Template-Refs.vue'
import Page27_Composition_API_Ref_Reactive_Lifecycle_Hooks from '../pages/27-Composition-API-Ref-Reactive-Lifecycle-Hooks.vue'
import Page28_Composition_API_Ref_Reactive_Template_Refs from '../pages/28-Composition-API-Ref-Reactive-Template-Refs.vue'
import Page29_Composition_API_Ref_Reactive_props from '../pages/29-Composition-API-Ref-Reactive-props.vue'
import Page30_Composition_API_Ref_Reactive_Custom_Events from '../pages/30-Composition-API-Ref-Reactive-Custom-Events.vue'
import Page31_Composition_API_Ref_Reactive_Reusability from '../pages/31-Composition-API-Ref-Reactive-Reusability.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About

        },
        {
            path: '/sidebar',
            name: 'Sidebar',
            component: Sidebar

        },
        {
            path: '/00-Hello-World',
            name: '00-Hello-World',
            component: Page00_Hello_World,

        },
        {
            path: '/01-Data-Setup',
            name: '01-Data-Setup',
            component: Page01_Data_Setup,

        },
        {
            path: '/02-Binding-v-bind',
            name: '02-Binding-v-bind',
            component: Page02_Binding_v_bind,

        },
        {
            path: '/03-Conditional-Rendering-v-if',
            name: '03-Conditional-Rendering-v-if',
            component: Page03Conditional_Rendering_v_if,

        },
        {
            path: '/04-List-Rendering-v-for',
            name: '04-List-Rendering-v-for',
            component: Page04_List_Rendering_v_for,

        },
        {
            path: '/05-Methods',
            name: '05-Methods',
            component: Page05_Methods,

        },
        {
            path: '/06-Event-Handling-v-on',
            name: '06-Event-Handling-v-on',
            component: Page06_Event_Handling_v_on,

        },
        {
            path: '/07-Form-Handling',
            name: '07-Form-Handling',
            component: Page07_Form_Handling,

        },
        {
            path: '/08-Computed-Properties',
            name: '08-Computed-Properties',
            component: Page08_Computed_Properties,

        },
        {
            path: '/09-Watchers',
            name: '09-Watchers',
            component: Page09_Watchers,

        },
        {
            path: '/10-Components-and-props',
            name: '10-Components-and-props',
            component: Page10_Components_and_props,

        },
        {
            path: '/11-Provide-and-Inject',
            name: '11-Provide-and-Inject',
            component: Page11_Provide_and_Inject,

        },
        {
            path: '/12-Component-Events',
            name: '12-Component-Events',
            component: Page12_Component_Events,

        },
        {
            path: '/13-Reflective-Two-Way-Data-v-model',
            name: '13-Reflective-Two-Way-Data-v-model',
            component: Page13_Reflective_Two_Way_Data_v_model,

        },
        {
            path: '/14-Slots-and-Slotprops',
            name: '14-Slots-and-Slotprops',
            component: Page14_Slots_and_Slotprops,

        },
        {
            path: '/15-Component-Styles',
            name: '15-Component-Styles',
            component: Page15_Component_Styles,

        },
        {
            path: '/16-Dynamic-Components-and-Keep-Alive',
            name: '16-Dynamic-Components-and-Keep-Alive',
            component: Page16_Dynamic_Components_and_Keep_Alive,

        },
        {
            path: '/17-Teleport-Component',
            name: '17-Teleport-Component',
            component: Page17_Teleport_Component,

        },
        {
            path: '/18-HTTP-and-Components',
            name: '18-HTTP-and-Components',
            component: Page18_HTTP_and_Components,

        },
        {
            path: '/19-Lifecycle-Hooks',
            name: '19-Lifecycle-Hooks',
            component: Page19_Lifecycle_Hooks,

        },
        {
            path: '/20-Template-refs',
            name: '20-Template-refs',
            component: Page20_Template_refs,

        },
        {
            path: '/21-Reusability-via-mixins-and-composables',
            name: '21-Reusability-via-mixins-and-composables',
            component: Page21_Reusability_via_mixins_and_composables,

        },
        {
            path: '/22-Composition-API-Ref-Reactive-Tokens',
            name: '22-Composition-API-Ref-Reactive-Tokens',
            component: Page22_Composition_API_Ref_Reactive_Tokens,

        },
        {
            path: '/23-Composition-API-Ref-Reactive-Methods',
            name: '23-Composition-API-Ref-Reactive-Methods',
            component: Page23_Composition_API_Ref_Reactive_Methods,

        },
        {
            path: '/24-Composition-API-Ref-Reactive-Computed-Properties',
            name: '24-Composition-API-Ref-Reactive-Computed-Properties',
            component: Page24_Composition_API_Ref_Reactive_Computed_Properties,

        },
        {
            path: '/25-Composition-API-Ref-Reactive-Watchers',
            name: '25-Composition-API-Ref-Reactive-Watchers',
            component: Page25_Composition_API_Ref_Reactive_Watchers,

        },
        {
            path: '/26-Composition-API-Ref-Reactive-Template-Refs',
            name: '26-Composition-API-Ref-Reactive-Template-Refs',
            component: Page26_Composition_API_Ref_Reactive_Template_Refs,

        },
        {
            path: '/27-Composition-API-Ref-Reactive-Lifecycle-Hooks',
            name: '27-Composition-API-Ref-Reactive-Lifecycle-Hooks',
            component: Page27_Composition_API_Ref_Reactive_Lifecycle_Hooks,

        },
        {
            path: '/28-Composition-API-Ref-Reactive-Template-Refs',
            name: '28-Composition-API-Ref-Reactive-Template-Refs',
            component: Page28_Composition_API_Ref_Reactive_Template_Refs,

        },
        {
            path: '/29-Composition-API-Ref-Reactive-props',
            name: '29-Composition-API-Ref-Reactive-props',
            component: Page29_Composition_API_Ref_Reactive_props,

        },
        {
            path: '/30-Composition-API-Ref-Reactive-Custom-Events',
            name: '30-Composition-API-Ref-Reactive-Custom-Events',
            component: Page30_Composition_API_Ref_Reactive_Custom_Events,

        },
        {
            path: '/31-Composition-API-Ref-Reactive-Reusability',
            name: '31-Composition-API-Ref-Reactive-Reusability',
            component: Page31_Composition_API_Ref_Reactive_Reusability,

        },
    ]
})

export default router