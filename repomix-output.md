This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: node_modules/**, dist/**, build/**, .git/**, package-lock.json, public/assets/**, *.png, *.jpg, *.jpeg, *.pdf
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
public/
  Ailex.Estrada_CV.pdf
  favicon.svg
  icons.svg
src/
  assets/
    icons/
      architecture.svg
      aspnet.svg
      csharp.svg
      css3.svg
      design.svg
      facebook.svg
      figma.svg
      fullstack.svg
      git.svg
      github.svg
      gmail.svg
      growth.svg
      html5.svg
      javascript.svg
      lightbulb.svg
      lightning.svg
      linkedin.svg
      mssql.svg
      phone.svg
      react.svg
      rocket.svg
      target.svg
      visualstudio.svg
      vscode.svg
    hero.png
    react.svg
    vite.svg
  components/
    layout/
      AmbientBackground/
        AmbientBackground.jsx
        AmbientBackground.module.css
      Footer/
        Footer.jsx
        Footer.module.css
      Navbar/
        Navbar.jsx
        Navbar.module.css
      SEO/
        SEO.jsx
      SiteLayout/
        SiteLayout.jsx
        SiteLayout.module.css
    projects/
      AccordionGallery/
        AccordionGallery.css
        AccordionGallery.jsx
      FeaturedProject/
        FeaturedProject.jsx
        FeaturedProject.module.css
      ProjectCard/
        ProjectCard.jsx
        ProjectCard.module.css
    sections/
      About/
        About.jsx
        About.module.css
      Contact/
        ContactModal/
          ContactModal.jsx
          ContactModal.module.css
        Contact.jsx
        Contact.module.css
        ContactForm.jsx
        ContactForm.module.css
      Education/
        Education.jsx
        Education.module.css
      Hero/
        CardSwap/
          CardSwap.css
          CardSwap.jsx
        Hero.jsx
        Hero.module.css
        PortraitComposition.jsx
        PortraitComposition.module.css
      Projects/
        Projects.jsx
        Projects.module.css
      Showcase/
        ShowcaseSection.jsx
        ShowcaseSection.module.css
      Skills/
        SkillKeyboard.jsx
        SkillKeyboard.module.css
        Skills.jsx
        Skills.module.css
    showcase/
      ButtonShowcase/
        ButtonShowcase.css
        ButtonShowcase.jsx
      ShowcaseItem/
        ShowcaseItem.jsx
        ShowcaseItem.module.css
    ui/
      Button/
        Button.jsx
        Button.module.css
      Preloader/
        Preloader.jsx
        Preloader.module.css
      Reveal/
        Reveal.jsx
        Reveal.module.css
      SectionHeading/
        SectionHeading.jsx
        SectionHeading.module.css
      Tag/
        Tag.jsx
        Tag.module.css
  data/
    navigation.js
    projects.js
    showcase.js
    skills.js
    socialLinks.js
  hooks/
    useTheme.js
  pages/
    HomePage/
      HomePage.jsx
    NotFoundPage/
      NotFoundPage.jsx
      NotFoundPage.module.css
    ProjectPage/
      ProjectPage.jsx
      ProjectPage.module.css
  services/
    contactService.js
  styles/
    globals.css
    tokens.css
    typography.css
    utilities.css
  utils/
    scrollUtils.js
  App.jsx
  main.jsx
.gitignore
eslint.config.js
index.html
package.json
README.md
vite.config.js
```

# Files

## File: public/favicon.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
```

## File: public/icons.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
```

## File: src/assets/icons/architecture.svg
```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="servers"  viewBox="0 0 196 210.3197" enable-background="new 0 0 196 210.3197" xml:space="preserve" width="512" height="512">
<g>
	<circle fill="#D0E8FF" cx="162" cy="172.3197" r="6"/>
	<path fill="#5CB0FF" d="M8,154.3197v36h4h8h156h8h4v-36h-84h-8H8z M28,182.3197h-8v-20h8V182.3197z M48,182.3197h-8v-20h8V182.3197   z M68,182.3197h-8v-20h8V182.3197z M162,158.3197c7.7188,0,14,6.2812,14,14s-6.2812,14-14,14s-14-6.2812-14-14   S154.2812,158.3197,162,158.3197z"/>
	<circle fill="#D0E8FF" cx="162" cy="112.3197" r="6"/>
	<path fill="#D0E8FF" d="M8,94.3197v36h180v-36h-84h-8H8z M28,122.3197h-8v-20h8V122.3197z M48,122.3197h-8v-20h8V122.3197z    M68,122.3197h-8v-20h8V122.3197z M162,98.3197c7.7188,0,14,6.2812,14,14s-6.2812,14-14,14s-14-6.2812-14-14   S154.2812,98.3197,162,98.3197z"/>
	<circle fill="#D0E8FF" cx="162" cy="52.3197" r="6"/>
	<path fill="#5CB0FF" d="M188,34.3197H8v36h180V34.3197z M28,62.3197h-8v-20h8V62.3197z M48,62.3197h-8v-20h8V62.3197z M68,62.3197   h-8v-20h8V62.3197z M162,66.3197c-7.7188,0-14-6.2812-14-14s6.2812-14,14-14s14,6.2812,14,14S169.7188,66.3197,162,66.3197z"/>
	<path fill="#1C71DA" d="M196,78.3197v-52H0v52h96v8H0v52h96v8H0v52h12v12h8v-12h156v12h8v-12h12v-52h-92v-8h92v-52h-92v-8H196z    M188,154.3197v36h-4h-8H20h-8H8v-36h88h8H188z M188,94.3197v36H8v-36h88h8H188z M8,34.3197h180v36H8V34.3197z"/>
	<path fill="#1C71DA" d="M162,38.3197c-7.7188,0-14,6.2812-14,14s6.2812,14,14,14s14-6.2812,14-14S169.7188,38.3197,162,38.3197z    M162,58.3197c-3.3086,0-6-2.6914-6-6s2.6914-6,6-6s6,2.6914,6,6S165.3086,58.3197,162,58.3197z"/>
	<rect x="20" y="42.3197" fill="#1C71DA" width="8" height="20"/>
	<rect x="40" y="42.3197" fill="#FFFFFF" width="8" height="20"/>
	<rect x="60" y="42.3197" fill="#1C71DA" width="8" height="20"/>
	<path fill="#1C71DA" d="M162,126.3197c7.7188,0,14-6.2812,14-14s-6.2812-14-14-14s-14,6.2812-14,14S154.2812,126.3197,162,126.3197   z M162,106.3197c3.3086,0,6,2.6914,6,6s-2.6914,6-6,6s-6-2.6914-6-6S158.6914,106.3197,162,106.3197z"/>
	<rect x="20" y="102.3197" fill="#1C71DA" width="8" height="20"/>
	<rect x="40" y="102.3197" fill="#1C71DA" width="8" height="20"/>
	<rect x="60" y="102.3197" fill="#1C71DA" width="8" height="20"/>
	<path fill="#1C71DA" d="M162,186.3197c7.7188,0,14-6.2812,14-14s-6.2812-14-14-14s-14,6.2812-14,14S154.2812,186.3197,162,186.3197   z M162,166.3197c3.3086,0,6,2.6914,6,6s-2.6914,6-6,6s-6-2.6914-6-6S158.6914,166.3197,162,166.3197z"/>
	<rect x="20" y="162.3197" fill="#1C71DA" width="8" height="20"/>
	<rect x="40" y="162.3197" fill="#FFFFFF" width="8" height="20"/>
	<rect x="60" y="162.3197" fill="#1C71DA" width="8" height="20"/>
</g>
<path fill="#FF5D5D" d="M80.2524,22.1434c-1.0239,0-2.0474-0.3906-2.8286-1.1714c-1.562-1.5625-1.562-4.0947,0-5.6572  L91.5659,1.1727c1.5625-1.5615,4.0947-1.5615,5.6572,0c1.562,1.5625,1.562,4.0947,0,5.6572L83.0811,20.972  C82.2998,21.7528,81.2764,22.1434,80.2524,22.1434z"/>
<path fill="#FF5D5D" d="M94.3945,22.142c-1.0239,0-2.0474-0.3906-2.8286-1.1714L77.4238,6.828c-1.562-1.5625-1.562-4.0952,0-5.6572  c1.563-1.5615,4.0952-1.5605,5.6572,0l14.1421,14.1426c1.562,1.5625,1.562,4.0952,0,5.6572  C96.4419,21.7513,95.418,22.142,94.3945,22.142z"/>
<path fill="#00D40B" d="M106.2524,126.1434c-7.7197,0-14-6.2803-14-14s6.2803-14,14-14s14,6.2803,14,14  S113.9722,126.1434,106.2524,126.1434z M106.2524,106.1434c-3.3086,0-6,2.6914-6,6s2.6914,6,6,6s6-2.6914,6-6  S109.561,106.1434,106.2524,106.1434z"/>
<path fill="#FFC504" d="M127.5659,188.7689c-1.0239,0-2.0474-0.3906-2.8286-1.1714l-11.3135-11.3135  c-1.562-1.5625-1.562-4.0947,0-5.6572l11.3135-11.3135c1.5625-1.5615,4.0952-1.5615,5.6567,0l11.314,11.3135  c0.7505,0.7505,1.1719,1.7676,1.1719,2.8286s-0.4214,2.0781-1.1719,2.8286l-11.314,11.3135  C129.6133,188.3783,128.5894,188.7689,127.5659,188.7689z M121.9092,173.4554l5.6567,5.6567l5.6572-5.6567l-5.6572-5.6567  L121.9092,173.4554z"/>
</svg>
```

## File: src/assets/icons/aspnet.svg
```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#000000"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px"
	 height="800px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">

<g id="5151e0c8492e5103c096af88a51eafb7">

<path display="inline" d="M295.474,319.537c0.826,4.135,1.24,11.37,1.24,21.707v80.997h-22.327v-80.129
		c0-9.097-0.868-15.894-2.604-20.404c-1.737-4.507-4.817-8.104-9.241-10.792c-4.424-2.683-9.613-4.031-15.567-4.031
		c-9.51,0-17.717,3.019-24.622,9.055c-6.905,6.037-10.357,17.49-10.357,34.359v71.942h-22.327V290.512h20.094v18.73
		c9.675-14.472,23.65-21.707,41.925-21.707c7.938,0,15.236,1.426,21.893,4.279c6.657,2.853,11.64,6.595,14.947,11.226
		S294.15,313.17,295.474,319.537z M511.5,423.052c-6.284,1.323-11.908,1.984-16.869,1.984c-8.104,0-14.389-1.281-18.854-3.845
		c-4.465-2.563-7.607-5.934-9.427-10.109c-1.819-4.172-2.729-12.962-2.729-26.358v-79.542h-48.475
		c0.111,0.12,0.235,0.219,0.347,0.339c11.164,11.99,16.746,28.859,16.746,50.608c0,1.322-0.042,3.308-0.124,5.953h-98.239
		c0.827,14.472,4.92,25.553,12.279,33.243c7.36,7.69,16.539,11.535,27.537,11.535c8.187,0,15.174-2.149,20.963-6.45
		c5.788-4.3,10.378-11.163,13.769-20.59l23.071,2.853c-3.639,13.479-10.378,23.939-20.219,31.382s-22.41,11.164-37.708,11.164
		c-19.268,0-34.545-5.934-45.832-17.8c-11.288-11.862-16.932-28.509-16.932-49.926c0-22.162,5.706-39.362,17.117-51.601
		c11.412-12.238,26.214-18.357,44.406-18.357c2.199,0,4.354,0.095,6.454,0.281h84.839v-28.579h22.203v28.579h22.451v17.365h-22.451
		v80.782c0,6.367,0.393,10.461,1.178,12.28c0.786,1.819,2.067,3.267,3.846,4.341c1.777,1.075,4.32,1.613,7.628,1.613
		c2.481,0,5.747-0.29,9.8-0.869L511.5,423.052z M408.672,343.725c-0.993-11.081-3.805-19.392-8.435-24.932
		c-7.112-8.601-16.332-12.9-27.661-12.9c-10.254,0-18.875,3.432-25.862,10.295c-6.987,6.864-10.854,16.043-11.598,27.537H408.672z
		 M157.881,395.42c-4.035,0-7.459,1.435-10.279,4.354c-2.82,2.898-4.217,6.405-4.217,10.548c0,4.035,1.397,7.529,4.217,10.473
		c2.82,2.944,6.244,4.425,10.279,4.425c4.139,0,7.662-1.48,10.56-4.425c2.906-2.943,4.35-6.438,4.35-10.473
		c0-4.044-1.443-7.55-4.35-10.489C165.542,396.875,162.02,395.42,157.881,395.42z M301.047,267.196
		c-11.577,5.086-26.172,7.629-43.785,7.629c-30.928,0-52.345-5.954-64.253-17.862c-0.05-0.05-0.096-0.103-0.146-0.152l5.604,14.913
		h-58.84l-9.101-30.018H66.737l-8.865,30.018H0.5L68.846,89.883h61.292l45.653,121.494l50.461-3.161
		c1.158,8.683,3.514,15.3,7.07,19.847c5.789,7.361,14.058,11.039,24.808,11.039c8.021,0,14.203-1.879,18.544-5.644
		c4.342-3.763,6.513-8.125,6.513-13.086c0-4.714-2.067-8.932-6.202-12.652c-4.135-3.722-13.728-7.235-28.777-10.544
		c-24.642-5.538-42.214-12.899-52.716-22.078c-10.585-9.18-15.877-20.88-15.877-35.104c0-9.344,2.708-18.172,8.125-26.482
		c5.416-8.311,13.562-14.841,24.436-19.598c10.874-4.755,25.779-7.133,44.716-7.133c23.237,0,40.954,4.323,53.151,12.962
		c12.197,8.642,19.453,22.39,21.769,41.243l-52.965,3.102c-1.405-8.187-4.362-14.141-8.869-17.862
		c-4.506-3.721-10.729-5.581-18.667-5.581c-6.533,0-11.453,1.385-14.761,4.155c-3.308,2.771-4.961,6.14-4.961,10.108
		c0,2.896,1.364,5.502,4.093,7.814c2.646,2.4,8.931,4.633,18.854,6.698c24.56,5.293,42.152,10.649,52.778,16.063
		c10.626,5.416,18.358,12.137,23.195,20.156c2.479,4.109,4.312,8.472,5.521,13.079V89.883h93.401
		c20.342,0,35.578,4.837,45.708,14.512c10.13,9.676,15.195,23.443,15.195,41.306c0,18.357-5.521,32.705-16.56,43.041
		c-11.04,10.339-27.889,15.505-50.546,15.505h-30.762v67.478h-56.438v-44.868c-1.574,6.286-4.216,12.271-7.939,17.952
		C321.638,254.649,312.624,262.111,301.047,267.196z M392.464,167.407h13.769c10.832,0,18.44-1.88,22.823-5.645
		c4.383-3.762,6.573-8.577,6.573-14.45c0-5.706-1.901-10.543-5.705-14.513c-3.804-3.969-10.957-5.954-21.459-5.954h-16.001V167.407z
		 M118.871,202.386l-20.07-65.368l-19.863,65.368H118.871z">

</path>

</g>

</svg>
```

## File: src/assets/icons/csharp.svg
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="-16 0 288 288" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 C250.393,68.089376 247.32,65.070376 243.198,62.683376 C209.173,43.064376 175.115,23.505376 141.101,3.86637605 C131.931,-1.42762395 123.04,-1.23462395 113.938,4.13537605 C100.395,12.122376 32.59,50.969376 12.385,62.672376 C4.064,67.489376 0.015,74.861376 0.013,84.443376 C0,123.898376 0.013,163.352376 0,202.808376 C0,207.532376 0.991,211.717376 2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 C254.589,211.707376 255.582,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#A179DC" fill-rule="nonzero">
</path>
        <path d="M128.182,143.241376 L2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 L128.182,143.241376" fill="#280068" fill-rule="nonzero">
</path>
        <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 L128.182,143.241376 L252.595,215.315376 C254.589,211.707376 255.58,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#390091" fill-rule="nonzero">
</path>
        <path d="M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z" fill="#FFFFFF">
</path>
        <path d="M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z" fill="#FFFFFF" fill-rule="nonzero">
</path>
    </g>
</svg>
```

## File: src/assets/icons/css3.svg
```xml
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
<path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
<path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
</svg>
```

## File: src/assets/icons/design.svg
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>design-and-ux/design-systems</title>
    <desc>Created with Sketch.</desc>
    <defs>
</defs>
    <g id="design-and-ux/design-systems" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="container" transform="translate(2.000000, 2.000000)" fill="#FFFFFF" fill-rule="nonzero" stroke="#03232E" stroke-width="2">
            <rect id="mask" x="-1" y="-1" width="71" height="71" rx="14">
</rect>
        </g>
        <g id="window" transform="translate(14.000000, 17.000000)" fill-rule="nonzero">
            <polygon id="Shape" fill="#B4D2D7" points="22.5 0 20.7408142 12.9714203 45 11.2122345 45 0">
</polygon>
            <polygon id="Shape" fill="#E1EBF0" points="22.5 0 0 0 0 11.2122345 22.5 12.9714203">
</polygon>
            <polygon id="Shape" fill="#FF3939" points="4.20467379 4.28775785 7.00756075 4.28775785 7.00756075 6.9244766 4.20467379 6.9244766">
</polygon>
            <polygon id="Shape" fill="#FF9F22" points="9.81079102 4.28775785 12.6140213 4.28775785 12.6140213 6.9244766 9.81079102 6.9244766">
</polygon>
            <polygon id="Shape" fill="#15CCC2" points="15.4169082 4.28775785 18.2201386 4.28775785 18.2201386 6.9244766 15.4169082 6.9244766">
</polygon>
            <polygon id="Shape" fill="#03232E" points="22.5 39.2428208 45 39.2428208 45 11.2122345 22.5 11.2122345 20.7408142 25.2276993">
</polygon>
            <polygon id="Shape" fill="#07485E" points="0 11.2122345 22.5 11.2122345 22.5 39.2428208 0 39.2428208">
</polygon>
            <g id="Group" transform="translate(31.376953, 21.093750)" fill="#EFE2DD">
                <polygon id="Shape" points="0.0748443164 0.0123596191 9.41837309 0.0123596191 9.41837309 2.64907837 0.0748443164 2.64907837">
</polygon>
                <polygon id="Shape" points="0.0748443164 5.61847685 9.41837309 5.61847685 9.41837309 8.2551956 0.0748443164 8.2551956">
</polygon>
                <polygon id="Shape" points="0.0748443164 11.2245942 9.41837309 11.2245942 9.41837309 13.8613129 0.0748443164 13.8613129">
</polygon>
            </g>
            <polygon id="Shape" fill="#15CCC2" points="40.7953262 15.4999924 22.5 15.4999924 21.6204071 16.8183518 22.5 18.1367111 40.7953262 18.1367111">
</polygon>
            <polygon id="Shape" fill="#7ED8F6" points="28.8130188 34.9550629 28.8130188 21.1061096 22.5 21.1061096 20.7408142 28.0305862 22.5 34.9550629">
</polygon>
            <polygon id="Shape" fill="#6FE8D5" points="4.20467379 15.4999924 22.5 15.4999924 22.5 18.1367111 4.20467379 18.1367111">
</polygon>
            <polygon id="Shape" fill="#BEEBFA" points="4.20467379 21.1061096 22.5 21.1061096 22.5 34.9554062 4.20467379 34.9554062">
</polygon>
        </g>
    </g>
</svg>
```

## File: src/assets/icons/facebook.svg
```xml
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg xmlns="http://www.w3.org/2000/svg"
aria-label="Facebook" role="img"
viewBox="0 0 512 512"><rect
width="512" height="512"
rx="15%"
fill="#1877f2"/><path d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z" fill="#ffffff"/></svg>
```

## File: src/assets/icons/figma.svg
```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd" transform="translate(4)">
    <circle cx="12" cy="12" r="4" fill="#19BCFE"/>
    <path fill="#09CF83" d="M4,24 C6.209139,24 8,22.209139 8,20 C8,19.3969461 8,18.0636128 8,16 C6.20303877,16 4.86970543,16 4,16 C1.790861,16 0,17.790861 0,20 C0,22.209139 1.790861,24 4,24 Z"/>
    <path fill="#A259FF" d="M4,16 C4.73637967,16 6.069713,16 8,16 L8,8 C6.069713,8 4.73637967,8 4,8 C1.790861,8 0,9.790861 0,12 C0,14.209139 1.790861,16 4,16 Z"/>
    <path fill="#F24E1E" d="M4,8 C4.73637967,8 6.069713,8 8,8 L8,0 C6.069713,0 4.73637967,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z"/>
    <path fill="#FF7262" d="M12,8 L8,8 L8,8 L8,0 L12,0 L12,0 C14.209139,0 16,1.790861 16,4 C16,6.209139 14.209139,8 12,8 Z"/>
  </g>
</svg>
```

## File: src/assets/icons/fullstack.svg
```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="800px" height="800px" viewBox="0 0 32 32" xml:space="preserve">
<style type="text/css">
	.cubies_negentien{fill:#F2C99E;}
	.cubies_twintig{fill:#F9E0BD;}
	.cubies_drieentwintig{fill:#E69D8A;}
	.cubies_zevenentwintig{fill:#98D3BC;}
	.cubies_twee{fill:#67625D;}
	.cubies_twaalf{fill:#FFF2DF;}
	.st0{fill:#C9483A;}
	.st1{fill:#D97360;}
	.st2{fill:#CCE2CD;}
	.st3{fill:#65C3AB;}
	.st4{fill:#4C4842;}
	.st5{fill:#EDEAE5;}
	.st6{fill:#C9C6C0;}
	.st7{fill:#EDB57E;}
	.st8{fill:#2EB39A;}
	.st9{fill:#BCD269;}
	.st10{fill:#D1DE8B;}
	.st11{fill:#EC9B5A;}
	.st12{fill:#837F79;}
	.st13{fill:#A5A29C;}
	.st14{fill:#8E7866;}
	.st15{fill:#725A48;}
	.st16{fill:#F2C7B5;}
	.st17{fill:#A4C83F;}
	.st18{fill:#E3D4C0;}
</style>
<g>
	<path class="cubies_negentien" d="M29,32H3c-1.657,0-3-1.343-3-3V3c0-1.657,1.343-3,3-3h26c1.657,0,3,1.343,3,3v26
		C32,30.657,30.657,32,29,32z"/>
	<path class="cubies_twintig" d="M27,32H3c-1.657,0-3-1.343-3-3V3c0-1.657,1.343-3,3-3h24c1.657,0,3,1.343,3,3v26
		C30,30.657,28.657,32,27,32z"/>
	<path class="cubies_twee" d="M28,3v17c0,0.552-0.448,1-1,1H3c-0.552,0-1-0.448-1-1V3c0-0.552,0.448-1,1-1h24
		C27.552,2,28,2.448,28,3z M27,24H16c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1h11c0.552,0,1-0.448,1-1C28,24.448,27.552,24,27,24z
		 M13,24c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S13.552,24,13,24z"/>
	<path class="cubies_drieentwintig" d="M9.5,8h-3C6.224,8,6,7.776,6,7.5S6.224,7,6.5,7h3C9.776,7,10,7.224,10,7.5S9.776,8,9.5,8z
		 M10,9.5C10,9.224,9.776,9,9.5,9h-3C6.224,9,6,9.224,6,9.5S6.224,10,6.5,10h3C9.776,10,10,9.776,10,9.5z M10,11.5
		c0-0.276-0.224-0.5-0.5-0.5h-3C6.224,11,6,11.224,6,11.5S6.224,12,6.5,12h3C9.776,12,10,11.776,10,11.5z M10,13.5
		c0-0.276-0.224-0.5-0.5-0.5h-3C6.224,13,6,13.224,6,13.5S6.224,14,6.5,14h3C9.776,14,10,13.776,10,13.5z"/>
	<path class="cubies_zevenentwintig" d="M24.5,16h-17C7.224,16,7,15.776,7,15.5S7.224,15,7.5,15h17c0.276,0,0.5,0.224,0.5,0.5
		S24.776,16,24.5,16z M23,13.5c0-0.276-0.224-0.5-0.5-0.5h-11c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h11
		C22.776,14,23,13.776,23,13.5z"/>
	<path class="cubies_twaalf" d="M6.5,6h-1C5.224,6,5,5.776,5,5.5S5.224,5,5.5,5h1C6.776,5,7,5.224,7,5.5S6.776,6,6.5,6z M25,7.5
		C25,7.224,24.776,7,24.5,7h-13C11.224,7,11,7.224,11,7.5S11.224,8,11.5,8h13C24.776,8,25,7.776,25,7.5z M23,9.5
		C23,9.224,22.776,9,22.5,9h-11C11.224,9,11,9.224,11,9.5s0.224,0.5,0.5,0.5h11C22.776,10,23,9.776,23,9.5z M25,11.5
		c0-0.276-0.224-0.5-0.5-0.5h-13c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h13C24.776,12,25,11.776,25,11.5z M7,17.5
		C7,17.224,6.776,17,6.5,17h-1C5.224,17,5,17.224,5,17.5S5.224,18,5.5,18h1C6.776,18,7,17.776,7,17.5z"/>
</g>
</svg>
```

## File: src/assets/icons/git.svg
```xml
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B"/>
<path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="white"/>
</svg>
```

## File: src/assets/icons/github.svg
```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>github [#142]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

</path>
            </g>
        </g>
    </g>
</svg>
```

## File: src/assets/icons/gmail.svg
```xml
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white"/>
<path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"/>
<path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"/>
<path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"/>
<path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"/>
<path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"/>
<path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"/>
<path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4"/>
</svg>
```

## File: src/assets/icons/growth.svg
```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<path style="fill:#C1C1C1;" d="M40.421,439.242h431.158c17.86,0,32.337,14.477,32.337,32.337l0,0
	c0,17.86-14.477,32.337-32.337,32.337H40.421c-17.86,0-32.337-14.477-32.337-32.337l0,0
	C8.084,453.719,22.561,439.242,40.421,439.242z"/>
<path style="fill:#FE5A3A;" d="M347.317,68.51l55.375-55.375c6.735-6.735,17.655-6.735,24.39,0l55.375,55.375
	c10.864,10.864,3.17,29.442-12.195,29.442h-28.427v373.627h-53.895V97.952h-28.427C344.148,97.952,336.453,79.374,347.317,68.51z"/>
<path style="fill:#FED76E;" d="M29.544,226.558l55.375-55.375c6.735-6.735,17.655-6.735,24.39,0l55.375,55.375
	c10.864,10.864,3.17,29.442-12.195,29.442H124.06v215.579H70.166V256H41.739C26.374,256,18.68,237.424,29.544,226.558z"/>
<path style="fill:#FE9D5E;" d="M229.053,471.579V180.547h-28.427c-15.365,0-23.059-18.576-12.195-29.442l55.375-55.375
	c6.735-6.735,17.655-6.735,24.39,0l55.375,55.375c10.864,10.864,3.17,29.442-12.195,29.442h-28.426v291.032H229.053z"/>
<path d="M471.579,431.158h-21.66V106.036h20.343c10.439,0,19.406-5.992,23.402-15.637s1.892-20.223-5.491-27.606L432.798,7.42
	C428.014,2.634,421.653,0,414.887,0s-13.128,2.634-17.911,7.419l-55.375,55.375c-7.381,7.383-9.485,17.96-5.49,27.605
	s12.963,15.637,23.402,15.637h20.343v357.459h-8.084c-4.465,0-8.084,3.618-8.084,8.084s3.62,8.084,8.084,8.084h86.232
	c4.465,0,8.084-3.618,8.084-8.084s-3.62-8.084-8.084-8.084h-8.084v-16.168h21.659c13.373,0,24.253,10.88,24.253,24.253
	s-10.879,24.253-24.253,24.253H40.421c-13.373,0-24.253-10.88-24.253-24.253s10.879-24.253,24.253-24.253h21.66v16.168h-8.084
	c-4.465,0-8.084,3.618-8.084,8.084s3.62,8.084,8.084,8.084h86.232c4.465,0,8.084-3.618,8.084-8.084s-3.62-8.084-8.084-8.084h-8.084
	V264.084h20.343c10.44,0,19.408-5.992,23.403-15.638c3.995-9.644,1.891-20.222-5.492-27.604l-55.375-55.375
	c-9.877-9.876-25.947-9.875-35.823,0l-55.375,55.375c-7.383,7.382-9.487,17.96-5.492,27.605
	c3.997,9.645,12.964,15.637,23.404,15.637h20.343v167.074H40.421C18.132,431.158,0,449.29,0,471.579
	C0,493.868,18.132,512,40.421,512h431.158C493.868,512,512,493.868,512,471.579C512,449.29,493.868,431.158,471.579,431.158z
	 M441.834,89.867c-4.465,0-8.084,3.618-8.084,8.084v365.543h-37.726V97.952c0-4.466-3.62-8.084-8.084-8.084h-28.427
	c-5.681,0-7.915-4.33-8.465-5.656c-0.55-1.327-2.031-5.968,1.986-9.986l55.375-55.375c1.73-1.73,4.031-2.683,6.478-2.683
	c2.447,0,4.747,0.953,6.478,2.684l55.375,55.373c4.017,4.018,2.536,8.659,1.987,9.987c-0.55,1.326-2.784,5.656-8.465,5.656
	C470.261,89.867,441.834,89.867,441.834,89.867z M41.739,247.916c-5.681,0-7.915-4.33-8.465-5.656
	c-0.55-1.327-2.031-5.968,1.987-9.985l55.375-55.375c3.571-3.572,9.385-3.572,12.957,0l55.375,55.375
	c4.017,4.016,2.536,8.657,1.987,9.985c-0.55,1.326-2.784,5.656-8.466,5.656h-28.427c-4.465,0-8.084,3.618-8.084,8.084v207.495
	H78.251V256c0-4.466-3.62-8.084-8.084-8.084H41.739z M200.625,188.632h20.343v274.863h-8.084c-4.465,0-8.084,3.618-8.084,8.084
	s3.62,8.084,8.084,8.084h86.232c4.465,0,8.084-3.618,8.084-8.084s-3.62-8.084-8.084-8.084h-8.084V188.632h20.343
	c10.44,0,19.408-5.992,23.402-15.637c3.996-9.645,1.891-20.223-5.491-27.605l-55.375-55.375c-9.876-9.876-25.946-9.876-35.823,0
	l-55.375,55.375c-7.383,7.383-9.485,17.96-5.491,27.605C181.219,182.64,190.186,188.632,200.625,188.632z M194.147,156.823
	l55.375-55.375c3.572-3.571,9.385-3.573,12.957,0l55.375,55.375c4.017,4.016,2.536,8.657,1.987,9.985
	c-0.55,1.326-2.784,5.656-8.465,5.656h-28.428c-4.465,0-8.084,3.618-8.084,8.084v282.947h-37.726V180.547
	c0-4.466-3.62-8.084-8.084-8.084h-28.427c-5.681,0-7.915-4.33-8.465-5.656C191.612,165.479,190.131,160.839,194.147,156.823z
	 M204.879,447.326h-54.59c-4.465,0-8.084-3.618-8.084-8.084c0-4.466,3.62-8.084,8.084-8.084h54.59c4.465,0,8.084,3.618,8.084,8.084
	C212.963,443.708,209.343,447.326,204.879,447.326z M308.278,431.158h54.331c4.465,0,8.084,3.618,8.084,8.084
	c0,4.466-3.62,8.084-8.084,8.084h-54.331c-4.465,0-8.084-3.618-8.084-8.084C300.194,434.776,303.813,431.158,308.278,431.158z"/>
</svg>
```

## File: src/assets/icons/html5.svg
```xml
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_html</title><polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#e44f26"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#f1662a"/><polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style="fill:#ebebeb"/><polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style="fill:#ebebeb"/><polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style="fill:#fff"/><polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style="fill:#fff"/></svg>
```

## File: src/assets/icons/javascript.svg
```xml
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg xmlns="http://www.w3.org/2000/svg"
aria-label="JavaScript" role="img"
viewBox="0 0 512 512"><rect
width="512" height="512"
rx="15%"
fill="#f7df1e"/><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"/></svg>
```

## File: src/assets/icons/lightbulb.svg
```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512.008 512.008" xml:space="preserve">
<g>
	<g>
		<path style="fill:#868491;" d="M280.01,464.008h-48c-4.422,0-8,3.578-8,8v8c0,17.648,14.352,32,32,32s32-14.352,32-32v-8
			C288.01,467.586,284.432,464.008,280.01,464.008z"/>
	</g>
	<g>
		<path style="fill:#5C546A;" d="M256.002,464.008H232.01c-4.422,0-8,3.578-8,8v8c0,17.646,14.347,31.995,31.992,31.999
			L256.002,464.008L256.002,464.008z"/>
	</g>
	<g>
		<path style="fill:#FFCD00;" d="M381.983,49.895c-37.391-35.141-86.367-52.742-137.734-49.52
			C150.639,6.2,75.014,84.286,72.092,178.149c-2.156,69.547,34.375,133.578,95.344,167.117c15.156,8.344,24.57,24.367,24.57,41.828
			v60.914c0,17.648,14.352,32,32,32h64c17.648,0,32-14.352,32-32v-60.914c0-17.445,9.484-33.508,24.766-41.93
			c58.742-32.406,95.234-94.156,95.234-161.156C440.006,133.43,418.858,84.547,381.983,49.895z"/>
	</g>
	<g>
		<circle style="fill:#FFE671;" cx="256.002" cy="184.008" r="128"/>
	</g>
	<g>
		<g>
			<path style="fill:#FFFFFF;" d="M283.986,232.008c-10.633,0-16.07-6.203-20.031-10.727c-3.492-3.984-4.883-5.273-8-5.273
				c-3.102,0-4.484,1.289-7.961,5.266c-3.734,4.273-9.383,10.734-20.016,10.734c-10.625,0-16.273-6.461-20.008-10.734
				c-3.477-3.977-4.859-5.266-7.961-5.266c-4.422,0-8-3.578-8-8s3.578-8,8-8c10.625,0,16.273,6.461,20.008,10.734
				c3.477,3.977,4.859,5.266,7.961,5.266s4.492-1.289,7.969-5.266c3.734-4.273,9.383-10.734,20.008-10.734
				c10.633,0,16.07,6.203,20.031,10.727c3.492,3.984,4.883,5.273,8,5.273c3.109,0,4.5-1.289,7.992-5.266
				c3.742-4.273,9.391-10.734,20.031-10.734c4.422,0,8,3.578,8,8s-3.578,8-8,8c-3.117,0-4.508,1.289-8,5.273
				C300.267,225.555,294.619,232.008,283.986,232.008z"/>
		</g>
	</g>
	<g>
		<g>
			<path style="fill:#5C546A;" d="M232.002,384.008c-3.68,0-6.992-2.555-7.813-6.297l-40-184c-0.938-4.32,1.805-8.578,6.117-9.523
				c4.344-0.953,8.578,1.805,9.523,6.117l40,184c0.938,4.32-1.805,8.578-6.117,9.523
				C233.135,383.954,232.564,384.008,232.002,384.008z"/>
		</g>
	</g>
	<g>
		<g>
			<path style="fill:#5C546A;" d="M280.017,384.008c-0.563,0-1.133-0.055-1.711-0.18c-4.313-0.945-7.055-5.203-6.117-9.523l40-184
				c0.945-4.313,5.164-7.063,9.523-6.117c4.313,0.945,7.055,5.203,6.117,9.523l-40,184
				C287.01,381.454,283.697,384.008,280.017,384.008z"/>
		</g>
	</g>
	<g>
		<path style="fill:#B4B6BC;" d="M190.633,376.008c0.851,3.593,1.374,7.293,1.374,11.086v60.914c0,17.648,14.352,32,32,32h64
			c17.648,0,32-14.352,32-32v-60.914c0-3.79,0.527-7.491,1.384-11.086H190.633z"/>
	</g>
	<g>
		<path style="fill:#868491;" d="M256.002,376.008h-65.369c0.851,3.593,1.374,7.293,1.374,11.086v60.914c0,17.648,14.352,32,32,32
			h31.995V376.008z"/>
	</g>
	<g>
		<g>
			<rect x="256.002" y="400.008" style="fill:#868491;" width="64" height="16"/>
		</g>
	</g>
	<g>
		<g>
			<rect x="256.006" y="432.008" style="fill:#868491;" width="64" height="16"/>
		</g>
	</g>
	<g>
		<g>
			<rect x="192.002" y="400.008" style="fill:#5C546A;" width="64" height="16"/>
		</g>
	</g>
	<g>
		<g>
			<rect x="192.002" y="432.008" style="fill:#5C546A;" width="64" height="16"/>
		</g>
	</g>
</g>
</svg>
```

## File: src/assets/icons/lightning.svg
```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512.001 512.001" xml:space="preserve">
<path style="fill:#F7C600;" d="M320.721,198.144h89.213c10.252,0,15.805,12.002,9.17,19.816l-246.977,290.81
	c-6.01,7.076-17.505,1.603-15.803-7.522l34.96-187.391h-89.219c-10.252,0-15.805-12.003-9.168-19.816L339.874,3.23
	c6.009-7.076,17.505-1.603,15.803,7.522L320.721,198.144z"/>
<path style="fill:#F7D64C;" d="M320.721,198.144h89.213c10.252,0,15.805,12.002,9.17,19.816l-246.977,290.81
	c-6.01,7.076-17.505,1.603-15.803-7.522l34.96-187.391h-89.219c-10.252,0-15.805-12.003-9.168-19.816L339.874,3.23
	c6.009-7.076,17.505-1.603,15.803,7.522L320.721,198.144z"/>
<path style="opacity:0.1;enable-background:new    ;" d="M169.232,491.279l34.798-186.527c0.431-2.306-1.34-4.437-3.685-4.437
	h-86.407c-9.934,0-15.531-11.057-10.242-18.99l-10.799,12.716c-6.637,7.814-1.083,19.816,9.168,19.816h89.219l-34.96,187.391
	c-1.702,9.125,9.793,14.598,15.803,7.522l5.577-6.567C172.682,501.813,168.102,497.339,169.232,491.279z"/>
<path style="opacity:0.3;fill:#FFFFFF;enable-background:new    ;" d="M305.895,152.356c0,11.407,8.258,20.865,19.119,22.777
	l8.485-45.488c-1.443-0.281-2.93-0.438-4.454-0.438C316.26,129.205,305.895,139.57,305.895,152.356z M409.935,198.144h-49.122
	c5.533,18.106,22.37,31.276,42.287,31.276c2.278,0,4.516-0.174,6.702-0.506l9.303-10.955
	C425.74,210.146,420.187,198.144,409.935,198.144z M339.874,3.23l-46.501,54.753c1.366,26.244,19.04,48.162,43.078,55.835
	L355.677,10.75C357.379,1.626,345.883-3.845,339.874,3.23z"/>
<g>
	<path style="fill:#394049;" d="M284.746,292.976c-8.306,0-15.815-3.476-21.15-9.048c-5.335,5.574-12.844,9.048-21.15,9.048
		c-16.148,0-29.284-13.138-29.284-29.285c0-4.493,3.643-8.136,8.136-8.136s8.136,3.643,8.136,8.136
		c0,7.176,5.837,13.014,13.013,13.014s13.014-5.838,13.014-13.014c0-4.493,3.643-8.136,8.136-8.136s8.136,3.643,8.136,8.136
		c0,7.176,5.838,13.014,13.014,13.014c7.176,0,13.013-5.838,13.013-13.014c0-4.493,3.643-8.136,8.136-8.136
		c4.493,0,8.136,3.643,8.136,8.136C314.031,279.838,300.894,292.976,284.746,292.976z"/>
	<path style="fill:#394049;" d="M180.793,255.413c-4.493,0-8.136-3.643-8.136-8.136v-8.983c0-4.493,3.643-8.136,8.136-8.136
		s8.136,3.643,8.136,8.136v8.983C188.929,251.771,185.286,255.413,180.793,255.413z"/>
	<path style="fill:#394049;" d="M346.401,255.413c-4.493,0-8.136-3.643-8.136-8.136v-8.983c0-4.493,3.643-8.136,8.136-8.136
		s8.136,3.643,8.136,8.136v8.983C354.537,251.771,350.894,255.413,346.401,255.413z"/>
</g>
</svg>
```

## File: src/assets/icons/linkedin.svg
```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>LinkedIn-color</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Color-" transform="translate(-702.000000, -265.000000)" fill="#007EBB">
            <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">

</path>
        </g>
    </g>
</svg>
```

## File: src/assets/icons/mssql.svg
```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 -141.54 1478.201 1478.201" xmlns="http://www.w3.org/2000/svg">
<g transform="matrix(.569 0 0 .569 199.451 -82.735)">
<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-2901.952" y1="923.573" x2="-2061.249" y2="1420.331" gradientTransform="matrix(.1234 0 0 -.1234 1158.33 1550.273)">
<stop offset="0" stop-color="#909ca9"/>
<stop offset="1" stop-color="#ededee"/>
</linearGradient>
<path fill="url(#a)" d="M1410.773 814.195l-286.9 93.683-249.599 110.161-69.829 18.435c-17.784 16.916-36.431 34.049-56.599 51.397-22.119 19.082-42.72 36.433-58.553 49.008-17.564 13.88-43.587 39.902-56.814 56.38-19.735 24.721-35.348 50.96-42.071 71.13-11.928 36.433-6.07 73.297 16.916 107.346 29.492 43.369 88.261 87.606 156.785 117.749 34.916 15.4 93.683 35.132 137.92 46.19 73.512 18.651 215.771 38.819 294.054 41.857 15.828.65 37.082.65 37.947 0 1.737-1.088 13.881-24.289 27.979-53.129 48.142-98.238 82.838-190.402 101.703-269.119 11.276-47.706 20.166-111.246 26.019-186.492 1.521-21.036 2.169-91.514.868-115.37-1.953-39.033-5.423-70.692-10.84-101.703-.868-4.555-1.088-8.676-.652-8.892.865-.65 3.467-1.517 38.815-11.712l-7.153-16.912v-.005h.004zm-65.49 38.386c2.602 0 9.539 66.573 11.273 108.646.436 8.89.216 14.745-.216 14.745-1.733 0-36.649-20.599-61.583-36.212-21.687-13.663-62.888-40.988-69.393-46.192-2.173-1.517-1.957-1.733 15.828-7.807 30.14-10.194 101.706-33.18 104.091-33.18zm-146.161 48.143c1.953 0 6.937 2.816 18.865 10.191 44.671 27.974 105.393 61.805 131.415 73.083 8.022 3.469 8.887 2.166-9.542 14.746-39.468 26.889-88.697 53.344-148.983 80.018-10.624 4.771-19.514 8.456-19.73 8.456-.432 0 .865-5.418 2.598-11.925 14.53-54.001 22.772-108.647 23.208-152.452.216-21.687.216-21.687 2.169-22.334-.436.217-.22.217 0 .217zm-30.142 11.492c1.297 1.299.432 49.877-1.304 63.104-3.903 31.662-9.975 61.153-19.947 94.335-2.386 8.018-4.558 14.745-4.987 15.177-.872 1.083-30.581-27.975-40.339-39.251-16.916-19.518-30.141-39.035-39.9-58.117-4.988-9.759-12.793-28.84-12.144-29.492 3.469-2.385 117.753-46.622 118.621-45.756zm-141.826 55.731c.216 0 .432 0 .652.216.432.434 1.953 3.905 3.254 7.807 6.937 18.867 22.548 46.624 35.997 64.407 14.746 19.518 34.048 40.334 50.091 53.996 5.207 4.337 9.975 8.456 10.624 9.108 1.304 1.302 1.737 1.083-33.612 14.53-40.981 15.613-85.656 31.226-136.835 47.706a6825.474 6825.474 0 0 0-36.643 11.928c-1.955.652-1.303-.434 4.335-9.323 25.371-39.686 63.97-117.536 85.657-172.618 3.687-9.542 7.373-19.082 8.025-21.251.868-3.038 1.95-4.121 4.768-5.64 1.518-.43 3.038-.866 3.687-.866zm-43.367 17.999c.649.436-10.411 23.637-21.254 44.889-21.036 40.985-44.022 81.323-74.815 130.331-5.204 8.456-10.19 16.265-10.842 17.132-1.083 1.519-1.519 1.083-4.988-5.638-7.373-14.53-13.447-33.181-16.699-50.313-3.254-16.916-2.602-46.406 1.086-64.621 2.816-13.444 2.602-13.227 9.107-16.481 27.757-14.095 117.537-56.166 118.405-55.299zm374.073 15.182v9.107c0 48.359-5.204 114.716-12.797 163.077-1.301 8.456-2.389 15.393-2.602 15.613 0 0-6.288-1.733-13.661-3.905-32.527-10.193-67.875-25.156-99.754-42.718-21.038-11.494-51.612-30.363-50.743-31.231.213-.215 9.323-4.986 19.947-10.625 42.509-22.118 83.274-45.972 118.622-69.609 13.229-8.892 33.176-23.202 37.518-27.107l3.47-2.602zm-537.802 64.185c.867 0 .65 1.735-.651 9.542-.868 5.64-1.951 16.049-2.382 23.202-1.739 31.662 3.469 55.084 19.082 87.177 4.337 8.892 7.809 16.265 7.589 16.48-1.519 1.303-145.074 43.375-190.183 55.734-13.444 3.685-25.152 6.939-26.024 7.153-1.515.436-1.733.22-1.083-3.47 4.987-31.875 29.276-73.512 63.104-108.644 22.554-23.419 40.554-37.08 71.347-54.648 22.119-12.575 56.165-31.439 58.767-32.309.002-.217.218-.217.434-.217zm338.295 60.503c.216-.216 5.42 2.605 11.708 6.29 46.408 26.891 111.03 51.83 166.108 64.623l4.991 1.086-6.941 3.899c-28.84 16.049-123.606 55.515-220.538 91.732-14.098 5.202-27.975 10.409-30.581 11.492-2.602 1.083-4.988 1.735-4.988 1.519 0-.22 3.906-7.809 8.89-17.132 27.107-50.744 54.433-112.547 68.311-155.485 1.739-4.12 2.82-7.805 3.04-8.024zm-34.48 11.278c.22.221-1.517 4.771-3.687 9.975-18.865 45.756-43.59 95.636-75.249 151.583-8.022 14.314-14.746 25.808-14.966 25.808-.213 0-6.721-3.906-14.527-8.676-45.976-28.192-86.743-62.888-113.414-96.501l-3.905-4.771 19.732-5.422c70.696-19.298 130.762-40.116 190.4-65.704 8.459-3.471 15.4-6.292 15.616-6.292zm214.253 74.815s.217.217 0 0c.216 4.988-10.844 49.661-19.953 81.969-7.589 27.107-14.098 48.361-26.022 85.874-5.204 16.485-9.755 30.143-9.975 30.143-.216 0-1.517-.216-2.818-.647-64.405-11.714-122.089-27.977-176.303-49.661-15.182-6.074-36.866-15.833-38.167-16.916-.432-.438 12.58-6.506 29.06-13.663 98.669-43.154 201.024-92.164 236.153-113.196 4.119-2.603 7.373-3.903 8.025-3.903zm-494.646 16.916c.434.432-27.107 40.118-65.709 94.114-13.444 18.867-29.057 40.985-34.911 49.225-5.856 8.241-14.746 21.253-19.734 29.06l-9.112 14.096-9.759-8.24c-11.494-9.544-31.442-29.927-40.333-41.204-18.651-23.201-31.226-47.706-36.214-70.04-2.386-10.411-2.386-15.618-.22-16.265 3.252-.867 61.153-14.53 115.37-27.11 30.143-6.937 65.054-15.177 77.632-18.213 12.579-3.041 22.774-5.423 22.99-5.423zm27.756 10.626l6.937 7.806c31.231 34.914 63.108 60.724 101.708 83.272 6.941 3.906 12.144 7.373 11.708 7.594-1.514 1.083-134.016 48.136-195.385 69.389-34.478 12.143-62.888 21.901-63.102 21.901-.216 0-2.169-1.299-4.341-2.818l-3.901-2.82 6.288-9.106c20.383-29.493 45.976-61.803 101.707-129.028l38.381-46.19zm173.053 123.822c.213-.215 9.755 3.252 21.464 7.594 28.195 10.624 50.527 17.345 80.456 24.936 36.866 9.326 90.211 18.434 121.657 21.035 4.771.432 7.373.868 6.505 1.519-1.521.868-33.395 11.494-56.816 18.867-37.302 11.708-151.149 45.32-243.962 71.995-17.132 4.987-31.879 9.108-32.746 9.323-2.166.436-9.325-1.519-9.325-2.386 0-.431 5.204-7.153 11.494-14.527 31.225-37.3 62.238-78.935 88.044-118.403 7.154-10.846 13.229-19.736 13.229-19.953zm-38.17 1.087c.216.216-15.179 24.936-42.066 67.439-11.496 17.999-24.291 38.383-28.846 45.54-4.337 6.939-10.842 17.784-14.527 23.854l-6.29 11.061-3.252-.868c-7.809-2.169-62.672-21.471-77.202-27.325-18-7.157-36.649-15.829-50.529-23.202-17.346-9.326-39.03-23.206-37.297-23.637.433-.216 30.143-8.243 65.922-17.999 94.984-25.809 147.678-40.77 182.161-51.612 6.29-1.952 11.71-3.471 11.926-3.251zm269.985 63.318h.216c.868 2.171-34.26 99.755-47.06 130.547-2.815 6.939-3.896 8.677-5.417 8.456-3.687-.213-54.646-7.37-85.66-11.925-53.994-8.24-144.641-24.073-167.409-29.275l-5.204-1.083 32.307-7.378c69.396-15.613 102.791-24.069 136.619-34.478 42.722-13.011 85.011-29.276 127.729-49.225 6.722-3.037 12.361-5.422 13.879-5.639z"/>
<linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-2882.7" y1="10288.81" x2="-2206.249" y2="10288.81" gradientTransform="matrix(.1234 0 0 -.1234 1158.33 1550.273)">
<stop offset="0" stop-color="#939fab"/>
<stop offset="1" stop-color="#dcdee1"/>
</linearGradient>
<path fill="url(#b)" d="M1114.983 145.414c-4.771-.647-81.757 27.11-131.415 47.275-67.01 27.327-119.052 53.351-151.148 75.899-11.925 8.461-26.891 23.422-29.273 29.276-.867 2.169-1.303 4.771-1.303 7.373l29.06 27.541 69.175 22.119 164.594 29.493 188.228 32.312 1.953-16.264c-.649 0-1.085-.216-1.73-.216l-24.728-3.905-4.984-8.89c-25.59-45.107-53.781-101.056-70.261-138.789-12.793-29.276-24.938-63.102-31.662-87.391-3.687-14.746-4.119-15.613-6.501-15.829v-.005h-.005zm-3.474 11.063h.223c.213.214 1.081 6.29 1.95 13.442 3.683 30.364 10.411 59.635 21.035 91.297 8.022 23.855 8.022 22.555-1.301 19.734-22.119-6.07-121.221-23.202-193-33.177-11.494-1.519-21.253-3.036-21.253-3.252-.867-.867 51.827-28.41 75.031-39.25 29.709-13.665 111.246-47.711 117.315-48.794zm-209.047 97.15l8.461 2.816c45.97 15.616 161.551 37.736 225.31 42.94 7.154.651 13.229 1.303 13.442 1.303.216.216-5.852 3.469-13.661 7.154-30.79 15.397-64.621 34.264-88.042 48.794-6.937 4.335-13.229 7.807-14.094 7.807-.868 0-5.42-.868-10.191-1.519l-8.674-1.303-21.683-21.253c-38.167-37.08-68.094-65.704-79.588-76.549l-11.28-10.19zm-8.671 6.721l30.576 38.168c16.696 21.035 33.611 41.635 37.301 46.187 3.683 4.557 6.721 8.245 6.505 8.461-.868.65-44.236-7.809-67.226-13.011-23.637-5.423-33.395-8.025-47.924-12.577l-11.928-3.905v-3.038c.216-14.53 18.651-36.214 49.877-58.331l2.819-1.954zm259.791 52.046c.869 0 1.95 1.951 4.552 7.806 7.373 16.263 30.364 60.07 35.997 68.526 1.74 2.822 4.771 3.038-25.802-1.95-73.512-11.93-97.152-15.829-97.152-16.263 0-.216 2.169-1.735 4.988-3.254 22.771-12.575 45.756-28.624 66.142-45.756 4.988-4.121 9.542-8.024 10.407-8.676.216-.433.652-.649.868-.433z"/>
<radialGradient id="c" cx="-14217.448" cy="7277.705" r="898.12" gradientTransform="matrix(-.1185 -.0178 -.036 .237 -198.955 -1314.415)" gradientUnits="userSpaceOnUse">
<stop offset="0" stop-color="#ee352c"/>
<stop offset="1" stop-color="#a91d22"/>
</radialGradient>
<path fill="url(#c)" d="M804.66 294.828s-4.768 7.593-.215 18.87c2.822 6.937 11.061 15.393 20.384 24.069 0 0 96.5 94.114 108.211 107.561 53.344 61.585 76.549 122.305 78.718 206.012 1.301 53.78-8.894 101.054-34.264 155.919-45.106 98.453-140.307 207.098-287.117 327.67l21.472-7.157c13.878-10.411 32.745-21.467 76.982-45.756 102.137-55.952 217.071-107.346 358.028-160.258 202.971-76.335 536.715-165.681 726.676-194.736l19.737-3.038-3.038-4.771c-17.345-26.891-29.276-43.587-43.59-61.369-41.633-51.612-92.157-93.463-153.964-128.161-85.007-47.489-194.956-84.571-334.173-112.112-26.239-5.207-83.923-15.181-130.763-22.337-99.321-15.393-163.51-26.021-234.203-38.165-25.37-4.339-63.323-10.843-88.478-16.263-13.011-2.822-37.947-8.676-57.464-15.398-15.613-6.075-38.168-12.147-42.939-30.58zm55.952 54.216c.214-.214 3.683 1.083 8.24 2.602 8.24 2.816 18.865 6.07 31.446 9.542a1599.47 1599.47 0 0 0 28.624 7.589c13.011 3.251 23.852 6.288 24.068 6.288 1.521 1.519 23.424 71.558 30.797 98.449 2.815 10.195 4.988 18.867 4.771 18.867-.223.22-2.605-3.469-5.423-8.456-25.373-44.673-65.491-89.995-111.899-126.428-6.069-4.333-10.624-8.237-10.624-8.453zm106.692 29.492c1.085 0 5.856.651 11.708 1.951 36.866 8.24 103.008 20.818 145.293 27.975 7.157 1.083 12.797 2.387 12.797 2.818 0 .436-2.605 1.951-5.859 3.688-7.153 3.685-35.997 20.815-45.536 27.322-24.073 16.047-45.756 33.395-61.371 49.008-6.288 6.29-11.712 11.494-11.712 11.494s-1.297-3.685-2.386-8.242c-7.802-30.143-24.069-74.816-38.815-106.258-2.386-4.986-4.339-9.541-4.339-9.973 0 .433 0 .217.22.217zm187.795 35.781c1.301.432 3.47 7.806 7.806 24.069 8.025 31.446 11.712 66.576 10.411 99.321-.436 9.108-.868 17.564-1.304 18.651l-.649 2.166-11.276-3.685c-23.204-7.373-60.935-18.435-93.245-27.541-18.436-4.988-33.395-9.542-33.395-9.975 0-1.303 26.891-28.192 38.383-38.383 21.898-19.303 81.316-65.275 83.269-64.623zm14.963 2.166c.652-.647 89.779 14.746 130.331 22.554 30.145 5.854 73.948 14.963 76.549 16.049 1.301.432-3.254 3.034-17.784 9.539-57.248 25.808-99.754 49.008-142.036 77.202-11.06 7.373-20.386 13.444-20.602 13.444-.216 0-.433-6.287-.433-13.878 0-41.201-8.241-82.838-23.424-117.968-1.517-3.47-2.818-6.722-2.601-6.942zm230.516 45.542c.652.65-2.169 18.217-4.771 28.624-7.806 32.312-28.84 80.24-54.643 125.343-4.558 8.024-8.677 14.53-9.114 14.746-.429.216-6.285-3.038-13.009-6.941-25.154-14.746-53.778-28.624-85.007-41.637-8.671-3.685-16.263-6.723-16.48-7.153-1.521-1.303 68.308-47.493 105.174-69.612 29.276-17.781 76.982-44.239 77.85-43.37zm16.48 2.601c1.953 0 41.421 10.844 62.019 16.916 50.963 15.181 109.512 36.648 147.679 53.996l15.828 7.159-11.056 2.6c-93.245 21.467-173.049 46.192-250.034 77.418-6.289 2.602-11.928 4.771-12.357 4.771-.436 0 1.733-4.987 4.552-11.061 23.204-49.225 38.167-100.62 41.85-144.427.221-4.121.867-7.372 1.519-7.372zm-392.938 90.213c.649-.652 30.793 6.506 47.057 11.056 24.721 6.942 77.198 24.505 77.198 25.808 0 .216-5.853 5.204-12.79 11.278-28.408 23.637-55.734 48.572-88.481 80.234-9.759 9.328-17.997 16.917-18.429 16.917-.436 0-.649-1.304-.436-3.038 4.987-36.433 3.906-83.272-3.034-130.763-.653-6.074-1.302-11.276-1.085-11.492zm633.433.652c.429.431-13.881 22.984-22.988 35.777-13.009 18.649-32.098 43.375-75.252 97.588-22.765 28.622-48.358 60.936-56.812 71.778-8.678 10.842-15.831 19.948-16.051 19.948-.216 0-3.031-3.901-6.069-8.671-24.289-36.433-53.349-68.311-87.829-96.935-6.505-5.423-13.658-11.278-16.044-13.013-2.386-1.734-4.339-3.469-4.339-3.685 0-.649 36.862-16.483 64.841-27.757 49.01-19.952 115.794-43.805 165.892-59.203 26.24-8.239 54.215-16.263 54.651-15.827zm16.696 4.334c.865-.215 6.072 2.387 12.361 6.07 52.697 30.143 104.305 68.962 145.077 108.864 11.492 11.278 39.9 40.77 39.464 40.986 0 0-9.975.867-21.683 1.733-91.296 6.942-208.178 26.239-320.511 53.345-7.589 1.733-14.31 3.252-14.746 3.252-.429 0 8.025-8.456 18.653-18.647 65.922-63.538 96.067-103.656 131.628-175.22 4.986-10.623 9.325-19.731 9.757-20.383-.216 0-.216 0 0 0zm-482.936 49.446c3.038.647 31.229 13.88 52.48 24.503 19.517 9.755 48.794 25.372 50.311 26.671.216.216-10.195 5.638-22.984 11.928-40.772 20.384-75.684 39.682-112.118 61.802-10.408 6.29-19.082 11.497-19.298 11.497-.868 0-.652-.872 5.204-11.497 19.518-35.561 35.129-78.065 44.023-119.486.864-3.252 1.733-5.418 2.382-5.418zm-28.192 5.202c.652.652-6.721 27.323-11.273 41.853-8.894 27.541-23.856 62.02-38.383 88.043-3.474 6.069-8.677 14.961-11.496 19.948l-5.42 8.674-12.144-11.707c-14.094-13.663-25.59-22.12-40.333-29.712-5.859-3.033-10.411-5.638-10.411-6.069 0-1.735 37.082-35.347 65.49-59.635 20.383-17.566 63.321-52.045 63.97-51.395zm172.404 70.913l10.627 6.937c24.282 15.833 52.906 36.866 74.813 55.298 12.357 10.19 36.21 31.662 40.985 36.866l2.598 2.822-17.561 4.986c-99.321 27.538-176.087 52.043-265.649 85.007-9.975 3.685-18.433 6.721-19.085 6.721-1.297 0-2.385 1.083 19.954-19.519 57.251-52.691 107.992-110.812 145.726-167.411l7.592-11.707zm-45.324 11.276c.432.432-29.276 42.284-47.06 65.922-21.251 28.192-58.985 75.465-85.007 106.256-10.84 12.797-20.163 23.422-20.599 23.64-.652.216-.868-3.036-.868-8.024 0-26.242-6.721-54.216-18.433-78.068-4.988-9.975-5.856-12.361-4.768-13.444 4.119-3.688 67.223-39.686 107.123-61.153 26.89-14.312 68.956-35.563 69.612-35.129zm-274.107 67.225c.652 0 5.64 2.6 11.279 5.638 13.878 7.589 26.239 16.046 37.298 25.156.432.432-5.204 4.988-12.577 10.406-20.602 14.746-51.828 38.385-70.041 52.915-19.088 15.18-19.734 15.613-17.568 12.361 14.314-21.903 21.467-34.264 29.06-50.093 6.721-14.094 13.442-30.793 18.213-45.323 1.734-6.289 3.904-11.06 4.336-11.06zm73.083 57.248c1.081-.214 2.386 1.735 8.238 10.411 12.361 18.429 21.903 43.154 24.292 63.104l.429 4.339-29.705 11.494c-53.133 20.599-102.139 40.985-135.322 56.162-9.322 4.339-25.587 12.144-36.211 17.352-10.627 5.418-19.301 9.539-19.301 9.323s6.721-5.204 14.961-11.278c64.844-47.055 121.007-98.669 163.076-150.279 4.555-5.423 8.677-10.411 9.107-10.627l.436-.001zm-33.612 8.242c.868.867-23.853 28.84-40.768 45.971-41.853 42.723-83.273 76.12-134.669 108.649-6.505 4.119-12.359 7.804-13.011 8.24-1.519.867.432-1.303 22.986-25.808 14.314-15.397 25.155-28.408 37.516-44.453 8.24-10.624 9.759-12.143 21.688-20.604 31.878-22.987 105.39-72.864 106.258-71.995z"/>
</g>
<path fill="#231F1F" d="M265.747 900.102c-2.276 0-4.553.217-6.809.217-45.975 2.45-76.983 22.683-95.113 62.195-15.506 35.735-13.813 82.446.174 118.4 16.265 35.131 42.547 53.672 86.416 60.675 9.282 1.52 15.506 6.616 33.483 27.606l22.12 25.915h40.118l-26.676-26.892c-14.746-14.745-26.673-27.584-26.673-28.712 0-1.127 5.641-3.599 12.469-5.68 22.51-6.812 41.203-24.202 54.279-50.854 10.583-21.402 12.102-28.018 13.619-54.646 3.969-79.26-37.82-128.813-107.409-128.247l.002.023zm35.173 207.27c-19.517 9.453-47.857 11.34-66.356 4.553-19.127-7.025-37.646-26.889-45.975-49.377-9.259-24.591-7.937-69.956 2.646-90.386 17.023-32.528 39.534-47.49 72.43-47.49 48.792 0 76.549 29.884 80.171 86.048 2.863 46.885-12.838 82.058-42.895 96.632l-.021.02zm693.025-139.568c-16.828 0-29.709 6.811-38.385 20.231l-6.809 10.627v-27.628h-29.123v165.678h29.104v-52.956c0-48.424.604-54.084 7.371-67.335 9.326-18.172 25.371-27.234 40.879-22.897l10.408 3.036v-28.712h-13.445v-.044zm-171.098-1.519c-5.705 0-11.756.76-17.781 2.084-38.971 10.19-60.938 47.489-59.594 85.873 0 32.139 6.244 48.206 21.752 65.057 31.77 26.065 60.502 28.146 99.275 14.161 6.615-2.819 13.814-6.072 13.814-6.072v-26.065l-13.814 7.156c-31.379 13.661-55.016 13.661-73.949-2.43-12.076-12.296-17.391-27.042-19.84-43.868h117.426v-22.339c0-45.539-27.41-74.294-67.313-73.557h.024zm-47.492 72.647s4.338-28.407 20.428-39.554c7.744-5.466 16.633-8.11 25.328-8.11 8.719 0 17.414 2.818 24.592 8.306 14.748 11.341 17.219 39.143 17.219 39.143h-87.566v.215h-.001zm-702.111-29.881c-31.573-19.128-45.582-32.921-43.869-49.185 4.9-44.997 60.503-38.773 91.295-21.749l.219-30.272s-17.024-7.373-41.421-7.764c-37.429-.564-61.63 11.709-72.97 36.691-16.656 36.865-1.908 64.665 51.396 95.677 29.925 17.412 43.152 32.528 43.152 49.008 0 34.047-41.05 45.931-83.401 24.57-8.716-4.337-16.09-7.959-16.48-7.959-1.519 9.651-.736 32.745-.736 32.745s13.012 5.466 32.527 9.236c48.4 9.65 92.445-13.054 96.608-49.919 3.622-34.609-8.893-52.761-56.318-81.104l-.002.025zm1178.454-43.155c-5.682 0-11.711.78-18 2.103-38.924 10.192-60.85 47.492-59.354 85.876 0 32.095 6.225 48.011 21.729 64.838 31.771 26.089 60.504 28.191 99.473 14.184 6.592-2.818 13.77-6.026 13.77-6.026v-26.109l-13.791 7.197c-31.443 13.619-55.082 13.619-73.947-2.471-12.145-12.274-17.414-26.847-19.865-43.871h117.232v-22.336c0-45.321-27.412-74.099-67.313-73.339l.066-.046zm-47.492 72.646s4.381-28.365 20.449-39.729c7.721-5.485 16.611-8.132 25.307-8.132 8.674 0 17.414 2.819 24.594 8.327 14.746 11.342 17.219 39.338 17.219 39.338h-87.545l-.024.196zm-533.809-29.123c-31.573-19.083-45.54-32.92-43.848-49.185 4.9-45.02 60.504-38.773 91.296-21.749l.218-30.272s-17.024-7.374-41.421-7.722c-37.429-.563-61.63 11.711-72.991 36.692-16.633 36.864-1.692 64.666 51.437 95.677 29.884 17.393 43.111 32.312 43.111 48.792 0 34.047-41.029 46.126-83.381 24.569-8.674-4.337-16.046-7.916-16.48-7.916-1.519 9.649-.736 32.746-.736 32.746s12.858 5.27 32.31 9.237c48.445 9.672 92.51-13.012 96.653-49.877 3.6-34.437-8.891-52.587-56.167-80.952v-.04zm752.421-42.005c-16.828 0-29.859 6.829-38.383 20.254l-6.811 10.582v-27.583h-29.123V1136.3h29.102v-52.954c0-48.403.584-54.085 7.375-67.313 9.324-18.15 25.369-27.235 40.875-22.878l10.408 3.035v-28.775h-13.443zm-984.021 41.05V902.941h-29.361v233.728h123.478v-27.604h-94.116v-100.601zm679.015 32.896l-24.201 62.975-23.27-63.322-23.637-70.173h-30.055c19.475 55.212 40.658 111.376 62.02 165.829 9.26.216 18.541 0 27.799 0l32.682-82.058 33.287-83.75h-28.732s-12.688 33.266-25.914 70.521l.021-.022zM506.455 839.251c4.728 0 8.674-1.516 11.927-4.769 3.208-3.211 4.9-6.984 4.9-11.711 0-4.728-1.692-8.675-4.9-11.711-3.253-3.035-7.005-4.555-11.711-4.555-4.769 0-8.717 1.52-11.927 4.728-3.252 3.211-4.727 7.158-4.727 11.712 0 4.771 1.519 8.716 4.727 11.711 3.037 3.034 6.984 4.553 11.711 4.553v.042zm-10.408-26.889c2.818-2.818 6.245-4.121 10.625-4.121 4.121 0 7.548 1.303 10.411 4.121 2.819 2.819 4.337 6.245 4.337 10.409 0 4.163-1.518 7.764-4.337 10.582-2.862 2.817-6.29 4.163-10.411 4.163-4.185 0-7.59-1.301-10.408-4.163-2.819-2.818-4.337-6.419-4.337-10.582 0-4.164 1.301-7.589 4.12-10.409zm7.003 11.928h1.908c1.346 0 2.668 1.3 3.795 3.773l2.279 5.116h3.577l-2.818-5.683c-1.149-2.275-2.276-3.598-3.6-3.969 1.67-.39 2.992-.953 3.947-2.082.952-.974 1.3-2.298 1.3-3.795 0-1.734-.542-3.034-1.69-3.989-1.302-1.084-3.384-1.669-6.074-1.669h-6.026v21.187h3.035v-8.891l.367.002zm0-9.846h2.647c1.908 0 3.253.39 3.99.953.716.564.911 1.303.911 2.646 0 2.45-1.52 3.601-4.337 3.601h-3.252v-7.2h.041zm-485.018 7.958c0-7.373-.216-12.858-.39-16.09h.174c.758 3.814 1.691 6.657 2.45 8.543l28.19 62.975h4.728l28.19-63.538c.761-1.733 1.52-4.337 2.452-7.959h.216c-.563 6.29-.758 11.754-.758 16.112v55.581h9.648v-82.622h-12.1L54.919 852.87c-.955 2.276-2.278 5.683-3.969 10.193h-.392c-.563-2.234-1.886-5.639-3.772-9.803l-25.33-58.053H8.598v82.621h9.281v-55.385l.153-.041zm96.045.154h8.329v51.458h-8.329v-51.458zm4.164-18.868c1.736 0 3.21-.587 4.337-1.734 1.15-1.129 1.91-2.603 1.91-4.337 0-1.692-.565-3.211-1.887-4.337-1.171-1.15-2.668-1.737-4.381-1.737-1.69 0-3.208.587-4.338 1.737-1.146 1.126-1.907 2.645-1.907 4.337 0 1.887.586 3.208 1.907 4.337 1.304 1.147 2.647 1.734 4.338 1.734h.021zm63.54 71.455v-9.066c-4.555 3.405-9.456 5.098-14.53 5.098-6.07 0-10.995-2.081-14.595-6.07-3.577-3.947-5.485-9.436-5.485-16.266 0-7.156 1.908-12.84 5.854-17.177 3.795-4.163 8.719-6.245 14.748-6.245 4.922 0 9.647 1.52 14.009 4.557v-9.65c-3.968-2.082-8.5-3.037-13.619-3.037-9.456 0-16.827 3.037-22.335 8.894-5.466 5.854-8.285 13.813-8.285 23.42 0 8.543 2.45 15.722 7.548 21.209 5.312 5.637 12.102 8.5 20.428 8.5 6.438-.178 11.707-1.523 16.262-4.167zm23.831-27.433c0-6.788 1.518-12.273 4.337-16.049 2.647-3.403 5.855-5.116 9.65-5.116 3.21 0 5.486.585 7.155 1.908v-9.846c-1.3-.563-3.187-.758-5.637-.758-3.405 0-6.439 1.146-9.107 3.253-2.819 2.231-5.074 5.638-6.397 9.975h-.216v-12.08h-9.433v58.985h9.454V847.71h.194zm54.279 31.443c8.892 0 16.048-2.863 21.36-8.543 5.29-5.641 7.936-13.229 7.936-22.686 0-9.647-2.427-17.021-7.372-22.51-4.9-5.483-11.711-8.132-20.603-8.132s-16.048 2.647-21.36 7.764c-5.681 5.641-8.674 13.599-8.674 23.813 0 8.891 2.429 16.265 7.548 21.751 5.29 5.68 12.295 8.521 21.165 8.521v.022zm-13.445-48.055c3.6-3.795 8.329-5.683 14.182-5.683 6.074 0 10.627 1.888 14.01 5.683 3.404 3.969 5.097 9.63 5.097 17.197 0 7.198-1.519 12.859-4.729 16.654-3.208 3.969-7.936 6.071-14.183 6.071-6.071 0-10.777-2.104-14.377-6.071-3.577-3.99-5.291-9.456-5.291-16.654-.368-7.156 1.519-13.01 5.291-17.197zm84.141 42.916c3.599-3.208 5.509-7.155 5.509-12.102 0-4.337-1.52-7.936-4.338-10.777-2.3-2.275-5.854-4.337-10.994-6.419-4.556-1.906-7.374-3.6-8.893-4.923-1.517-1.517-2.45-3.402-2.45-6.071 0-2.45.955-4.337 2.821-5.855 1.908-1.516 4.337-2.253 7.59-2.253 5.096 0 9.454 1.343 13.443 4.185v-9.456c-3.816-1.906-7.958-2.817-12.686-2.817-6.071 0-11.189 1.671-14.964 4.899-3.969 3.212-5.854 7.375-5.854 12.274 0 4.337 1.3 7.938 3.771 10.582 2.082 2.256 5.641 4.556 10.583 6.614 4.729 2.083 7.938 3.968 9.65 5.485 1.691 1.52 2.45 3.405 2.45 5.641 0 5.506-3.772 8.349-11.146 8.349-5.682 0-10.776-1.866-15.333-5.638v10.189c4.121 2.475 9.066 3.601 14.53 3.601 7.005-.368 12.49-2.081 16.264-5.486l.047-.022zm45.019-56.73c-8.893 0-16.048 2.647-21.361 7.764-5.638 5.641-8.674 13.599-8.674 23.813 0 8.891 2.452 16.265 7.547 21.751 5.313 5.68 12.295 8.521 21.187 8.521 9.107 0 16.048-2.861 21.36-8.545 5.313-5.637 7.958-13.227 7.958-22.683 0-9.65-2.472-17.022-7.374-22.509-5.115-5.487-11.927-8.133-20.601-8.133l-.042.021zm18.345 31.012c0 7.198-1.518 12.859-4.727 16.654-3.21 3.969-7.938 6.071-14.184 6.071-6.074 0-10.778-2.104-14.379-6.071-3.577-3.99-5.29-9.456-5.29-16.654 0-7.59 1.888-13.444 5.683-17.393 3.576-3.773 8.306-5.682 14.182-5.682 5.854 0 10.561 1.907 13.964 5.682 3.037 4.163 4.729 9.824 4.729 17.393h.022zm25.547 29.513h9.433v-51.068h13.813v-7.938H428.93v-9.108c0-8.282 3.208-12.446 9.845-12.446 2.234 0 4.511.563 6.203 1.518v-8.521c-1.692-.759-3.969-.932-6.812-.932-5.095 0-9.258 1.519-12.664 4.727-3.969 3.773-6.071 8.674-6.071 15.312v9.672h-9.978v7.936h9.978v50.876l.067-.028zm38.75-16.091c0 11.538 5.098 17.414 15.506 17.414 3.774 0 6.614-.606 8.891-1.951v-8.11c-1.734 1.302-3.795 1.91-6.071 1.91-3.208 0-5.464-.762-6.788-2.475-1.345-1.689-2.103-4.554-2.103-8.501v-33.286h14.961v-7.938h-14.961v-17.39c-3.253 1.127-6.44 2.082-9.456 3.034v14.355h-10.192v7.938h10.192v34.979l.021.021zm1014.88 108.73c-3.209-3.034-7.004-4.553-11.709-4.553-4.77 0-8.719 1.519-11.928 4.771-3.209 3.188-4.729 7.155-4.729 11.711 0 4.728 1.52 8.675 4.705 11.709 3.211 3.036 7.156 4.556 11.928 4.556 4.705 0 8.674-1.52 11.928-4.729 3.188-3.253 4.879-7.004 4.879-11.709-.174-4.771-1.887-8.719-5.096-11.754l.022-.002zm-1.517 22.338c-2.82 2.818-6.246 4.119-10.41 4.119-4.119 0-7.545-1.301-10.408-4.119-2.818-2.863-4.338-6.441-4.338-10.627 0-4.121 1.301-7.545 4.164-10.408 2.818-2.817 6.225-4.121 10.582-4.121 4.121 0 7.549 1.304 10.41 4.121 2.818 2.863 4.336 6.287 4.336 10.408 0 4.382-1.301 7.764-4.336 10.627zm-8.502-9.651c1.691-.39 3.037-1.149 3.969-2.081.955-.977 1.303-2.301 1.303-3.815 0-1.692-.543-3.037-1.691-3.969-1.301-1.085-3.404-1.671-6.07-1.671h-6.029v21.164h3.037v-8.891h1.885c1.303 0 2.604 1.3 3.773 3.773l2.254 5.096h3.602l-2.818-5.683c-.977-2.472-2.105-3.601-3.252-3.97l.037.047zm-2.082-1.907h-3.252v-7.155h2.668c1.887 0 3.209.345 3.969.932.758.563.932 1.301.932 2.646 0 2.45-1.518 3.579-4.336 3.579l.019-.002zM933.443 816.353h2.646v-21.187h7.002v-2.646h-16.652v2.646h7.006v21.187h-.002zm16.047-15.917c0-2.062 0-3.753-.152-4.705.174 1.126.564 1.887.738 2.45l8.133 18.172h1.301l8.152-18.347c.219-.563.393-1.301.76-2.275-.174 1.887-.174 3.401-.174 4.553v16.048h2.82V792.52h-3.406l-7.371 16.438c-.174.587-.762 1.734-1.129 3.037h-.217c-.152-.761-.541-1.519-1.084-2.818l-7.373-16.655h-3.816v23.854h2.666v-15.917l.152-.023z"/>
</svg>
```

## File: src/assets/icons/phone.svg
```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512.001 512.001" xml:space="preserve">
<path style="fill:#2A2A33;" d="M203.622,42.353v427.295c0,23.391,18.961,42.353,42.352,42.353h206.38
	c23.391,0,42.352-18.963,42.352-42.353V42.353C494.708,18.963,475.746,0,452.355,0H245.974C222.583,0,203.622,18.963,203.622,42.353
	z"/>
<path style="opacity:0.1;enable-background:new    ;" d="M216.973,469.648V42.353C216.973,18.963,235.935,0,259.326,0h-13.352
	c-23.391,0-42.352,18.961-42.352,42.352v427.295c0,23.391,18.961,42.352,42.352,42.352h13.352
	C235.935,512,216.973,493.039,216.973,469.648z"/>
<path style="fill:#3F3F4D;" d="M481.356,469.648V42.353C481.356,18.963,462.395,0,439.003,0h13.352
	c23.391,0,42.352,18.961,42.352,42.352v427.295c0,23.391-18.961,42.352-42.352,42.352h-13.352
	C462.395,512,481.356,493.039,481.356,469.648z"/>
<g>
	<rect x="247.995" y="59.158" style="fill:#5B5D6E;" width="202.354" height="393.681"/>
	<circle style="fill:#5B5D6E;" cx="349.166" cy="482.78" r="11.526"/>
	<circle style="fill:#5B5D6E;" cx="349.166" cy="29.646" r="8.636"/>
</g>
<path style="fill:#74D6FF;" d="M349.165,312.457l-65.504-62.035c2.764-10.777,4.235-22.072,4.235-33.712
	c0-74.724-60.576-135.3-135.3-135.3s-135.301,60.576-135.301,135.3s60.576,135.3,135.3,135.3c42.204,0,79.891-19.326,104.704-49.609
	L349.165,312.457z"/>
<polygon style="fill:#FF6465;" points="152.595,155.819 120.382,216.711 152.595,283.719 230.287,249.364 230.287,155.819 "/>
<polygon style="fill:#E65A5B;" points="74.903,155.819 74.903,249.364 152.595,283.719 152.595,190.174 152.595,155.819 "/>
<polygon style="fill:#FF8080;" points="74.903,155.819 152.595,190.174 230.287,155.819 152.595,121.464 "/>
</svg>
```

## File: src/assets/icons/react.svg
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 -14 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z" fill="#00D8FF">
</path>
    </g>
</svg>
```

## File: src/assets/icons/rocket.svg
```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<circle style="fill:#273B7A;" cx="256" cy="256" r="256"/>
<path style="fill:#121149;" d="M506.923,306.941L287.125,87.143l-22.761,225.835l-54.451-54.451l-37.319,119.965l129.383,129.383
	C404.842,489.22,486.295,409.105,506.923,306.941z"/>
<path style="fill:#EAA22F;" d="M212.423,339.028c0-24.067,19.509-43.577,43.577-43.577s43.577,19.509,43.577,43.577
	S256,444.25,256,444.25S212.423,363.096,212.423,339.028z"/>
<path style="fill:#E09112;" d="M299.577,339.028c0-24.067-19.509-43.577-43.577-43.577c-0.193,0-0.383,0.012-0.574,0.014v147.706
	c0.371,0.696,0.574,1.077,0.574,1.077S299.577,363.094,299.577,339.028z"/>
<path style="fill:#FFC61B;" d="M224.873,347.834c0-17.191,13.936-31.127,31.127-31.127s31.127,13.936,31.127,31.127
	S256,422.993,256,422.993S224.873,365.025,224.873,347.834z"/>
<path style="fill:#EAA22F;" d="M287.127,347.834c0-17.191-13.936-31.127-31.127-31.127c-0.193,0-0.381,0.026-0.574,0.029v105.177
	c0.36,0.679,0.574,1.079,0.574,1.079S287.127,365.025,287.127,347.834z"/>
<path style="fill:#FEE187;" d="M328.202,209.263c0-53.922-25.862-119.648-61.949-139.976c-6.37-3.589-14.139-3.589-20.509,0
	c-36.087,20.33-61.949,86.056-61.949,139.976c0,60.013,21.256,104.231,30.944,123.775h82.516
	C306.947,313.492,328.202,276.777,328.202,209.263z"/>
<path style="fill:#FFC61B;" d="M328.202,209.263c0-53.922-25.862-119.648-61.949-139.976c-3.358-1.891-7.102-2.758-10.828-2.655
	V333.04h41.832C306.947,313.492,328.202,276.777,328.202,209.263z"/>
<path style="fill:#FF5419;" d="M266.254,69.285c-6.37-3.589-14.139-3.589-20.509,0c-15.508,8.737-29.118,25.869-39.608,46.833
	h99.726C295.372,95.154,281.762,78.022,266.254,69.285z"/>
<path style="fill:#C92F00;" d="M266.254,69.285c-3.358-1.891-7.102-2.757-10.828-2.655v49.488h50.438
	C295.372,95.154,281.762,78.022,266.254,69.285z"/>
<circle style="fill:#E09112;" cx="256" cy="188.63" r="41.258"/>
<path style="fill:#FF5419;" d="M256,147.375c-0.193,0-0.383,0.012-0.574,0.014v82.487c0.191,0.003,0.381,0.014,0.574,0.014
	c22.787,0,41.258-18.472,41.258-41.258S278.787,147.375,256,147.375z"/>
<circle style="fill:#386895;" cx="256" cy="188.63" r="30.944"/>
<path style="fill:#273B7A;" d="M256,157.689c-0.193,0-0.381,0.026-0.574,0.029v61.83c0.193,0.003,0.381,0.029,0.574,0.029
	c17.089,0,30.944-13.853,30.944-30.944C286.944,171.544,273.089,157.689,256,157.689z"/>
<path style="fill:#FF5419;" d="M194.624,246.305c0,0-72.521,21.08-44.056,88.111c11.536,27.167,22.028,44.077,22.028,44.077h39.348
	c0,0-28.925-44.077,0-66.105L194.624,246.305z"/>
<path style="fill:#C92F00;" d="M317.376,246.305c0,0,72.521,21.08,44.056,88.111c-11.536,27.167-22.028,44.077-22.028,44.077
	h-39.348c0,0,28.925-44.077,0-66.105L317.376,246.305z"/>
<path style="fill:#FF5419;" d="M261.73,374.296H250.27c-2.532,0-4.584-2.053-4.584-4.584v-93.977c0-2.532,2.053-4.584,4.584-4.584
	h11.461c2.532,0,4.584,2.053,4.584,4.584v93.977C266.314,372.245,264.263,374.296,261.73,374.296z"/>
<path style="fill:#C92F00;" d="M261.73,271.15h-6.304v103.146h6.304c2.532,0,4.584-2.053,4.584-4.584v-93.977
	C266.314,273.203,264.263,271.15,261.73,271.15z"/>
</svg>
```

## File: src/assets/icons/target.svg
```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<circle style="fill:#CEE8FA;" cx="283.823" cy="283.824" r="143.032"/>
<path style="fill:#2D527C;" d="M283.823,441.791c-87.104,0-157.967-70.863-157.967-157.967s70.863-157.967,157.967-157.967
	s157.967,70.863,157.967,157.967S370.926,441.791,283.823,441.791z M283.823,155.733c-70.629,0-128.091,57.461-128.091,128.091
	s57.461,128.091,128.091,128.091s128.091-57.461,128.091-128.091S354.454,155.733,283.823,155.733z"/>
<path style="fill:#CEE8FA;" d="M283.823,210.506c40.493,0,73.318,32.825,73.318,73.318s-32.825,73.318-73.318,73.318
	s-73.318-32.825-73.318-73.318"/>
<path style="fill:#2D527C;" d="M283.823,372.079c-48.665,0-88.256-39.59-88.256-88.256c0-8.25,6.688-14.938,14.938-14.938
	s14.938,6.688,14.938,14.938c0,32.19,26.189,58.38,58.38,58.38s58.38-26.189,58.38-58.38s-26.189-58.38-58.38-58.38
	c-8.25,0-14.938-6.688-14.938-14.938c0-8.25,6.688-14.938,14.938-14.938c48.665,0,88.256,39.59,88.256,88.256
	S332.489,372.079,283.823,372.079z"/>
<polygon style="fill:#CEE8FA;" points="107.881,55.068 102.614,102.613 55.068,107.881 14.938,67.752 67.752,14.938 "/>
<path style="fill:#2D527C;" d="M283.823,55.647c-57.543,0-110.171,21.421-150.353,56.696l-15.219-15.219l4.477-40.412
	c0.499-4.508-1.077-9-4.284-12.207L78.316,4.374c-5.833-5.832-15.292-5.832-21.127,0L4.375,57.189
	c-5.833,5.833-5.833,15.292,0,21.127l40.128,40.128c2.817,2.816,6.624,4.375,10.563,4.375c0.547,0,1.096-0.03,1.646-0.091
	l40.414-4.477l15.219,15.219c-35.276,40.18-56.698,92.809-56.698,150.353C55.647,409.641,158.006,512,283.823,512
	c66.164,0,129.001-28.684,172.401-78.697c5.408-6.231,4.738-15.666-1.492-21.073c-6.234-5.409-15.667-4.738-21.073,1.492
	c-37.722,43.47-92.334,68.402-149.835,68.402c-109.342,0-198.3-88.956-198.3-198.3c0-49.306,18.093-94.463,47.983-129.191
	L273.73,294.857c2.917,2.916,6.74,4.375,10.563,4.375s7.647-1.459,10.563-4.375c5.833-5.833,5.833-15.292,0-21.127L154.631,133.506
	c34.73-29.89,79.886-47.983,129.192-47.983c109.344,0,198.3,88.956,198.3,198.3c0,8.25,6.688,14.938,14.938,14.938
	c8.25,0,14.938-6.688,14.938-14.938C512,158.008,409.64,55.647,283.823,55.647z M36.063,67.752l31.688-31.688l24.492,24.492
	l-3.161,28.529l-28.529,3.161L36.063,67.752z"/>
</svg>
```

## File: src/assets/icons/visualstudio.svg
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <defs>
        <linearGradient x1="49.9999997%" y1="0.00244053108%" x2="49.9999997%" y2="99.999641%" id="linearGradient-1">
            <stop stop-color="#FFFFFF" offset="0%">
</stop>
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%">
</stop>
        </linearGradient>
    </defs>
    <g>
        <path d="M36.9866667,200.406215 C33.9280235,203.019746 29.6590738,203.689992 25.9466667,202.139549 L6.56,194.006215 C2.60661593,192.357112 0.0232284231,188.503034 0,184.219549 L0,70.4595487 C0.0232284231,66.1760633 2.60661593,62.3219852 6.56,60.6728821 L25.9466667,52.6728821 C29.6590738,51.122439 33.9280235,51.7926847 36.9866667,54.4062154 L41.3333333,58.0062154 C39.5360867,56.7141841 37.1664204,56.5381696 35.1980103,57.5504947 C33.2296003,58.5628199 31.9944221,60.5927545 32,62.8062154 L32,191.872882 C31.9944221,194.086343 33.2296003,196.116278 35.1980103,197.128603 C37.1664204,198.140928 39.5360867,197.964913 41.3333333,196.672882 L36.9866667,200.406215 Z" fill="#52218A" fill-rule="nonzero">
</path>
        <path d="M6.56,194.006215 C2.60661593,192.357112 0.0232284231,188.503034 0,184.219549 L0,183.339549 C0.0268934047,185.858586 1.58492217,188.107394 3.9339112,189.017627 C6.28290023,189.927861 8.94941357,189.316063 10.6666667,187.472882 L176,4.67288206 C180.797767,-0.101060222 188.080373,-1.3397438 194.186667,1.57954873 L246.933333,26.9662154 C252.477775,29.6321062 256.002663,35.2408256 256,41.3928821 L256,42.0062154 C255.996628,38.1026642 253.745578,34.5500434 250.217325,32.8799659 C246.689073,31.2098885 242.514491,31.7209739 239.493333,34.1928821 L41.3333333,196.672882 L36.9866667,200.406215 C33.9280235,203.019746 29.6590738,203.689992 25.9466667,202.139549 L6.56,194.006215 Z" fill="#6C33AF" fill-rule="nonzero">
</path>
        <path d="M6.56,60.6728821 C2.60661593,62.3219852 0.0232284231,66.1760633 0,70.4595487 L0,71.3395487 C0.0268934047,68.8205111 1.58492217,66.5717033 3.9339112,65.6614701 C6.28290023,64.7512369 8.94941357,65.3630345 10.6666667,67.2062154 L176,250.006215 C180.797767,254.780158 188.080373,256.018841 194.186667,253.099549 L246.933333,227.712882 C252.477775,225.046991 256.002663,219.438272 256,213.286215 L256,212.672882 C255.996628,216.576433 253.745578,220.129054 250.217325,221.799132 C246.689073,223.469209 242.514491,222.958124 239.493333,220.486215 L41.3333333,58.0062154 L36.9866667,54.2728821 C33.9010187,51.7044121 29.634528,51.0860801 25.9466667,52.6728821 L6.56,60.6728821 Z" fill="#854CC7" fill-rule="nonzero">
</path>
        <path d="M194.186667,253.099549 C188.080373,256.018841 180.797767,254.780158 176,250.006215 C178.687118,252.67399 182.713996,253.466025 186.211298,252.014645 C189.7086,250.563265 191.991405,247.152711 192,243.366215 L192,11.3662154 C192.012965,7.57001396 189.738069,4.13973417 186.235938,2.67467621 C182.733808,1.20961825 178.694002,1.99824786 176,4.67288206 C180.797767,-0.101060222 188.080373,-1.3397438 194.186667,1.57954873 L246.933333,26.9395487 C252.477775,29.6054395 256.002663,35.214159 256,41.3662154 L256,213.312882 C256.002663,219.464938 252.477775,225.073658 246.933333,227.739549 L194.186667,253.099549 Z" fill="#B179F1" fill-rule="nonzero">
</path>
        <path d="M183.706667,254.272882 C187.232219,255.077301 190.926299,254.663714 194.186667,253.099549 L246.933333,227.739549 C252.477775,225.073658 256.002663,219.464938 256,213.312882 L256,41.3662154 C256.002663,35.214159 252.477775,29.6054395 246.933333,26.9395487 L194.186667,1.57954873 C190.454554,-0.214455828 186.172257,-0.491658077 182.24,0.806215393 C179.888439,1.59407912 177.752219,2.9178052 176,4.67288206 L90.9866667,98.6995487 L41.3333333,58.0062154 L36.9866667,54.2728821 C34.3333065,52.0042454 30.7377412,51.1775642 27.36,52.0595487 C26.8727028,52.1672022 26.3987371,52.3281717 25.9466667,52.5395487 L6.56,60.6728821 C2.86046907,62.2004243 0.327434334,65.670476 0,69.6595487 C0,69.9262154 0,70.1928821 0,70.4595487 L0,184.219549 C0,184.486215 0,184.752882 0,185.019549 C0.327434334,189.008621 2.86046907,192.478673 6.56,194.006215 L25.9466667,202.006215 C26.3987371,202.217592 26.8727028,202.378562 27.36,202.486215 C30.7377412,203.3682 34.3333065,202.541519 36.9866667,200.272882 L41.3333333,196.672882 L90.9866667,155.979549 L176,250.006215 C178.119066,252.121513 180.789161,253.599766 183.706667,254.272882 L183.706667,254.272882 Z M192,73.1528821 L125.893333,127.339549 L192,181.526215 L192,73.1528821 Z M32,90.7262154 L65.0933333,127.339549 L32,163.952882 L32,90.7262154 Z" fill-opacity="0.25" fill="url(#linearGradient-1)">
</path>
    </g>
</svg>
```

## File: src/assets/icons/vscode.svg
```xml
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0016 3.11679C21.0016 2.23783 20.0175 2.23782 19.5801 2.34769C20.1924 1.86426 20.9105 1.98147 21.1656 2.12796L27.079 5.02747C27.6424 5.30375 27.9998 5.8786 27.9998 6.50857V25.5831C27.9998 26.2215 27.6329 26.8025 27.058 27.0743L21.4937 29.7054C21.1109 29.8701 20.2799 30.2767 19.5801 29.7053C20.4549 29.8702 20.9287 29.2476 21.0016 28.8264V3.11679Z" fill="url(#paint0_linear_87_8101)"/>
<path d="M19.6512 2.3319C20.1154 2.24017 21.0018 2.28271 21.0018 3.11685V9.68254L3.07359 23.2453C2.76022 23.4824 2.3192 23.443 2.05229 23.1542L0.204532 21.1548C-0.0849358 20.8416 -0.0646824 20.3513 0.249624 20.0633L19.5802 2.34775L19.6512 2.3319Z" fill="url(#paint1_linear_87_8101)"/>
<path d="M21.0018 22.3708L3.07359 8.80801C2.76022 8.57094 2.3192 8.61028 2.05229 8.8991L0.204532 10.8985C-0.0849358 11.2117 -0.0646824 11.702 0.249624 11.9901L19.5802 29.7056C20.455 29.8704 20.9289 29.2478 21.0018 28.8266V22.3708Z" fill="url(#paint2_linear_87_8101)"/>
<defs>
<linearGradient id="paint0_linear_87_8101" x1="23.79" y1="2" x2="23.79" y2="30" gradientUnits="userSpaceOnUse">
<stop stop-color="#32B5F1"/>
<stop offset="1" stop-color="#2B9FED"/>
</linearGradient>
<linearGradient id="paint1_linear_87_8101" x1="21.0018" y1="5.53398" x2="1.0217" y2="22.3051" gradientUnits="userSpaceOnUse">
<stop stop-color="#0F6FB3"/>
<stop offset="0.270551" stop-color="#1279B7"/>
<stop offset="0.421376" stop-color="#1176B5"/>
<stop offset="0.618197" stop-color="#0E69AC"/>
<stop offset="0.855344" stop-color="#0F70AF"/>
<stop offset="1" stop-color="#0F6DAD"/>
</linearGradient>
<linearGradient id="paint2_linear_87_8101" x1="1.15522" y1="9.98389" x2="21.0791" y2="26.4808" gradientUnits="userSpaceOnUse">
<stop stop-color="#1791D2"/>
<stop offset="1" stop-color="#1173C5"/>
</linearGradient>
</defs>
</svg>
```

## File: src/assets/react.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
```

## File: src/assets/vite.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
```

## File: src/components/layout/AmbientBackground/AmbientBackground.jsx
```javascript
import React from 'react';
import styles from './AmbientBackground.module.css';

export function AmbientBackground() {
  return (
    <div className={styles.ambientWrapper} aria-hidden="true">
      <div className={styles.gridPattern} />
      <div className={styles.orbTopLeft} />
      <div className={styles.orbTopRight} />
      <div className={styles.orbBottomLeft} />
      <div className={styles.orbBottomRight} />
    </div>
  );
}
```

## File: src/components/layout/AmbientBackground/AmbientBackground.module.css
```css
.ambientWrapper {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  min-height: 100vh;
  /* NO background-color here - layers blend against body (#100e0b) */
}

