console.log("k");

var journals = [
  {
    "journalEntry" : "1",
    "date" : "August 15, 2016",
    "title" : "Why I took this class",
    "content" : [
      "I took this class because I want to be a software engineer when I grow up. In addition, when I was introduced to this class, I decided that I might as well give it a go to see how it will turn out.",
      "I hope to learn some basic coding skills for languages like HTML and Java. I feel that it will make it easier for me to understand other languages in the future."],
    "img" : undefined
  },
  {
    "journalEntry" : "2",
    "date" : "August 24, 2016",
    "title" : "UI vs UX",
    "content" : [
      "When it comes to UI (User Interface), everything is more focused on the visual side of the product. A good UI would be organized and it should be easy to identify it's parts. Everything is based on aesthetics.",
      "On the other hand, UX (User Experience) would be more on the usability of the product. A good UX should allow the user to easily use and navigate around the product."
    ],
    "img" : undefined
  },
  {
    "journalEntry" : "3",
    "date" : "August 31, 2016",
    "title" : "CSS",
    "content" : ["So far this week, we've been learning about something called CSS(Cascade Style Sheets). I found out that this it's used to decorate and color webpages. There are three ways of implementing CSS to a website. My favorite is creating external CSS files, becuase I find it more organized and it woun't get in the way of the html coding."],
    "img" : undefined
  },
  {
    "journalEntry":"4",
    "date": "September 28, 2016",
    "title" : "Responsive Design",
    "content" : ["I think that responsive design is very convenient for users who can't access websites through computers. It resizes content to adjust to the screen size of the current device. It may take longer to code the website, but it'll give users a better UI to work with."],
    "img" :undefined
  },
  {
    "journalEntry":"5",
    "date": "October 17, 2016",
    "title" : "Digimon Go",
    "content" : ["I think that the Digimon Go project was a good way to implement our HTML knowledge onto making actual websites. I actually liked this project beacuse it wasn't that hard for me but of course I still needed to look up some things. This also helped me narrow down my knowledge on what I can and cannot do with CSS."],
    "img" :undefined
  },
  {
    "journalEntry":"6",
    "date": "October 17, 2016",
    "title" : "Media Queries",
    "content" : ["Media queries are really useful for the users so that media elements can be easily viewed on different screen sized devices. I think this was really fun to make like the block family. It was more complicated than the CSS that we learned before this."],
    "img" :undefined
  },
  {
    "journalEntry":"7",
    "date": "October 24, 2016",
    "title" : "Basic Javascript",
    "content" : ["I think that the basics of javascript are easier than other languages like CSS because it relies more on logical thinking. I also had experience with other languages like C, so I'm assuming that they're simillar. I'm really looking foward to more in depth lessons on javascript."],
    "img" :undefined
  },
  {
    "journalEntry":"8",
    "date": "October 24, 2016",
    "title" : "Conditionals (Aliens)",
    "content" : ["Just like the Digimon Go project, I think that the conditional excersise about aliens was a good way ttest out knowledge on basic javascript. It also helped us by getting to know how other people think when it comes to coding. This was a good introduction to coding with a partner."],
    "img" :undefined
  },
  {
    "journalEntry":"9",
    "date": "November 21, 2016",
    "title" : "VAC Review",
    "content" : ["The problem we tried to solve was the lack of communication between students, clubs, teachers, and their school. Often times students would join clubs or they're new to a class and they're afraid to ask questions infront of people. Sometimes they won't have time to stay a little after the meeting/class is done to ask questions and they need a convient way to communicate with the club officer/ class teacher.","The app solves it by allowing students to chat with teachers/club officers. This app can automatically send reminders to club members. Also it allows students to give feedback to teachers about the class.","We would imrpove our video by using better equipement. Better mics would make the dialogue clearer and easier to understand and using a tripod would make the video more stable. We can also make the video longer if we had more time to film.","Our current features include group chats betweens clubs, students and teachers. It also provides online bulletin, lunch menus, etc. Students can give feed back to teachers and address school problems.","I would like to add a feature that shows what lunch lines are still open and how much more plates they have. Another feature that I'd like to have is having a built in planner that reminds you about assignments that the teacher gives.","Some of the challenges we faced was when we tried to think of how we were going to do our video. It was hard to film clips of how the app would work if we didn't actually have the app.","I think we should communicate with eachother more outside of class because a lot of times we were on different pages. We can also meet up more outside of class so we can film more."],
    "img" :undefined
  },
  {
    "journalEntry":"10",
    "date": "December 19, 2016",
    "title" : "Semester Reflection",
    "content" : ["To start off, we learned how to use github. It is an online website that allows users to upload and share their projects for eveyone to see. We were taught how to use one of their applications called GitShell. It's a command prompt that allows us to create and nagivate through files.From there, we were taught HTML. We got to make our own website from scratch. Then we were showed how to to design our HTML website with a language called CSS. In addition, we were taught a programming langaage called JavaScript. It's a programming language that works more with functionality rather than appearance.","One of my favorite things that we learned was JavaScript. Since I did have expereience with a simillar language, I found it easy to learn JavaScript. I liked how everything about the language is logic based. The language that I hated the most was CSS. It was as fustrating as how my teachers described it to be. Just when you think you got the code right, you end up messing up your website."],
    "img" :undefined
  },
];

/*
  Create a function named showAll
  Pass one parameter (data)

  Inside the function
  Iterate through data
    for each object create elements
    create parent div
      with the id "entry-" + object.id
    create a h2 header(b)
      append(attach) inner.HTML object.title to h2
    create h6 header(i) for date
    append(attach) inner.HTML object.date to h6
    create div with class "article"
      create a parapagraph 
    
*/

function showAll(data){
  for (var i = 0; i < data.length; i++) {
    var entry = document.createElement("div");
  }
}
//append after putting in all the data
showAll(journals);