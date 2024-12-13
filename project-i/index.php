<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Difference Calculator</title>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js"></script>
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div class="top-background">
        <lottie-player src="https://lottie.host/41f3ccca-739e-494e-b41e-21c3c96692ba/Y8WYWoSmNz.json" background="##FFFFFF" speed="1" loop autoplay></lottie-player>
    </div>
    <div>
        <h1>Date Difference Calculator</h1>
        <form id="dateForm" method="post" action="calculate.php">
            <label for="date1">Enter the first date (YYYY-MM-DD):</label>
            <input type="text" id="date1" name="date1" required><br>

            <label for="date2">Enter the second date (YYYY-MM-DD):</label>
            <input type="text" id="date2" name="date2" required><br>

            <div id="errorMessage"></div>

            <button type="submit">Calculate</button>
        </form>

        <noscript>
            <p>Please enable JavaScript to use this form.</p>
        </noscript>

        <div id="spinner" style="display:none;">
            <p>Loading...</p>
        </div>
    </div>
    <!-- <div class="bottom-lottie">
        <lottie-player src="https://lottie.host/a8911e49-cd45-457c-b1a8-8cad4d3ec883/C8hmOwDXCT.json" background="##FFFFFF" speed="1" loop autoplay></lottie-player>
    </div> -->

</body>

</html>