/* Subtle Perspective Grid Overlay */
.gridPattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.35;
  mask-image: radial-gradient(circle at 50% 40%, black 20%, transparent 85%);
  -webkit-mask-image: radial-gradient(circle at 50% 40%, black 20%, transparent 85%);
}

/* --- 4 Corner Glowing Light Orbs --- */

/* Orb 1: Top-Left Corner (Royal Blue Aura - 9s cycle) */
.orbTopLeft {
  position: absolute;
   top: -2%;   /* Increase number to move DOWNWARD into the screen */
  left: -15%; 
  width: 1500px;
  height: 700px;
  border-radius: var(--radius-full);
  background: radial-gradient(circle, rgba(124, 58, 237, 0.68) 0%, rgba(91, 33, 182, 0.14) 50%, transparent 74%);
  mix-blend-mode: screen;
  filter: blur(100px);
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
  animation: floatCorner1 9s ease-in-out infinite alternate;
}

/* Orb 2: Top-Right Corner (Deep Purple Aura - 11s cycle) */
.orbTopRight {
  position: absolute;
  top: -3% ;
  right: -10%;
  width: 1300px;
  height: 700px;
  border-radius: var(--radius-full);
  background: radial-gradient(circle, rgba(37, 99, 235, 0.70) 0%, rgba(30, 64, 175, 0.16) 48%, transparent 72%);
  mix-blend-mode: screen;
  filter: blur(110px);
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
  animation: floatCorner2 11s ease-in-out infinite alternate;
}

