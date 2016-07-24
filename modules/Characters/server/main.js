import { Meteor } from 'meteor/meteor';
import { Modules } from '/imports/api/modules.js';

const MODULE_NAME = 'Characters';

if (Modules.find({ name: MODULE_NAME }).count() == 0)
    Modules.insert({
        name: MODULE_NAME,
        baseRoute: '/characters',
        mainView: 'Characters_main'
    });

