# Readme

## Configuration Instruction

### NPM
Serving the webapp live in the browser to see hot reload in action as well as making any changes to the code requires the Node Package Manager (NPM). This software requires version 10 or newer of NPM, which can be found here: https://nodejs.org/en/. For macOS environments, it is suggested that Node Version Manager (NVM) is used to install NPM to avoid any potential permission issues. The newest version of NVM can be found here: https://github.com/nvm-sh/nvm#installation-and-update. 

### Cloning the Repository
The first step is to clone the repository. To do this, the project can be found at https://github.com/RollinsS/PeekPeekProject, and since it’s a public repository there is no need to be added as a contributor.

### Installing Necessary Frameworks (Currently only Vue Client)
The second step is to install the Vue Client. This needs to be installed globally. To do this, run the command `npm install -g vue-cli`.

### Opening the Project in a Preferred IDE
The third step is to get the project open in your IDE.  Once you clone the repository, open up your IDE (The project was built using Visual Studio Code) and open an existing project. Navigate to the folder that was installed from github, and press “open”

## Installation Instructions

### Installing Project Dependencies
Once the project is open in your preferred IDE, open up the built-in terminal at the project’s location or navigate a terminal to the root folder of the project. Run `npm install` to download all dependencies that are needed to run the project

## Operating Instructions

### Starting the Project
There are a few options to start the project:

1. The first option is to run the command `npm run serve` in your command line. This will build the project and provide you with a link to view the website on your computer’s browser if it was successful.
2. The second option is to run the command `vue ui` to start Vue’s Graphical user interface. When this starts up, the first thing you will want to do is to import the project. There is an import button in the navigation section of the GUI, you will need to navigate to the project’s root folder and click on the button that says “Import this folder”.
    * Once the project is imported, you will be brought to the project dashboard. To get the project to run, you will want to click on the “Tasks” menu on the left side of the screen.
    * Once you click on tasks, a submenu will come up directly to the right. Click on the “serve” option in the secondary menu that comes up to the right of the navigation menu. 
    * Once you’ve clicked on “serve”, there will be a green button that shows up towards the top of the page that has a play symbol and the words “run task”.
    * Once the app has compiled, the “Open App” button on the right of the page will open another tab with the project.

### Editing the Project
Once the project is started, it will update when any changes are saved to the code. In other words, it does not need to be “served” after making changes in the editor. This is referred to as “hot-reload”.

#### Images
To keep the project cohesive and organized, it is recommended you put any images you want on the website inside the folder at `PeekPeekProject/src/assets/images/`. If this is done, then changing a specific picture requires only changing the filename and not the entire path.

#### Section Breakdown
1. Home Section: `HomeSection.vue`
    * This section contains the tiny-world picture, as well as the opening text (“Welcome to Peek Peek & It’s All About You”) and the buttons labeled “Watch the video” and “Take a peek”.
    * **To change the picture**:
        Find the following code block in `HomeSection.vue`. Replace the img `src` with the new image’s name.
        ```html 
        <div class="home-pic">
            <img src="../assets/images/tinyWorld.png" />
        </div>
        ```
    * **To change the opening text (before animation)**:
        Find the following code block in `HomeSection.vue`. Replace the contents inside h1 with your desired text. (use `<br/>` to force the text onto the next line.)
        ```html <h1 id="splash-text">Welcome<br/>to<br/>PeekPeek</h1>```
    * **To change the opening text (after animation)**:
        Find the following code block in `HomeSection.vue`. Replace the contents inside h1 with your desired text. (use `<br/>` to force the text onto the next line.)
        ```html 
        <div class="secondary hidden">
            <h1>It's all<br/>about you.</h1>
        <div class="separator"></div>
        ```
    * **To change the links or text on either button**: 
        Find the following code block in `HomeSection.vue`. Replace the contents inside the `a` tag to change the label on the button. Replace the link in the `href` with the desired new link.
        ```html 
        <div class="home-section-buttons">
            <button>
                <a target="_blank" href="https://www.youtube.com/watch?v=s4EEhXH_pz0">Watch video</a>
            </button>
            <button>
                <a target="_blank" href="https://www.peekpeek.com/industries">Take a peek</a>
            </button>
        </div>
        ```
