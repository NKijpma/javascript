<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript-eindopdracht </title>
    <!-- ico -->
    <link rel="icon" type="image/x-icon" href="img/ico/excadrill.ico">

    <!-- css -->
    <link rel="stylesheet" href="css/rooteind.css">
    <link rel="stylesheet" href="css/eindopdracht.css">
    <link rel="stylesheet" href="css/2dsbody.css">
    <link rel="stylesheet" href="css/2ds.css">
    <link rel="stylesheet" href="css/pokemon.css">
    <!-- font -->
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>

<div id="outer-shell">
    <div id="inner-shell">
        <div id="top-screen-border">

            <div id="top-screen" class="off">
                <div id="pokemon_name_id_typing"></div>
                <div class="sprite-wrapper">
                    <img id="pokemon_image" alt="" src="">
                </div>
                <div id="pokemon_stats"></div>
            </div>
        </div>


        <div id="hardware">
            <!-- Camera -->
            <div id="camera"></div>

            <!-- Circle Pad -->
            <div id="circle-pad"></div>

            <!-- D-Pad -->
            <div id="dpad">
                <div id="dpad-up"></div>
                <div id="dpad-down"></div>
                <div id="dpad-left"></div>
                <div id="dpad-right"></div>
            </div>

            <!-- ABXY Buttons -->
            <div id="abxy">
                <div id="btn-x">X</div>
                <div id="btn-y">Y</div>
                <div id="btn-a">A</div>
                <div id="btn-b">B</div>
            </div>

            <!-- Start / Select -->
            <div id="start-select">
                <div class="ss-row">
                    <div id="start-btn"></div>
                    <span>START</span>
                </div>
                <div class="ss-row">
                    <div id="select-btn"></div>
                    <span>SELECT</span>
                </div>
            </div>
        </div>



        <!-- Power + Charge -->
        <div id="power-block">

            <div id="charge-row">
                <div id="charge-led"></div>
                <span id="charge-icon">&#x1F50C;</span>
            </div>

            <div id="power-row">
                <button id="on_button"> &#x23FB;</button>
                <div id="power-led"></div>
            </div>
        </div>


        <div id="bottom-screen-border">
            <div id="bottom-screen" class="off">
                <label>
                    <input type="text" id="search" class="hidden" placeholder="Type here to search..."
                           autocomplete="off"
                           maxlength="14">
                </label>
                <button id="search_button" class="hidden">&#x1F50E;&#xFE0E;</button>
            </div>
        </div>
    </div>
</div>


<!-- js -->
<script type="module" src="js/eindopdracht.js"></script>
<script type="module" src="js/2ds.js"></script>
</body>
</html>