const resultsList = document.getElementById('results')
        new URLSearchParams(window.location.search).forEach((value,info) => 
        {
            resultsList.append(`${info} : ${value}`)
            resultsList.append(document.createElement('br'))
        })


const greetUser = document.getElementById('greet')
        new URLSearchParams(window.location.search).forEach((value) => 
        {
            greetUser.append("HEY! "+`${value}`+", I know that You can pass this semester! take care! uwu~♥")
            var name = greetUser.getElementById('name');
        })
    




