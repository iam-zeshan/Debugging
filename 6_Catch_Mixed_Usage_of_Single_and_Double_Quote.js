/*
When it comes to Quotes (Single/Double) then, we need to take care about the single and double coute, l mean if we need to use a double quoted string to display in a quotation then, we would be using the backslash and all these types of techniques.

Task:
Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
*/

let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);