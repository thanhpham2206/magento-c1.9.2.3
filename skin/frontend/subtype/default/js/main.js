/**
 * Created by User on 3/9/2016.
 */
$j(document).ready(function(){
    // mysearch-item
    $j(".mysearch-header").click(function(){
        $j("#header-search").toggle();
    });
    $j(".search-close").click(function(){
        $j("#header-search").hide();
    });

     //Loading ajax product in category page
    jQuery.ias({
        container : ".category-products",
        item : ".products-grid",
        next : ".next",
        pagination : '.pages',
        triggerPageThreshold : 10
    });






});

