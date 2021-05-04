# Crime Rates Over Time
## By Brian Walsh
### May, 2021

;lksadj ;alsjkd asjk as;lkdj as;lkdj ;lkdj a;lsdkjhas ;ldkj askl;djas;lk djk ;ldkjas l;kjd ;lakj l;kajd ;ljk

[How to use Markdown](https://guides.github.com/features/mastering-markdown/)

``` r

vaccinated <- nyt_search('vaccinated', n=2000)

as.data.frame(vaccine) -> vaccinedf

View(vaccinedf)
library(tidytext)

vaccinedf %>% 
  unnest_tokens(word, lead_paragraph) %>% 
  anti_join(stop_words) %>% 
  count(word, sort = TRUE) %>% 
  inner_join(get_sentiments('afinn'))

```

|word        |  n| value|
|:-----------|--:|-----:|
|crisis      |  2|    -3|
|warning     |  2|    -3|
|worse       |  2|    -3|
|advantage   |  1|     2|
|care        |  1|     2|
|cry         |  1|    -1|
|death       |  1|    -2|
|devastating |  1|    -2|
|difficult   |  1|    -1|
|discard     |  1|    -1|
|envy        |  1|    -1|
|escape      |  1|    -1|

![Crime By Zip Code](zipcodes.png)


<script src="https://www.example.com/javascripts/api/tableau-2.js"></script>
<div id="tableauViz"></div>

js
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










