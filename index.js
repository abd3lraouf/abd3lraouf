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
### Hi there, I'm AbdElraouf Sabri <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">
[![Website URL](https://img.shields.io/static/v1?color=red&label=Website%20&logo=firefox-browser&logoColor=white&style=for-the-badge&message=Visit)](https://abd3lraouf.tech)
[![Twitter URL](https://img.shields.io/static/v1?color=red&label=Twitter%20&logo=twitter&logoColor=white&style=for-the-badge&message=Follow)](https://twitter.com/abd3lraouf)
[![LinkedIn URL](https://img.shields.io/static/v1?color=red&label=linkedin&logo=linkedin&logoColor=white&style=for-the-badge&message=Connect)](https://www.linkedin.com/in/abdelraouf-sabri)
[![Resume URL](https://img.shields.io/static/v1?color=teal&label=Resume&logo=adobe&logoColor=white&style=for-the-badge&message=Download)](https://github.com/AbdElraoufSabri/AbdElraoufSabri/releases/latest/download/AbdElraouf.Sabri.resume.pdf)

## 🤵 About Me:
- 🏦 I'm a freelance Android Developer (currently Open to work ❤️❤️).
      <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
- 🤔 I use daily \`.java\`,\` .kt\`, \`.sh\`
- 😊 Pronouns: He/Him
- 🔑 GPG key: \`6CF56D21B9A90B5F\`
- 👯 I’m looking to collaborate with other developers
- 💬 Got 4 years of Exp in: **Clean architecture**, **Android**, **Dependency Injection**, **S.O.L.I.D**

<p align="center">
<img src="https://devicons.github.io/devicon/devicon.git/icons/java/java-original.svg" alt="java" width="32" height="32"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/kotlin/kotlin-original.svg" alt="kotlin" width="32" height="32"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/gradle/gradle-plain.svg" alt="gradle" width="32" height="32"/> 
</p>

### 🎮 Latest Inventions
- [Open Source Library: RxJava3-Datastore](https://github.com/AbdElraoufSabri/DatastoreWithRxJava3)
- [Open Source Library: CircularProgressBar](https://github.com/AbdElraoufSabri/CircularProgressBar)
- [Open Source Library: FancyAndroidRuler](https://github.com/AbdElraoufSabri/FancyAndroidRuler)

### 📕 My Latest Blog posts:
<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->

<!--START_SECTION:waka-->

<!--END_SECTION:waka-->

⏳ **Year Progress** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} % as on ⏰ ${new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()+'.'}

`
console.log(readme)
