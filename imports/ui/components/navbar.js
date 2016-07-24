import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Modules } from '/imports/api/modules.js';
import './navbar.html';

Template.Core_navbar.onCreated(function () {
    Meteor.subscribe('Modules');
});

Template.Core_navbar.helpers({
    menuItems: function () {
        var asdf = [ { text: 'Asdf', href: '#', activeClass: 'active' } ];
        var mods = Modules.find({});
        mods.forEach(function (mod) {
            asdf.push({
                text: mod.name,
                href: mod.baseRoute,
                activeClass: ''
            });
        });
        return asdf;
    }
});