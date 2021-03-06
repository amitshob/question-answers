import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save1() {
      var params = {
        questionContent: this.get('questionContent'),
        author: this.get('author'),

      };
      this.set('addNewQuestion', false),
      this.sendAction('save2', params);
    }
  }

});
