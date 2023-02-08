# custom-video-player

Custom video player using HTML5 `video` element and it's JavaScript API to customize the design of the player. 

I use this as a template for websites that plays videos. 

# Description

HTML5 includes the `<video>` tag to embed videos into web pages. The attribute `controls` enables the default set of playback controls. 

The problem with native browser controls is that they are different in each browser - not good for cross-browser support. They also aren't very keyboard-accessible. The solution is to hide the native controls (removing `controls` attribute) and program your own with HTML, CSS, JavaScript. 

# Technologies:
HTML5, CSS3, JavaScript

# Instructions to Run

1. Clone this repo (or download as zip from GitHub)
2. Open it open and go to the directory its located
3. Open `index.html` to the browser of your choice

To change the video you want to play, find the video's full directory name (or relative path if you put it in the videos folder where this project is located) and paste it as the value to the `src` of the `video` tag in `index.html`. Make sure the pathname is a string (wrapped in double quotes).


# Specifications

- [ ] Play/Pause
- [ ] Stop
- [ ] Video progress bar
- [ ] Set progress bar time
- [ ] Display time in mins and seconds
- [ ] Display customized video player, styled with CSS

 