const htmlElement = document.querySelector('html');

htmlElement.innerHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marsh_Team</title>
</head>

<body>
    <div class="mainContainer">
        <div class="img">
            <img class="mainImage" src="https://michaelweissdds.com/wp-content/uploads/2020/05/dumb-jim-carrey.jpg" alt="image">
        </div>
        <h1>WEBSITE WAS FUCKED BY BC</h1>
        <hr class="hr">
        <div class="container">
            <p class="text1">
                C'EST FORMIDABLE 
            </p>
            <p class="text2"> Telegram : @BC_CORP </p>
        </div>
    </div>
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Waterfall&display=swap');


* {
    box-sizing: border-box;
}

body,
html {
    background : #000000;
    font-family: 'Trebuchet MS', sans-serif;
    text-align : center;
}

.mainContainer h1 {
    font-family: 'Josefin Sans', sans-serif;
    padding    : 5px 0px 10px 0px;
    color      : #ffffff;
    text-shadow: 0 0 10px #11d30b;
}

.mainContainer h1:hover {
    text-shadow: 0 0 14px #0b7e07;

}

.container .teamName {
    text-transform: uppercase;
    padding       : 10px 0px;
    letter-spacing: 20px;
    font-family   : 'Josefin Sans', sans-serif;
    color         : #0ae7d5;
    font-size     : 17px;
}

.container .teamName span {
    color: red;
}

.hr {
    width : 600px;

}

.mainImage {
    margin       : 20px 0px;
    width        : 300px;
    border-radius: 50%;

}



.text1 {
    padding       : 5px 200px;
    text-transform: uppercase;
    color         : green;
    font-size:20px;
    font-family:Arial, Helvetica, sans-serif;
}


.textbox {
    background-color: #97e900;
    color           : #000000;
    font-size       : 17px;
    border-radius   : 20px;
    padding         : 10px 0px;
    border          : none;
    text-align      : center;
}

.text2 {
    color         : #ffffff;
    font-size     : 22px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

@media only screen and (max-width:500px) {

    .text1 {
        padding       : 0px 20px;
        text-transform: uppercase;
        color         : #008000;
    }

    .effect2 {
        font-size  : 17px;
        padding-top: 1px;
    }

    .container .teamName {
        padding       : 10px 0px;
        letter-spacing: 12px;
        font-size     : 14px;
    }

    .mainContainer h1 {
        padding: 2px 0px;
    }

    .textbox {

        font-size: 13px;
        width    : 300px;
    }

    .hr {
        width: 300px;
    }

    .text2 {
        color         : #ffffff;
        font-size     : 17px;
        letter-spacing: 4px;
        font-style: Serifl
        
    }
}
</style>

</html>`;
