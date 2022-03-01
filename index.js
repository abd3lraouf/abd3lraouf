const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\

<!--
  Title: Android Developer @Vodafone
  Description: Google Certified Associate Android Developer, Clean code, TDD, CICD with knowledge in cybersecurity. 
  Author: abd3lraouf
  -->

<h3 align="center">
  Welcome to AbdElraouf Sabri's profile!
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="28">
</h3>

<p align='center'>
    <img src="https://readme-typing-svg.herokuapp.com?font=Syne+Mono&color=%231F1B1B&duration=4000&center=true&vCenter=true&width=530&lines=Android+Developer+%40Vodafone;Google+Certified+Associate+Android+Developer;With+experience+in+Cyber+security;Ec-council+Certified%3A+CND%2C+CEH+v10%2C+and+ECSA;And+experience+in+DevOps+and+CICD+;Studying+Jetpack+Compose+and+KMM">
</p>

<!-- Social icons section -->
<p align='center'>
      <a href="https://www.linkedin.com/in/abd3lraouf/"><img src="https://custom-icon-badges.herokuapp.com/badge/-LinkedIn-black?style=for-the-badge&amp;logo=Linkedin&logoColor=white" alt="Linkedin"></a>
      <a href="https://twitter.com/abd3lraouf"><img src="https://custom-icon-badges.herokuapp.com/badge/-Twitter-black?style=for-the-badge&amp;logo=twitter&logoColor=white" alt="Twitter"></a>
      <a href="https://keybase.io/abd3lraouf"><img src="https://custom-icon-badges.herokuapp.com/badge/-Keybase-black?style=for-the-badge&logo=keybase&logoColor=white" alt="Keybase"></a>
      <a href="https://www.abd3lraouf.dev/portfolio/"><img src="https://img.shields.io/badge/-Portfolio-black?style=for-the-badge&amp;logo=google-chrome&amp;logoColor=white" alt="Website"></a>
      <a href="mailto:abdelraoufsabri@gmail.com"><img src="https://img.shields.io/badge/-Say%20Hi!-black?style=for-the-badge&amp;logo=gmail" alt="Mail"></a>
</p>
<!-- Stats icons section -->
<p align='center'>
  <a href="https://github.com/abd3lraouf?tab=repositories&sort=stargazers">
    <img alt="total stars" title="Total stars on GitHub" src="https://custom-icon-badges.herokuapp.com/badge/dynamic/json?logo=star&color=55960c&labelColor=488207&label=Stars&style=for-the-badge&query=%24.stars&url=https://api.github-star-counter.workers.dev/user/abd3lraouf"/></a>
  <a href="https://github.com/abd3lraouf?tab=followers">
    <img alt="followers" title="Follow me on Github" src="https://custom-icon-badges.herokuapp.com/github/followers/abd3lraouf?color=236ad3&labelColor=1155ba&style=for-the-badge&logo=person-add&label=Follow&logoColor=white"/></a>
  <a href="https://github.com/abd3lraouf">
    <img alt="views" title="GitHub profile views" src="https://enwj06txat9l677.m.pipedream.net"/></a>
</p>
<!-- Resume Download section -->
<p align='right'>
      <a href="https://github.com/abd3lraouf/CV/releases/latest/download/AbdElraouf.Sabri.Android.Developer.resume.pdf
"><img src="https://custom-icon-badges.herokuapp.com/badge/-download-EC1C24?style=for-the-badge&logo=Adobe%20Acrobat%20Reader&logoColor=white" alt="Download My Resume"></a>
</p>

<!-- 
<p align='right'>
      <a href="https://github.com/AbdElraoufSabri/AbdElraoufSabri/releases/latest/download/AbdElraouf.Sabri.resume.pdf">
            <img alt="Ansible Role" src="https://img.shields.io/static/v1?color=red&label=Resume&logo=adobe&logoColor=white&style=for-the-badge&message=Download">
      </a>
</p>
 -->

## 🤵 About Me:
- 🏦 Android Developer since 2016.
      <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
- 😊 Pronouns: He/Him
- 🔑 GPG public key: [72A7 2278 FE6D 8BDA](https://keybase.io/abd3lraouf/pgp_keys.asc?fingerprint=d971ef94887269e4308587a772a72278fe6d8bda)
- 💬 You'll find me talking about: 
  - Jetpack Compose
  - Kotlin Multiplatform
  - Clean architecture
  - Clean Code principles
  - Mobile Security

### 🎮 Latest Work

<!-- - [MVI posts](https://github.com/AbdElraoufSabri/MVIPosts) --> 
- [Jetpack compose challenge #1: The Pet Adoption App](https://github.com/AbdElraoufSabri/compose-challenge-1)
- [Jetpack compose challenge #2: The Countdown Timer App](https://github.com/AbdElraoufSabri/compose-challenge-2)
- [Twitter Search app](https://github.com/AbdElraoufSabri/WeeTwit)
- [Open Source Library: RxJava3-Datastore](https://github.com/AbdElraoufSabri/DatastoreWithRxJava3)
- [Open Source Library: CircularProgressBar](https://github.com/AbdElraoufSabri/CircularProgressBar)
- [Open Source Library: FancyAndroidRuler](https://github.com/AbdElraoufSabri/FancyAndroidRuler)
<!-- - [MVI sample](https://github.com/AbdElraoufSabri/mviSample) -->

### 📕 My Presentations:

- [Social Engineering](https://abd3lraouf.github.io/social-engineering/), 26th Apil, 2020 @ ITI

### 📕 My Latest Blog posts:
<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->

<!--START_SECTION:waka-->

<!--END_SECTION:waka-->

⏳ **Year Progress** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} % as on ⏰ ${new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()+'.'}

`
console.log(readme)