/* Orb 3: Bottom-Left Corner (Electric Sky Blue Aura - 8s cycle) */
.orbBottomLeft {
  position: absolute;
  bottom: -15%;
  left: -5%;
  width: 650px;
  height: 650px;
  border-radius: var(--radius-full);
  background: radial-gradient(circle, rgba(96, 165, 250, 0.50) 0%, rgba(37, 99, 235, 0.12) 50%, transparent 70%);
  mix-blend-mode: screen;
  filter: blur(95px);
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
  animation: floatCorner3 8s ease-in-out infinite alternate;
}

/* Orb 4: Bottom-Right Corner (Deep Violet Aura - 10s cycle) */
.orbBottomRight {
  position: absolute;
  bottom: -20%;
  right: -15%;
  width: 720px;
  height: 720px;
  border-radius: var(--radius-full);
  background: radial-gradient(circle, rgba(139, 92, 246, 0.60) 0%, rgba(30, 58, 138, 0.20) 50%, transparent 72%);
  mix-blend-mode: screen;
  filter: blur(115px);
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
  animation: floatCorner4 10s ease-in-out infinite alternate;
}

/* Light Mode Blend Mode Adaptation */
[data-theme="light"] .orbTopLeft,
[data-theme="light"] .orbTopRight,
[data-theme="light"] .orbBottomLeft,
[data-theme="light"] .orbBottomRight {
  mix-blend-mode: multiply;
}

