$(function() {

    $("[data-code-target-id]").each(function() {
        var snippetHtml = $(this),
            targetElId = snippetHtml.data("code-target-id"),
            targetEl = $("[data-code-id='" + targetElId + "']"),
            rawHtml = snippetHtml.html(),
            preEl = $("<pre>"),
            codeEl = $("<code>").addClass("html");

        codeEl.text(rawHtml);
        targetEl.append("<hr>");
        targetEl.append("<h3>HTML component code</h3>");
        targetEl.append("<p><em>Only CSS classes with the `cmp-` prefix are Public APIs of the component. All other elements are subject to change in future releases.</em></p>")
        targetEl.append(preEl.append(codeEl));
    });

    hljs.initHighlighting();
});
