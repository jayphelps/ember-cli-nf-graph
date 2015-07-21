import Ember from 'ember';
import { dataGenerator } from '../services/data-generator';

var { Component, computed } = Ember;

export default Ember.Component.extend({

  graphData: computed(function() {
    return dataGenerator.simpleTimeSeries();
  })

});