/* Faster, Dynamic Motion Keyframes */
@keyframes floatCorner1 {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(140px, 100px, 0) scale(1.18); }
  100% { transform: translate3d(-40px, 120px, 0) scale(0.9); }
}

@keyframes floatCorner2 {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-150px, 90px, 0) scale(1.22); }
  100% { transform: translate3d(30px, 130px, 0) scale(0.92); }
}

@keyframes floatCorner3 {
  0% { transform: translate3d(0, 0, 0) scale(0.9); }
  50% { transform: translate3d(130px, -110px, 0) scale(1.25); }
  100% { transform: translate3d(-50px, -70px, 0) scale(0.95); }
}

@keyframes floatCorner4 {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-140px, -120px, 0) scale(1.15); }
  100% { transform: translate3d(60px, -80px, 0) scale(0.88); }
}

@media (max-width: 768px) {
  .orbTopLeft, .orbTopRight, .orbBottomLeft, .orbBottomRight {
    filter: blur(75px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbTopLeft, .orbTopRight, .orbBottomLeft, .orbBottomRight {
    animation: none;
  }
}
```

## File: src/components/layout/Footer/Footer.jsx
```javascript
import React from 'react';
import { socialLinks } from '../../../data/socialLinks';
import { smoothScrollTo, SCROLL_DURATION } from '../../../utils/scrollUtils';
import styles from './Footer.module.css';

export function Footer() {
  const scrollToTop = () => {
    smoothScrollTo(0, SCROLL_DURATION);
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandInfo}>
          <span className={styles.logo}>ZHY.</span>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ZHY (Ailex Denzel Estrada). All rights reserved.
          </p>
        </div>

        <div className={styles.linksGroup}>
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.external ? '_blank' : '_self'}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={styles.socialLink}
            >
              {item.label}
            </a>
          ))}
          <button onClick={scrollToTop} className={styles.backToTopBtn} aria-label="Back to top of page">
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
```

## File: src/components/layout/Footer/Footer.module.css
```css
.footer {
  border-top: 1px solid var(--border);
  background-color: var(--bg-secondary);
  padding: var(--space-48) 0;
  margin-top: var(--space-96);
}

.footerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-24);
  text-align: center;
}

@media (min-width: 768px) {
  .footerContainer {
    flex-direction: row;
    text-align: left;
  }
}

.brandInfo {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.logo {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
}

.copyright {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.linksGroup {
  display: flex;
  align-items: center;
  gap: var(--space-24);
}

.socialLink {
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.socialLink:hover {
  color: var(--accent);
}

.backToTopBtn {
  font-size: 0.875rem;
  color: var(--text-muted);
  border: 1px solid var(--border);
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.backToTopBtn:hover {
  color: var(--text-primary);
  border-color: var(--accent);
}
```

## File: src/components/layout/Navbar/Navbar.jsx
```javascript
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../../../data/navigation';
import { smoothScrollTo, SCROLL_DURATION } from '../../../utils/scrollUtils';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (e, link) => {
    setIsMobileMenuOpen(false);

    if (link.id === 'home') {
      e.preventDefault();
      if (location.pathname === '/') {
        smoothScrollTo(0, SCROLL_DURATION);
      } else {
        navigate('/');
        setTimeout(() => smoothScrollTo(0, SCROLL_DURATION), 100);
      }
      return;
    }

    if (link.type === 'section' && location.pathname === '/') {
      e.preventDefault();
      const targetElement = document.getElementById(link.id);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        smoothScrollTo(offsetPosition, SCROLL_DURATION);
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Brand Logo */}
        <Link 
          to="/" 
          className={styles.logo} 
          aria-label="ZHY Portfolio Home"
          onClick={(e) => handleNavClick(e, { id: 'home', type: 'section' })}
        >
          ZHY<span className={styles.logoDot}>.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={`${styles.navList} ${styles.desktopNavList}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.href} 
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actionsGroup}>
            {/* Accessible Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.menuToggleBtn}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </nav>

        {/* Glassmorphism Mobile Navigation Menu */}
        <nav
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
```

## File: src/components/layout/Navbar/Navbar.module.css
```css
/* Floating Glassmorphism Header Pill — Matches 80vw Container Width */
.header {
  position: sticky;
  top: var(--space-16);
  z-index: 100;
  width: 80vw;
  max-width: var(--max-content-width);
  margin: 0 auto;
  border-radius: var(--radius-full);
  background: rgba(14, 18, 29, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(255, 255, 255, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: all var(--transition-normal);
}

.header:hover {
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: 
    0 12px 35px rgba(0, 0, 0, 0.6),
    0 0 30px rgba(255, 255, 255, 0.25);
}

.navContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 var(--space-24);
}

.logo {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  transition: color var(--transition-fast);
}

.logo:hover {
  color: var(--accent);
}

.logoDot {
  color: #a855f7;
  filter: drop-shadow(0 0 8px #a855f7);
}

.desktopNav {
  display: flex;
  align-items: center;
  gap: var(--space-32);
}

.navList {
  display: flex;
  align-items: center;
  gap: var(--space-24);
  list-style: none;
}

.navLink {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
  white-space: nowrap;
}

.navLink:hover {
  color: var(--text-primary);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.actionsGroup {
  display: flex;
  align-items: center;
  gap: var(--space-12);
  flex-shrink: 0;
}

.menuToggleBtn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  padding: 8px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border);
  background: var(--surface);
  cursor: pointer;
}

.hamburgerLine {
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
}

.mobileMenu {
  display: none;
  position: absolute;
  top: calc(100% + var(--space-12));
  left: 0;
  right: 0;
  background: rgba(14, 18, 29, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-xl);
  padding: var(--space-24);
  flex-direction: column;
  gap: var(--space-16);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 255, 255, 0.15);
}

.mobileMenuOpen {
  display: flex;
}

.mobileNavLink {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  padding: var(--space-8) 0;
}

@media (max-width: 992px) {
  .header {
    width: 90vw;
  }

  .desktopNavList {
    display: none;
  }

  .menuToggleBtn {
    display: flex;
  }
}
```

## File: src/components/layout/SEO/SEO.jsx
```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function SEO({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    // Dynamic page title per route
    const defaultTitle = 'ZHY | Frontend Developer & UI/UX Designer';
    document.title = title ? `${title} | ZHY Portfolio` : defaultTitle;

    // Dynamic meta description
    const defaultDesc = 'Portfolio of ZHY — Frontend Developer & UI/UX Designer based in Sampaloc, Manila. Specialized in building thoughtful web experiences and full-stack web applications.';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultDesc);
    }
  }, [location, title, description]);

  return null;
}
```

## File: src/components/layout/SiteLayout/SiteLayout.jsx
```javascript
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { AmbientBackground } from '../AmbientBackground/AmbientBackground';
import { Preloader } from '../../ui/Preloader/Preloader';
import styles from './SiteLayout.module.css';

export function SiteLayout() {
  return (
    <div className={styles.layoutWrapper}>
      {/* Animated Welcome Preloader */}
      <Preloader />

      <AmbientBackground />
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

## File: src/components/layout/SiteLayout/SiteLayout.module.css
```css
.layoutWrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.mainContent {
  flex: 1;
}
```

## File: src/components/projects/AccordionGallery/AccordionGallery.css
```css
.accordion-gallery {
  --ag-accent: #ffffff;
  --ag-overlay: #040508;
  --ag-text: #ffffff;
  --ag-gap: 12px;
  --ag-radius: 20px;
  --ag-media-size: 380px;

  display: flex;
  flex-direction: row;
  gap: var(--ag-gap);
  width: 100%;
  max-width: 100%;
  perspective: 1400px;
  perspective-origin: 50% 50%;
}

.accordion-gallery--vertical {
  flex-direction: column;
}

.ag-panel {
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  border-radius: var(--ag-radius);
  cursor: pointer;
  display: block;
  text-decoration: none;
  outline: none;
  transform-style: preserve-3d;
  transform-origin: center center;
  background: rgba(14, 18, 29, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.8);
  will-change: flex-grow, transform;
  -webkit-tap-highlight-color: transparent;
  transition: border-color 0.3s ease;
}

.ag-panel:hover,
.ag-panel--active {
  border-color: rgba(255, 255, 255, 0.45);
}

.ag-panel:focus-visible {
  box-shadow:
    0 0 0 2px var(--ag-accent),
    0 10px 30px -18px rgba(0, 0, 0, 0.8);
}

.ag-panel__frame {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
}

.ag-panel__media {
  --ag-gray: 1;
  --ag-dim: 0.35;
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--ag-media-size);
  height: 100%;
  filter: grayscale(var(--ag-gray));
  will-change: transform, filter;
}

.accordion-gallery--vertical .ag-panel__media {
  width: 100%;
  height: var(--ag-media-size);
}

.ag-panel__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
}

.ag-panel__overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, transparent 35%, color-mix(in srgb, var(--ag-overlay) 85%, transparent) 100%),
    color-mix(in srgb, var(--ag-overlay) calc(var(--ag-dim, 0.35) * 100%), transparent);
}

/* Active Panel Content Container — Increased bottom offset (40px) to lift buttons above border */
.ag-panel__content {
  position: absolute;
  left: 28px;
  bottom: 40px;
  right: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: auto;
  z-index: 10;
  opacity: 0;
}

/* Row with Vertical Accent Bar + Title beside it */
.ag-panel__title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0;
  will-change: transform, opacity;
}

.ag-panel__bar {
  flex: 0 0 auto;
  width: 4px;
  height: 28px;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
}

.ag-panel__title {
  color: #ffffff;
  font-family: inherit;
  font-weight: 800;
  font-size: clamp(1.3rem, 2vw, 2rem);
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.85);
}

.ag-panel__subtext {
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.5;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
  opacity: 0;
  will-change: transform, opacity;
}

/* Action Buttons inside Active Panel with generous top/bottom spacing */
.ag-panel__buttons {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
  margin-bottom: 4px;
  flex-wrap: wrap;
  opacity: 0;
  will-change: transform, opacity;
}

.ag-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
}

.ag-btn--primary {
  background: #ffffff;
  color: #040508;
  border: 1px solid #ffffff;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

.ag-btn--primary:hover {
  background: #e2e8f0;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
}

.ag-btn--secondary {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.ag-btn--secondary:hover {
  background: rgba(255, 255, 255, 0.22);
  border-color: #ffffff;
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .accordion-gallery {
    flex-direction: column;
    perspective: none;
    height: auto !important;
  }
  .ag-panel {
    min-height: 120px;
    transform: none !important;
  }
  .accordion-gallery .ag-panel__media {
    width: 100%;
    height: var(--ag-media-size);
  }
  .ag-panel__content {
    bottom: 24px;
    left: 20px;
    right: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ag-panel,
  .ag-panel__media,
  .ag-panel__title-row,
  .ag-panel__subtext,
  .ag-panel__buttons {
    will-change: auto;
  }
}
```

## File: src/components/projects/AccordionGallery/AccordionGallery.jsx
```javascript
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import './AccordionGallery.css';

const DEFAULT_ITEMS = [
  { 
    id: 'e-voting',
    image: 'https://picsum.photos/id/1015/900/1200', 
    label: 'E-Voting System', 
    summary: 'Flagship full-stack election management platform engineered across 4 academic levels.',
    link: '/projects/e-voting',
    liveUrl: null
  },
  { 
    id: 'olms',
    image: 'https://picsum.photos/id/1018/900/1200', 
    label: 'Online Library Management System', 
    summary: 'Full-stack cataloging, borrowing lifecycle & MSSQL relational database inventory.',
    link: '/projects/olms',
    liveUrl: null
  },
  { 
    id: 'ongoing',
    image: 'https://picsum.photos/id/1039/900/1200', 
    label: 'Upcoming Full-Stack Application', 
    summary: 'New full-stack web project currently under active development.',
    link: '#',
    liveUrl: null,
    isOngoing: true
  }
];

export function AccordionGallery({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = '#ffffff',
  overlayColor = '#040508',
  textColor = '#ffffff',
  height = 500,
  gap = 12,
  radius = 20,
  expandRatio = 0.52,
  orientation = 'horizontal',
  duration = 0.65,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 8,
  stagger = 0.08,
  trigger = 'hover',
  showLabels = true,
  grayscale = true,
  className = ''
}) {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const contentRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(380);

  const navigate = useNavigate();
  const vertical = orientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const applyLayout = useCallback(
    animate => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const content = contentRefs.current[i];

        const rot = isActive ? 0 : i < active ? tilt : -tilt;
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              '--ag-dim': isActive ? 0.2 : 0.45,
              duration: dur,
              ease
            },
            0
          );
        }

        // --- Cinematic Jumping / Spring Word & Button Animations ---
        if (showLabels && content) {
          const titleRow = content.querySelector('.ag-panel__title-row');
          const subtext = content.querySelector('.ag-panel__subtext');
          const buttons = content.querySelector('.ag-panel__buttons');

          if (isActive) {
            tl.to(content, { opacity: 1, duration: 0.2 }, 0);
            
            // 1. Title Row jumps up with back.out spring
            if (titleRow) {
              tl.fromTo(
                titleRow, 
                { opacity: 0, y: 40, scale: 0.95 }, 
                { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.8)' }, 
                0.05
              );
            }

            // 2. Subtext description jumps up 100ms later
            if (subtext) {
              tl.fromTo(
                subtext, 
                { opacity: 0, y: 30 }, 
                { opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.5)' }, 
                0.15
              );
            }

            // 3. Buttons pop up with scale bounce 200ms later
            if (buttons) {
              tl.fromTo(
                buttons, 
                { opacity: 0, y: 25, scale: 0.9 }, 
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.6)' }, 
                0.25
              );
            }
          } else {
            tl.to(content, { opacity: 0, y: 20, duration: 0.3, ease: 'power2.in' }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = i => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i, e) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  const handleDetailsClick = (item, e) => {
    e.stopPropagation();
    if (item.link && item.link !== '#') {
      navigate(item.link);
    } else {
      alert('Case study details in progress.');
    }
  };

  const handleLiveDemoClick = (item, e) => {
    e.stopPropagation();
    if (item.liveUrl) {
      window.open(item.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert('Deployment in progress! Live demo link will be available soon.');
    }
  };

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-text': textColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`
      }}
      role="list"
      aria-label="Image accordion gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        return (
          <div
            key={item.id || i}
            ref={el => (panelRefs.current[i] = el)}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            style={{ borderRadius: `${radius}px` }}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            <span className="ag-panel__frame">
              <span className="ag-panel__media" ref={el => (mediaRefs.current[i] = el)}>
                <img src={item.image} alt={item.alt || item.label || ''} draggable="false" />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>

            {/* Active Panel Content */}
            {showLabels && (
              <div 
                className="ag-panel__content" 
                ref={el => (contentRefs.current[i] = el)}
              >
                <div className="ag-panel__title-row">
                  <span className="ag-panel__bar" />
                  <h3 className="ag-panel__title">{item.label}</h3>
                </div>

                <p className="ag-panel__subtext">{item.summary}</p>

                <div className="ag-panel__buttons">
                  <button
                    type="button"
                    className="ag-btn ag-btn--primary"
                    onClick={e => handleDetailsClick(item, e)}
                  >
                    Details →
                  </button>
                  <button
                    type="button"
                    className="ag-btn ag-btn--secondary"
                    onClick={e => handleLiveDemoClick(item, e)}
                  >
                    View Live Demo ↗
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AccordionGallery;
```

## File: src/components/projects/FeaturedProject/FeaturedProject.jsx
```javascript
import React from 'react';
import { Tag } from '../../ui/Tag/Tag';
import { Button } from '../../ui/Button/Button';
import styles from './FeaturedProject.module.css';

export function FeaturedProject({ project }) {
  return (
    <article className={styles.featuredCard}>
      <div className={styles.infoArea}>
        <div className={styles.badgeHeader}>
          <span className={styles.flagshipBadge}>⭐ Flagship Project</span>
          <Tag variant="status">{project.status}</Tag>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.summary}</p>

        {project.academicGroups && (
          <div>
            <p className={styles.tiersLabel}>Academic Levels Supported:</p>
            <div className={styles.tiersList}>
              {project.academicGroups.map((group) => (
                <Tag key={group} variant="accent">{group}</Tag>
              ))}
            </div>
          </div>
        )}

        <div className={styles.techStack}>
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className={styles.actionsGroup}>
          <Button href={`/projects/${project.slug}`} variant="primary">
            Explore Full Case Study →
          </Button>
        </div>
      </div>

      <div className={styles.mediaArea}>
        {project.coverImage && !project.coverImage.startsWith('[') ? (
          <img src={project.coverImage} alt={`${project.title} screenshot`} />
        ) : (
          <div className={styles.placeholderCover}>
            <span className={styles.placeholderIcon}>🗳️</span>
            <strong>[E_VOTING_FLAGSHIP_MOCKUP]</strong>
            <small>Deployment & Screenshots in Progress</small>
          </div>
        )}
      </div>
    </article>
  );
}
```

## File: src/components/projects/FeaturedProject/FeaturedProject.module.css
```css
/* Glassmorphism Flagship Card */
.featuredCard {
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.10) 0%, 
    rgba(30, 58, 138, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-32);
  transition: all var(--transition-normal);
}

.featuredCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
}

.featuredCard::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4), transparent, rgba(255, 255, 255, 0.15));
}

