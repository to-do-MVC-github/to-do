$(document).ready(function ($) {
  var $issuesButton = $('button#issues');
  var issues = {
    fetchIssues: function() {
      var token = window.prompt('Give me your soul!!!');
      var baseURL = "https://api.github.com/issues"
      var params = "?access_token=" + token
      var url = baseURL + params
      $.getJSON(url, function(data) {
        console.log(data);
      });
    }
    // make new to-do items from each issue returned
  };
  $issuesButton.click(issues.fetchIssues);
});
