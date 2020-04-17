const jv = require("json-variables");
const fs = require('fs');
var res = jv({
    color_bg: "#1a1a1a",
    color_bg_light: "#222",
    color_bg_lighter: "#333",
    dimmed_txt: "#555",
    clear_txt: "#777",
    color_bg_dark: "#151515",
    color_hilight: "#66d8ff",
    color_change_this: "#f0f",
    color_selector_01: "#a18118",
    color_selector_02: "#bd983a",
    color_selector_03: "#d1b45e",
    color_property_01: "#338dab",
    color_property_02: "#34a8cf",
    color_property_03: "#6bbbd6",
    color_property_01_trans: "#6bbbd655",
    color_value_01: "#7e8c38",
    color_value_02: "#98a653",
    color_value_03: "#afbf60",
    color_function_01: "#a750b2",
    color_function_02: "#cd63db",
    color_function_03: "#ec94f7",
    "name": "davetest01",
    "type": "dark",
    "colors": {
        "editor.background": "{color_bg}",
        "editor.foreground": "{color_property_03}",
        "editor.foldBackground":"{color_property_01_trans}",
        "editorCursor.foreground": "{color_hilight}",
        "editorGroupHeader.noTabsBackground": "{color_bg_dark}",
        "editorGroup.border": "{color_bg_dark}",
        "editorGroupHeader.tabsBackground": "{color_bg_dark}",
        "editorGroupHeader.tabsBorder": "{color_bg_light}",
        "editorGroup.emptyBackground": "{color_bg_dark}",
        "editorIndentGuide.background": "{color_bg_lighter}",
        "editorIndentGuide.activeBackground": "{color_hilight}",
        "editorLineNumber.foreground": "{color_bg_lighter}",
        "editorLineNumber.activeForeground": "{color_hilight}",
        "editorBracketMatch.border": "{color_hilight}",
        "editorBracketMatch.background": "{color_bg}",
        "tree.indentGuidesStroke": "{color_bg_lighter}",
        "editorOverviewRuler.bracketMatchForeground": "{color_hilight}",
        "editorPane.background": "{color_bg_dark}",
        "tab.activeBorderTop": "{color_hilight}",
        "tab.activeForeground": "{color_hilight}",
        "tab.inactiveBackground": "{color_bg_dark}",
        "activityBar.background": "{color_bg}",
        "activityBar.border": "{color_bg_light}",
        "activityBar.activeBorder": "{color_hilight}",
        "activityBarBadge.background": "{color_hilight}",
        "activityBarBadge.foreground": "{color_bg}",
        "activityBar.inactiveForeground": "{color_bg_lighter}",
        "activityBar.foreground": "{color_hilight}",
        "sideBar.background": "{color_bg}",
        "sideBar.border": "{color_bg_light}",
        "sideBarTitle.foreground": "{color_hilight}",
        "sideBarSectionHeader.background": "{color_bg_dark}",
        "sideBarSectionHeader.border": "{color_bg_light}",
        "sideBar.foreground": "{clear_txt}",
        "sideBarSectionHeader.foreground": "{dimmed_txt}",
        "list.activeSelectionBackground": "{color_property_01}",
        "list.activeSelectionForeground": "{color_bg_lighter}",
        "list.focusForeground": "{color_property_01}",
        "list.inactiveSelectionBackground": "{color_bg_light}",
        "list.inactiveSelectionForeground": "{color_property_01}",
        "list.highlightForeground": "{color_property_01}",
        "list.deemphasizedForeground": "{color_property_01}",
        "list.warningForeground": "{color_property_02}",
        "widget.shadow": "{color_bg}",
        "scrollbar.shadow": "{color_bg}",
        "scrollbarSlider.background": "{color_bg_dark}",
        "scrollbarSlider.activeBackground": "{color_bg_lighter}",
        "scrollbarSlider.hoverBackground": "{color_bg_light}",
        "statusBar.background": "{color_bg_dark}",
        "statusBar.border": "{color_bg_light}",
        "statusBar.foreground": "{color_hilight}",
        "statusBarItem.prominentBackground": "{color_hilight}",
        "statusBarItem.prominentForeground": "{color_bg_dark}",
        "terminal.foreground": "{color_property_03}",
        "panel.border": "{color_bg_light}",
        "panelTitle.activeBorder": "{color_hilight}",
        "panelTitle.activeForeground": "{color_hilight}",
        "panelTitle.inactiveForeground": "{dimmed_txt}"
    },
    "tokenColors": [{
        "name": "Comment",
        "scope": ["comment", "punctuation.definition.comment"],
        "settings": {
            "fontStyle": "italic",
            "foreground": "{dimmed_txt}"
        }
    }, {
        "name": "Variables",
        "scope": ["variable", "string constant.other.placeholder"],
        "settings": {
            "foreground": "{color_value_02}",
            "fontStyle": "bold",
        }
    }, {
        "name": "Colors",
        "scope": ["constant.other.color"],
        "settings": {
            "foreground": "#ffffff"
        }
    }, {
        "name": "Invalid",
        "scope": ["invalid", "invalid.illegal"],
        "settings": {
            "foreground": "#FF5370"
        }
    }, {
        "name": "Keyword, Storage",
        "scope": ["keyword", "storage.type", "storage.modifier"],
        "settings": {
            "foreground": "#C792EA"
        }
    }, {
        "name": "Operator, Misc",
        "scope": ["keyword.control", "constant.other.color",
            /* "punctuation", */
            "meta.tag", "punctuation.definition.tag", "punctuation.separator.inheritance.php", "punctuation.definition.tag.html", "punctuation.definition.tag.begin.html", "punctuation.definition.tag.end.html", "punctuation.section.embedded", "keyword.other.template", "keyword.other.substitution"
        ],
        "settings": {
            "foreground": "{color_property_02}"
        }
    }, {
        "name": "Tag",
        "scope": ["entity.name.tag", "meta.tag.sgml", "markup.deleted.git_gutter"],
        "settings": {
            "foreground": "{color_selector_01}"
        }
    }, {
        "name": "Function, Special Method",
        "scope": [
            /* "entity.name.function",
            "meta.function-call",
            "variable.function", */
            "support.function",
            /* "keyword.other.special-method" */
        ],
        "settings": {
            "foreground": "{color_function_01}"
        }
    }, {
        "name": "Function, Special Method",
        "scope": ["entity.name.function", "meta.function-call", "variable.function",
            /* "support.function", */
            "keyword.other.special-method"
        ],
        "settings": {
            "foreground": "{color_function_02}"
        }
    }, {
        "name": "Block Level Variables",
        "scope": ["meta.block variable.other"],
        "settings": {
            "foreground": "{color_value_02}"
        }
    }, {
        "name": "Other Variable, String Link",
        "scope": ["support.other.variable", "string.other.link"],
        "settings": {
            "foreground": "{color_value_01}"
        }
    }, {
        "name": "Number, Constant, Function Argument, Tag Attribute, Embedded",
        "scope": ["constant.numeric", "constant.language", "support.constant", "constant.character", "constant.escape", "variable.parameter", "keyword.other.unit", "keyword.other"],
        "settings": {
            "foreground": "{color_value_01}"
        }
    }, {
        "name": "String, Symbols, Inherited Class, Markup Heading",
        "scope": ["string", "constant.other.symbol", "constant.other.key", "entity.other.inherited-class", "markup.heading", "markup.inserted.git_gutter", "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"],
        "settings": {
            "foreground": "{clear_txt}"
        }
    }, {
        "name": "Class, Support",
        "scope": ["entity.name", "support.type", "support.class", "support.orther.namespace.use.php", "meta.use.php", "support.other.namespace.php", "markup.changed.git_gutter", "support.type.sys-types"],
        "settings": {
            "foreground": "#FFCB6B"
        }
    }, {
        "name": "Entity Types",
        "scope": ["support.type"],
        "settings": {
            "foreground": "#B2CCD6"
        }
    }, {
        "name": "CSS Class and Support",
        "scope": ["source.css support.type.property-name", "source.sass support.type.property-name", "source.scss support.type.property-name", "source.less support.type.property-name", "source.stylus support.type.property-name", "source.postcss support.type.property-name"],
        "settings": {
            "foreground": "{color_property_02}"
        }
    }, {
      "name": "sass extend selector",
      "scope":["keyword.control.at-rule.extend.scss", "meta.at-rule.extend.scss"],
      "settings":{
         "foreground": "{color_property_03}"
      }
    },{
        "name": "Sub-methods",
        "scope": ["entity.name.module.js", "variable.import.parameter.js", "variable.other.class.js"],
        "settings": {
            "foreground": "#FF5370"
        }
    }, {
        "name": "Language methods",
        "scope": ["variable.language"],
        "settings": {
            "fontStyle": "italic",
            "foreground": "#FF5370"
        }
    }, {
        "name": "entity.name.method.js",
        "scope": ["entity.name.method.js"],
        "settings": {
            "fontStyle": "italic",
            "foreground": "#82AAFF"
        }
    }, {
        "name": "meta.method.js",
        "scope": ["meta.class-method.js entity.name.function.js", "variable.function.constructor"],
        "settings": {
            "foreground": "#82AAFF"
        }
    }, {
        "name": "Attributes",
        "scope": ["entity.other.attribute-name"],
        "settings": {
            "foreground": "{color_selector_02}"
        }
    }, {
        "name": "HTML Attributes",
        "scope": ["text.html.basic entity.other.attribute-name.html", "text.html.basic entity.other.attribute-name"],
        "settings": {
            "fontStyle": "italic",
            "foreground": "#FFCB6B"
        }
    }, {
        "name": "CSS Classes",
        "scope": ["entity.other.attribute-name.class"],
        "settings": {
            "foreground": "{color_selector_03}"
        }
    }, {
        "name": "CSS ID's",
        "scope": ["source.sass keyword.control"],
        "settings": {
            "foreground": "{color_function_01}"
        }
    }, {
        "name": "Inserted",
        "scope": ["markup.inserted"],
        "settings": {
            "foreground": "#C3E88D"
        }
    }, {
        "name": "Deleted",
        "scope": ["markup.deleted"],
        "settings": {
            "foreground": "#FF5370"
        }
    }, {
        "name": "Changed",
        "scope": ["markup.changed"],
        "settings": {
            "foreground": "#C792EA"
        }
    }, {
        "name": "Regular Expressions",
        "scope": ["string.regexp"],
        "settings": {
            "foreground": "#89DDFF"
        }
    }, {
        "name": "Escape Characters",
        "scope": ["constant.character.escape"],
        "settings": {
            "foreground": "#89DDFF"
        }
    }, {
        "name": "URL",
        "scope": ["*url*", "*link*", "*uri*"],
        "settings": {
            /* "fontStyle": "normal" */
        }
    }, {
        "name": "Decorators",
        "scope": ["tag.decorator.js entity.name.tag.js", "tag.decorator.js punctuation.definition.tag.js"],
        "settings": {
            "fontStyle": "italic",
            "foreground": "{color_selector_01}"
        }
    }, {
        "name": "ES7 Bind Operator",
        "scope": ["source.js constant.other.object.key.js string.unquoted.label.js"],
        "settings": {
            "fontStyle": "italic",
            "foreground": "#FF5370"
        }
    }, {
        "name": "JSON Key - Level 0",
        "scope": ["source.json meta.structure.dictionary.json support.type.property-name.json"],
        "settings": {
            "foreground": "#C792EA"
        }
    }, {
        "name": "JSON Key - Level 1",
        "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
        "settings": {
            "foreground": "#FFCB6B"
        }
    }, {
        "name": "JSON Key - Level 2",
        "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
        "settings": {
            "foreground": "#F78C6C"
        }
    }, {
        "name": "JSON Key - Level 3",
        "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
        "settings": {
            "foreground": "#FF5370"
        }
    }, {
        "name": "JSON Key - Level 4",
        "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
        "settings": {
            "foreground": "#C17E70"
        }
    }, {
        "name": "JSON Key - Level 5",
        "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
        "settings": {
            "foreground": "#82AAFF"
        }
    }, {
        "name": "JSON Key - Level 6",
        "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
        "settings": {
            "foreground": "#f07178"
        }
    }, {
        "name": "JSON Key - Level 7",
        "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
        "settings": {
            "foreground": "#C792EA"
        }
    }, {
        "name": "JSON Key - Level 8",
        "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
        "settings": {
            "foreground": "#C3E88D"
        }
    }, {
        "name": "Markdown - Plain",
        "scope": ["text.html.markdown", "punctuation.definition.list_item.markdown"],
        "settings": {
            "foreground": "#EEFFFF"
        }
    }, {
        "name": "Markdown - Markup Raw Inline",
        "scope": ["text.html.markdown markup.inline.raw.markdown"],
        "settings": {
            "foreground": "#C792EA"
        }
    }, {
        "name": "Markdown - Markup Raw Inline Punctuation",
        "scope": ["text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"],
        "settings": {
            "foreground": "{color_bg}"
        }
    }, {
        "name": "Markdown - Heading",
        "scope": ["markdown.heading", "markup.heading | markup.heading entity.name", "markup.heading.markdown punctuation.definition.heading.markdown"],
        "settings": {
            "foreground": "#C3E88D"
        }
    }, {
        "name": "Markup - Italic",
        "scope": ["markup.italic"],
        "settings": {
            "fontStyle": "italic",
            "foreground": "#f07178"
        }
    }, {
        "name": "Markup - Bold",
        "scope": ["markup.bold", "markup.bold string"],
        "settings": {
            "fontStyle": "bold",
            "foreground": "#f07178"
        }
    }, {
        "name": "Markup - Bold-Italic",
        "scope": ["markup.bold markup.italic", "markup.italic markup.bold", "markup.quote markup.bold", "markup.bold markup.italic string", "markup.italic markup.bold string", "markup.quote markup.bold string"],
        "settings": {
            "fontStyle": "bold",
            "foreground": "#f07178"
        }
    }, {
        "name": "Markup - Underline",
        "scope": ["markup.underline"],
        "settings": {
            "fontStyle": "underline",
            "foreground": "#F78C6C"
        }
    }, {
        "name": "Markdown - Blockquote",
        "scope": ["markup.quote punctuation.definition.blockquote.markdown"],
        "settings": {
            "foreground": "#65737E"
        }
    }, {
        "name": "Markup - Quote",
        "scope": ["markup.quote"],
        "settings": {
            "fontStyle": "italic",
        }
    }, {
        "name": "Markdown - Link",
        "scope": ["string.other.link.title.markdown"],
        "settings": {
            "foreground": "#82AAFF"
        }
    }, {
        "name": "Markdown - Link Description",
        "scope": ["string.other.link.description.title.markdown"],
        "settings": {
            "foreground": "#C792EA"
        }
    }, {
        "name": "Markdown - Link Anchor",
        "scope": ["constant.other.reference.link.markdown"],
        "settings": {
            "foreground": "#FFCB6B"
        }
    }, {
        "name": "Markup - Raw Block",
        "scope": ["markup.raw.block"],
        "settings": {
            "foreground": "#C792EA"
        }
    }, {
        "name": "Markdown - Raw Block Fenced",
        "scope": ["markup.raw.block.fenced.markdown"],
        "settings": {
            "foreground": "#00000050"
        }
    }, {
        "name": "Markdown - Fenced Bode Block",
        "scope": ["punctuation.definition.fenced.markdown"],
        "settings": {
            "foreground": "#00000050"
        }
    }, {
        "name": "Markdown - Fenced Bode Block Variable",
        "scope": ["markup.raw.block.fenced.markdown", "variable.language.fenced.markdown", "punctuation.section.class.end"],
        "settings": {
            "foreground": "#EEFFFF"
        }
    }, {
        "name": "Markdown - Fenced Language",
        "scope": ["variable.language.fenced.markdown"],
        "settings": {
            "foreground": "#65737E"
        }
    }, {
        "name": "Markdown - Separator",
        "scope": ["meta.separator"],
        "settings": {
            "fontStyle": "bold",
            "foreground": "#65737E"
        }
    }, {
        "name": "Markup - Table",
        "scope": ["markup.table"],
        "settings": {
            "foreground": "#EEFFFF"
        }
    }]
}, {
    heads: "{",
    tails: "}"
});
let json = JSON.stringify(res);
fs.writeFile('themes/davetest01-color-theme.json', json, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    // success case, the file was saved
    console.log('Theme saved!');
})