.featuredCard:hover {
  border-color: rgba(255, 255, 255, 0.35);
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.16) 0%, 
    rgba(30, 58, 138, 0.12) 100%
  );
}

@media (min-width: 992px) {
  .featuredCard {
    grid-template-columns: 1.15fr 0.85fr;
    align-items: stretch;
  }
}

.mediaArea {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border);
  padding: var(--space-32);
}

@media (min-width: 992px) {
  .mediaArea {
    height: 100%;
    aspect-ratio: auto;
    border-bottom: none;
    border-left: 1px solid var(--border);
  }
}

.placeholderCover {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-12);
  text-align: center;
}

.placeholderIcon {
  font-size: 3.5rem;
  color: #ffffff;
}

.mockupTitle {
  color: var(--text-primary);
  font-size: 0.95rem;
}

.mockupSubtitle {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.infoArea {
  padding: var(--space-32) var(--space-32) var(--space-40) var(--space-32);
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
}

@media (min-width: 768px) {
  .infoArea {
    padding: var(--space-40) var(--space-40) var(--space-48) var(--space-40);
  }
}

.badgeHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-12);
  flex-wrap: wrap;
}

.flagshipBadge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
  font-size: 0.8rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.titleBlock {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.title {
  font-size: clamp(1.8rem, 3.5vw, 2.4rem);
  color: var(--text-primary);
  font-weight: 800;
  line-height: 1.15;
}

.description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.metaSection {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.groupLabel {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.tagsWrapper {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-10);
  align-items: center;
}

.actionsGroup {
  display: flex;
  align-items: center;
  gap: var(--space-16);
  margin-top: var(--space-20);
  margin-bottom: var(--space-12);
}
```

## File: src/components/projects/ProjectCard/ProjectCard.jsx
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from '../../ui/Tag/Tag';
import { Button } from '../../ui/Button/Button';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageArea}>
        {project.coverImage && !project.coverImage.startsWith('[') ? (
          <img src={project.coverImage} alt={`${project.title} cover`} />
        ) : (
          <div className={styles.placeholderCover}>
            <span className={styles.placeholderIcon}>💻</span>
            <small>[PROJECT_COVER]</small>
          </div>
        )}
      </div>

      <div className={styles.contentArea}>
        <div className={styles.headerMeta}>
          <span className={styles.roleLabel}>{project.role}</span>
          <Tag variant="status">{project.status}</Tag>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>

        <div className={styles.techStack}>
          {project.technologies.slice(0, 4).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {project.technologies.length > 4 && (
            <Tag>+{project.technologies.length - 4}</Tag>
          )}
        </div>

        <div className={styles.actionsArea}>
          <Button href={`/projects/${project.slug}`} variant="outline" style={{ width: '100%' }}>
            View Case Study →
          </Button>
        </div>
      </div>
    </article>
  );
}
```

## File: src/components/projects/ProjectCard/ProjectCard.module.css
```css
/* Glassmorphism Project Card */
.card {
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.10) 0%, 
    rgba(30, 58, 138, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  position: relative;
  overflow: hidden;
  transition: all var(--transition-normal);
  height: 100%;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
}

.card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4), transparent, rgba(255, 255, 255, 0.15));
}

.card:hover {
  border-color: rgba(255, 255, 255, 0.35);
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.16) 0%, 
    rgba(30, 58, 138, 0.12) 100%
  );
  transform: translateY(-4px);
}

.imageArea {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border);
}

.placeholderCover {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  color: var(--text-muted);
}

.placeholderIcon {
  font-size: 2.5rem;
  color: #ffffff;
}

.contentArea {
  padding: var(--space-24);
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  flex: 1;
}

.headerMeta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-12);
}

.roleLabel {
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.title {
  font-size: 1.35rem;
  color: var(--text-primary);
  font-weight: 700;
}

.summary {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.techStack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
  margin-top: auto;
}

.actionsArea {
  padding-top: var(--space-12);
  border-top: 1px solid var(--border);
}
```

## File: src/components/sections/About/About.jsx
```javascript
import React from 'react';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { Reveal } from '../../ui/Reveal/Reveal';
import styles from './About.module.css';

import targetIcon from '../../../assets/icons/target.svg';
import architectureIcon from '../../../assets/icons/architecture.svg';
import lightningIcon from '../../../assets/icons/lightning.svg';
import growthIcon from '../../../assets/icons/growth.svg';

const WHY_ICONS = {
  target: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  ),
  architecture: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0 4.179 2.25L12 17.25 6.429 14.25m11.142-4.5 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25" />
    </svg>
  ),
  lightning: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  ),
  growth: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 0 5.814-5.518l2.74-1.22m0 0-3.976-3.977m3.976 3.977-1.22 3.976" />
    </svg>
  )
};

const WHY_WORK_WITH_ME = [
  {
    icon: WHY_ICONS.target,
    title: 'Bridge Between Design & Code',
    description: 'I eliminate developer-designer handoff friction by designing intuitive interfaces in Figma and translating them directly into pixel-perfect, accessible React components.'
  },
  {
    icon: WHY_ICONS.architecture,
    title: 'End-to-End System Thinking',
    description: 'I don’t just build visual interfaces; I understand relational database modeling in MSSQL, RESTful API controllers in C# ASP.NET Core, and dynamic React state management.'
  },
  {
    icon: WHY_ICONS.lightning,
    title: 'Efficiency & Automation Focus',
    description: 'I enjoy identifying manual, paper-based, or repetitive processes (like paper-based election tallying) and digitizing them into fast, reliable software tools.'
  },
  {
    icon: WHY_ICONS.growth,
    title: 'High Initiative & Fast Learner',
    description: 'Driven by self-directed growth, I rapidly adapt to new frameworks, design systems, and team codebase standards—ready to contribute value from day one.'
  }
];

const ROTATING_CARDS = [
  { index: 0, color: '142, 249, 252', image: '/assets/1.png' },
  { index: 1, color: '142, 252, 204', image: '/assets/2.png' },
  { index: 2, color: '142, 252, 157', image: '/assets/3.png' },
  { index: 3, color: '215, 252, 142', image: '/assets/4.png' },
  { index: 4, color: '252, 252, 142', image: '/assets/5.png' },
  { index: 5, color: '252, 208, 142', image: '/assets/6.png' },
  { index: 6, color: '252, 142, 142', image: '/assets/7.png' },
  { index: 7, color: '252, 142, 239', image: '/assets/8.png' },
  { index: 8, color: '204, 142, 252', image: '/assets/9.png' },
  { index: 9, color: '142, 202, 252', image: '/assets/10.png' }
];

export function About() {
  return (
    <section id="about" className={styles.aboutSection} aria-label="About ZHY">
      <div className="container">
        <Reveal direction="left" delay={100}>
          <SectionHeading
            number="01 / ABOUT"
            title="Bridging Interface Design & Full-Stack Code"
          />
        </Reveal>

        <div className={styles.aboutGrid}>
          {/* Left Column: Narrative & Hero-Matched Buttons */}
          <Reveal direction="left" delay={200}>
            <div className={styles.narrativeCol}>
              <p className={styles.narrativeParagraph}>
                I am a Manila-based recent graduate and passionate Web, Frontend, and Full-Stack Developer pursuing a career with the meticulous eye of a UI/UX designer. Thriving at the intersection of logic and creativity, I treat design and engineering as two halves of a single process—designing with architecture in mind and coding with user experience at the forefront.
              </p>
              <p className={styles.narrativeParagraph}>
                Whether bridging the gap between intuitive interfaces and backend systems, transforming complex requirements into clean digital solutions, or independently building modern full-stack applications, my ultimate goal is always to create accessible, performant software that feels completely effortless.
              </p>

              {/* Exact Hero-Style Buttons */}
              <div className={styles.aboutButtonsGroup}>
                <a href="/Ailex.Estrada_CV.pdf" download className={styles.gradientBtn}>
                  Download CV ↓
                </a>
                <a href="#projects" className={styles.glassBtn}>
                  View Projects →
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 3D Orbiting Photo Carousel */}
          <Reveal direction="up" delay={300}>
            <div className={styles.carouselWrapper}>
              <div className={styles.inner} style={{ '--quantity': 10 }}>
                {ROTATING_CARDS.map((card) => (
                  <div 
                    key={card.index} 
                    className={styles.card} 
                    style={{ 
                      '--index': card.index, 
                      '--color-card': card.color 
                    }}
                  >
                    <img 
                      src={card.image} 
                      alt={`Ailex Denzel Estrada photo ${card.index + 1}`} 
                      className={styles.img}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Why Work With Me Sub-Section */}
        <div className={styles.whySection}>
          <Reveal direction="left" delay={100}>
            <div className={styles.whyHeader}>
              <span className={styles.whySubtag}>Value Proposition</span>
              <h3 className={styles.whyTitle}>Why Work With Me?</h3>
            </div>
          </Reveal>

          <div className={styles.whyGrid}>
            {WHY_WORK_WITH_ME.map((card, index) => (
              <Reveal key={index} direction="left" delay={150 + index * 100}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>
                    {card.icon}
                  </div>
                  <h4 className={styles.cardHeading}>{card.title}</h4>
                  <p className={styles.cardText}>{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/sections/About/About.module.css
```css
.aboutSection {
  padding: var(--space-96) 0;
  border-top: 1px solid var(--border);
}

.aboutGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-48);
  align-items: center;
}

@media (min-width: 992px) {
  .aboutGrid {
    grid-template-columns: 1.15fr 0.85fr;
  }
}

.narrativeCol {
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
}

.narrativeParagraph {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.aboutButtonsGroup {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-16);
  margin-top: var(--space-12);
}

/* --- Hero Matched Button 1: Liquid Gradient Button --- */
.gradientBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 2rem;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ff2a85 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
  transition: all var(--transition-fast);
}

.gradientBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 42, 133, 0.5);
  border-color: rgba(255, 255, 255, 0.5);
}

/* --- Hero Matched Button 2: Neon Purple Glass Button --- */
.glassBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 2rem;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid #a855f7;
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.4);
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.glassBtn:hover {
  background: rgba(168, 85, 247, 0.15);
  border-color: #c084fc;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.75);
  transform: translateY(-2px);
}

/* --- 3D Orbiting Photo Carousel --- */
.carouselWrapper {
  width: 100%;
  height: 380px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.inner {
  --w: 140px;
  --h: 190px;
  --translateZ: calc((var(--w) + var(--h)) + 10px);
  --rotateX: -12deg;
  --perspective: 1000px;
  position: absolute;
  width: var(--w);
  height: var(--h);
  top: 5%;
  left: calc(55% - (var(--w) / 2));
  z-index: 2;
  transform-style: preserve-3d;
  transform: perspective(var(--perspective));
  animation: rotating 20s linear infinite;
}

@keyframes rotating {
  from {
    transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
  }
  to {
    transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
  }
}

.card {
  position: absolute;
  border: 2px solid rgba(var(--color-card));
  border-radius: 12px;
  overflow: hidden;
  inset: 0;
  transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  background-color: var(--surface);
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- Why Work With Me Cards --- */
.whySection {
  margin-top: var(--space-64);
  padding-top: var(--space-48);
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
}

.whyHeader {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.whySubtag {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.whyTitle {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: var(--text-primary);
  font-weight: 800;
}

.whyGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-24);
}

@media (min-width: 640px) {
  .whyGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.whyCard {
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.10) 0%, 
    rgba(30, 58, 138, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  padding: var(--space-28);
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  transition: all var(--transition-fast);
}

.whyCard:hover {
  border-color: rgba(255, 255, 255, 0.22);
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.16) 0%, 
    rgba(30, 58, 138, 0.12) 100%
  );
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.3);
}

.whyIcon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-lg);
  padding: var(--space-12);
}

.neonPinkIcon {
  width: 26px;
  height: 26px;
  color: #ff2a85;
  filter: drop-shadow(0 0 8px rgba(255, 42, 133, 0.7));
}

.cardHeading {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
}

.cardText {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

## File: src/components/sections/Contact/ContactModal/ContactModal.jsx
```javascript
import React, { useState, useEffect } from 'react';
import { Button } from '../../../ui/Button/Button';
import styles from './ContactModal.module.css';

export function ContactModal({ data, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!data) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(data.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className={styles.iconWrapper}>
          <svg className={styles.svgVector} viewBox="0 0 24 24" fill="#ea4335">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08C21.691 2.279 24 3.434 24 5.457z"/>
          </svg>
        </div>

        <div className={styles.headerBlock}>
          <span className={styles.subtag}>{data.type}</span>
          <h3 className={styles.title}>{data.title}</h3>
        </div>

        <div className={styles.valueDisplay}>{data.value}</div>

        {copied && (
          <div className={styles.copiedBadge}>
            ✓ Copied to clipboard!
          </div>
        )}

        <div className={styles.actionsGroup}>
          <Button onClick={handleCopy} variant="primary" style={{ width: '100%' }}>
            {copied ? '✓ Copied!' : 'Copy to Clipboard 📋'}
          </Button>

          {data.gmailUrl && (
            <Button href={data.gmailUrl} variant="secondary" style={{ width: '100%' }} external>
              Open in Gmail Web ✉️
            </Button>
          )}

          {data.mailtoUrl && (
            <Button href={data.mailtoUrl} variant="outline" style={{ width: '100%' }}>
              Open Mail App 📬
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/sections/Contact/ContactModal/ContactModal.module.css
```css
.overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(7, 9, 13, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-24);
  animation: fadeIn 200ms ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal {
  position: relative;
  width: 100%;
  max-width: 440px;
  background-color: var(--surface);
  border: 1px solid var(--border-active);
  border-radius: var(--radius-xl);
  padding: var(--space-32);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-20);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px var(--accent-soft);
  animation: scaleUp 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes scaleUp {
  from { transform: scale(0.92); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.closeBtn {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border);
  background-color: var(--surface-elevated);
  color: var(--text-secondary);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.closeBtn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.iconWrapper {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--surface-elevated);
  border: 1px solid var(--border-active);
  border-radius: var(--radius-xl);
  padding: var(--space-12);
}

.svgVector {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.headerBlock {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-primary);
}

.subtag {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.valueDisplay {
  width: 100%;
  padding: 0.875rem;
  background-color: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  font-family: var(--font-mono);
  word-break: break-all;
  user-select: all;
}

.actionsGroup {
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
  width: 100%;
}

.copiedBadge {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--success);
  padding: var(--space-8);
  background-color: rgba(74, 222, 128, 0.12);
  border: 1px solid var(--success);
  border-radius: var(--radius-md);
}
```

## File: src/components/sections/Contact/Contact.jsx
```javascript
import React, { useState } from 'react';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { ContactForm } from './ContactForm';
import { ContactModal } from './ContactModal/ContactModal';
import { Reveal } from '../../ui/Reveal/Reveal';
import { Tag } from '../../ui/Tag/Tag';
import styles from './Contact.module.css';

export function Contact() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenEmailModal = () => {
    setActiveModal({
      type: 'Direct Email',
      title: 'Send an Email',
      value: 'estradaailexdenzel@gmail.com',
      gmailUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=estradaailexdenzel@gmail.com',
      mailtoUrl: 'mailto:estradaailexdenzel@gmail.com'
    });
  };

  return (
    <section id="contact" className={styles.contactSection} aria-label="Contact ZHY">
      <div className="container">
        <Reveal direction="left" delay={100}>
          <SectionHeading
            number="05 / CONTACT"
            title="Let's Build Something Together"
            subtitle="Open for entry-level and junior development roles across Frontend, Web, Full-Stack, and UI/UX engineering."
          />
        </Reveal>

        {/* 3-Column Layout: Left (Form) | Middle (Education Cards) | Right (4-Quadrant Grid) */}
        <div className={styles.contactGrid}>
          
          {/* LEFT COLUMN: Centered101 Expandable Profile Form */}
          <div className={styles.leftCol}>
            <Reveal direction="left" delay={200}>
              <ContactForm onOpenModal={handleOpenEmailModal} />
            </Reveal>
          </div>

          {/* MIDDLE COLUMN: 2 Stacked Education Cards with Neon Pink SVGs */}
          <div className={styles.middleCol}>
            <Reveal direction="up" delay={250}>
              <div className={styles.educationStack}>
                {/* Degree Card */}
                <div className={styles.degreeCard}>
                  <div className={styles.degreeHeader}>
                    
                    <h3 className={styles.degreeTitle}>Bachelor's Degree in IT</h3>
                    <p className={styles.institution}>UST Angelicum College</p>
                  </div>

                  {/* Neon Pink Graduation & Pin SVG Meta Row */}
                  <div className={styles.metaRow}>
                    <div className={styles.metaItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconEdu}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 14.625l7.74-4.478M12 3.375l7.74 4.478-7.74 4.478-7.74-4.478L12 3.375zM4.26 10.147v5.728a2.25 2.25 0 001.125 1.948l5.625 3.248a2.25 2.25 0 002.25 0l5.625-3.248a2.25 2.25 0 001.125-1.948v-5.728" />
                      </svg>
                      <span>Graduated June 2026</span>
                    </div>

                    <div className={styles.metaItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconEdu}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <span>Manila, Philippines</span>
                    </div>
                  </div>

                  <p className={styles.eduDescription}>
                    Formally educated in information technology fundamentals, OOP, database systems, networking, and web app architecture.
                  </p>
                </div>

                {/* Self-Learning Card */}
                <div className={styles.selfLearningCard}>
                  <h3 className={styles.cardTitle}>Self-Directed Growth</h3>
                  <p className={styles.eduDescription}>
                    Mastered modern React component architecture, REST APIs in C# ASP.NET Core, MSSQL relational databases, and responsive CSS design systems.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Uiverse.io 4-Quadrant Social Grid */}
          <div className={styles.rightCol}>
            <Reveal direction="left" delay={300}>
              <div className={styles.socialSideCol}>
                <div className={styles.main}>
                  <div className={styles.up}>
                    {/* Card 1: LinkedIn (Top-Left) */}
                    <a
                      href="https://www.linkedin.com/in/ailex-denzel-estrada-a70563387/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.card1}
                      aria-label="LinkedIn Profile"
                    >
                      <svg className={styles.svgIcon} viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.81a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                      </svg>
                    </a>

                    {/* Card 2: GitHub (Top-Right) */}
                    <a
                      href="https://github.com/aylexdensel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.card2}
                      aria-label="GitHub Profile"
                    >
                      <svg className={styles.svgIcon} viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.921.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>

                  <div className={styles.down}>
                    {/* Card 3: Facebook (Bottom-Left) */}
                    <a
                      href="https://www.facebook.com/zhy.privv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.card3}
                      aria-label="Facebook Profile"
                    >
                      <svg className={styles.svgIcon} viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C20.212 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    {/* Card 4: Gmail (Bottom-Right) */}
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=estradaailexdenzel@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.card4}
                      aria-label="Send Gmail"
                    >
                      <svg className={styles.svgIcon} viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08C21.691 2.279 24 3.434 24 5.457z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Location Badge */}
                <div className={styles.locationBadge}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconLocation}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>Sampaloc, Manila, Philippines • 09629110684</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Interactive Contact Modal */}
      <ContactModal data={activeModal} onClose={() => setActiveModal(null)} />
    </section>
  );
}
```

## File: src/components/sections/Contact/Contact.module.css
```css
.contactSection {
  padding: var(--space-96) 0;
  border-top: 1px solid var(--border);
}

/* 3-Column Grid Layout for Desktop */
.contactGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-32);
  align-items: center;
}

@media (min-width: 1024px) {
  .contactGrid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.leftCol {
  display: flex;
  justify-content: center;
}

.middleCol {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.rightCol {
  display: flex;
  justify-content: center;
}

/* Stacked 2 Education Cards Container */
.educationStack {
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
  width: 100%;
}

/* Glassmorphism Education Cards matching soft purple glass theme */
.degreeCard,
.selfLearningCard {
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.10) 0%, 
    rgba(30, 58, 138, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: var(--space-24);
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  transition: all var(--transition-fast);
}

.degreeCard:hover,
.selfLearningCard:hover {
  border-color: rgba(255, 255, 255, 0.22);
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.16) 0%, 
    rgba(30, 58, 138, 0.12) 100%
  );
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.3);
}

.degreeHeader {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.degreeTitle {
  font-size: 1.2rem;
  color: var(--text-primary);
  font-weight: 800;
}

.institution {
  font-size: 1rem;
  color: #ffffff;
  font-weight: 600;
}

.metaRow {
  display: flex;
  align-items: center;
  gap: var(--space-16);
  font-size: 0.85rem;
  color: var(--text-muted);
  flex-wrap: wrap;
}

.metaItem {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.neonPinkIconEdu {
  width: 18px;
  height: 18px;
  color: #ff2a85;
  filter: drop-shadow(0 0 6px rgba(255, 42, 133, 0.6));
  flex-shrink: 0;
}

.cardTitle {
  font-size: 1.1rem;
  color: var(--text-primary);
  font-weight: 700;
  border-bottom: 1px solid var(--border);
  padding-bottom: var(--space-8);
}

.eduDescription {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.socialSideCol {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-24);
  text-align: center;
  height: 100%;
}

/* --- Scaled 4-Quadrant Social Grid --- */
.main {
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.up {
  display: flex;
  flex-direction: row;
  gap: 1.2em;
}

.down {
  display: flex;
  flex-direction: row;
  gap: 1.2em;
}

.svgIcon {
  width: 52px;
  height: 52px;
  object-fit: contain;
  margin: 0 !important;
  transition: fill 0.2s ease-in-out;
}

/* Card 1: LinkedIn (Top-Left) */
.card1 {
  width: 160px;
  height: 160px;
  outline: none;
  background: var(--surface);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 160px 12px 12px 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
}

.card1 .svgIcon {
  fill: #0077b5;
  transform: translate(10px, 10px);
}

.card1:hover {
  transform: scale(1.08);
  background-color: #0077b5;
  border-color: #0077b5;
  box-shadow: 0 10px 25px rgba(0, 119, 181, 0.4);
}

.card1:hover .svgIcon {
  fill: white;
}

/* Card 2: GitHub (Top-Right) */
.card2 {
  width: 160px;
  height: 160px;
  outline: none;
  background: var(--surface);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px 160px 12px 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
}

.card2 .svgIcon {
  fill: var(--text-primary);
  transform: translate(-10px, 10px);
}

.card2:hover {
  transform: scale(1.08);
  background-color: #111111;
  border-color: #333;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.card2:hover .svgIcon {
  fill: white;
}

/* Card 3: Facebook (Bottom-Left) */
.card3 {
  width: 160px;
  height: 160px;
  outline: none;
  background: var(--surface);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px 12px 12px 160px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
}

.card3 .svgIcon {
  fill: #1877f2;
  transform: translate(10px, -10px);
}

.card3:hover {
  transform: scale(1.08);
  background-color: #1877f2;
  border-color: #1877f2;
  box-shadow: 0 10px 25px rgba(24, 119, 242, 0.4);
}

.card3:hover .svgIcon {
  fill: white;
}

/* Card 4: Gmail (Bottom-Right) */
.card4 {
  width: 160px;
  height: 160px;
  outline: none;
  background: var(--surface);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px 12px 160px 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
}

.card4 .svgIcon {
  fill: #ea4335;
  transform: translate(-10px, -10px);
}

.card4:hover {
  transform: scale(1.08);
  background-color: #ea4335;
  border-color: #ea4335;
  box-shadow: 0 10px 25px rgba(234, 67, 53, 0.4);
}

.card4:hover .svgIcon {
  fill: white;
}

.locationBadge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.88rem;
  color: var(--text-secondary);
  width: fit-content;
  margin-top: var(--space-16);
}

.neonPinkIconLocation {
  width: 20px;
  height: 20px;
  color: #ff2a85;
  filter: drop-shadow(0 0 6px rgba(255, 42, 133, 0.6));
}

@media (max-width: 500px) {
  .card1, .card2, .card3, .card4 {
    width: 120px;
    height: 120px;
  }
  .svgIcon {
    width: 40px;
    height: 40px;
  }
}
```

## File: src/components/sections/Contact/ContactForm.jsx
```javascript
import React, { useState } from 'react';
import { sendContactForm } from '../../../services/contactService';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitResult({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }

    setIsSubmitting(true);
    const result = await sendContactForm(formData);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitResult({ type: 'success', text: '✓ Sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitResult({ type: 'error', text: 'Failed to send.' });
    }
  };

  const isFormActive = isInteracting || formData.name || formData.email || formData.message;

  return (
    <div className={`${styles.card} ${isFormActive ? styles.cardExpanded : ''}`}>
      {/* Top Right Mail Icon */}
      <div className={styles.mail}>
        <svg
          strokeJoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect rx="2" y="4" x="2" height="16" width="20"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </div>

      {/* Background Portrait Photo */}
      <div className={styles.profilePic}>
        <img 
          src="/assets/1.png" 
          alt="Ailex Denzel Estrada portrait" 
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80';
          }}
        />
      </div>

      {/* Centered101 Expandable Bottom Panel */}
      <div className={styles.bottom}>
        <div className={styles.content}>
          <span className={styles.name}>Send a Message</span>

          {/* Clean 3-Field Contact Form */}
          <form 
            className={styles.formFields} 
            onSubmit={handleSubmit}
            onFocus={() => setIsInteracting(true)}
            onBlur={() => setIsInteracting(false)}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={styles.input}
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={styles.input}
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={styles.textarea}
              required
            />

            {submitResult && (
              <span className={submitResult.type === 'success' ? styles.successText : styles.errorText}>
                {submitResult.text}
              </span>
            )}

            <button type="submit" className={styles.button}>
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/sections/Contact/ContactForm.module.css
```css
/* Centered101 Expandable Contact Form Card */
.card {
  width: 380px;
  height: 440px;
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.10) 0%, 
    rgba(30, 58, 138, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 36px;
  padding: 3px;
  position: relative;
  box-shadow: 0 12px 35px var(--accent-soft);
  transition: all 0.5s ease-in-out;
  margin: 0 auto;
  overflow: hidden;
}

.mail {
  position: absolute;
  right: 1.75rem;
  top: 1.4rem;
  background: transparent;
  border: none;
  z-index: 10;
}

.mail svg {
  stroke: var(--accent);
  stroke-width: 2.5px;
}

.profilePic {
  position: absolute;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  top: 3px;
  left: 3px;
  border-radius: 33px;
  z-index: 1;
  border: 0px solid var(--accent);
  overflow: hidden;
  transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
}

.profilePic img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center top;
  transition: all 0.5s ease-in-out 0s;
}

.bottom {
  position: absolute;
  bottom: 3px;
  left: 3px;
  right: 3px;
  background: var(--surface-elevated);
  border: 1px solid var(--border-active);
  top: 80%;
  border-radius: 33px;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 20px 0px inset;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.content {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  right: 1.5rem;
  top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.name {
  display: block;
  font-size: 1.25rem;
  color: var(--text-primary);
  font-weight: 800;
  margin-top: 6px;
}

.formFields {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease 0.15s;
}

.input {
  width: 100%;
  padding: 8px 12px;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 0.88rem;
  font-family: inherit;
}

.input:focus,
.textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.textarea {
  width: 100%;
  height: 72px;
  padding: 8px 12px;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 0.88rem;
  font-family: inherit;
  resize: none;
}

.button {
  background: var(--accent);
  color: #07090d;
  border: none;
  border-radius: 24px;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.65rem 1rem;
  cursor: pointer;
  box-shadow: 0 4px 12px var(--accent-soft);
  transition: all var(--transition-fast);
  width: 100%;
}

.button:hover {
  background: var(--accent-strong);
  color: #ffffff;
}

.successText {
  font-size: 0.8rem;
  color: var(--success);
  text-align: center;
  font-weight: 700;
}

.errorText {
  font-size: 0.8rem;
  color: var(--error);
  text-align: center;
  font-weight: 700;
}

.card:hover,
.cardExpanded {
  border-top-left-radius: 55px;
}

.card:hover .bottom,
.cardExpanded .bottom {
  top: 22%;
  border-radius: 60px 29px 29px 29px;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
}

.card:hover .formFields,
.cardExpanded .formFields {
  opacity: 1;
}

.card:hover .profilePic,
.cardExpanded .profilePic {
  width: 85px;
  height: 85px;
  aspect-ratio: 1;
  top: 12px;
  left: 12px;
  border-radius: 50%;
  z-index: 3;
  border: 4px solid var(--accent);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
}

.card:hover .profilePic img,
.cardExpanded .profilePic img {
  transform: scale(1.05);
  transition: all 0.5s ease-in-out 0.3s;
}

@media (max-width: 480px) {
  .card {
    width: 100%;
    max-width: 320px;
    height: 380px;
  }
}
```

## File: src/components/sections/Education/Education.jsx
```javascript
import React from 'react';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { Tag } from '../../ui/Tag/Tag';
import styles from './Education.module.css';

export function Education() {
  return (
    <section id="education" className={styles.educationSection} aria-label="Education and Background">
      <div className="container">
        <SectionHeading
          number="04 / EDUCATION"
          title="Academic Foundation & Continuous Learning"
          subtitle="Combining formal IT degree education with active, self-directed web software development."
        />

        <div className={styles.educationGrid}>
          {/* Main Degree Card */}
          <div className={styles.degreeCard}>
            <div className={styles.degreeHeader}>
              <Tag variant="accent">Formal Degree</Tag>
              <h3 className={styles.degreeTitle}>Bachelor's Degree in Information Technology</h3>
              <p className={styles.institution}>UST Angelicum College</p>
            </div>

            <div className={styles.metaRow}>
              <span>📅 Graduated June 2026</span>
              <span>📍 Manila, Philippines</span>
            </div>

            <p className={styles.description}>
              Formally educated in information technology fundamentals, object-oriented programming, database management systems, networking, software engineering principles, and web application architecture.
            </p>
          </div>

          {/* Self-Directed Learning Card */}
          <div className={styles.selfLearningCard}>
            <h3 className={styles.cardTitle}>Self-Directed Technical Growth</h3>
            <p className={styles.description}>
              Complemented formal academic coursework with independent full-stack learning—mastering modern React component architecture, REST API design in ASP.NET Core, relational database modeling in MSSQL, and modern responsive CSS design systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/sections/Education/Education.module.css
```css
.educationSection {
  padding: var(--space-96) 0;
  border-top: 1px solid var(--border);
}

.educationGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-32);
}