2. Stats Section: `StatsSection.vue`
    * This section contains the moving statistic cards, as well as the text “We do work better than most, actually” and “New challenge? New solution”.
    * **To change the data on the cards**:
    * Find the following code block in `StatsSection.vue`. This section contains all the data for each card. The first entry is the lowest on the page. You can add additional entries to this object, but the animation was designed for only four (4) entries and additional data may cause unintended effects.
    ```javascript
    data() {
        return {
            cardData: [
                    {
                        cardNumber: '18x',
                        supportiveTitle: 'Longer',
                        title: 'Duration of Stay',
                    },
                    {
                        cardNumber: '130%',
                        supportiveTitle: 'Increase in',
                        title: 'Booking Rate',
                    },
                    {
                        cardNumber: '12%',
                        supportiveTitle: 'Increase in',
                        title: 'Engagement Rate',
                    },
                    {
                        cardNumber: '28%',
                        supportiveTitle: 'Conversion of',
                        title: 'Physical Visit',
                    },
                ]
            }
        }
    ```
* **To change the text on “We do work better than most, actually”**:
* Find the following code block in `StatsSection.vue`. Replace the `h4` and `h2` tags with your desired text. The `h2` is bolder text while the `h4` is lighter text. They move different speeds when parallaxing so it important to have both if you change the text.
    ```html
    z<div class="stats-titles">
        <h2 class="title" id="work">We do work</h2>
        <h4 class="subtitle" id ="better">better than most, actually</h4>
    </div>
    ```
* **To change the text on “New challenge? New solution”**:
* Find the following codeblock in `StatsSection.vue`. Replace the content in each `p` section. The `i` tag creates the arrow next to the text and can be removed if so desired.
    ```html
    <div class="stats-text">
        <p class="main-text" id="challenge">New challenge?</p>
        <p class="main-text" id="solution">New solution <i class="fas fa-long-arrow-alt-right"></i></p>
    </div>
    ```
3. Video Section: `VideoSection.vue`
    * This section contains the large video and the words “It’s the full experience".
    * **To change the video**:
    * Find the following code block in `VideoSection.vue`. Replace the `src` on the iframe. It is recommended that you leave the link and only add the video’s code. For example, if the video you wanted was located at the link https://www.youtube.com/watch?v=s4EEhXH_pz0 , the video’s code would be `s4EEhXH_pz0`. Add that after https://www.youtube-nocookie.com/embed/.
        ```html
        <div class="video-section-container">
            <iframe class = "media"
                    id = "firstVideo"
                    width="100%" 
                    height="100%"
            src="https://www.youtube-nocookie.com/embed/s4EEhXH_pz0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen=""
                    scrolling="no"></iframe>
        ```
    * **To change the text below the video**:
    * Find the following code block in `VideoSection.vue`. Replace all of the content inside the `h2` tag with your desired text.
    ```html
    <h2 class="wide-title" id="fullexperience">It's the full <b>experience</b></h2>
    ```
4. Hotspots Section: `HotspotsSection.vue`
    * This section contains the text “It’s not just a place, tell me about your story with spotlights.” It also contains the animated skyline gif or movie. 
    * **To change the text**:
    * Find the following code block in `HotspotsSection.vue`. Replace the `h4` and `h2` tags with your desired text. The `h2` is bolder text while the `h4` is lighter text. They move different speeds when parallaxing so it important to have both if you change the text.
        ```html         
        <div class="hotspot-titles">
                    <h4 class="subtitle" id="space">It's not just the space</h4>
                    <h2 class="wide-title" id="story">Tell me about your story</h2>
                    <h4 class="subtitle" id="spotlights">with Spotlights</h4>
        </div>
        ```
