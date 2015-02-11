//Biography Object for who the person is on the resume
var bio = {
    "name": "Ryan Millerick",
    "role": "Web Designer",
    "contacts": {
        "mobile": "111-111-1111",
        "email": "Ryan@example.com",
        "github": "millerizi",
        "twitter": "@millerizi",
        "location": "Seattle, Washington"
    },
    "WelcomeMessage": "Hello, I am a very energized and creative web developer. I cannot wait to help people with their website designs and creativity for each persons dream. I am a team player and love a good challenge, so please contact me and we can get started.",
    "skills": [
         "Programming", "ColdFusion Web Developer", "HTML", "CSS", "JS"],
    "img": "images/bio.jpg"
}

// Display bio info

bio.display = function() {
    // Display name and role

    var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
    var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);

    // Display contact info

    $("#header")
        .prepend(formattedName + formattedRole);
    var contacts = bio["contacts"];
    var formattedMobile = HTMLmobile.replace("%data%", contacts["mobile"]);
    var formattedEmail = HTMLemail.replace("%data%", contacts["email"]);
    var formattedGithub = HTMLgithub.replace("%data%", contacts["github"]);
    var formattedLocation = HTMLlocation.replace("%data%", contacts["location"]);
    var cont = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
    $(cont)
        .appendTo("#topContacts, #footerContacts");

    // Display image and welcome message

    var formattedImage = HTMLbioPic.replace("%data%", bio["img"]);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio["WelcomeMessage"]);
    $("#header")
        .append(formattedImage + formattedMessage);

    // Display skills

    if (bio.skills.length > 0) {
        $("#header")
            .append(HTMLskillsStart);
        var formattedSkill = "";
        for (var i = 0; i < bio.skills.length; i++) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills")
                .append(formattedSkill);
        };
    };
};


// section for the work experience information of the resume
var work = {
    "jobs": [
        {
            "employer": "AT&T",
            "title": "Sr. Business Consultant/Developer",
            "location": "Seattle, WA",
            "dates": "2008-Current",
            "description": "I manage Security Web based tool for internal AT&T Employees access to enterprise wide applications. My job is to develop tool to meet all security requirements provided by external and internal teams. I also maintain current code and work with our customers with issues and question pertaining to information within our tools."
  },
        {
            "employer": "AT&T",
            "title": "Business Consultant",
            "location": "Seattle, WA",
            "dates": "2002-208",
            "description": "I designed Business Requirements, process flow documentation for our enterprise development staff. Worked with Customers on new requirements, implementation of requirements and validation of tools to make sure no other issues were created."
  },
        {
            "employer": "AT&T",
            "title": "Internal IT Helpdesk",
            "location": "Seattle, WA",
            "dates": "2000-2005",
            "description": "I worked with all of AT&T's employees and contractors computer issues. I worked at the National Suppor Center and we would troubleshoot Network, Email, Proprietory tools, any system outages. It was my job to enter tickets and track to resolution about 90 percent of the time this would be on the first call."
  }

  ]
}

// Display jobs

work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience")
            .append(HTMLworkStart);
        var j = work.jobs[job];
        var formattedEmployer = HTMLworkEmployer.replace("%data%", j["employer"]);
        var formattedTitle = HTMLworkTitle.replace("%data%", j["title"]);
        var formattedDates = HTMLworkDates.replace("%data%", j["dates"]);
        var formattedLocation = HTMLworkLocation.replace("%data%", j['location']);
        var formattedWorkDesc = HTMLworkDescription.replace("%data%", j['description']);
        $(".work-entry:last")
            .append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedWorkDesc);
    }
};

// section for the project information of the resume

var projects = {
    "projects": [
        {
            "title": "Created ColdFusion Role Review Tool",
            "dates": "2012-Current",
            "description": "Developed tool using HTML, CSS, Jquery, Adobe ColdFusion to require all users that owner roles that give users access to Databases and UNIX servers at AT&T to review them and make sure they are correctly configured and being used by the correct people. When they are not being used correctly, corrective action is made from tool and changes made to roles as required, this is used by auditors to validate AT&T is following all rules in a secure manner for users access to internal applicaitons.",
            "images": ["images/project1.jpg", "images/project2.png"]
   },
        {
            "title": "Created ColdFusion Role Mangement Tool",
            "dates": "2010-Current",
            "description": "Developed tool using HTML, CSS, Jquery, Adobe ColdFusion to require all users that owner roles that give users access to Databases and UNIX servers at AT&T to review them and make sure they are correctly configured and being used by the correct people. When they are not being used correctly, corrective action is made from tool and changes made to roles as required, this is used by auditors to validate AT&T is following all rules in a secure manner for users access to internal applicaitons.",
            "images": ["images/project3.jpg", "images/project4.jpg"]
   }
  ]
}


projects.display = function() {
    for (project in projects.projects) {
        $("#projects")
            .append(HTMLprojectStart);

        var fmtTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last")
            .append(fmtTitle);
        var fmtDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last")
            .append(fmtDates);
        var fmtDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last")
            .append(fmtDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last")
                    .append(formattedImages);
            }
        }
    }
}



// section for the education experience information of the resume
var education = {
    "schools": [
        {
            "Name": "Western Washington University",
            "location": "Bellingham, WA, US",
            "degree": "N/A",
            "major": "Basic Studies",
            "years": "1996-1997"
     },
        {
            "Name": "Whatcom Community College",
            "location": "Bellingham, WA, US",
            "degree": "CompSci 2 yr degree",
            "major": "CompSci",
            "years": "1997-2000"
     },
        {
            "Name": "Skagit Valley College",
            "location": "Mount Vernon, WA, US",
            "degree": "ART Transfer Degree",
            "major": "General Studies",
            "years": "1994-1996"
     }

     ],

    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": "2014",
            "link": "http://www.udacity.com/course/ud804"
      },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2014",
            "link": "http://www.udacity.com/course/ud804"
      }
      ]

}

education.display = function() {
    for (edu in education.schools) {
        $("#education")
            .append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].Name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedNameAndDegree = formattedName + formattedDegree;
        var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
        var formattedYears = HTMLschoolDates.replace("%data%", education.schools[edu].years);
        $(".education-entry:last")
            .append(formattedNameAndDegree, formattedYears, formattedMajor, formattedCity);
    }
    if (education.onlineCourses.length > 0) {
        $("#education")
            .append(HTMLonlineClasses);
        for (online in education.onlineCourses) {
            $("#education")
                .append(HTMLschoolStart);
            var formatedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
            var formatedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
            var formatURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].link);
            var formatNameandcourse = formatURL + formatedtitle;
            var formateddates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
            $(".education-entry:last")
                .append(formatNameandcourse + formatedschool, formateddates);
        }
    }
};


// Call display functions

bio.display();
work.display();
projects.display();
education.display();


// Log clicks to console

$(document)
    .click(function(loc) {
        logClicks(loc.pageX, loc.pageY);
    });

// Internationalize!
$("#main")
    .append(internationalizeButton);

var inName = function() {
    var oldName = $("#name")
        .text();
    var finalName = oldName.trim()
        .split(" ");
    finalName[0] = finalName[0][0].toUpperCase() + finalName[0].slice(1)
        .toLowerCase();
    finalName[1] = finalName[1].toUpperCase();
    finalName = finalName.join(" ");
    return finalName;
}



//Add a google map to resume
$("#mapDiv")
    .append(googleMap);
//$("#mapDiv")
//  .before(HTMLmapButton);