@media (min-width: 868px) {
  .educationGrid {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

/* Glassmorphism Degree Card */
.degreeCard {
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.10) 0%, 
    rgba(30, 58, 138, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  position: relative;
  overflow: hidden;
  padding: var(--space-32);
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.degreeCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
}

.degreeCard::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4), transparent, rgba(255, 255, 255, 0.15));
}

.degreeHeader {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.degreeTitle {
  font-size: 1.4rem;
  color: var(--text-primary);
  font-weight: 800;
}

.institution {
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 600;
}

.metaRow {
  display: flex;
  align-items: center;
  gap: var(--space-16);
  font-size: 0.9rem;
  color: var(--text-muted);
}

/* Glassmorphism Self-Learning Card */
.selfLearningCard {
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.10) 0%, 
    rgba(30, 58, 138, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  position: relative;
  overflow: hidden;
  padding: var(--space-32);
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.selfLearningCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
}

.selfLearningCard::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4), transparent, rgba(255, 255, 255, 0.15));
}

.cardTitle {
  font-size: 1.15rem;
  color: var(--text-primary);
  font-weight: 700;
  border-bottom: 1px solid var(--border);
  padding-bottom: var(--space-12);
}

.description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

## File: src/components/sections/Hero/CardSwap/CardSwap.css
```css
/* Card Swap Container & 3D Perspective */
.card-swap-wrapper {
  position: relative;
  width: 100%;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-swap-container {
  position: relative;
  width: 360px;
  height: 260px;
  perspective: 900px;
  overflow: visible;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Crisp 3D Card Base — Permanent Grayscale Anti-Aliasing prevents Chrome blur toggle */
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(14, 18, 29, 0.94);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  image-rendering: -webkit-optimize-contrast;
}

/* --- Terminal Card Inner Layout & Smooth Anti-Aliasing --- */
.terminal-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.terminal {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  min-height: 38px;
  padding-inline: 12px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: rgba(32, 36, 37, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.title {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 2.5rem;
  user-select: none;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #a0aec0;
  font-size: 0.82rem;
  -webkit-font-smoothing: antialiased;
}

.title > svg {
  height: 18px;
  width: 18px;
  margin-top: 2px;
  color: #006adc;
}

.copy_toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: 0.65px solid #c1c2c5;
  margin-left: auto;
  border-radius: 6px;
  background-color: #202425;
  color: #8e8e8e;
  cursor: pointer;
}

.copy_toggle > svg {
  width: 16px;
  height: 16px;
}

.copy_toggle:active > svg > path,
.copy_toggle:focus-within > svg > path {
  animation: clipboard-check 500ms linear forwards;
}

.body {
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow-x: auto;
  padding: 1rem;
  line-height: 19px;
  color: white;
  background-color: #000000;
  white-space: nowrap;
  flex: 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}

.pre {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-wrap: nowrap;
  white-space: pre;
  background-color: transparent;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}

.pre code:nth-child(1) {
  color: #575757;
}

.pre code:nth-child(2) {
  color: #e34ba9;
}

.cmd {
  height: 19px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  -webkit-font-smoothing: antialiased;
}

.cmd::before {
  content: attr(data-cmd);
  position: relative;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  background-color: transparent;
  animation: inputs 8s steps(22) infinite;
}

.cmd::after {
  content: "";
  position: relative;
  display: block;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
  border-right: 0.15em solid #e34ba9;
  animation: cursor 0.5s step-end infinite alternate, blinking 0.5s infinite;
}

@keyframes blinking {
  20%, 80% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0);
  }
}

@keyframes cursor {
  50% {
    border-right-color: transparent;
  }
}

@keyframes inputs {
  0%, 100% {
    width: 0;
  }
  10%, 90% {
    width: 58px;
  }
  30%, 70% {
    width: 215px;
    max-width: max-content;
  }
}

@keyframes clipboard-check {
  100% {
    color: #fff;
    d: path(
      "M 9 5 H 7 a 2 2 0 0 0 -2 2 v 12 a 2 2 0 0 0 2 2 h 10 a 2 2 0 0 0 2 -2 V 7 a 2 2 0 0 0 -2 -2 h -2 M 9 5 a 2 2 0 0 0 2 2 h 2 a 2 2 0 0 0 2 -2 M 9 5 a 2 2 0 0 1 2 -2 h 2 a 2 2 0 0 1 2 2 m -6 9 l 2 2 l 4 -4"
    );
  }
}

@media (max-width: 768px) {
  .card-swap-container {
    transform: scale(0.75) translate(25%, 25%);
  }
}

@media (max-width: 480px) {
  .card-swap-container {
    transform: scale(0.55) translate(25%, 25%);
  }
}
```

## File: src/components/sections/Hero/CardSwap/CardSwap.jsx
```javascript
import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import './CardSwap.css';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

// Setting force3D: false prevents Chrome from bitmap-rasterizing text layers during 3D motion
const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: false
  });

export const CardSwap = ({
  width = 340,
  height = 200,
  cardDistance = 50,
  verticalDistance = 60,
  delay = 4500,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease,
        force3D: false
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
            force3D: false
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
          force3D: false
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node?.addEventListener('mouseenter', pause);
      node?.addEventListener('mouseleave', resume);
      return () => {
        node?.removeEventListener('mouseenter', pause);
        node?.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div className="card-swap-wrapper">
      <div ref={container} className="card-swap-container" style={{ width, height }}>
        {rendered}
      </div>
    </div>
  );
};

export function TerminalCard({ title, command }) {
  return (
    <div className="terminal-wrap">
      <div className="terminal">
        <hgroup className="head">
          <p className="title">
            <svg
              width="16px"
              height="16px"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeJoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            >
              <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"></path>
            </svg>
            {title || 'Terminal'}
          </p>

          <button className="copy_toggle" tabIndex="-1" type="button" aria-label="Copy command">
            <svg
              width="16px"
              height="16px"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeJoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            >
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
              <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
            </svg>
          </button>
        </hgroup>

        <div className="body">
          <pre className="pre">
            <code>-&nbsp;</code>
            <code>npx&nbsp;</code>
            <code className="cmd" data-cmd={command || 'create-react-app@latest'}></code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default CardSwap;
```

## File: src/components/sections/Hero/Hero.jsx
```javascript
import React from 'react';
import { Reveal } from '../../ui/Reveal/Reveal';
import { CardSwap, Card, TerminalCard } from './CardSwap/CardSwap';
import styles from './Hero.module.css';

import designIcon from '../../../assets/icons/design.svg';
import fullstackIcon from '../../../assets/icons/fullstack.svg';
import lightbulbIcon from '../../../assets/icons/lightbulb.svg';
import rocketIcon from '../../../assets/icons/rocket.svg';

const STRENGTH_ICONS = {
  synergy: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  foundation: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>
  ),
  mindset: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
    </svg>
  ),
  adaptable: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className={styles.neonPinkIcon}>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 19V9h7.38l.95 1.9c-.21.32-.33.69-.33 1.1 0 1.1.9 2 2 2s2-.9 2-2-.83-1.92-1.88-1.99l-1.23-2.46A1 1 0 0 0 13 7H5V5h14v14z"></path>
      <path d="M10.67 13.1c.21-.32.33-.69.33-1.1 0-1.1-.9-2-2-2s-2 .9-2 2 .83 1.92 1.88 1.99l1.23 2.46A1 1 0 0 0 11 17h8v-2h-7.38z"></path>
    </svg>
  )
};

const HERO_STRENGTHS = [
  {
    icon: STRENGTH_ICONS.synergy,
    title: 'Design & Code Synergy',
    description: 'Bridging UI/UX prototypes in Figma directly into clean, responsive React interfaces.'
  },
  {
    icon: STRENGTH_ICONS.foundation,
    title: 'Full-Stack Foundation',
    description: 'Building end-to-end web apps with React, C# ASP.NET Core, and MSSQL databases.'
  },
  {
    icon: STRENGTH_ICONS.mindset,
    title: 'Problem-Solving Mindset',
    description: 'Passionate about automating repetitive tasks and streamlining manual workflows.'
  },
  {
    icon: STRENGTH_ICONS.adaptable,
    title: 'Independent & Adaptable',
    description: 'Fast learner constantly expanding capabilities across modern web development stacks.'
  }
];

// 6 Small Skill Cards
const QUICK_SKILLS = [
  {
    title: 'Web Dev',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    )
  },
  {
    title: 'Full Stack Dev',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    )
  },
  {
    title: 'Frontend Dev',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    )
  },
  {
    title: 'AI Integration',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    )
  },
  {
    title: 'Git',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    )
  },
  {
    title: 'UI/UX Design',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    )
  }
];

export function Hero() {
  return (
    <section className={styles.heroSection} aria-label="Introduction">
      <div className={`container ${styles.heroContainer}`}>
        {/* Top Hero Grid */}
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <Reveal direction="left" delay={100}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                Available for Frontend & Full-Stack Roles
              </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <div className={styles.nameTitle}>
                <h1 className={styles.brandName}>ZHY</h1>
                <p className={styles.fullName}>Ailex Denzel Estrada</p>
                <p className={styles.professionalRole}>
                  Frontend Developer & Web Developer & UI/UX Designer
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={300}>
              <p className={styles.heroDescription}>
                Turning messy ideas into reliable, interactive web solutions.<br />
                I am a freshly graduated aspiring Frontend Developer and Web Developer based in Manila. I don't just build websites; I engineer complete experiences, blending thoughtful interface design with full-stack technologies to create software that is both visually engaging and highly performant.
              </p>
            </Reveal>

            <Reveal direction="left" delay={350}>
              <div className={styles.locationBadge}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconLocation}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>Sampaloc, Manila, Philippines</span>
              </div>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <div className={styles.actionsGroup}>
                <a href="#projects" className={styles.gradientBtn}>
                  View My Work →
                </a>
                <a href="#contact" className={styles.glassBtn}>
                  Contact Me
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Side 3D GSAP Card Swap Terminal Deck (skewAmount={6} 3D design) */}
          <div className={styles.cardSwapArea}>
            <Reveal direction="fade" delay={300}>
              <CardSwap
                cardDistance={50}
                verticalDistance={60}
                delay={4500}
                pauseOnHover={false}
                skewAmount={6}
                width={340}
                height={200}
              >
                <Card>
                  <TerminalCard title="react-developer.sh" command="zhy-portfolio@latest" />
                </Card>
                <Card>
                  <TerminalCard title="aspnet-api.cs" command="dotnet-run-api" />
                </Card>
                <Card>
                  <TerminalCard title="mssql-database.sql" command="mssql-elections-db" />
                </Card>
              </CardSwap>
            </Reveal>
          </div>
        </div>

        {/* 4 Core Strengths Cards Row */}
        <div className={styles.strengthsWrapper}>
          <Reveal direction="left" delay={100}>
            <h2 className={styles.strengthsHeading}>Core Strengths</h2>
          </Reveal>
          <div className={styles.strengthsGrid}>
            {HERO_STRENGTHS.map((item, index) => (
              <Reveal key={index} direction="left" delay={150 + index * 100}>
                <div className={styles.strengthCard}>
                  <div className={styles.strengthIcon}>
                    {item.icon}
                  </div>
                  <h3 className={styles.strengthTitle}>{item.title}</h3>
                  <p className={styles.strengthText}>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 6 Small Skill Cards Row */}
          <Reveal direction="left" delay={200}>
            <div className={styles.quickSkillsRow}>
              {QUICK_SKILLS.map((skill, index) => (
                <div key={index} className={styles.quickSkillCard}>
                  <span className={styles.quickIcon}>{skill.icon}</span>
                  <span className={styles.quickTitle}>{skill.title}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/sections/Hero/Hero.module.css
```css
.heroSection {
  padding: var(--space-64) 0 var(--space-96);
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
}

.heroContainer {
  display: flex;
  flex-direction: column;
  gap: var(--space-64);
}

.heroGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-48);
  align-items: center;
}

@media (min-width: 992px) {
  .heroGrid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.heroContent {
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  width: fit-content;
}

.badgeDot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background-color: var(--success);
  box-shadow: 0 0 8px var(--success);
}

.nameTitle {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

/* ZHY Brand Title in Neon Blue-Pink-Purple Gradient */
.brandName {
  font-size: clamp(2.8rem, 6.5vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  background: linear-gradient(135deg, #00e5ff 0%, #ff2a85 50%, #a855f7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 25px rgba(255, 42, 133, 0.35));
}

.fullName {
  font-size: 1.25rem;
  color: var(--text-secondary);
  font-weight: 600;
  letter-spacing: 0.02em;
}

.professionalRole {
  font-size: clamp(1.2rem, 2.8vw, 1.85rem);
  color: #ffffff;
  font-weight: 700;
  margin-top: var(--space-4);
}

.heroDescription {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.65;
  max-width: var(--max-text-width);
}

.locationBadge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.92rem;
  color: var(--text-secondary);
  width: fit-content;
}

.neonPinkIconLocation {
  width: 20px;
  height: 20px;
  color: #ff2a85;
  filter: drop-shadow(0 0 6px rgba(255, 42, 133, 0.6));
}

.actionsGroup {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-16);
  margin-top: var(--space-12);
}

.gradientBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 2rem;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ff2a85 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
  transition: all var(--transition-fast);
}

.gradientBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 42, 133, 0.5);
  border-color: rgba(255, 255, 255, 0.5);
}

.glassBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 2rem;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid #a855f7;                        /* 👈 Neon purple border */
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.4); 
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.glassBtn:hover {
  background: rgba(168, 85, 247, 0.15);              /* 👈 Soft purple tint on hover */
  border-color: #c084fc;                             /* 👈 Brighter neon purple border */
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.75);     /* 👈 Stronger neon glow on hover */
  transform: translateY(-2px);
}

.cardSwapArea {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 400px;
}

.strengthsWrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
  border-top: 1px solid var(--border);
  padding-top: var(--space-48);
}

.strengthsHeading {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.strengthsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-20);
}

/* Smooth Glass Card Without White Inset Lines */
.strengthCard {
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.10) 0%, 
    rgba(30, 58, 138, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  padding: var(--space-24);
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  transition: all var(--transition-fast);
}

.strengthCard:hover {
  border-color: rgba(255, 255, 255, 0.22);
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.16) 0%, 
    rgba(30, 58, 138, 0.12) 100%
  );
  transform: translateY(-4px);
  box-shadow: 
    0 14px 40px rgba(0, 0, 0, 0.35),
    0 0 20px rgba(139, 92, 246, 0.15);
}

.strengthIcon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-lg);
  padding: var(--space-12);
}

.neonPinkIcon {
  width: 26px;
  height: 26px;
  color: #ff2a85;
  filter: drop-shadow(0 0 8px rgba(255, 42, 133, 0.7));
}

.strengthTitle {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.strengthText {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* 6 Small Skill Pills */
.quickSkillsRow {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-16);
  width: 100%;
  margin-top: var(--space-20);
}

.quickSkillCard {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-12);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  width: 100%;
  transition: all var(--transition-fast);
}

.quickSkillCard:hover {
  border-color: rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.quickIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.neonPinkIconSmall {
  width: 20px;
  height: 20px;
  color: #ff2a85;
  filter: drop-shadow(0 0 6px rgba(255, 42, 133, 0.6));
}

.quickTitle {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .quickSkillsRow {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .quickSkillsRow {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## File: src/components/sections/Hero/PortraitComposition.jsx
```javascript
import React from 'react';
import styles from './PortraitComposition.module.css';

export function PortraitComposition({ photoUrl }) {
  return (
    <div className={styles.portraitContainer}>
      <div className={styles.frameRing} aria-hidden="true" />
      <div className={styles.avatarWrapper}>
        {photoUrl ? (
          <img 
            src={photoUrl} 
            alt="Ailex Denzel Estrada portrait" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.target.style.display = 'none';
              if (e.target.nextSibling) {
                e.target.nextSibling.style.display = 'flex';
              }
            }}
          />
        ) : null}
        <div className={styles.placeholderAvatar} style={{ display: 'none' }}>
          <span className={styles.placeholderIcon}>👤</span>
          <small>Portrait Photo</small>
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/sections/Hero/PortraitComposition.module.css
```css
.portraitContainer {
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.frameRing {
  position: absolute;
  inset: -10px;
  border-radius: var(--radius-full);
  border: 1px dashed var(--border-active);
  animation: spinRing 30s linear infinite;
}

@keyframes spinRing {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.avatarWrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  overflow: hidden;
  border: 2px solid var(--border-active);
  background-color: var(--surface-elevated);
  box-shadow: 0 0 40px var(--accent-soft);
}

.placeholderAvatar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%);
  color: var(--text-muted);
  gap: var(--space-8);
}

.placeholderIcon {
  font-size: 4rem;
  color: var(--accent);
}

@media (prefers-reduced-motion: reduce) {
  .frameRing {
    animation: none;
  }
}
```

## File: src/components/sections/Projects/Projects.jsx
```javascript
import React from 'react';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { Reveal } from '../../ui/Reveal/Reveal';
import { AccordionGallery } from '../../projects/AccordionGallery/AccordionGallery';
import styles from './Projects.module.css';

const GALLERY_PROJECTS = [
  {
    id: 'e-voting',
    tile: '🗳️ Flagship • E-Voting System',
    image: 'https://picsum.photos/id/1015/900/1200',
    label: 'E-Voting System',
    summary: 'Flagship full-stack election management platform engineered across 4 academic levels.',
    link: '/projects/e-voting',
    liveUrl: null
  },
  {
    id: 'olms',
    tile: '📚 Full-Stack • Library System (OLMS)',
    image: 'https://picsum.photos/id/1018/900/1200',
    label: 'Online Library Management System',
    summary: 'Full-stack cataloging, borrowing lifecycle & MSSQL relational database inventory.',
    link: '/projects/olms',
    liveUrl: null
  },
  {
    id: 'ongoing',
    tile: '⚡ Ongoing • Upcoming Project',
    image: 'https://picsum.photos/id/1039/900/1200',
    label: 'Upcoming Full-Stack Application',
    summary: 'New full-stack web project currently under active development.',
    link: '#',
    liveUrl: null,
    isOngoing: true
  }
];

export function Projects() {
  return (
    <section id="projects" className={styles.projectsSection} aria-label="Featured Projects">
      <div className="container">
        <Reveal direction="left" delay={100}>
          <SectionHeading
            number="03 / PROJECTS"
            title="Featured Work & Full-Stack Case Studies"
            subtitle="Substantial applications designed and built independently. Hover over any project panel below to inspect details and live demo options."
          />
        </Reveal>

        <div className={styles.projectsContainer}>
          <Reveal direction="up" delay={200}>
            <AccordionGallery 
              items={GALLERY_PROJECTS} 
              defaultIndex={0} 
              height={480} 
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/sections/Projects/Projects.module.css
```css
.projectsSection {
  padding: var(--space-96) 0;
  border-top: 1px solid var(--border);
}

.projectsContainer {
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
}
```

## File: src/components/sections/Showcase/ShowcaseSection.jsx
```javascript
import React from 'react';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { Reveal } from '../../ui/Reveal/Reveal';
import { ButtonShowcase } from '../../showcase/ButtonShowcase/ButtonShowcase';
import styles from './ShowcaseSection.module.css';

export function ShowcaseSection() {
  return (
    <section id="showcase" className={styles.showcaseSection} aria-label="Components Catalog Showcase">
      <div className={`container ${styles.showcaseContainer}`}>
        {/* Top Catalog Section Header */}
        <Reveal direction="left" delay={100}>
          <div className={styles.catalogHeader}>
            <span className={styles.catalogTag}>COMPONENTS CATALOG</span>
            <SectionHeading
              number="04 / SHOWCASE"
              title="UI/UX & Frontend Laboratory"
              subtitle="A curated catalog of interactive component experiences demonstrating state management, accessibility, micro-interactions, and design systems."
            />
          </div>
        </Reveal>

        {/* 4 Long Horizontal Row Cards */}
        <div className={styles.catalogGrid}>
          {/* HORIZONTAL ROW 1: BUTTON DESIGN SYSTEM (9 Interactive Buttons across 3 Vertical Cards) */}
          <Reveal direction="up" delay={200}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>1. Interactive Button Systems</h3>
                  <p className={styles.rowSubtitle}>
                    A catalog of 9 distinct button micro-interactions, gradient borders, 3D brutalist pop, and state animations.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              {/* 3 Vertical Cards holding 3 buttons each (9 buttons total) */}
              <ButtonShowcase />
            </div>
          </Reveal>

          {/* HORIZONTAL ROW 2: FORM & SECURITY EXPERIENCES */}
          <Reveal direction="up" delay={250}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>2. Form & Security Experiences</h3>
                  <p className={styles.rowSubtitle}>
                    Input validation, password visibility toggles, real-time error handling, and multi-field step flows.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <div className={styles.placeholderRowContent}>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>🔐</span>
                  <strong>Auth Validation</strong>
                  <small>Real-time email regex & password security check</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>👁️</span>
                  <strong>Password Toggle</strong>
                  <small>Accessible visibility toggle & strength meter</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>📋</span>
                  <strong>Multi-Step Form</strong>
                  <small>Step-by-step state preservation & blur validation</small>
                </div>
              </div>
            </div>
          </Reveal>

          {/* HORIZONTAL ROW 3: CARD COMPONENTS & LAYOUTS */}
          <Reveal direction="up" delay={300}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>3. Card Components & Information Hierarchy</h3>
                  <p className={styles.rowSubtitle}>
                    Modular card composition across profile, project, product, and data-dense informational structures.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <div className={styles.placeholderRowContent}>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>👤</span>
                  <strong>Profile Cards</strong>
                  <small>Compact user identity & social connectivity</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>📦</span>
                  <strong>Product Cards</strong>
                  <small>E-commerce hierarchy & action triggers</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>📄</span>
                  <strong>Content Cards</strong>
                  <small>Article previews & metadata tagging</small>
                </div>
              </div>
            </div>
          </Reveal>

          {/* HORIZONTAL ROW 4: DASHBOARD INTERFACES */}
          <Reveal direction="up" delay={350}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>4. Integrated Dashboard Interfaces</h3>
                  <p className={styles.rowSubtitle}>
                    High-density data visualization, search filters, summary stats, and interactive empty states.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <div className={styles.placeholderRowContent}>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>📊</span>
                  <strong>Summary Stats</strong>
                  <small>Data metric indicators & trend badges</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>🔍</span>
                  <strong>Live Search Filters</strong>
                  <small>Instant client-side filter & query handling</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>⚙️</span>
                  <strong>System Settings</strong>
                  <small>Toggle controls, sliders & preference states</small>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
```

## File: src/components/sections/Showcase/ShowcaseSection.module.css
```css
.showcaseSection {
  padding: var(--space-96) 0;
  border-top: 1px solid var(--border);
  background-color: transparent;
}

.showcaseContainer {
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
}

.catalogHeader {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  margin-bottom: var(--space-24);
}

.catalogTag {
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
  padding: 4px 14px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #a855f7;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  width: fit-content;
}

/* 4 Long Horizontal Row Cards */
.catalogGrid {
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
}

/* Glassmorphism Horizontal Row Card (Hero Glass Style) */
.horizontalCard {
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.10) 0%, 
    rgba(30, 58, 138, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  padding: var(--space-32);
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  transition: all var(--transition-fast);
}

.horizontalCard:hover {
  border-color: rgba(255, 255, 255, 0.22);
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.16) 0%, 
    rgba(30, 58, 138, 0.12) 100%
  );
  box-shadow: 
    0 14px 40px rgba(0, 0, 0, 0.35),
    0 0 25px rgba(139, 92, 246, 0.15);
}

.rowMeta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: var(--space-16);
}

.rowTitle {
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
}

.rowSubtitle {
  font-size: 0.92rem;
  color: var(--text-secondary);
  margin-top: 4px;
}

.arrowIndicator {
  font-size: 1.2rem;
  color: var(--text-muted);
}

/* 3 Opaque #080c14 Vertical Cards for Rows 2, 3, 4 */
.placeholderRowContent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-24);
}

@media (max-width: 1024px) {
  .placeholderRowContent {
    grid-template-columns: 1fr;
  }
}

.placeholderCard {
  background-color: #080c14;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: var(--space-32);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-12);
  min-height: 220px;
  text-align: center;
  color: var(--text-muted);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}

.placeholderCard:hover {
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.6);
}

.placeholderIcon {
  font-size: 2.5rem;
  color: #ffffff;
}
```

## File: src/components/sections/Skills/SkillKeyboard.jsx
```javascript
import React, { useState, useEffect } from 'react';
import { skills } from '../../../data/skills';
import styles from './SkillKeyboard.module.css';

export function SkillKeyboard() {
  const [activeSkill, setActiveSkill] = useState(skills[3]); // Description state
  const [hoveredSkillId, setHoveredSkillId] = useState(null); // Active mouse hover state
  const [pressedSkillId, setPressedSkillId] = useState(null); // Typing shortcut state

  // Physical keyboard typing shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      const pressedChar = e.key.toUpperCase();
      const matchedSkill = skills.find(s => s.keyChar === pressedChar);
      
      if (matchedSkill) {
        setActiveSkill(matchedSkill);
        setPressedSkillId(matchedSkill.id);

        setTimeout(() => {
          setPressedSkillId(null);
        }, 220);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnterKey = (skill) => {
    setActiveSkill(skill);
    setHoveredSkillId(skill.id);
  };

  const handleMouseLeavePlate = () => {
    // Unclick all keys when mouse exits the keyboard board
    setHoveredSkillId(null);
  };

  return (
    <div className={styles.keyboardSectionWrapper}>
      {/* Popout Skill Description Card above Keyboard */}
      <div className={styles.popoutCard}>
        <div className={styles.popoutIconWrapper}>
          <img src={activeSkill.icon} alt={activeSkill.name} className={styles.svgLogo} />
        </div>
        <div className={styles.popoutContent}>
          <div className={styles.popoutHeader}>
            <h3 className={styles.popoutName}>{activeSkill.name}</h3>
            <span className={styles.popoutBadge}>{activeSkill.category}</span>
          </div>
          <p className={styles.popoutTagline}>{activeSkill.tagline}</p>
        </div>
      </div>

      <p className={styles.hintText}>💡 Hover over or click any key to inspect skill details</p>

      {/* 3D Isometric Viewport */}
      <div className={styles.perspectiveViewport}>
        <div 
          className={styles.keyboardPlate} 
          role="toolbar" 
          aria-label="Interactive Skill Keycaps"
          onMouseLeave={handleMouseLeavePlate}
        >
          {skills.map((skill) => {
            // Key is ONLY pressed down if currently hovered OR triggered by physical keypress
            const isCurrentlyPressed = hoveredSkillId === skill.id || pressedSkillId === skill.id;

            return (
              <button
                key={skill.id}
                className={`${styles.keycap} ${isCurrentlyPressed ? styles.keycapPressed : ''}`}
                onMouseEnter={() => handleMouseEnterKey(skill)}
                onClick={() => handleMouseEnterKey(skill)}
                onFocus={() => handleMouseEnterKey(skill)}
                aria-label={`Skill: ${skill.name}`}
              >
                {/* Stable inner face */}
                <div className={styles.keycapFace}>
                  <span className={styles.keyShortcut}>{skill.keyChar}</span>
                  <div className={styles.iconContainer}>
                    <img src={skill.icon} alt={skill.name} className={styles.svgLogo} />
                  </div>
                  <span className={styles.keyName}>{skill.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/sections/Skills/SkillKeyboard.module.css
```css
.keyboardSectionWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-32);
  width: 100%;
}

/* Popout Skill Description Card with Fixed Height to Prevent Layout Shake */
.popoutCard {
  width: 100%;
  max-width: 580px;
  height: 105px; /* Fixed height eliminates layout shifting */
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.10) 0%, 
    rgba(30, 58, 138, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 10px 30px var(--accent-soft);
  position: relative;
  overflow: hidden;
  padding: var(--space-20) var(--space-24);
  display: flex;
  align-items: center;
  gap: var(--space-16);
  transition: all var(--transition-normal);
}

.popoutCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
}

.popoutCard::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4),
    transparent,
    rgba(255, 255, 255, 0.15)
  );
}

