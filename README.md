# This project is the implementation of the following template:
[Argon Design System Angular](https://demos.creative-tim.com/argon-design-system-angular/?ref=adsa-github-readme) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Argon%20Design%20is%20a%20Free%20Bootstrap%20and%20Angular%20Design%20Sysyem%20made%20using%20angular-cli%20%E2%9D%A4%EF%B8%8F%0Ahttps%3A//demos.creative-tim.com/argon-design-system-angular%20%23angular%20%23angular-cli%20%23argon%20%23argondesign%20%23angular%20%23argonangular%20%23angulardesign%20%23bootstrap%20%23design%20%23uikit%20%23freebie%20%20via%20%40CreativeTim)





 
## File Structure
Within the download you'll find the following directories and files:

```
argon-design-system-angular
├── CHANGELOG.md
├── ISSUES_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── e2e
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── home
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.spec.ts
│   │   │   ├── home.component.ts
│   │   │   └── home.module.ts
│   │   ├── landing
│   │   │   ├── landing.component.html
│   │   │   ├── landing.component.scss
│   │   │   ├── landing.component.spec.ts
│   │   │   └── landing.component.ts
│   │   ├── login
│   │   │   ├── login.component.css
│   │   │   ├── login.component.html
│   │   │   ├── login.component.spec.ts
│   │   │   └── login.component.ts
│   │   ├── profile
│   │   │   ├── profile.component.html
│   │   │   ├── profile.component.scss
│   │   │   ├── profile.component.spec.ts
│   │   │   └── profile.component.ts
│   │   ├── sections
│   │   │   ├── alerts-section
│   │   │   │   ├── alerts-section.component.css
│   │   │   │   ├── alerts-section.component.html
│   │   │   │   ├── alerts-section.component.spec.ts
│   │   │   │   └── alerts-section.component.ts
│   │   │   ├── angular-section
│   │   │   │   ├── angular-section.component.css
│   │   │   │   ├── angular-section.component.html
│   │   │   │   ├── angular-section.component.spec.ts
│   │   │   │   └── angular-section.component.ts
│   │   │   ├── buttons-section
│   │   │   │   ├── buttons-section.component.css
│   │   │   │   ├── buttons-section.component.html
│   │   │   │   ├── buttons-section.component.spec.ts
│   │   │   │   └── buttons-section.component.ts
│   │   │   ├── crs-section
│   │   │   │   ├── crs-section.component.css
│   │   │   │   ├── crs-section.component.html
│   │   │   │   ├── crs-section.component.spec.ts
│   │   │   │   └── crs-section.component.ts
│   │   │   ├── inputs-section
│   │   │   │   ├── inputs-section.component.css
│   │   │   │   ├── inputs-section.component.html
│   │   │   │   ├── inputs-section.component.spec.ts
│   │   │   │   └── inputs-section.component.ts
│   │   │   ├── modal
│   │   │   │   ├── modal.component.html
│   │   │   │   ├── modal.component.scss
│   │   │   │   ├── modal.component.spec.ts
│   │   │   │   └── modal.component.ts
│   │   │   ├── navigation-section
│   │   │   │   ├── navigation-section.component.css
│   │   │   │   ├── navigation-section.component.html
│   │   │   │   ├── navigation-section.component.spec.ts
│   │   │   │   └── navigation-section.component.ts
│   │   │   ├── nucleo-section
│   │   │   │   ├── nucleo-section.component.css
│   │   │   │   ├── nucleo-section.component.html
│   │   │   │   ├── nucleo-section.component.spec.ts
│   │   │   │   └── nucleo-section.component.ts
│   │   │   ├── sections.component.css
│   │   │   ├── sections.component.html
│   │   │   ├── sections.component.spec.ts
│   │   │   ├── sections.component.ts
│   │   │   ├── sections.module.ts
│   │   │   ├── tabs-section
│   │   │   │   ├── tabs-section.component.css
│   │   │   │   ├── tabs-section.component.html
│   │   │   │   ├── tabs-section.component.spec.ts
│   │   │   │   └── tabs-section.component.ts
│   │   │   ├── typography-section
│   │   │   │   ├── typography-section.component.css
│   │   │   │   ├── typography-section.component.html
│   │   │   │   ├── typography-section.component.spec.ts
│   │   │   │   └── typography-section.component.ts
│   │   │   └── versions-section
│   │   │       ├── versions-section.component.css
│   │   │       ├── versions-section.component.html
│   │   │       ├── versions-section.component.spec.ts
│   │   │       └── versions-section.component.ts
│   │   ├── shared
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   └── navbar
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.scss
│   │   │       ├── navbar.component.spec.ts
│   │   │       └── navbar.component.ts
│   │   └── signup
│   │       ├── signup.component.html
│   │       ├── signup.component.scss
│   │       ├── signup.component.spec.ts
│   │       └── signup.component.ts
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   ├── js
│   │   ├── scss
│   │   │   ├── angular
│   │   │   ├── argon.scss
│   │   │   ├── bootstrap
│   │   │   └── custom
│   │   └── vendor
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json

```


