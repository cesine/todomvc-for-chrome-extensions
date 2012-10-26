(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clearBtnTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n<button ";
  stack1 = {};
  stack1['target'] = "entries";
  foundHelper = helpers.action;
  stack1 = foundHelper ? foundHelper.call(depth0, "clearCompleted", {hash:stack1}) : helperMissing.call(depth0, "action", "clearCompleted", {hash:stack1});
  buffer += escapeExpression(stack1) + " ";
  stack1 = {};
  stack1['class'] = "buttonClass:hidden";
  foundHelper = helpers.bindAttr;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1}) : helperMissing.call(depth0, "bindAttr", {hash:stack1});
  buffer += escapeExpression(stack1) + " >Clear completed\n	(";
  stack1 = depth0.entries;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.completed;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ")</button>\n";
  return buffer;}

  stack1 = depth0.view;
  stack1 = helpers['with'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
})();(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['filtersTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<ul id=\"filters\">\n	<li><a ";
  stack1 = depth0.showAll;
  stack2 = {};
  stack2['href'] = true;
  foundHelper = helpers.action;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2}) : helperMissing.call(depth0, "action", stack1, {hash:stack2});
  buffer += escapeExpression(stack1) + " ";
  stack1 = {};
  stack1['class'] = "view.isAll:selected";
  foundHelper = helpers.bindAttr;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1}) : helperMissing.call(depth0, "bindAttr", {hash:stack1});
  buffer += escapeExpression(stack1) + ">All</a></li>\n	<li><a ";
  stack1 = depth0.showActive;
  stack2 = {};
  stack2['href'] = true;
  foundHelper = helpers.action;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2}) : helperMissing.call(depth0, "action", stack1, {hash:stack2});
  buffer += escapeExpression(stack1) + " ";
  stack1 = {};
  stack1['class'] = "view.isActive:selected";
  foundHelper = helpers.bindAttr;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1}) : helperMissing.call(depth0, "bindAttr", {hash:stack1});
  buffer += escapeExpression(stack1) + ">Active</a></li>\n	<li><a ";
  stack1 = depth0.showCompleted;
  stack2 = {};
  stack2['href'] = true;
  foundHelper = helpers.action;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2}) : helperMissing.call(depth0, "action", stack1, {hash:stack2});
  buffer += escapeExpression(stack1) + " ";
  stack1 = {};
  stack1['class'] = "view.isCompleted:selected";
  foundHelper = helpers.bindAttr;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1}) : helperMissing.call(depth0, "bindAttr", {hash:stack1});
  buffer += escapeExpression(stack1) + ">Completed</a></li>\n</ul>\n";
  return buffer;});
})();(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['outlet'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  foundHelper = helpers.outlet;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.outlet; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  return escapeExpression(stack1);});
})();(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['statsTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = depth0.oneLeft;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<strong>";
  stack1 = depth0.entries;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.remaining;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</strong>\nitem left ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<strong>";
  stack1 = depth0.entries;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.remaining;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</strong>\nitems left ";
  return buffer;}

  stack1 = depth0.view;
  stack1 = helpers['with'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
})();(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['todosTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += " ";
  stack1 = depth0.Ember;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.Checkbox;
  stack2 = {};
  stack2['checkedBinding'] = "view.content.completed";
  stack2['class'] = "toggle";
  foundHelper = helpers.view;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2}) : helperMissing.call(depth0, "view", stack1, {hash:stack2});
  buffer += escapeExpression(stack1) + "\n<label>";
  stack1 = depth0.view;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.content;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.title;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</label>\n<button ";
  stack1 = depth0.removeItem;
  stack2 = {};
  stack2['target'] = "this";
  foundHelper = helpers.action;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2}) : helperMissing.call(depth0, "action", stack1, {hash:stack2});
  buffer += escapeExpression(stack1) + " class=\"destroy\"></button>\n";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += " ";
  stack1 = depth0.view;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.ItemEditorView;
  stack2 = {};
  stack2['contentBinding'] = "view.content";
  foundHelper = helpers.view;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2}) : helperMissing.call(depth0, "view", stack1, {hash:stack2});
  buffer += escapeExpression(stack1) + "\n";
  return buffer;}

  stack1 = depth0.view;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.content;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.editing;
  stack1 = helpers.unless.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
})();