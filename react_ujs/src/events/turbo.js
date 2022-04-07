module.exports = {
  setup: function(ujs) {
    ujs.handleEvent('turbo:load', ujs.handleMount);
    ujs.handleEvent('turbo:before-render', ujs.handleUnmount);
  },

  teardown: function(ujs) {
    ujs.removeEvent('turbo:load', ujs.handleMount);
    ujs.removeEvent('turbo:before-render', ujs.handleUnmount);
  },
}
