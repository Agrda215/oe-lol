var mod = {
    primaryName: "ω",
    secondaryName: "Engine",
    version: "0.0.2",
    themes: [
        ["Dark", "css/themes/dark.css"],
        ["Light", "https://veprogames.github.io/omega-layers/css/main.css"],
        ["Neon", "css/themes/neon.css"],
        ["Godot Blue", "css/themes/darkblue.css"],
        ["Halloween", "css/themes/spooky.css"],
        ["eXPerience", "css/themes/experience.css"]
    ],
    layerNames: [
        ["Ω-Lλγers",
        [
            "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
            "ψϝϛͱϻϙͳϸ",
            ["Ʊ", "Ʊ<sup>2</sup>","Ʊ<sup>3</sup>"]
        ]],
        ["Alphabet",
        [
            "abcdefghijklmnopqrstuvwxyz",
            "123456789",
            ["A","B","C"]
        ]],
        ["Symbols",
        [
            '!"£$%^&*;:@',
            "<,[{}].>",
            ["+","×","÷"]
        ]],
        ["Binary",
        [
            '01',
            "01",
            ["2","3","4"]
        ]]
    ]
}

//DO NOT MODIFY CODE PAST THIS POINT AS IT IS NEEDED (unless your a pro coder then do some experimenting)

mod.layerNames.push(["Refresh Names", "refresh"])

document.getElementById("superImportantTitle").innerHTML = "<span class='omega'>"+mod.primaryName+"</span>"+mod.secondaryName