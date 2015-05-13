## Website Performance Optimization portfolio project

Project 4 of Udacity Front-end Nanodegree Program

####Build and Deploy
I used gulp to build and deploy changes for testing.  The gulpfile.js is set up to build by default and place all files in the dist directory.  In the command line, just type.
```
gulp
```

The gulpfile is also set up to deploy the changes for testing in the browser.  It will launch at localhost:3000
```
gulp serve
```

####Part 1: Optimize PageSpeed Insights score for index.html

**Changes**
* Used Gulp to minify all Javascript, CSS, HTML, and images.  Inline CSS was minified as well.
* Inlined style.css into index.html
* Inline the web font into index.html
* Used media query for print.css
* Asynchronously loading perfmatters.js and analytics.js
* Created smaller images when needed rather than load in very large image and resizing it.

I used npm to install Gulp packages and set them up to run in gulpfile.js.  This did most of the heavy lifting as far as minifying all assets and optimizing images. Gulp packages used include...
```
gulp-uglify
gulp-minify-css
gulp-minify-html
gulp-minify-inline
gulp-imagemin
```

**Results**
* PageSpeed Insights Mobile: 96/100
* PageSpeed Insights Desktop: 97/100

####Part 2: Optimize Frames per Second in pizza.html

**Pizza.html**
* Resized pizza image and optimized all images.

**Main.js**
* Moved DOM queries out of loops and replaced querySelector and querySelectorAll with better performing selectors.
* Added size of pizza image in pizzaElementGenerator
* In changePizzaSizes(), moved width calculation outside of loop since it only needs to happen once.  Also created a variable to hold selector results rather than query multiple times.
* In updatePositions(), put phase calculations into array so they are not repeated.
* Used transform property rather than style.left in updatePositions().
* Used an algorithm to determine the number of moving pizzas based on screen availability rather than static value (credit for algorithm creation goes to https://github.com/JGRoeder/frontend-nanodegree-mobile-portfolio)
* added translate3d property to moving pizzas*
* Used backface-visibility: hidden in CSS for mover class*

These last two changes put elements in their own composite layer.  In some cases this may lead to poorer performance, so could be removed if needed.

####Resources
Main resources used include...
* http://discussions.udacity.com/t/gulp-automate-your-life-feb-15/14142 (Helped to build gulpfile.js)
* https://github.com/udacity/fend-office-hours/tree/master/Web%20Optimization/Effective%20Optimizations%20for%2060%20FPS (Hints on where to optimize)
* https://github.com/JGRoeder/frontend-nanodegree-mobile-portfolio (inspired moving pizza algorithm)
* Google PageSpeed

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>
