import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Modules = new Mongo.Collection('Modules');

Meteor.methods({
    'Modules.register'(config) {
    },
});
 
if (Meteor.isServer) {
    Meteor.publish('Modules', function () {
        return Modules.find({});
    });
}