5. Demo Section: `DemoSection.vue`
    * This section contains the four vertical cards that can be clicked to open the 360 videos. It also contains the text “Something special for every one of you”
    * **To change the contents of the cards**:
    * Find the following code block in `DemoSection.vue`. The iframe contains the link that the card will open to, while the img entry contains the file name of the image. Please note the image must go into `/src/assets/images/` as previously mentioned. It must also be in a png format.
        ```javascript
            data() {
                return {
                    imagePath: funct ion (name:string): any {
                        return require('../assets/images/' + name + '.png')
                    }, 
                    //To rearrange the content of the cards, do not change the structure of the data here.
                    //Go to the Style section of this page and change the flex-order. 
                    cardData: [
                    {
                        iframe: "http://vr.peekpeek.com/UCI_ARC/",
                        title: "University of California, Irvine",
                        subtitle: "Anteater Recreational Center Tour",
                        img: "uci-arc",
                    },
                    {
                        iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
                        title: "Cal State Long Beach",
                        subtitle: "Wellness Center Tour",
                        img: "CSULB-Pyramid",
                    },
                    {
                        iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
                        title: "Fish on Tap",
                        subtitle: "Restaurant Tour",
                        img: "fish-on-tap",
                    },
                    {
                        iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
                        title: "West Covina Estates",
                        subtitle: "Home Tour",
                        img: "west-covina",
                    }
                ]
                }
            }
        ```
    * **To change the text**: 
    * Find the following code block in `DemoSection.vue`. Replace the `h4` and `h2` tags with your desired text. The `h2` is bolder text while the `h4` is lighter text. They move different speeds when parallaxing so it important to have both if you change the text.
        ```html         
        <div class="demo-section-text">
            <div class="demo-section-titles">
                <h2 class="title" id="special">Something <b>special</b></h2>
                <h4 class="subtitle" id="everysingleone">for every single one of you</h4>
            </div>
        </div>
        ```
6. Partners Section: `PartnersSection.vue`
    * This section contains the text labeled “Customized branding with PeekPeek” as well as the paragraph and link below. It also contains the two columns of logos.
    * **To change the text in the title**:
    * Find the following code block in `PartnersSection.vue`. Replace the contents of the `h2` tag with desired text.
        ```html
        <h2 class="wide-title" id="branding"><b>Customized branding</b> with PeekPeek</h2>
        ```
    * **To change the text or link in the paragraph**:
    * Find the following code block in `PartnersSection.vue`. Replace the contents of the `h2` tag with desired text. Replace the link in the `href` tag with desired new link. Replace the contents of the `a` tag with new desired text.
        ```html
        <div class="main-text wide-text" id="examples">
                        <p>
                            PeekPeek was created to help ...
                        </p>
                        <a class="link" href="https://www.peekpeek.com/industries">Check out our case studies</a>
                    </div>
        ```
    * **To change the logos in the columns**:
    * Find the following code block in `PartnersSection.vue` Replace the `id` with the name of the company/organization. Replace the img `src` with the new file name for the logo in the images folder. Repeat for each logo in this section.
        ```html
        <div class="partners-section-icons">
                    <div class="partners-section-icon-container media" id="Waterford">
                        <img src="../assets/images/City Square Waterford.png"/>
                    </div>
        ```
7. Contact Section: `ContactSection.vue`
    * This section contains the text “So, your turn”, “Tell me your story”, and the Contact Us button.
    * **To change the content on this page**:
    * Find the following code block in `ContactSection.vue`. Replace the contents in the `p`, and `h1` tags with desired text, respectively. To replace label on button, replace the contents of the `button` tag with desired label. 
        ```html         
        <div class="contact-section-interlude">
                    <p>So, </p>
                    <p>your turn</p>
                </div>
                <div class="contact-section-main">
                    <h1>Tell me</h1>
                    <h1>your story</h1>
                    <button @click="onContactButtonClicked">Contact Us</button>
                </div>
        ```
8. Contact Form: `Form.vue`
    * This section contains the 3 sections of the form that appears after selecting Contact Us on `ContactSection.vue`. The first selection provides options for which industry the visitor is in, then geographical location, and then finally a customer info section.
    * **To change the email that receives the forms**:


    * **To change the options for Industry or Location**:
    * Find the following code block in `Form.vue`. Replace the elements in `industryPage` and `locationPage` with the desired options. Additional elements can be added to each array, but may not look as desired depending on length of word and number of elements. We would recommend no more than six (6).
        ```javascript     
        data() {
                return {
                    buttonData: {
                        industryPage: ['Hospitality', 'Restaurant', 'Campus', 'Other'],
                        locationPage: ['Los Angeles', 'Orange County', 'Riverside', 'Other']
                    },
            }
        ```

