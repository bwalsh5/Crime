function initializeViz() {
var placeholderDiv = document.getElementById("tableauViz");
var url = "https://public.tableau.com/profile/brian.walsh4959#!/vizhome/chicago-covid/Sheet1";
var options = {
 width: '600px',
 height: '600px',
 hideTabs: true,
 hideToolbar: true,
 };
viz = new tableau.Viz(placeholderDiv, url, options);
}
