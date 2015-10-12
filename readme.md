# to-do
By [Garrett Sand](https://github.com/vnmnd) & [Scott Macpherson](https://github.com/scottmacphersonmusic)

### Description
An extension of the [TodoMVC](http://todomvc.com/examples/jquery/#/all) jQuery example that allows you interact with issues from your GitHub repositories.

### Usage
To import all of your GitHub issues, click the '+GitHub Issues' button beneath the main list window.  You will be prompted to enter your GitHub access token.

If you don't have an access token, [create one](https://github.com/settings/tokens)

All issues **for which you are the assignee** in your repositories will be added to the to-do list.

When you check one of your GitHub issue items as completed, that issue will be closed on GitHub.  Likewise, if an issue is completed but not yet deleted from the to-do list, unchecking it will open the issue again on GitHub.

### Contributing
1. Fork It
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

### Credit
[jQuery](https://api.jquery.com/) and [GitHub](https://developer.github.com/v3/) API documentation was referred to extensively

This README was edited at [dillinger.io](dillinger.io)

### License
to-do is released under the [MIT License](http://opensource.org/licenses/MIT)
