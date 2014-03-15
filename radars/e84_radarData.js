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
        {"name":"Custom font icons sets ", "pc":{"r":shrink(165),"t":30}},
        {"name":"Knockout.js", "pc":{"r":shrink(150),"t":80}},
        // Assess
        {"name":"Docker.io", "pc":{"r":shrink(270),"t":15}},
        {"name":"Spoon", "pc":{"r":shrink(250),"t":85}},
        {"name":"New WYSIWYG tools", "pc":{"r":shrink(250),"t":35}},
        // Hold
        {"name":"Cucumber Testing", "pc":{"r":shrink(350),"t":45}}
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            // Adopt
          {"name":"Elasticsearch", "pc":{"r":shrink(36),"t":240}},
          {"name":"Node.js", "pc":{"r":shrink(60),"t":205}},
          {"name":"Microservices", "pc":{"r":shrink(67),"t":236}},
          // Trial
          {"name":"Immutable Data Storage", "pc":{"r":shrink(163),"t":236}},
          {"name":"Riak", "pc":{"r":shrink(150),"t":200}},
          // Assess
          {"name":"GlusterFS", "pc":{"r":shrink(250),"t":193}},
          {"name":"Cross Platform Mobile Frameworks", "pc":{"r":shrink(230),"t":230}},
          // Hold
        ]
    },
    { "quadrant": "Languages",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [
            // Adopt
            {"name":"Clojure", "pc":{"r":shrink(40),"t":335}},
            {"name":"SASS/LESS", "pc":{"r":shrink(60),"t":315}},
            {"name":"ReactiveCocoa", "pc":{"r":shrink(80),"t":290}},
            // Trial
            {"name":"ClojureScript", "pc":{"r":shrink(150),"t":335}},
            // Assess
            {"name":"Elixir", "pc":{"r":shrink(270),"t":290}},
            {"name":"ECMAScript 6", "pc":{"r":shrink(270),"t":335}},
            // Hold
            {"name":"Client Side CoffeeScript", "pc":{"r":shrink(370),"t":307}},

        ]
    }
];
