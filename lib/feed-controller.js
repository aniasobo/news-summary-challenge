"use strict";

;(function(exports) {
  function NewsFeed(appElement, feed) {
    this._appElement = appElement;
    this._feed = feed;
  }

  NewsFeed.prototype = {

    _renderHTML: function(html) {
      this._appElement.innerHTML = html;
    },

    _renderNewsItem: function() {
      return [
        "<span class='newsItem'>",
          this._feed.fullFeed(),
        "</span>",
      ].join("");
    },

    _renderAll: function() {
      return this._renderHTML(this._renderNewsItem())
    }
  }
  this._renderAll();

  exports.NewsFeed = NewsFeed;
})(this);