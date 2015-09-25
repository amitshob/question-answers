import DS from 'ember-data';

export default DS.Model.extend({
    questionContent: DS.attr(),
    author: DS.attr(),
});
