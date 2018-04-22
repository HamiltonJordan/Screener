# Screener
A video streaming server based on a LEMP stack and HLS streaming technology.

Screener will help schools show screenings of movies and videos to classrooms without the difficulty of scheduling a place and time to show the movie/video.  Students can log into the service and stream the movies they need to watch for class on their own time, in their own setting. 

Screener is written in HTML, Javascript and PHP.  Screener uses a MySQL DB for its data storing and Nginx as its web server.

### Screenshots
![Alt text](Screenshots/login_page.PNG?raw=true "Login Page")

![Alt text](Screenshots/instructor_page.PNG?raw=true "Login Page")

![Alt text](Screenshots/instructor_video_page.PNG?raw=true "Login Page")

![Alt text](Screenshots/video_page.PNG?raw=true "Login Page")



### Directory Layout
<pre>

├── DFS.docx
├── DOCX
├── LICENSE
├── README.md
├── SQL
│   ├── DB-Backup-Script.sh
│   ├── Screener.sql
│   ├── ScreenerDB.erdplus
│   ├── UsefulSQLQueries.sql
│   └── websitedb-25-Feb-2018.sql
├── Scripts
│   ├── DirectoryBackUp.sh
│   ├── STARTserver.sh
│   └── STOPserver.sh
└── html
    ├── AddClass.html
    ├── AddClass.php
    ├── AddUser.php
    ├── DBConnect.php
    ├── DeleteUser.php
    ├── Development
    │   ├── DBConnect.php
    │   ├── GetClassInfo.php
    │   ├── GetClasses.php
    │   ├── GetClasses.php.save
    │   ├── ProfessorClassList.js
    │   ├── bkuploader.php
    │   ├── classList.html
    │   ├── classviewer.html
    │   ├── classviewer.js
    │   ├── fetchMyClasses.php
    │   ├── index.nginx-debian.html
    │   ├── kuploader.html
    │   ├── kuploader.js
    │   ├── kuploader.php
    │   ├── kuploader.works.php
    │   ├── old_index.html
    │   ├── old_testdynvid.html
    │   ├── oldtestdynvid.html
    │   ├── starWars.html
    │   ├── upload_folder
    │   │   ├── LabReport5.pdf
    │   │   ├── Picture2.png
    │   │   ├── Picture4.png
    │   │   ├── Screen\ Shot\ 2017-09-18\ at\ 1.52.59\ PM.png
    │   │   ├── Screen\ Shot\ 2017-12-21\ at\ 8.06.11\ PM.png
    │   │   ├── examples.desktop
    │   │   ├── sampleexpression.png
    │   │   └── the_sem_dif_angle_1.jpg
    │   ├── uploader.html
    │   ├── uploader.js
    │   ├── uploader.php
    │   └── v.php
    ├── ProfessorClassList.html
    ├── ProfessorClassList.js
    ├── css
    │   ├── bootstrap.min.css
    │   ├── index.css
    │   ├── instructor.css
    │   ├── old_viewer.css
    │   ├── selector.css
    │   └── viewer.css
    ├── fetchMyFilms.php
    ├── getvideo.php
    ├── index.html
    ├── index.php
    ├── info.php
    ├── instructor.html
    ├── instructor.php
    ├── javascript
    │   ├── AddClass.js
    │   ├── bootstrap.min.js
    │   ├── index.js
    │   ├── instructor.js
    │   ├── jquery-3.1.1.min.js
    │   ├── js.cookie.js
    │   ├── js.cookie.min.js
    │   ├── newselector.js
    │   ├── newview.html
    │   ├── selector.js
    │   └── viewer.js
    ├── login.php
    ├── resources
    │   ├── htmlDemo.html
    │   ├── newHope.jpg
    │   ├── phpDemo
    │   ├── s-logo.png
    │   ├── sLogo.jpg
    │   ├── staticBanner.jpg
    │   ├── staticBanner2.jpg
    │   ├── talkingPoints2-26
    │   └── theater.jpg
    ├── selector.html
    ├── selectorStatic.html
    ├── testDbConnect.php
    ├── upload_folder
    │   └── Screen\ Shot\ 2018-02-19\ at\ 10.15.58\ AM.png
    ├── uploader2.php
    ├── videotest.php
    └── viewer.html

</pre>
