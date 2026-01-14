const thisYear = new Date().getFullYear();
const startTimeOfThisYear = new Date(
  `${thisYear}-01-01T00:00:00+00:00`,
).getTime();
const endTimeOfThisYear = new Date(
  `${thisYear}-12-31T23:59:59+00:00`,
).getTime();
const progressOfThisYear =
  (Date.now() - startTimeOfThisYear) /
  (endTimeOfThisYear - startTimeOfThisYear);
const progressBarOfThisYear = generateProgressBar();

function generateProgressBar() {
  const progressBarCapacity = 30;
  const passedProgressBarIndex = parseInt(
    progressOfThisYear * progressBarCapacity,
  );
  const progressBar = Array(progressBarCapacity)
    .fill("▁")
    .map((value, index) => (index < passedProgressBarIndex ? "█" : value))
    .join("");
  return `{ ${progressBar} }`;
}

const readme = `\

<!--
  Title: Senior Android Developer @Storyteller
  Description: Google Certified Associate Android Developer, Clean code, TDD, CICD with knowledge in cybersecurity.
  Author: abd3lraouf, Abdelraouf Sabri
  -->

<h3 align="center">
  Welcome to Abdelraouf Sabri's profile!
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="28">
</h3>

<p align='center'>
    Senior Android Developer
</p>

<!-- Social icons section -->
<p align='center'>
  <a href="https://androiddev.social/@abd3lraouf" rel="me">
    <img src="https://img.shields.io/badge/Mastodon-6364FF?style=for-the-badge&logo=mastodon&logoColor=white" alt="Mastodon">
  </a>
  <a href="https://www.linkedin.com/in/abd3lraouf/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://keybase.io/abd3lraouf">
    <img src="https://img.shields.io/badge/Keybase-33A0FF?style=for-the-badge&logo=keybase&logoColor=white" alt="Keybase">
  </a>
  <a href="mailto:abdelraoufsabri@gmail.com">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
  <a href="https://abd3lraouf.dev">
    <img src="https://img.shields.io/badge/Website-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website">
  </a>
</p>

<!-- Stats icons section -->
<p align='center'>
  <a href="https://github.com/abd3lraouf?tab=repositories&sort=stargazers">
    <img alt="total stars" title="Total stars on GitHub" src="https://img.shields.io/github/stars/abd3lraouf?affiliations=OWNER&style=for-the-badge&logo=star"/>
  </a>
  <a href="https://github.com/abd3lraouf?tab=followers">
    <img alt="followers" title="Follow me on GitHub" src="https://img.shields.io/github/followers/abd3lraouf?style=for-the-badge&logo=github&logoColor=white&labelColor=333"/>
  </a>
  <a href="https://github.com/abd3lraouf">
    <img alt="views" title="GitHub profile views" src="https://enwj06txat9l677.m.pipedream.net"/>
  </a>
</p>

## About Me:
- 🏦 Android Developer since 2016.
- 🏢 Currently working at **Storyteller**
- 🎯 Focus: Android, Kotlin Multiplatform, Clean Architecture
- 🔑 GPG public key: [72A7 2278 FE6D 8BDA](https://keybase.io/abd3lraouf/pgp_keys.asc?fingerprint=d971ef94887269e4308587a772a72278fe6d8bda)

### 🛠️ Tech Stack

#### Languages
![Kotlin](https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

#### Android & Mobile
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![Jetpack Compose](https://img.shields.io/badge/Jetpack%20Compose-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white)
![Kotlin Multiplatform](https://img.shields.io/badge/KMP-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)

#### Tools & Practices
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![CI/CD](https://img.shields.io/badge/CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![TDD](https://img.shields.io/badge/TDD-25A162?style=for-the-badge&logo=unittest&logoColor=white)

### 🏆 Achievements & Certifications

- 📜 **Google Certified Associate Android Developer**
- 💼 Senior Android Developer at Storyteller
- 📚 Speaker: "Social Engineering" @ ITI (2020)
- 🌟 Open Source Maintainer of multiple Android libraries

### 🎮 Latest Work

<!-- - [MVI posts](https://github.com/abd3lraouf/MVIPosts) -->
- [Semantic](https://github.com/abd3lraouf/Semantic)
- [Jetpack compose challenge #1: The Pet Adoption App](https://github.com/abd3lraouf/compose-challenge-1)
- [Jetpack compose challenge #2: The Countdown Timer App](https://github.com/abd3lraouf/compose-challenge-2)
- [Twitter Search app](https://github.com/abd3lraouf/WeeTwit)
- [Open Source Library: RxJava3-Datastore](https://github.com/abd3lraouf/DatastoreWithRxJava3)
- [Open Source Library: CircularProgressBar](https://github.com/abd3lraouf/CircularProgressBar)
- [Open Source Library: FancyAndroidRuler](https://github.com/abd3lraouf/FancyAndroidRuler)
<!-- - [MVI sample](https://github.com/abd3lraouf/mviSample) -->

### 📕 My Presentations:

- [Social Engineering](https://abd3lraouf.github.io/social-engineering/), 26th Apil, 2020 @ ITI

### 📕 My Latest Blog posts:
<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->

⏳ **Year Progress** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} % as on ⏰ ${new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear() + "."}

<p align="right">made with ❤️ by Abdelraouf Sabri</p>
`;
console.log(readme);
