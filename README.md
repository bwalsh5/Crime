
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


<div class='tableauPlaceholder' id='viz1620153654701' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ch&#47;chicago-covid&#47;Sheet1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='chicago-covid&#47;Sheet1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ch&#47;chicago-covid&#47;Sheet1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>               

<details>
<script type='text/javascript'>                    var divElement = document.getElementById('viz1620153654701');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
</details>