.popoutIconWrapper {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--surface-elevated);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  padding: 8px;
  flex-shrink: 0;
}

.popoutContent {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  overflow: hidden;
}

.popoutHeader {
  display: flex;
  align-items: center;
  gap: var(--space-12);
}

.popoutName {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

.popoutBadge {
  font-size: 0.75rem;
  color: var(--text-primary);
  background-color: var(--accent-soft);
  padding: 2px 10px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-active);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.popoutTagline {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hintText {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

/* 3D Isometric Viewport Container */
.perspectiveViewport {
  perspective: 1200px;
  width: 100%;
  max-width: 680px;
  padding: var(--space-32) 0;
  display: flex;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}

/* 3D Floating Keyboard Base Plate */
.keyboardPlate {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-16);
  padding: var(--space-24);
  background: linear-gradient(145deg, var(--surface-elevated) 0%, var(--surface) 100%);
  border: 1px solid var(--border-active);
  border-radius: var(--radius-xl);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform;
  transform: rotateX(38deg) rotateZ(-18deg) rotateY(3deg);
  box-shadow: 
    -12px 14px 28px rgba(0, 0, 0, 0.25),
    0 20px 40px var(--accent-soft);
  transition: transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1);
  animation: floatBoard 5s ease-in-out infinite alternate;
  width: 100%;
}

.perspectiveViewport:hover .keyboardPlate {
  animation-play-state: paused;
  transform: rotateX(32deg) rotateZ(-12deg) rotateY(2deg) scale(1.02);
}

@keyframes floatBoard {
  0% { 
    transform: rotateX(38deg) rotateZ(-18deg) rotateY(3deg) translateY(0px); 
  }
  50% { 
    transform: rotateX(40deg) rotateZ(-15deg) rotateY(5deg) translateY(-28px); 
  }
  100% { 
    transform: rotateX(36deg) rotateZ(-21deg) rotateY(1deg) translateY(14px); 
  }
}

.keycap {
  position: relative;
  min-height: 90px;
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
  padding: 0;
  transform-style: preserve-3d;
}

/* Resting State: Keycap face sits elevated at translateZ(12px) */
.keycapFace {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  padding: var(--space-12) var(--space-8);
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 12px);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  box-shadow: 
    0 10px 0 var(--border),
    0 14px 22px rgba(0, 0, 0, 0.2);
  transition: transform 150ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 150ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 150ms ease;
}

/* Pressed State: Keycap depresses ONLY when hovered or pressed by physical key */
.keycapPressed .keycapFace {
  transform: translate3d(0, 5px, 4px) !important;
  box-shadow: 
    0 3px 0 var(--accent),
    0 6px 14px var(--accent-soft);
  border-color: var(--accent);
  background-color: var(--surface-elevated);
}

.iconContainer {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate3d(0, 0, 2px);
  transition: transform var(--transition-fast);
}

.svgLogo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25));
  image-rendering: -webkit-optimize-contrast;
}

.keycapPressed .iconContainer {
  transform: translate3d(0, 0, 2px) scale(1.12);
}

.keyName {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  letter-spacing: 0.01em;
  line-height: 1.2;
}

.keyShortcut {
  position: absolute;
  top: 6px;
  right: 8px;
  font-size: 0.65rem;
  font-weight: 700;
  opacity: 0.6;
  font-family: var(--font-mono);
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .perspectiveViewport {
    perspective: none;
    padding: var(--space-16) 0;
  }

  .keyboardPlate {
    transform: none !important;
    animation: none !important;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  .keycap {
    min-height: 85px;
  }

  .keycapFace {
    box-shadow: 0 4px 0 var(--border);
    transform: none !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .keyboardPlate {
    animation: none;
  }
}
```

## File: src/components/sections/Skills/Skills.jsx
```javascript
import React from 'react';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { SkillKeyboard } from './SkillKeyboard';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section id="skills" className={styles.skillsSection} aria-label="Skills and Capabilities">
      <div className="container">
        <SectionHeading
          number="02 / SKILLS"
          title="Interactive Tech Stack"
          subtitle="Explore my core development toolkit across frontend design, backend systems, databases, and workflow tools."
          centered={true}
        />

        <div className={styles.keyboardContainer}>
          <SkillKeyboard />
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/sections/Skills/Skills.module.css
```css
.skillsSection {
  padding: var(--space-96) 0;
  border-top: 1px solid var(--border);
  background-color: var(--bg-secondary);
}

.keyboardContainer {
  margin-top: var(--space-32);
}
```

## File: src/components/showcase/ButtonShowcase/ButtonShowcase.css
```css
.button-showcase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
}

@media (max-width: 1024px) {
  .button-showcase-grid {
    grid-template-columns: 1fr;
  }
}

/* Opaque #080c14 Vertical Cards */
.button-card-column {
  background-color: #080c14;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 420px;
  gap: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}

.button-card-column:hover {
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.6);
}

.button-card-header {
  width: 100%;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 12px;
}

.button-card-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #ffffff;
}

.button-card-subtext {
  font-size: 0.8rem;
  color: #94a3b8;
  margin-top: 2px;
}

/* ============================================================
   BUTTON 1: Gradient Border Rotate
   ============================================================ */
.uiverse-btn-1 {
  position: relative;
  width: 130px;
  height: 42px;
  background-color: #000000;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  justify-content: center;
  border: none;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.9rem;
}

.uiverse-btn-1::before {
  content: '';
  position: absolute;
  inset: 0;
  left: -4px;
  top: -1px;
  margin: auto;
  width: 138px;
  height: 50px;
  border-radius: 10px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.uiverse-btn-1::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

.uiverse-btn-1:hover::after {
  filter: blur(30px);
}

.uiverse-btn-1:hover::before {
  transform: rotate(-180deg);
}

.uiverse-btn-1:active::before {
  transform: scale(0.7);
}

/* ============================================================
   BUTTON 2: Animated Arrow Circle
   ============================================================ */
.uiverse-btn-2 {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 14px 32px;
  border: 4px solid transparent;
  font-size: 15px;
  background-color: transparent;
  border-radius: 100px;
  font-weight: 700;
  color: white;
  box-shadow: 0 0 0 2px #622bff;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.uiverse-btn-2 svg {
  position: absolute;
  width: 22px;
  fill: white;
  z-index: 9;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.uiverse-btn-2 .arr-1 { right: 16px; }
.uiverse-btn-2 .arr-2 { left: -25%; }

.uiverse-btn-2 .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: #622bff;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.uiverse-btn-2 .text {
  position: relative;
  z-index: 1;
  transform: translateX(-12px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.uiverse-btn-2:hover {
  box-shadow: 0 0 0 12px transparent;
  color: white;
  border-radius: 12px;
}

.uiverse-btn-2:hover .arr-1 { right: -25%; }
.uiverse-btn-2:hover .arr-2 { left: 16px; }
.uiverse-btn-2:hover .text { transform: translateX(12px); }
.uiverse-btn-2:hover svg { fill: white; }

.uiverse-btn-2:active {
  transform: scale(0.95);
  box-shadow: 0 0 0 4px #622bff;
}

.uiverse-btn-2:hover .circle {
  width: 220px;
  height: 220px;
  opacity: 1;
}

/* ============================================================
   BUTTON 3: Pink Border Fill Slide
   ============================================================ */
.uiverse-btn-3 {
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 0.7em 2em;
  border: 3px solid #FF0072;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #FF0072;
  text-decoration: none;
  transition: 0.3s ease all;
  z-index: 1;
  cursor: pointer;
  background: transparent;
}

.uiverse-btn-3::before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: '';
  background-color: #FF0072;
  z-index: -1;
}

.uiverse-btn-3:hover, 
.uiverse-btn-3:focus {
  color: white;
}

.uiverse-btn-3:hover::before, 
.uiverse-btn-3:focus::before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

.uiverse-btn-3:active {
  transform: scale(0.9);
}

/* ============================================================
   BUTTON 4: Neon Reflect Watch Button
   ============================================================ */
.uiverse-btn-4 {
  font-size: 1rem;
  padding: 0.875rem 2.2rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
}

.uiverse-btn-4:active {
  transform: scale(0.92);
}

.uiverse-btn-4:hover {
  background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
  color: rgb(4, 4, 38);
}

/* ============================================================
   BUTTON 5: Multi-SVG Stack Hover
   ============================================================ */
.uiverse-btn-5 {
  position: relative;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  width: 140px;
  height: 46px;
  background-color: #eeeeed;
  border-radius: 80px;
  border: none;
  padding: 0 80px;
  transition: all 0.2s ease;
  justify-content: center;
  align-items: center;
}

.uiverse-btn-5:hover {
  transform: scale(1.08);
}

.uiverse-btn-5 span {
  position: absolute;
  z-index: 99;
  width: 140px;
  height: 46px;
  border-radius: 80px;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  line-height: 46px;
  letter-spacing: 1px;
  color: #eeeeed;
  background-color: #1f1f1f;
  padding: 0 10px;
  transition: all 1.2s ease;
}

.uiverse-btn-5 .container {
  display: flex;
  width: 140px;
  border-radius: 80px;
  line-height: 46px;
  align-items: center;
  justify-content: center;
}

.uiverse-btn-5 svg {
  padding: 0 4px;
  opacity: 0;
  fill: #1f1f1f;
  transition: opacity 0.3s ease;
}

.uiverse-btn-5 .container svg:nth-of-type(1) { transition-delay: 0.65s; }
.uiverse-btn-5 .container svg:nth-of-type(2) { transition-delay: 0.8s; }
.uiverse-btn-5 .container svg:nth-of-type(3) { transition-delay: 0.5s; }

.uiverse-btn-5:hover span {
  opacity: 0;
}

.uiverse-btn-5:hover svg {
  opacity: 1;
}

/* ============================================================
   BUTTON 6: 3D Stacked Shadow
   ============================================================ */
.uiverse-btn-6 {
  width: 130px;
  height: 42px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  background-color: #171717;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  transition: all 0.4s ease;
}

.uiverse-btn-6:hover {
  border-radius: 6px;
  transform: translateY(-8px);
  box-shadow: 
    0 7px 0 -2px #f85959,
    0 15px 0 -4px #39a2db,
    0 16px 10px -3px #39a2db;
}

.uiverse-btn-6:active {
  transition: all 0.2s ease;
  transform: translateY(-4px);
  box-shadow: 
    0 2px 0 -2px #f85959,
    0 8px 0 -4px #39a2db,
    0 12px 10px -3px #39a2db;
}

/* ============================================================
   BUTTON 7: Dual Slide Gradient
   ============================================================ */
.uiverse-btn-7 {
  position: relative;
  background-color: transparent;
  color: #e8e8e8;
  font-size: 15px;
  font-weight: 700;
  border-radius: 10px;
  width: 140px;
  height: 52px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.uiverse-btn-7::before {
  content: "Hello!";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(135deg, #7b4397, #dc2430);
  transform: translate(0%, 90%);
  z-index: 99;
  position: relative;
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.uiverse-btn-7::after {
  content: "Hover me";
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform-origin: top;
  transform: translate(0%, -100%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.uiverse-btn-7:hover::before {
  transform: translate(0%, 0%);
}

.uiverse-btn-7:hover::after {
  transform: translate(0%, -200%);
}

.uiverse-btn-7:active {
  transform: scale(0.95);
}

/* ============================================================
   BUTTON 8: Origami Corner Ribbon
   ============================================================ */
.uiverse-btn-8 {
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.7em 1.6em;
  background-color: #BF0426;
  text-decoration: none;
  border: none;
  border-radius: 0.5em;
  color: #DEDEDE;
  box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.uiverse-btn-8::before {
  position: absolute;
  content: '';
  height: 0;
  width: 0;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1) 60%);
  border-radius: 0 0 0.5em 0;
  box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
  transition: 0.3s ease;
}

.uiverse-btn-8:hover::before {
  width: 1.6em;
  height: 1.6em;
}

.uiverse-btn-8:active {
  box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
  transform: translate(0.1em, 0.1em);
}

/* ============================================================
   BUTTON 9: 3D Brutalist Pop Social Connect
   ============================================================ */
.uiverse-social-container {
  position: relative;
  perspective: 1000px;
}

.uiverse-social-button {
  position: relative;
  width: 180px;
  height: 60px;
  background: linear-gradient(135deg, #ff3366, #ff6b35);
  border: 3px solid #000;
  box-shadow: 6px 6px 0 #000;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-style: preserve-3d;
}

.uiverse-social-button:hover {
  transform: translateZ(15px) rotateX(5deg) rotateY(-5deg);
  box-shadow:
    8px 8px 0 #000,
    16px 16px 0 rgba(255, 51, 102, 0.4),
    0 0 30px rgba(255, 51, 102, 0.6);
}

.uiverse-button-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: inherit;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.uiverse-button-text {
  color: #000;
  font-weight: 800;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);
}

.uiverse-social-button:hover .uiverse-button-text {
  opacity: 0;
  transform: translateY(-20px) scale(0.8);
}

.uiverse-icons-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.uiverse-social-button:hover .uiverse-icons-container {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.uiverse-social-icon {
  width: 24px;
  height: 24px;
  fill: #000;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.uiverse-social-button:hover .uiverse-social-icon {
  animation: iconPop 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.uiverse-social-icon:hover {
  transform: scale(1.2) rotate(15deg);
  fill: #fff;
}
```

## File: src/components/showcase/ButtonShowcase/ButtonShowcase.jsx
```javascript
import React from 'react';
import './ButtonShowcase.css';

export function ButtonShowcase() {
  return (
    <div className="button-showcase-grid">
      {/* Opaque #080c14 Vertical Card 1 */}
      <div className="button-card-column">
        <div className="button-card-header">
          <h4 className="button-card-title">Gradient & Motion Interactions</h4>
          <p className="button-card-subtext">Rotating gradients, expanding circles, and slide fills.</p>
        </div>

        {/* Button 1: Gradient Border Rotate */}
        <button className="uiverse-btn-1" type="button">
          Button
        </button>

        {/* Button 2: Modern Animated Arrow Circle */}
        <button className="uiverse-btn-2" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Modern Button</span>
          <span className="circle"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>

        {/* Button 3: Pink Border Fill Slide */}
        <button className="uiverse-btn-3" type="button">
          Button
        </button>
      </div>

      {/* Opaque #080c14 Vertical Card 2 */}
      <div className="button-card-column">
        <div className="button-card-header">
          <h4 className="button-card-title">Reflections & Layered Animations</h4>
          <p className="button-card-subtext">Neon reflections, icon swaps, and stacked 3D shadows.</p>
        </div>

        {/* Button 4: Neon Reflect Watch Button */}
        <button className="uiverse-btn-4" type="button">
          Watch
        </button>

        {/* Button 5: Multi-SVG Stack Hover */}
        <button className="uiverse-btn-5" type="button">
          <span>Hover Me</span>
          <div className="container">
            <svg height="24" width="24" viewBox="0 0 1024 1024">
              <path d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"></path>
            </svg>
            <svg height="24" width="24" viewBox="0 0 1024 1024">
              <path d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z"></path>
            </svg>
            <svg height="24" width="24" viewBox="0 0 1024 1024">
              <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"></path>
            </svg>
          </div>
        </button>

        {/* Button 6: 3D Stacked Shadow */}
        <button className="uiverse-btn-6" type="button">
          Hover Me!
        </button>
      </div>

      {/* Opaque #080c14 Vertical Card 3 */}
      <div className="button-card-column">
        <div className="button-card-header">
          <h4 className="button-card-title">Origami & 3D Brutalist Pop</h4>
          <p className="button-card-subtext">3D depth reveals, origami corner folds, and brutalist social states.</p>
        </div>

        {/* Button 7: Dual Slide Gradient */}
        <button className="uiverse-btn-7" type="button"></button>

        {/* Button 8: Origami Corner Ribbon */}
        <button className="uiverse-btn-8" type="button">
          Button
        </button>

        {/* Button 9: 3D Brutalist Pop Social Connect */}
        <div className="uiverse-social-container">
          <div className="uiverse-social-button">
            <div className="uiverse-button-face">
              <span className="uiverse-button-text">CONNECT</span>
            </div>
            <div className="uiverse-icons-container">
              <svg viewBox="0 0 24 24" className="uiverse-social-icon">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <svg viewBox="0 0 24 24" className="uiverse-social-icon">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
              <svg viewBox="0 0 24 24" className="uiverse-social-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              <svg viewBox="0 0 24 24" className="uiverse-social-icon">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/showcase/ShowcaseItem/ShowcaseItem.jsx
```javascript
import React from 'react';
import { Tag } from '../../ui/Tag/Tag';
import { Button } from '../../ui/Button/Button';
import styles from './ShowcaseItem.module.css';

export function ShowcaseItem({ item, children }) {
  return (
    <article className={styles.showcaseCard}>
      <header className={styles.cardHeader}>
        <div>
          <span className={styles.categoryTag}>{item.category}</span>
          <h3 className={styles.title}>{item.title}</h3>
        </div>
        {item.codeUrl && (
          <Button href={item.codeUrl} variant="outline" external>
            View Code ↗
          </Button>
        )}
      </header>

      <div className={styles.bodyGrid}>
        {/* Coded Interactive Demo Frame */}
        <div className={styles.previewFrame}>
          {children}
        </div>

        {/* Technical Explanation Column */}
        <div className={styles.explanationArea}>
          <div className={styles.sectionBlock}>
            <h4 className={styles.blockTitle}>Scenario / Purpose</h4>
            <p className={styles.text}>{item.description}</p>
          </div>

          <div className={styles.sectionBlock}>
            <h4 className={styles.blockTitle}>UI/UX Decisions</h4>
            <p className={styles.text}>{item.uiDecisions}</p>
          </div>

          <div className={styles.sectionBlock}>
            <h4 className={styles.blockTitle}>Frontend Concepts Demonstrated</h4>
            <div className={styles.tagsWrapper}>
              {item.concepts.map((concept) => (
                <Tag key={concept} variant="accent">{concept}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
```

## File: src/components/showcase/ShowcaseItem/ShowcaseItem.module.css
```css
/* Glassmorphism Showcase Item Frame */
.showcaseCard {
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.10) 0%, 
    rgba(30, 58, 138, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-64);
  transition: all var(--transition-normal);
}

.showcaseCard:hover {
  border-color: rgba(255, 255, 255, 0.22);
  background: linear-gradient(
    135deg, 
    rgba(139, 92, 246, 0.16) 0%, 
    rgba(30, 58, 138, 0.12) 100%
  );
}

.cardHeader {
  padding: var(--space-20) var(--space-28);
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-16);
  flex-wrap: wrap;
}

.categoryTag {
  font-size: 0.8rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.title {
  font-size: 1.4rem;
  color: var(--text-primary);
  font-weight: 800;
}

.bodyGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}

@media (min-width: 1024px) {
  .bodyGrid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.previewFrame {
  padding: var(--space-32);
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 380px;
  border-bottom: 1px solid var(--border);
}

@media (min-width: 1024px) {
  .previewFrame {
    border-bottom: none;
    border-right: 1px solid var(--border);
  }
}

.explanationArea {
  padding: var(--space-32);
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
}

.sectionBlock {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.blockTitle {
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.text {
  font-size: 0.98rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.tagsWrapper {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
}
```

## File: src/components/ui/Button/Button.jsx
```javascript
import React from 'react';
import styles from './Button.module.css';

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  download, 
  external, 
  type = 'button',
  className = '' 
}) {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        onClick={onClick}
        download={download}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
```

## File: src/components/ui/Button/Button.module.css
```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  padding: 0.875rem 1.75rem ;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
}

.primary {
  background-color: var(--accent);
  color: #07090d;
  border: 1px solid var(--accent);
}

.primary:hover {
  background-color: var(--accent-strong);
  border-color: var(--accent-strong);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px var(--accent-soft);
}

.secondary {
  background-color: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.outline {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.outline:hover {
  border-color: var(--border-active);
  background-color: var(--accent-soft);
}
```

## File: src/components/ui/Preloader/Preloader.jsx
```javascript
import React, { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'welcome'
  const [wordStage, setWordStage] = useState(0);
  const [isExit, setIsExit] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  // Stage 1: Progress Counter (0% -> 100%)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('welcome'), 400); // Transition to Welcome Phase
          return 100;
        }
        return prev + 2;
      });
    }, 45); // Smooth ~2.2s counter speed

    return () => clearInterval(interval);
  }, []);

  // Stage 2: Staggered Word Reveal when in 'welcome' phase
  useEffect(() => {
    if (phase === 'welcome') {
      const t1 = setTimeout(() => setWordStage(1), 200);  // Top Icons
      const t2 = setTimeout(() => setWordStage(2), 600);  // "Welcome"
      const t3 = setTimeout(() => setWordStage(3), 1000); // "to my"
      const t4 = setTimeout(() => setWordStage(4), 1400); // "Portfolio"
      const t5 = setTimeout(() => setWordStage(5), 1800); // "Website"
      const t6 = setTimeout(() => setWordStage(6), 2200); // Domain Pill
      const tExit = setTimeout(() => setIsExit(true), 3600); // Start Exit Fade
      const tUnmount = setTimeout(() => setIsUnmounted(true), 4800); // Unmount

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(t5);
        clearTimeout(t6);
        clearTimeout(tExit);
        clearTimeout(tUnmount);
      };
    }
  }, [phase]);

  if (isUnmounted) return null;

  return (
    <div className={`${styles.preloaderWrapper} ${isExit ? styles.exitFade : ''}`} aria-hidden="true">
      <div className={styles.centerContainer}>
        {/* Stage 1 View: Progress Bar & Counter */}
        {phase === 'loading' && (
          <div className={styles.loadingBox}>
            <h1 className={styles.brandLogo}>
              ZHY<span className={styles.brandDot}>.</span>
            </h1>

            <p className={styles.subTitle}>FRONTEND DEVELOPER & UI/UX DESIGNER</p>

            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: `${progress}%` }} />
            </div>

            <div className={styles.footerMeta}>
              <span>{progress < 100 ? 'Initializing System...' : 'System Ready ✓'}</span>
              <span className={styles.counter}>{progress}%</span>
            </div>
          </div>
        )}

        {/* Stage 2 View: Welcome Icons, Words & Domain Pill */}
        {phase === 'welcome' && (
          <div className={styles.welcomeBox}>
            {/* Top 3 Circular Icon Badges */}
            <div className={`${styles.iconsRow} ${wordStage >= 1 ? styles.show : ''}`}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" className={styles.svgIcon}>
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" className={styles.svgIcon}>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" className={styles.svgIcon}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                </svg>
              </div>
            </div>

            {/* Word-by-Word Mixed Direction Animated Text */}
            <div className={styles.headingGrid}>
              <div className={styles.wordRow}>
                <span className={`${styles.word} ${styles.fromLeft} ${wordStage >= 2 ? styles.showWord : ''}`}>
                  Welcome
                </span>
                <span className={`${styles.word} ${styles.fromRight} ${wordStage >= 3 ? styles.showWord : ''}`}>
                  to my
                </span>
              </div>

              <div className={styles.wordRow}>
                <span className={`${styles.word} ${styles.fromBottom} ${wordStage >= 4 ? styles.showWord : ''}`}>
                  Portfolio
                </span>
                <span className={`${styles.word} ${styles.fromLeft} ${wordStage >= 5 ? styles.showWord : ''}`}>
                  Website
                </span>
              </div>
            </div>

            {/* Bottom Domain / Name Pill Badge */}
            <div className={`${styles.domainPill} ${wordStage >= 6 ? styles.showPill : ''}`}>
              <span>ZHY • Ailex Denzel Estrada</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
```

## File: src/components/ui/Preloader/Preloader.module.css
```css
.preloaderWrapper {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: #030508;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-24);
  transition: opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1), transform 1200ms cubic-bezier(0.16, 1, 0.3, 1), visibility 1200ms ease;
  will-change: opacity, transform;
}

/* Exit Fade Out + Scale Up */
.exitFade {
  opacity: 0;
  transform: scale(1.08);
  visibility: hidden;
  pointer-events: none;
}

.centerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-32);
  width: 100%;
  max-width: 820px;
}

/* Stage 1: Progress Loading Box */
.loadingBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-20);
  max-width: 440px;
  width: 100%;
  animation: fadeIn 400ms ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.brandLogo {
  font-size: clamp(3.2rem, 7vw, 5.2rem);
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.02em;
  line-height: 1;
}

.brandDot {
  color: var(--accent);
  filter: drop-shadow(0 0 16px var(--accent));
}

.subTitle {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.progressContainer {
  width: 100%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  overflow: hidden;
  position: relative;
  margin-top: var(--space-8);
}

.progressBar {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), #ffffff);
  border-radius: var(--radius-full);
  transition: width 100ms ease-out;
  box-shadow: 0 0 12px var(--accent);
}

.footerMeta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
}

.counter {
  font-weight: 700;
  color: #ffffff;
}

/* Stage 2: Welcome Box */
.welcomeBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-32);
  width: 100%;
  animation: fadeIn 600ms ease-out;
}

.iconsRow {
  display: flex;
  align-items: center;
  gap: var(--space-16);
  opacity: 0;
  transform: translateY(-30px);
  transition: opacity 900ms cubic-bezier(0.16, 1, 0.3, 1), transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
}

.iconsRow.show {
  opacity: 1;
  transform: translateY(0);
}

.iconCircle {
  width: 54px;
  height: 54px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.svgIcon {
  width: 22px;
  height: 22px;
  color: #f8fafc;
}

.headingGrid {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  align-items: center;
}

.wordRow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35em;
  flex-wrap: wrap;
}

.word {
  font-size: clamp(2.4rem, 6vw, 4.8rem);
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.02em;
  line-height: 1.1;
  opacity: 0;
  will-change: transform, opacity;
  transition: opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1), transform 1200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.fromLeft {
  transform: translate3d(-70px, 0, 0);
}

.fromRight {
  transform: translate3d(70px, 0, 0);
}

.fromBottom {
  transform: translate3d(0, 50px, 0);
}

.showWord {
  opacity: 1;
  transform: translate3d(0, 0, 0) !important;
}

.domainPill {
  opacity: 0;
  transform: translateY(25px);
  padding: 0.6rem 1.6rem;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #a0aec0;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  transition: opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.domainPill.showPill {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .preloaderWrapper {
    display: none !important;
  }
}
```

## File: src/components/ui/Reveal/Reveal.jsx
```javascript
import React, { useRef, useEffect, useState } from 'react';
import styles from './Reveal.module.css';

export function Reveal({ 
  children, 
  direction = 'up', // 'up' | 'left' | 'fade'
  delay = 0,        // delay in ms
  className = '',
  width = '100%' 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Continuous triggering: sets visible true when in view, false when out
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12, // Triggers when 12% of element is in viewport
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const directionClass = styles[direction] || styles.up;
  const visibleClass = isVisible ? styles.visible : '';

  return (
    <div
      ref={ref}
      className={`${styles.revealContainer} ${directionClass} ${visibleClass} ${className}`.trim()}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        width: width
      }}
    >
      {children}
    </div>
  );
}
```

## File: src/components/ui/Reveal/Reveal.module.css
```css
.revealContainer {
  opacity: 0;
  will-change: transform, opacity;
  /* Ultra-slow 1600ms cinematic entrance transition */
  transition: opacity 1600ms cubic-bezier(0.16, 1, 0.3, 1), transform 1600ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Direction: Left (Slide in from left) */
.left {
  transform: translate3d(-60px, 0, 0);
}

/* Direction: Up (Slide up from bottom) */
.up {
  transform: translate3d(0, 50px, 0);
}

/* Direction: Fade (Pure fade in) */
.fade {
  transform: translate3d(0, 0, 0);
}

/* Revealed State when entering Viewport */
.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0) !important;
}

@media (prefers-reduced-motion: reduce) {
  .revealContainer {
    opacity: 1;
    transform: none !important;
    transition: none;
  }
}
```

## File: src/components/ui/SectionHeading/SectionHeading.jsx
```javascript
import React from 'react';
import styles from './SectionHeading.module.css';

