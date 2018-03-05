function overviewPage()
{
    $("div[data-nav='automatic']").addClass("is-hidden");
    $("div[data-nav='manuel']").addClass("is-hidden");
}

function teachPage()
{
    $("div[data-nav='manuel']").removeClass("is-hidden");
    $("div[data-nav='automatic']").addClass("is-hidden");

}

function automaticPage()
{
    $("div[data-nav='automatic']").removeClass("is-hidden");
    $("div[data-nav='manuel']").addClass("is-hidden");

}