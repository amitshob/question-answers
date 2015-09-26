import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findall('question');
  },
  actions: {
    destroyQuestion(Question) {
      rental.destroyRecord();
      this.transitionTo('index');
    },
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
  }
});
