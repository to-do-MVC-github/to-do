$(document).ready(function ($) {
  var $issuesButton = $('button#issues');
  var issues = {
    fetchIssues: function() {
      var token = window.prompt('Give me your soul!!!');
      var baseURL = "https://api.github.com/issues";
      var params = "?access_token=" + token;
      var url = baseURL + params;
      $.getJSON(url, function(data) {
        // console.log(data);
        issues.splitIssues(data);
      });
    },
    // make new to-do items from each issue returned
    splitIssues: function(issuesData) {
      var issuesTitles = [];
      for (var i = 0; i < issuesData.length; i++) {
        // console.log(issuesData[i].title);
        issuesTitles.unshift(issuesData[i].title);
      }
      console.log(issuesTitles);
      return issuesTitles;
    }   
  };
  $issuesButton.click(issues.fetchIssues);
});
