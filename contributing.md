# Contributing to VT Code Camp

Hi There! 👋

Thanks for taking the time to help improve the VT Code Camp event and/or website.  Hopefully, this will help outline some of the tools and options for making meaningful contributions.

## Event Volunteers

A lot of work goes into the Code Camp event, in the weeks leading up to it and throughout the day on the actual event date.  If you'd like to help get swag ready, setup signs, check people in, assist speakers with technology, help with clean up, or otherwise be a part of the event, please contact [Rob.Hale.VT@gmail.com](mailto:Rob.Hale.VT@gmail.com) or  [team@vtcodecamp.org](mailto:team@vtcodecamp.org) for more info.

## Pull Requests

Have a suggestion you'd like to see implemented on the website? Awesome! 🎉

We'd love to merge in any Pull Requests that help improve the website's design, accessibility, or documentation.  If you have any ideas but aren't quite sure how to go about them, you can always [Open an Issue](https://github.com/vtcodecamp/2019.vtcodecamp.org/issues) to make a suggestion or ask for help.  We're probably not looking for any huge rewrites and want to balance leveraging potentially helpful technologies with the maintenance burden that comes with added complexity.

That said, feel free to **Submit a PR** and we can always work through any feedback.

1. Fork the repo on github to push changes on your own branch
2. Checkout the Readme.md for more info on how to get the project setup on your local machine
3. When submitting a pull request, please check the box [`Allow Edits from Maintainers`](https://help.github.com/en/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork) which will allow project members to make changes to your branch prior to merging in.

Happy Coding! 😀


## Speaker & Session Info

Is something wrong or incorrect?

If you are the owner of the session or speaker bio, you can go update the fields directly on [sessionize](https://sessionize.com/app/speaker)

For the months leading up to the event, the site will be rebuilt with any data updates every night or after every commit.  If you'd like to kick off a build prior to that, you can kick off a build by sending a `POST` request to https://api.netlify.com/build_hooks/5d50f3f7098c52d77f364eea like this:

```bash
curl -X POST -d {} https://api.netlify.com/build_hooks/5d50f3f7098c52d77f364eea
```

### Markdown is allowed ✔

The site generator will render the following markdown elements in your session description or bio:

**\*\*bold\*\***  *\*italics\**  <code>&#96;code&#96;</code>  [\[link\](https://www.vtcodecamp.org/)](https://www.vtcodecamp.org/)

If you want to test them out using the same JS we're using internally, you can paste into this [minimal markdown fiddle](https://jsfiddle.net/KyleMit/bqr0wysc/)

## Contact Members

For any other questions, comments, or concerns, please feel free to [Open an Issue](https://github.com/vtcodecamp/2019.vtcodecamp.org/issues) or contact the whole team at [team@vtcodecamp.org](mailto:team@vtcodecamp.org)