9. Navigation Bar: `Navigation.vue`
    * This section contains the floating navigation bar that is always in the top right corner of the site, as well as the floating logo that is always in the top left corner.
    * **To change the label or link on any of the header buttons**:
    * Find the following code block in `Navigation.vue`. Replace the contents of the `a` tag to change the label. Replace the contents of the `href`value to desired new link.
        ```html       
        <li>
            <span class="nav-item">
                    <a target="_blank" href="https://www.peekpeek.com/about-us">Who</a>
            </span>
        </li>
        ```
### Building the Project
To minify the project size and to get the website ready for production, run the command `npm run build`, or navigate to the same page in the UI where you serve the website and click on the `build` option instead of `serve`. The project will not build unless there are **no errors** from typescript, so it is recommended to follow proper coding principles to reduce future work before building.

### Hosting
If you want to host the website under a path that's not the root directory, change the `publicPath` variable in the config file `vue.config.js`. This field needs to lead to the folder where the project is held. For example, if you wanted to host the website under a single-layer deep subfolder called 117, you would have to specify the publicPath as `/117/`.
 
### Lints and fixes files
To Lint the program and fix simple errors in formatting, run the command `npm run lint`.

# File Manifest

* **.vscode**
    * Settings.json
* **public**
    * favicon
    * Index.html
* **src**
    * **assets**
        * logo.png
        * **images**
            * City Square Waterford.png
            * csulb.jpg
            * csulb-wellness.png
            * Felixstowe Chamber.png
            * fish-on-tap.png
            * Hilton.png
            * info-symbol.png
            * moutain_bg.jpg
            * Paypal.png
            * Pierce College.png
            * sample-logo.png
            * tinyWorld.png
            * transparent_skyline.png
            * UCI.png
            * uci-arc.png
            * West-covina.png
    * **components**
        * ContactSection.vue
        * DemoSection.vue
        * FormButton.vue
        * HelloWorld.vue
        * HomeSection.vue
        * HotspotSection.vue
        * StatsCard.vue
        * StatsSection.vue
        * VideoSection.vue
    * **views**
        * About.vue
        * Home.vue
        * Playground.vue
    * app.vue
    * main.ts
    * router.ts
    * shims-tsx.d.ts
    * Shims-vue.d.ts
* .gitignore
* babel.config.js
* Package.json
* Package-lock.json
* README.md
* tsconfig.json

# Copyright and Licensing Information

This project was completed in accordance to the rules and regulations set upon students completing their project at the University of California, Irvine. Since the website was completed for credit as part of a college course, the programmers/designers do not hold any rights related to the code used to create this project. For all NPM libraries, please refer to package.json for a full list of licensing information from all libraries used.

# Contact Information for Developers

### David Brown
* **Email**: daviddb@uci.edu

### Thomas Huang
* **Email**: yiminh3@uci.edu

### Hailey Karter
* **Email**: hkarter@uci.edu

### Tayler Nielsen
* **Email**: tanielse@uci.edu

### Samantha Rollins
* **Email**: rollinss@uci.edu

### Nessa Scott
* **Email**: nvscott@uci.edu

# Known Bugs
1. At extremely wide aspect ratios, the scrolling animations and parallax will not work as expected, since the triggerhooks are set to “onEnter” (1). 
2. Scrollmagic does not work well with Google’s device toolbar in responsive mode. It is unclear why this issue exists.
3. After reloading the page, attempting to scroll left or right before scrollmagic loads can cause stuttering effects.

# Troubleshooting
## Tweens
If a tween isn’t moving even though the console isn’t throwing any errors, then the most likely scenario is that the element does not have an ID. If the element doesn’t have an ID, then scrollmagic can’t add styling to it.

## CSS Precedence
If you make a change to the CSS, and it doesn’t effect the element, make sure that there are no “!important” attributes being assigned to that element. Some breakpoints set attributes as “!important” to override traditional css precedences

## Email form not sending
THe EMailJS servers tend to go down from time to time. It specifies that the token has expired, however this is their way of saying that their server is down

# Credits and Achnowledgements
Thank you Professor Ziv for the opportunity to work with project Sponsors and get real world experiences that can be used on our resumes!

Used the FontAwesome arrow icon for the “New Challenge, New Solution” section.
Placeholder images for demo cards courtesy of Unsplash.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
