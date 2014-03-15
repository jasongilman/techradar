//This is the title for your window tab, and your Radar
document.title = "element 84's Technology Radar";

function shrink(n) {
  return n * 0.7; 
}


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':shrink(100),'name':'Adopt'}
                  ,{'r':shrink(200),'name':'Trial'}
                  ,{'r':shrink(300),'name':'Assess'}
                  ,{'r':shrink(400),'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.




var h = shrink(1160);
var w = shrink(1350);

var radar_data = [
    { "quadrant": "Techniques",
      "left" : 45,
      "top" : 18,
      "color" : "#8FA227",
      "items" : [ 
      // Adopt
      {"name":"Functional Programming", "pc":{"r":shrink(20),"t":160}},
      {"name":"Dedicated Error Tracking", "pc":{"r":shrink(60),"t":100}},
      {"name":"Testing at the appropriate level", "pc":{"r":shrink(70),"t":160}},
      {"name":"Testing Distributed System Failure Cases", "pc":{"r":shrink(40),"t":120}},
      {"name":"Property Based Testing", "pc":{"r":shrink(80),"t":125}},
      //Trial
      {"name":"Visualization Driven Development", "pc":{"r":shrink(150),"t":135}},
      // Assess    
      {"name":"Daily Journaling", "pc":{"r":shrink(230),"t":150}},
      {"name":"CommonJS or AMD in Rails projects", "pc":{"r":shrink(250),"t":135}}
      ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
        // Adopt
        {"name":"Web fonts", "pc":{"r":shrink(40),"t":30}},
        {"name":"Enlive for server-side templating", "pc":{"r":shrink(80),"t":20}},
        {"name":"Grunt", "pc":{"r":shrink(80),"t":80}},
        {"name":"Leaflet.js", "pc":{"r":shrink(53),"t":62}},
        {"name":"Gradle Build System", "pc":{"r":shrink(80),"t":50}},
        // Trial
        {"name":"Serverspec", "pc":{"r":shrink(150),"t":10}},
        {"name":"Packer", "pc":{"r":shrink(120),"t":30}},
        {"name":"Genymotion (Emulator)", "pc":{"r":shrink(150),"t":40}},
        {"name":"core.async", "pc":{"r":shrink(170),"t":50}},
        {"name":"Calabash", "pc":{"r":shrink(150),"t":60}},
        {"name":"Custom font icons sets ", "pc":{"r":shrink(165),"t":30}},
        {"name":"Knockout.js", "pc":{"r":shrink(150),"t":80}},
        // Assess
        {"name":"Docker.io", "pc":{"r":shrink(270),"t":15}},
        {"name":"Spoon", "pc":{"r":shrink(250),"t":85}},
        {"name":"New WYSIWYG tools", "pc":{"r":shrink(250),"t":35}},
        {"name":"Cross Platform Mobile Frameworks", "pc":{"r":shrink(250),"t":45}},
        // Hold
        {"name":"Cucumber Testing", "pc":{"r":shrink(350),"t":45}}
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"Rich internet applications", "pc":{"r":shrink(390),"t":265},"movement":"c"},   
            {"name":"GWT", "pc":{"r":shrink(390),"t":250},"movement":"c"},   
            {"name":"IE8", "pc":{"r":shrink(390),"t":230},"movement":"c"},   
            {"name":"WS-* beyond basic profile", "pc":{"r":shrink(390),"t":190},"movement":"c"},   
            {"name":"Azure", "pc":{"r":shrink(290),"t":265},"movement":"c"},   
            {"name":"Mobile Web", "pc":{"r":shrink(275),"t":260},"movement":"t"},   
            {"name":"Google App Engine", "pc":{"r":shrink(290),"t":255},"movement":"c"},   
            {"name":"Application appliances", "pc":{"r":shrink(190),"t":245},"movement":"c"},   
            {"name":"Google as corporate platform", "pc":{"r":shrink(290),"t":200},"movement":"c"},   
            {"name":"GPGPU", "pc":{"r":shrink(190),"t":185},"movement":"t"},   
            {"name":"App containers", "pc":{"r":shrink(250),"t":260},"movement":"c"},   
            {"name":"OAuth", "pc":{"r":shrink(130),"t":260},"movement":"t"},   
            {"name":"RDFa", "pc":{"r":shrink(130),"t":250},"movement":"t"},   
            {"name":"Location based services", "pc":{"r":shrink(130),"t":230},"movement":"c"},   
            {"name":"iPad", "pc":{"r":shrink(130),"t":220},"movement":"c"},   
            {"name":"EC2 & S3", "pc":{"r":shrink(190),"t":250},"movement":"c"},   
            {"name":"Facebook as a business platform", "pc":{"r":shrink(190),"t":190},"movement":"c"},   
            {"name":"JVM as platform", "pc":{"r":shrink(90),"t":265},"movement":"c"},   
            {"name":"iPhone", "pc":{"r":shrink(90),"t":215},"movement":"c"},   
            {"name":"Android", "pc":{"r":shrink(90),"t":190},"movement":"c"},   
            {"name":"KVM", "pc":{"r":shrink(70),"t":260},"movement":"t"},   
            {"name":"Atom", "pc":{"r":shrink(70),"t":245},"movement":"t"},   
            {"name":"ALT.NET", "pc":{"r":shrink(90),"t":190},"movement":"c"},   
            {"name":"IE6 End of Life", "pc":{"r":shrink(30),"t":225},"movement":"c"}
        ]
    },
    { "quadrant": "Languages",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            {"name":"Java language end of life", "pc":{"r":shrink(290),"t":355},"movement":"c"},   
            {"name":"F#", "pc":{"r":shrink(270),"t":330},"movement":"c"},   
            {"name":"Scala", "pc":{"r":shrink(290),"t":320},"movement":"c"},   
            {"name":"Clojure", "pc":{"r":shrink(260),"t":310},"movement":"c"},   
            {"name":"HTML 5", "pc":{"r":shrink(250),"t":275},"movement":"c"},   
            {"name":"DSLs", "pc":{"r":shrink(190),"t":340},"movement":"c"},   
            {"name":"Groovy", "pc":{"r":shrink(190),"t":280},"movement":"c"},   
            {"name":"C#4", "pc":{"r":shrink(90),"t":355},"movement":"c"},   
            {"name":"JRuby", "pc":{"r":shrink(90),"t":330},"movement":"c"},   
            {"name":"Javascript as a 1st class language", "pc":{"r":shrink(90),"t":275},"movement":"c"},   
            {"name":"Ruby", "pc":{"r":shrink(30),"t":282},"movement":"c"}
        ]
    }
];