export function SectionHeading({ number, title, subtitle, centered = false }) {
  return (
    <div className={`${styles.headingWrapper} ${centered ? styles.centered : ''}`}>
      {number && <span className={styles.numberTag}>{number}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
```

## File: src/components/ui/SectionHeading/SectionHeading.module.css
```css
.headingWrapper {
  margin-bottom: var(--space-48);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.headingWrapper.centered {
  text-align: center;
  align-items: center;
}

.numberTag {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.title {
  color: var(--text-primary);
  font-size: clamp(1.8rem, 4vw, 2.75rem);
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 60ch;
}
```

## File: src/components/ui/Tag/Tag.jsx
```javascript
import React from 'react';
import styles from './Tag.module.css';

export function Tag({ children, variant = 'default' }) {
  return (
    <span className={`${styles.tag} ${styles[variant]}`}>
      {children}
    </span>
  );
}
```

## File: src/components/ui/Tag/Tag.module.css
```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: var(--space-4);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 500;
  background-color: var(--surface-elevated);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  white-space: nowrap;
}

.accent {
  background-color: var(--accent-soft);
  border-color: var(--border-active);
  color: var(--accent);
}

.status {
  background-color: var(--surface);
  border-color: var(--border);
  color: var(--text-muted);
}
```

## File: src/data/navigation.js
```javascript
export const navLinks = [
  { id: 'home', label: 'Home', href: '/#top', type: 'section' },
  { id: 'about', label: 'About', href: '/#about', type: 'section' },
  { id: 'skills', label: 'Skills', href: '/#skills', type: 'section' },
  { id: 'projects', label: 'Projects', href: '/#projects', type: 'section' },
  { id: 'showcase', label: 'Showcase', href: '/#showcase', type: 'section' },
  { id: 'contact', label: 'Contact', href: '/#contact', type: 'section' }
];
```

## File: src/data/projects.js
```javascript
export const projects = [
  {
    id: 'e-voting',
    slug: 'e-voting',
    title: 'E-Voting System',
    summary: 'A full-stack web application designed to replace a manual, paper-based student election process with a secure, transparent, and highly accessible digital platform across four academic groups.',
    description: 'Developed independently as a solo full-stack engineer, this web-based election management platform automates candidate registration, ballot creation, voter authentication, real-time vote counting, and election audit logging. It provides customized, age-appropriate interfaces tailored for Elementary, Junior High, Senior High, and College students.',
    role: 'Solo Full-Stack Developer & UI/UX Designer',
    featured: true,
    published: true,
    status: 'Deployment in progress',
    technologies: ['React', 'JavaScript', 'C#', 'ASP.NET Core Web API', 'MSSQL', 'HTML5', 'CSS Modules'],
    academicGroups: ['College', 'Senior High School', 'Junior High School', 'Elementary'],
    problem: 'The institution relied on manual paper ballots, requiring hours of physical vote counting, high paper waste, human error during tallying, and vulnerability to election disputes. Furthermore, different student age groups required vastly different digital interface complexities.',
    solution: 'Engineered a centralized, role-based full-stack web application with ASP.NET Core REST API backend and React frontend. Integrated age-customized election ballots, automated cryptographic vote hashing, real-time result tabulation, and comprehensive audit logs for election administrators.',
    responsibilities: [
      'UI/UX Design & Figma Prototyping for 4 academic tiers',
      'Frontend React component architecture & responsive CSS Modules',
      'Backend ASP.NET Core Web API REST endpoints & controller logic',
      'Database relational schema modeling & stored procedures in MSSQL',
      'Role-based access control (RBAC) & security audit logging',
      'End-to-end voter workflow testing & deployment prep'
    ],
    features: [
      {
        title: 'Multi-Tier Academic Ballots',
        description: 'Tailored voting interfaces designed specifically for College, Senior High, Junior High, and Elementary student experience levels.'
      },
      {
        title: 'Real-Time Result Tabulation',
        description: 'Automated backend tallying providing instant, tamper-evident election results to authorized election committees.'
      },
      {
        title: 'Role-Based Authentication',
        description: 'Secure voter authorization preventing duplicate ballot submission and enforcing student group permission boundaries.'
      },
      {
        title: 'Election Audit Trail',
        description: 'Immutable system logs tracking registration, ballot activation, and election status transitions.'
      }
    ],
    challenges: [
      {
        title: 'Multi-Tier Student Access & UX Complexity',
        description: 'Elementary students needed simple, highly visual graphical voting elements, while College students required detailed candidate platforms and position filters.',
        solution: 'Built a dynamic React ballot layout generator driven by student tier metadata, delivering simplified visual cards for younger groups and full information matrices for higher tiers.'
      },
      {
        title: 'Data Integrity & Vote Duplication Prevention',
        description: 'Ensuring that concurrent student login sessions across multiple campus devices could not submit duplicate votes or alter tallies.',
        solution: 'Utilized atomic database transactions in MSSQL combined with server-side JWT verification in ASP.NET Core to guarantee single-ballot execution per student ID.'
      }
    ],
    lessons: 'Building a solo full-stack system across four academic levels reinforced the importance of domain modeling before writing code. Designing the relational database schema in MSSQL and defining clean REST API contracts early eliminated frontend integration friction.',
    coverImage: '[E_VOTING_COVER]',
    screenshots: [
      '[E_VOTING_SCREENSHOT_01]',
      '[E_VOTING_SCREENSHOT_02]',
      '[E_VOTING_SCREENSHOT_03]'
    ],
    liveUrl: null,
    repositoryUrl: null
  },
  {
    id: 'olms',
    slug: 'olms',
    title: 'Online Library Management System (OLMS)',
    summary: 'A full-stack library management system engineered to digitize book inventories, student borrowing workflows, return tracking, overdue fines, and historical audit records.',
    description: 'Built independently end-to-end, OLMS replaces spreadsheet-based book tracking with a web portal. Librarians can manage catalog inventory, process loans and returns, and monitor borrow histories, while students can search for titles and reserve available books.',
    role: 'Solo Full-Stack Developer & UI/UX Designer',
    featured: false,
    published: true,
    status: 'Completed / Internal Case Study',
    technologies: ['React', 'JavaScript', 'C#', 'ASP.NET Core Web API', 'MSSQL', 'HTML5', 'CSS Modules'],
    academicGroups: ['Campus Library', 'Students & Faculty'],
    problem: 'Manual book logging resulted in misplaced inventory records, untracked overdue returns, inefficient search processes for students, and lack of historical borrowing analytics.',
    solution: 'Designed and implemented an integrated library portal connecting a React single-page application with a C# ASP.NET Core Web API and Microsoft SQL Server database.',
    responsibilities: [
      'UI/UX wireframing for student portal and librarian admin console',
      'React frontend interface for catalog searching and book status tracking',
      'ASP.NET Core Web API endpoints for borrow/return lifecycle transactions',
      'MSSQL database schema design for catalog items, loans, and fines',
      'System integration and data validation'
    ],
    features: [
      {
        title: 'Digital Book Catalog',
        description: 'Searchable inventory with real-time status indicators (Available, Borrowed, Reserved).'
      },
      {
        title: 'Loan & Return Processing',
        description: 'Automated check-out and check-in workflows for library administrators.'
      },
      {
        title: 'Borrowing History & Audit',
        description: 'Comprehensive historical records for student account management.'
      }
    ],
    challenges: [
      {
        title: 'Managing State Transitions for Loaned Items',
        description: 'Handling edge cases where books were requested while transitioning between return verification and shelving.',
        solution: 'Designed an explicit finite state machine for book inventory statuses in the backend database with stored procedure validation.'
      }
    ],
    lessons: 'Gained deep practical experience in database relational normalization and state lifecycle management across React components and REST API controllers.',
    coverImage: '[OLMS_COVER]',
    screenshots: [
      '[OLMS_SCREENSHOT_01]',
      '[OLMS_SCREENSHOT_02]',
      '[OLMS_SCREENSHOT_03]'
    ],
    liveUrl: null,
    repositoryUrl: null
  }
];
```

## File: src/data/showcase.js
```javascript
export const showcaseItems = [
  {
    id: 'auth-experience',
    title: '1. Authentication Experience',
    category: 'Forms & State Management',
    description: 'Interactive authentication interface featuring controlled form inputs, password visibility toggle, real-time validation feedback, loading states, and accessible error handling.',
    uiDecisions: 'Immediate visual feedback on input focus, high-contrast password visibility toggle, accessible aria-describedby error associations, and disabled submission during pending state.',
    concepts: ['Controlled Inputs', 'Password Visibility', 'Form Validation', 'ARIA Error Handling'],
    demoKey: 'auth',
    codeUrl: null
  },
  {
    id: 'responsive-navigation',
    title: '2. Responsive Navigation',
    category: 'Navigation & Accessibility',
    description: 'Interactive navigation bar demonstrating desktop link states, accessible mobile hamburger toggle, keyboard focus trap, and Escape key listener.',
    uiDecisions: 'Translucent backdrop blur, high-contrast active route indicators, clear hover states, and seamless mobile menu drawer transitions.',
    concepts: ['Mobile Menu State', 'Keyboard Escape Handling', 'ARIA Expanded', 'Backdrop Blur'],
    demoKey: 'nav',
    codeUrl: null
  },
  {
    id: 'buttons-interaction',
    title: '3. Buttons & Interaction States',
    category: 'Design System & Micro-Interactions',
    description: 'A comprehensive button state matrix demonstrating primary, secondary, destructive, loading, and disabled interaction states with keyboard focus rings.',
    uiDecisions: 'Distinct color coding for destructive actions, smooth hover scale elevation, visible focus indicators, and loading spinners replacing label copy during active async requests.',
    concepts: ['Design Tokens', 'State Variants', 'Focus Indicators', 'Micro-Interactions'],
    demoKey: 'buttons',
    codeUrl: null
  },
  {
    id: 'card-components',
    title: '4. Card Components & Information Hierarchy',
    category: 'Layout & Composition',
    description: 'Demonstrating modular card component composition across Profile, Project, and Content information structures.',
    uiDecisions: 'Clear visual contrast between titles, body copy, tags, and action buttons. Restricted line lengths and hover surface elevation.',
    concepts: ['Component Composition', 'Grid & Flexbox', 'Typography Scale', 'Hover Depth'],
    demoKey: 'cards',
    codeUrl: null
  },
  {
    id: 'form-validation',
    title: '5. Form & Validation Experience',
    category: 'UX Engineering & Data Entry',
    description: 'Interactive multi-field form with real-time onBlur validation, custom email regex checks, error clearing on keystroke, and success feedback banner.',
    uiDecisions: 'Field validation delayed until user blur to prevent premature errors, programmatically associated error messages, and disabled submit button when invalid.',
    concepts: ['onBlur Validation', 'Regex Validation', 'Feedback Banners', 'Keyboard Usability'],
    demoKey: 'form',
    codeUrl: null
  },
  {
    id: 'dashboard-interface',
    title: '6. Integrated Dashboard Interface',
    category: 'Complex UI Systems',
    description: 'A fully integrated mini-dashboard combining top navigation, summary stat cards, dynamic data filtering, search control, and interactive empty states.',
    uiDecisions: 'High-density information layout with clear visual grouping, instant client-side filtering, and helpful empty state feedback when filters return no matches.',
    concepts: ['Client-Side Filtering', 'Integrated State', 'Data Summary Cards', 'Empty State UI'],
    demoKey: 'dashboard',
    codeUrl: null
  }
];
```

## File: src/data/skills.js
```javascript
import html5Icon from '../assets/icons/html5.svg';
import css3Icon from '../assets/icons/css3.svg';
import jsIcon from '../assets/icons/javascript.svg';
import reactIcon from '../assets/icons/react.svg';
import csharpIcon from '../assets/icons/csharp.svg';
import aspnetIcon from '../assets/icons/aspnet.svg';
import mssqlIcon from '../assets/icons/mssql.svg';
import figmaIcon from '../assets/icons/figma.svg';
import gitIcon from '../assets/icons/git.svg';
import githubIcon from '../assets/icons/github.svg';
import vscodeIcon from '../assets/icons/vscode.svg';
import visualstudioIcon from '../assets/icons/visualstudio.svg';

export const skills = [
  { 
    id: 'html5', 
    name: 'HTML5', 
    keyChar: 'H',
    category: 'Frontend', 
    icon: html5Icon,
    tagline: 'Semantic web markup, accessible structure & WCAG standards.' 
  },
  { 
    id: 'css3', 
    name: 'CSS3', 
    keyChar: 'C',
    category: 'Frontend', 
    icon: css3Icon,
    tagline: 'Design tokens, CSS Modules, fluid clamp() typography & 3D transforms.' 
  },
  { 
    id: 'javascript', 
    name: 'JavaScript', 
    keyChar: 'J',
    category: 'Frontend', 
    icon: jsIcon,
    tagline: 'ES6+ logic, DOM interaction & async workflows.' 
  },
  { 
    id: 'react', 
    name: 'React', 
    keyChar: 'R',
    category: 'Frontend', 
    icon: reactIcon,
    tagline: 'Component composition, custom hooks, dynamic state & SPA routing.' 
  },
  { 
    id: 'csharp', 
    name: 'C#', 
    keyChar: 'S',
    category: 'Backend', 
    icon: csharpIcon,
    tagline: 'Object-oriented application logic, type-safe services & clean architecture.' 
  },
  { 
    id: 'aspnet', 
    name: 'ASP.NET Core', 
    keyChar: 'A',
    category: 'Backend', 
    icon: aspnetIcon,
    tagline: 'RESTful API design, controller routes, backend validation & middleware.' 
  },
  { 
    id: 'mssql', 
    name: 'MSSQL Server', 
    keyChar: 'M',
    category: 'Database', 
    icon: mssqlIcon,
    tagline: 'Relational database schemas, SQL queries, keys & data integrity.' 
  },
  { 
    id: 'figma', 
    name: 'Figma', 
    keyChar: 'F',
    category: 'Design', 
    icon: figmaIcon,
    tagline: 'Interface wireframing, component design systems & prototypes.' 
  },
  { 
    id: 'git', 
    name: 'Git', 
    keyChar: 'G',
    category: 'Workflow', 
    icon: gitIcon,
    tagline: 'Version control, commit history, branching strategies & merging code.' 
  },
  { 
    id: 'github', 
    name: 'GitHub', 
    keyChar: 'U',
    category: 'Workflow', 
    icon: githubIcon,
    tagline: 'Remote repositories, pull requests & project deployment.' 
  },
  { 
    id: 'vscode', 
    name: 'VS Code', 
    keyChar: 'V',
    category: 'Workflow', 
    icon: vscodeIcon,
    tagline: 'Primary workspace configured for rapid React & Web builds.' 
  },
  { 
    id: 'visualstudio', 
    name: 'Visual Studio', 
    keyChar: 'D',
    category: 'Workflow', 
    icon: visualstudioIcon,
    tagline: 'Enterprise IDE utilized for C# and ASP.NET Core API backend code.' 
  }
];

export const skillCategories = ['All', 'Frontend', 'Backend', 'Database', 'Design', 'Workflow'];
```

## File: src/data/socialLinks.js
```javascript
import emailIcon from '../assets/icons/gmail.svg';
import phoneIcon from '../assets/icons/phone.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import facebookIcon from '../assets/icons/facebook.svg';

export const socialLinks = [
  { id: 'email', label: 'Email', href: 'mailto:estradaailexdenzel@gmail.com', external: false, icon: emailIcon },
  { id: 'phone', label: 'Phone', href: 'tel:09629110684', external: false, icon: phoneIcon },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ailex-denzel-estrada-a70563387/', external: true, icon: linkedinIcon },
  { id: 'github', label: 'GitHub', href: 'https://github.com/aylexdensel', external: true, icon: githubIcon },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/zhy.privv', external: true, icon: facebookIcon }
];
```

## File: src/hooks/useTheme.js
```javascript
import { useState, useEffect } from 'react';

const THEME_STORAGE_KEY = 'zhy_portfolio_theme';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // 1. Check saved local storage preference
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // 2. Fallback to dark mode as default visual identity
    return 'dark';
  });

  useEffect(() => {
    // Synchronize HTML element attribute for global CSS token application
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
```

## File: src/pages/HomePage/HomePage.jsx
```javascript
import React from 'react';
import { Hero } from '../../components/sections/Hero/Hero';
import { About } from '../../components/sections/About/About';
import { Skills } from '../../components/sections/Skills/Skills';
import { Projects } from '../../components/sections/Projects/Projects';
import { ShowcaseSection } from '../../components/sections/Showcase/ShowcaseSection';
import { Contact } from '../../components/sections/Contact/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ShowcaseSection />
      <Contact />
    </>
  );
}

export default HomePage;
```

## File: src/pages/NotFoundPage/NotFoundPage.jsx
```javascript
import React from 'react';
import { Button } from '../../components/ui/Button/Button';
import { SEO } from '../../components/layout/SEO/SEO';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <>
      <SEO title="404 Page Not Found" description="The requested page could not be found." />
      <div className={styles.container}>
        <span className={styles.errorCode}>404</span>
        <h1 className={styles.title}>System Signal Lost</h1>
        <p className={styles.subtext}>
          The page or case study route you are attempting to access does not exist or has been relocated.
        </p>
        <Button href="/" variant="primary">
          Return to Homepage →
        </Button>
      </div>
    </>
  );
}

export default NotFoundPage;
```

## File: src/pages/NotFoundPage/NotFoundPage.module.css
```css
.container {
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--space-24);
  padding: var(--space-64) var(--space-24);
}

.errorCode {
  font-size: clamp(5rem, 12vw, 9rem);
  font-weight: 900;
  color: var(--accent);
  line-height: 1;
  text-shadow: 0 0 30px var(--accent-soft);
}

.title {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--text-primary);
}

.subtext {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 48ch;
}
```

## File: src/pages/ProjectPage/ProjectPage.jsx
```javascript
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Tag } from '../../components/ui/Tag/Tag';
import { Button } from '../../components/ui/Button/Button';
import styles from './ProjectPage.module.css';

export function ProjectPage() {
  const { slug } = useParams();
  
  // Derive project from route slug
  const project = projects.find((p) => p.slug === slug);

  // Redirect to 404 if project doesn't exist
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <article className={styles.projectPage}>
      <div className="container">
        {/* Back Link */}
        <Link to="/#projects" className={styles.backLink}>
          ← Back to All Projects
        </Link>

        {/* Hero Header */}
        <header className={styles.headerGrid}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Tag variant="accent">{project.role}</Tag>
            <Tag variant="status">{project.status}</Tag>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
        </header>

        {/* Metadata Grid */}
        <div className={styles.metaGrid}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>{project.role}</span>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Status</span>
            <span className={styles.metaValue}>{project.status}</span>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Tech Stack</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '0.25rem' }}>
              {project.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>

        {/* Main Cover Area */}
        <div className={styles.mainCoverArea}>
          {project.coverImage && !project.coverImage.startsWith('[') ? (
            <img src={project.coverImage} alt={project.title} />
          ) : (
            <div className={styles.coverPlaceholder}>
              <span className={styles.coverIcon}>💻</span>
              <h3>[{project.title.toUpperCase()}_MAIN_COVER]</h3>
              <p>System Mockup & Interface Screenshots in Progress</p>
            </div>
          )}
        </div>

        {/* Problem Statement */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>The Problem & Context</h2>
          <p className={styles.bodyText}>{project.problem}</p>
        </section>

        {/* Solution & Responsibilities */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>The Solution & Solo Responsibilities</h2>
          <p className={styles.bodyText} style={{ marginBottom: '1.5rem' }}>{project.solution}</p>
          <div className={styles.listGrid}>
            {project.responsibilities.map((resp, idx) => (
              <div key={idx} className={styles.featureCard}>
                <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓ Step {idx + 1}</span>
                <p style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{resp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Key Application Features</h2>
          <div className={styles.listGrid}>
            {project.features.map((feat, idx) => (
              <div key={idx} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>❖ {feat.title}</h3>
                <p className={styles.bodyText} style={{ fontSize: '0.95rem' }}>{feat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Challenges */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Engineering Challenges & Solutions</h2>
          {project.challenges.map((chal, idx) => (
            <div key={idx} className={styles.challengeCard}>
              <h3 className={styles.challengeTitle}>Challenge {idx + 1}: {chal.title}</h3>
              <p className={styles.bodyText}>{chal.description}</p>
              <div className={styles.solutionBox}>
                <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.25rem' }}>💡 How It Was Solved:</strong>
                <p className={styles.bodyText} style={{ fontSize: '0.95rem' }}>{chal.solution}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Screenshot Gallery Placeholders */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Interface Gallery</h2>
          <div className={styles.galleryGrid}>
            {project.screenshots.map((shot, idx) => (
              <div key={idx} className={styles.galleryItem}>
                <small>{shot}</small>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons Learned */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Lessons Learned</h2>
          <p className={styles.bodyText}>{project.lessons}</p>
        </section>

        {/* Action CTAs — Only render links if real URLs exist */}
        <footer className={styles.actionsBar}>
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="primary" external>
              View Live Project ↗
            </Button>
          )}
          {project.repositoryUrl && (
            <Button href={project.repositoryUrl} variant="secondary" external>
              GitHub Repository ↗
            </Button>
          )}
          {!project.liveUrl && !project.repositoryUrl && (
            <Tag variant="status">🔒 Deployment in progress — Live link will appear when available</Tag>
          )}
        </footer>
      </div>
    </article>
  );
}

export default ProjectPage;
```

## File: src/pages/ProjectPage/ProjectPage.module.css
```css
.projectPage {
  padding: var(--space-64) 0 var(--space-96);
}

.backLink {
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
  font-size: 0.95rem;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: var(--space-32);
  transition: transform var(--transition-fast);
}

.backLink:hover {
  transform: translateX(-4px);
}

.headerGrid {
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  margin-bottom: var(--space-48);
}

.title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  color: var(--text-primary);
  line-height: 1.1;
}

.summary {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.metaGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-24);
  padding: var(--space-24);
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  margin-bottom: var(--space-48);
}

.metaBlock {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.metaLabel {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.metaValue {
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 600;
}

.mainCoverArea {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: var(--surface-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-64);
}

.coverPlaceholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-12);
  color: var(--text-muted);
}

.coverIcon {
  font-size: 4rem;
  color: var(--accent);
}

.sectionBlock {
  margin-bottom: var(--space-64);
}

.sectionTitle {
  font-size: 1.6rem;
  color: var(--text-primary);
  margin-bottom: var(--space-20);
  border-bottom: 1px solid var(--border);
  padding-bottom: var(--space-12);
}

.bodyText {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.listGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-24);
}

@media (min-width: 768px) {
  .listGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.featureCard {
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-24);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.featureTitle {
  font-size: 1.1rem;
  color: var(--text-primary);
}

.challengeCard {
  background-color: var(--surface);
  border: 1px solid var(--border-active);
  border-radius: var(--radius-xl);
  padding: var(--space-32);
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  margin-bottom: var(--space-24);
}

.challengeTitle {
  font-size: 1.25rem;
  color: var(--accent);
}

.solutionBox {
  background-color: var(--surface-elevated);
  padding: var(--space-16);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--accent);
}

.galleryGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-24);
}

.galleryItem {
  aspect-ratio: 16 / 10;
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
}

.actionsBar {
  display: flex;
  align-items: center;
  gap: var(--space-16);
  padding-top: var(--space-32);
  border-top: 1px solid var(--border);
}
```

## File: src/services/contactService.js
```javascript
// Web3Forms Access Key connected to estradaailexdenzel@gmail.com
const WEB3FORMS_ACCESS_KEY = '0741ca91-6b2b-4b26-a30a-153dae6e6470';

export async function sendContactForm(formData) {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        subject: formData.subject || `New Portfolio Message from ${formData.name}`,
        message: formData.message,
        from_name: 'ZHY Portfolio Contact Form'
      })
    });

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        message: 'Message delivered directly to your Gmail inbox!'
      };
    } else {
      throw new Error(data.message || 'Failed to deliver message.');
    }
  } catch (error) {
    console.error('Contact Service Error:', error);
    return {
      success: false,
      error: error.message || 'Failed to send message. Please try emailing directly.'
    };
  }
}
```

## File: src/styles/globals.css
```css
@import './tokens.css';
@import './typography.css';
@import './utilities.css';

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  color-scheme: dark light;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

/* Base color on body — CSS blend modes composite against this */
body {
  background-color: #170c29;
  color: var(--text-primary);
  font-family: var(--font-family);
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
  transition: background-color var(--transition-normal), color var(--transition-normal);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  background: none;
  border: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

img, picture, svg {
  display: block;
  max-width: 100%;
  height: auto;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--surface-elevated);
  border-radius: var(--radius-full);
  border: 2px solid var(--bg-primary);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}
```

## File: src/styles/tokens.css
```css
:root {
  /* Ink Bloom Base Color on Body */
  --bg-primary: #100e0b;
  --bg-secondary: #14120e;
  --surface: rgba(255, 255, 255, 0.1);
  --surface-elevated: rgba(255, 255, 255, 0.16);

  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;

  --accent: #f8fafc;
  --accent-strong: #ffffff;
  --accent-soft: rgba(255, 255, 255, 0.12);

  --border: rgba(255, 255, 255, 0.25);
  --border-active: rgba(255, 255, 255, 0.5);

  --success: #4ade80;
  --error: #fb7185;

  /* 80% Viewport Width Container Max Scale */
  --max-content-width: 1600px;
  --max-text-width: 72ch;
  
  --space-4: 0.25rem;
  --space-8: 0.5rem;
  --space-12: 0.75rem;
  --space-16: 1rem;
  --space-20: 1.25rem;
  --space-24: 1.5rem;
  --space-28: 1.75rem;
  --space-32: 2rem;
  --space-40: 2.5rem;
  --space-48: 3rem;
  --space-64: 4rem;
  --space-96: 6rem;

  --font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;
  --radius-full: 9999px;

  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 450ms cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="light"] {
  --bg-primary: #f8fafc;
  --bg-secondary: #f1f5f9;
  --surface: rgba(255, 255, 255, 0.85);
  --surface-elevated: #ffffff;

  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;

  --accent: #0f172a;
  --accent-strong: #000000;
  --accent-soft: rgba(15, 23, 42, 0.08);

  --border: rgba(15, 23, 42, 0.15);
  --border-active: rgba(15, 23, 42, 0.35);

  --success: #16a34a;
  --error: #e11d48;
}
```

## File: src/styles/typography.css
```css
h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
}

h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
}

h3 {
  font-size: clamp(1.3rem, 2.5vw, 2rem);
}

p {
  color: var(--text-secondary);
  max-width: var(--max-text-width);
}

.text-muted {
  color: var(--text-muted);
}

.text-accent {
  color: var(--accent);
}
```

## File: src/styles/utilities.css
```css
/* 80% Width Container (10% Margins on Left & Right) */
.container {
  width: 80vw;
  max-width: var(--max-content-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-16);
  padding-right: var(--space-16);
}

@media (max-width: 992px) {
  .container {
    width: 90vw;
    padding-left: var(--space-12);
    padding-right: var(--space-12);
  }
}

@media (max-width: 640px) {
  .container {
    width: 92vw;
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## File: src/utils/scrollUtils.js
```javascript
// -------------------------------------------------------------
// ⚙️ CINEMATIC SLOW SCROLL DURATION (in milliseconds)
// 1800 = 1.8 seconds (Ultra-smooth, slow cinematic glide)
// -------------------------------------------------------------
export const SCROLL_DURATION = 1800;

export function smoothScrollTo(targetPosition, duration = SCROLL_DURATION) {
  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const distance = targetPosition - startPosition;

  // Don't scroll if already at target
  if (Math.abs(distance) < 5) return;

  let startTime = null;

  // Bypasses browser CSS scroll-behavior queueing for 0ms instant response
  const html = document.documentElement;
  const originalScrollBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Quintic Ease-Out: Starts instantly, then coast-glides into a feather-soft stop
    const easeOutQuint = 1 - Math.pow(1 - progress, 5);

    window.scrollTo(0, startPosition + distance * easeOutQuint);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      // Restore original CSS scroll behavior when finished
      html.style.scrollBehavior = originalScrollBehavior;
    }
  }

  requestAnimationFrame(animation);
}
```

## File: src/App.jsx
```javascript
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout/SiteLayout';
import { HomePage } from './pages/HomePage/HomePage';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## File: src/main.jsx
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## File: eslint.config.js
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
```

## File: index.html
```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ZHY | Frontend Developer & UI/UX Designer</title>
    <meta 
      name="description" 
      content="Portfolio of ZHY — Frontend Developer & UI/UX Designer based in Sampaloc, Manila. Specialized in building thoughtful web experiences and full-stack web applications." 
    />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <!-- Open Graph Metadata -->
    <meta property="og:title" content="ZHY | Frontend Developer & UI/UX Designer" />
    <meta property="og:description" content="I design and build thoughtful web experiences—from interface design to full-stack implementation." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/og-image.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## File: package.json
```json
{
  "name": "zhy-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "gsap": "^3.15.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.2"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.4",
    "eslint": "^10.8.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.3",
    "globals": "^17.7.0",
    "vite": "^8.2.0"
  }
}
```

## File: README.md
```markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
```

## File: vite.config.js
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
```
