var fs = require('fs');
var path = require('path');
var vm = require('vm');
var argv = require('optimist').argv;

function compileHandlebarsTemplate(file, onComplete) {
  //dummy jQuery
  var jQuery = function () { return jQuery }
  jQuery.ready = function () { return jQuery }
  jQuery.inArray = function () { return jQuery }
  jQuery.jquery = "1.7.1"
  jQuery.event = { fixHooks: {} }

  //dummy DOM element
  var element = {
    firstChild: function () { return element },
    innerHTML: function () { return element }
  }

  var sandbox = {
    // DOM
    document: {
      createRange: false,
      createElement: function () { return element }
    },

    // Console
    console: console,

    // jQuery
    jQuery: jQuery,
    $: jQuery,

    // handlebars template to compile
    template: fs.readFileSync(file, 'utf8'),

    // compiled handlebars template
    templatejs: null
  }

  // window
  sandbox.window = sandbox

  // create a context for the vm using the sandbox data
  var context = vm.createContext(sandbox)

  // load Handlebars and Ember into the sandbox
  vm.runInContext(handlebarsjs, context, 'ember.js')
  vm.runInContext(emberjs, context, 'ember.js')

  //compile the handlebars template inside the vm context
  vm.runInContext('templatejs = Ember.Handlebars.precompile(template).toString()', context)

  var fileName = path.basename(file)
  var namedTemplateJs = 'Ember.TEMPLATES["' +
    fileName.replace(/.handlebars/, '') +
    '"] = Ember.Handlebars.template(' + context.templatejs + ');'

  return namedTemplateJs;
  //extract the compiled template from the vm context and save to .js file,
  //implicitely adding template to Ember.TEMPLATES when it is required
}


var handlebarsjs = fs.readFileSync('../../assets/handlebars.min.js', 'utf8')
var emberjs = fs.readFileSync('js/libs/ember-latest.js', 'utf8')
//var templatesDir = 'templates'

/*
Sample usage
$ npm install optimist
$ node compile_handlebars.js templates/* --output js/libs/compiled_templates.js
*/

var usage = '\n  \
Precompile handlebar templates for Ember.js.\n  \
Usage: ' + argv.$0 + ' template...\n\n  \
Options:\n  \
-f, --output   Output File\n'

function main(){
  if ((argv.h)||(argv.help)) {
    console.log(usage);
    process.exit(0);
  }
  var inputFiles = argv._;
  var outputFile = argv.output || argv.f;
  if (outputFile) {
    // create a blank output file
    fs.writeFileSync(outputFile, '', 'utf8');
    function write(output){
      fs.appendFileSync(outputFile, output + '\n', 'utf8');
    }
  }
  else {
    var write = console.log;
  }
  inputFiles.forEach(function(fileName){
    write(compileHandlebarsTemplate(fileName));
  });
}

main();
