(function($) {
    var regions = $.i18n.regions,
        en = $.i18n.defaults,
        standard = en.calendars.standard,
        region = regions["gl"] = $.extend(true, {}, en, {
        name: "gl",
        englishName: "Galician",
        nativeName: "galego",
        language: "gl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currencies: {'':{
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }}
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                firstDay: 1,
                days: {
                    names: ["domingo","luns","martes","mércores","xoves","venres","sábado"],
                    namesAbbr: ["dom","luns","mar","mér","xov","ven","sáb"],
                    namesShort: ["do","lu","ma","mé","xo","ve","sá"]
                },
                months: {
                    names: ["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro",""],
                    namesAbbr: ["xan","feb","mar","abr","maio","xuñ","xull","ago","set","out","nov","dec",""]
                },
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd' de 'MMMM' de 'yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, dd' de 'MMMM' de 'yyyy H:mm",
                    F: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM' de 'yyyy",
                    l: "dd/MM/yyyy H:mm",
                    L: "dd/MM/yyyy H:mm:ss"
                }
            })
        }
    }, regions["gl"]);
    region.calendar = region.calendars.standard;
    region.numberFormat.currency = region.numberFormat.currencies[''];
})(jQuery);