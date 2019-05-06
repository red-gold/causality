$.when( $.ready ).then(function() {
    $('*a:contains("Run code")').each(function() {
        $(this).addClass('pure-button');
        $(this).attr('disabled');
        $(this).on('click', function(event){
            event.preventDefault();
            fetch(Link).then(res=>res.text().then(text=>{
                const transpileCode = transpiler(text);
                console.log({res: text, transpile: transpileCode});
                const Run = new Function(transpileCode);
                //auto connect here
                Run();
            }));
        });
        const Link = $(this).attr("href");
        const Name = Link.split(/[\/]+/).pop().replace(/\./g,'_');
        
        console.log({Name, Link});
    });
});