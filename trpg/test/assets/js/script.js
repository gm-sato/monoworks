"use strict";

window.addEventListener("load", function () {
    const d = document;

    const items = d.querySelectorAll(".js-item");

    const terms = [];

    const buttons = d.querySelectorAll(".js-item-term");
    for (const button of buttons) {
        button.addEventListener("click", function () {
            button.classList.toggle("active");

            // クリックした条件を絞り込み条件リストに追加/削除
            const term = button.getAttribute("data-term");
            const termPosition = terms.indexOf(term);
            if (termPosition !== -1) {
                terms.splice(termPosition, 1);
            } else {
                terms.push(term);
            }
            console.log("terms: ", terms);

            // 絞り込み
            for (const item of items) {
                // 選択されてる条件ないなら全てのfadeOut取って処理終了
                if (terms.length === 0 && item.classList.contains("fadeOut")) {
                    item.classList.remove("fadeOut");
                    continue;
                }
                // 空白削除して配列に
                const itemTagsArray = item
                    .getAttribute("data-tag")
                    .replace(/\s+/g, "")
                    .split(",");
                const isIncludedTerm = terms.filter(function (term) {
                    return itemTagsArray.indexOf(term) !== -1;
                });
                if (isIncludedTerm.length !== terms.length && !item.classList.contains("fadeOut")) {
                    // 現在の条件と完全一致してなくてfadeOutクラスもなければfadeOutクラス付与
                    item.classList.add("fadeOut");
                } else if (isIncludedTerm.length === terms.length && item.classList.contains("fadeOut")) {
                    // 現在の条件と完全一致しててfadeOutクラスあるならfadeOutクラス外す
                    item.classList.remove("fadeOut");
                }
            }
        });
    }
});