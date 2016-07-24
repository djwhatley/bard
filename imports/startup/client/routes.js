import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/layouts/app-body.js';
import '/imports/ui/views/app-home.js';
import '/imports/ui/components/navbar.js';

FlowRouter.route('/', {
    name: 'App.root',
    action() {
       BlazeLayout.render('App_body', { navbar: 'Core_navbar', main: 'App_home' }); 
    },
});